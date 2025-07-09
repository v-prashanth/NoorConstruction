"use client";

import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GridOverlay from "@/components/shared/GridOverlay";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        const errorMsg = typeof data.error === "object"
          ? Object.values(data.error).map((err) => err?._errors?.[0]).filter(Boolean).join("\n")
          : data.error;
        toast.error(errorMsg || "Something went wrong.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-90" />
          <GridOverlay baseSize={100} opacity={0.6} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
        </div>

        <div className="relative z-10 py-34 px-6 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let&apos;s build something <span className="text-red-400">together</span>.
              </h1>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {['name', 'email', 'message'].map((field, idx) => (
                  <div
                    key={idx}
                    className="relative border-b border-gray-700 focus-within:border-red-500 transition-colors group"
                  >
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        required
                        className="peer w-full bg-transparent text-white placeholder-transparent py-3 px-1 text-base focus:outline-none"
                        placeholder={`Your ${field}`}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      />
                    ) : (
                      <textarea
                        id={field}
                        rows="4"
                        required
                        className="peer w-full bg-transparent text-white placeholder-transparent py-3 px-1 text-base focus:outline-none resize-none"
                        placeholder="Your message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    )}
                    <label
                      htmlFor={field}
                      className="absolute left-1 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-red-400 pointer-events-none"
                    >
                      Your {field}
                    </label>
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8 mt-8 md:mt-0">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Info</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Company</p>
                    <p className="text-white">Noor Construction Works</p>
                    <p className="text-gray-500 text-sm">Hyderabad, Telangana</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white">+91 8639614138</p>
                    <p className="text-white">+91 8790240203</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:ahmednoorshaik@gmail.com"
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      ahmednoorshaik@gmail.com
                    </a>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-xs text-gray-500">Established 2025.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Toaster position="top-right" toastOptions={{
          style: { background: '#1F2937', color: '#fff', border: '1px solid #374151' }
        }} />
      </main>

      <Footer />
    </div>
  );
} 