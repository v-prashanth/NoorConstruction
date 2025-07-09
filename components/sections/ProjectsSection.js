"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridOverlay from "../shared/GridOverlay";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const blueprintRef = useRef(null);
  const blobRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        paragraphRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Floating effects
      gsap.to(blueprintRef.current, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 8,
      });

      gsap.to(blobRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6,
      });

      // Subtle zoom on video
      gsap.to(videoRef.current, {
        scale: 1.07,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Ongoing Projects | Noor Construction Works</title>
        <meta
          name="description"
          content="Explore Noor Construction Works' ongoing residential and commercial projects featuring cutting-edge formwork and sustainable architecture."
        />
        <meta property="og:title" content="Ongoing Projects | Noor Construction Works" />
        <meta property="og:description" content="Explore Noor Construction Works' latest projects redefining construction innovation." />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>

      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden bg-black text-white"
        id="projects"
      >
        {/* Background Video */}
        {/* <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-bg1.webm" type="video/webm" />
          <source src="/videos/hero-bg1.mp4" type="video/mp4" />
        </video> */}
        <div
            className="absolute inset-0 bg-[url('/images/projectsBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
            style={{ backgroundAttachment: 'fixed' }}
          />

          <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />

        {/* Grid Overlay */}
        <GridOverlay baseSize={100} opacity={0.1} />

        {/* Red Blob */}
        <div
          ref={blobRef}
          className="absolute -bottom-32 -right-28 w-[350px] h-[350px] bg-[#ff3c3c] rounded-full opacity-20 blur-[120px] z-10"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col justify-center px-8 sm:px-8 md:px-12">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4 sm:mb-6 max-w-3xl"
          >
            Shaping Skylines — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Our Ongoing Projects</span>
          </h2>
          <p
            ref={paragraphRef}
            className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 md:mb-12"
          >
            From luxury residential towers to high-tech commercial complexes, Noor Construction is redefining the art of modern architecture. Our current projects showcase innovation, precision, and sustainability at every level.
          </p>

          <a
            href="/projects"
            className="group inline-flex items-center gap-2 text-white text-base sm:text-lg hover:text-[#ff3c3c] transition"
            aria-label="View our full project portfolio"
          >
            <span className="border-b border-transparent group-hover:border-[#ff3c3c] pb-1 transition-all">
              View Portfolio
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        
      </section>
    </>
  );
}
