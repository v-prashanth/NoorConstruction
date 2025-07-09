
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GridOverlay from "@/components/shared/GridOverlay";
import { services } from "@/data/services";

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Services",
    "provider": {
      "@type": "Organization",
      "name": "Noor Construction Works",
      "url": "https://yourdomain.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Our Services",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Head>
        <title>Our Services | Noor Construction Works</title>
        <meta
          name="description"
          content="Discover our wide range of construction services including Mivan Shuttering, Tunnel Formwork, Brick Work, and more."
        />
        <link rel="canonical" href="https://yourdomain.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar scrolled={isScrolled} />

      <main className="flex-grow">
        <section className="relative py-28 px-6 min-h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/services-bg.jpg"
              alt="Construction Background"
              fill
              priority
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />
            <GridOverlay baseSize={100} opacity={0.1} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Construction Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision engineering from foundation to finishing
            </p>
          </div>
        </section>

        <section className="relative py-20 px-6">
          <div className="absolute inset-0">
            <Image
              src="/images/concrete-texture.jpg"
              alt="Concrete Texture"
              fill
              priority
              className="object-cover object-center opacity-10"
            />
            <EnhancedBlueprintGrid opacity={0.3} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 bg-black border-t border-gray-800 relative">
          <EnhancedBlueprintGrid opacity={0.2} />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Start Your Project</h2>
            <a href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition">
                Contact Our Team
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function EnhancedBlueprintGrid({ opacity = 0.4 }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="enhanced-grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="0.8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#enhanced-grid)" />
    </svg>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group relative p-8 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-all hover:bg-gray-900">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg group-hover:bg-red-500/20 transition">
          <service.icon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
          <p className="text-gray-300 mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition">
                <svg
                  className="w-4 h-4 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
