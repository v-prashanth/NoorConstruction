
// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Noor Construction",
  description: "Cinematic architecture storytelling with smooth design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
