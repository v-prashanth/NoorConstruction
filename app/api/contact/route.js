import nodemailer from "nodemailer";
import { z } from "zod";
import sanitizeHtml from "sanitize-html"; // Optional: for better XSS protection

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const error = parsed.error.format();
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    const { name, email, message } = parsed.data;

    // Basic sanitization to prevent accidental injections
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safeMessage = sanitizeHtml(message).replace(/\n/g, "<br/>");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Noor Construction Works" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Contact Message from ${safeName}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
      text: `
        Name: ${safeName}
        Email: ${safeEmail}
        Message: ${message}
      `,
      headers: {
        'X-Priority': '1 (Highest)',
        'X-Mailer': 'Noor Construction Contact Form',
      },
    };

    const info = await transporter.sendMail(mailOptions);

    if (!info.messageId) {
      throw new Error("Failed to send email.");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Contact API Error:", err);
    return new Response(JSON.stringify({ error: "Server error. Please try again later." }), {
      status: 500,
    });
  }
}
