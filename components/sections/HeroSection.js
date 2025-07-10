"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import GridOverlay from "@/components/shared/GridOverlay";
import WaveReveal from "../transitions/WaveReveal";
import Head from "next/head";

export default function HeroSection({ isActive }) {
  const containerRef = useRef(null);
  const titleRowRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;  // 🚨 Animate only when section is active

    const titleChildren = titleRowRef.current?.children || [];

    const tl = gsap.timeline();

    tl.fromTo(titleChildren, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "back.out(1.7)" }
    )
    .fromTo(subtitleRef.current, 
      { scaleX: 0, opacity: 0 }, 
      { scaleX: 1, opacity: 1, duration: 1, ease: "power3.out" }, 
      "-=0.8"
    );

    return () => tl.kill();
  }, [isActive]);  // ✅ Only runs when this section is shown

  return (
    <>
      <Head>
        <title>Noor Construction Works | Engineering Excellence</title>
        <meta
          name="description"
          content="Noor Construction Works delivers top-tier engineering solutions since 2025. Explore our premium construction projects."
        />
      </Head>

      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {/* <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/hero-bg.mp4"
        /> */}

        <div className="absolute inset-0 z-0 overflow-hidden">
  {/* Parallax/Zoom Layer */}
          <div
            className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
            style={{ backgroundAttachment: 'fixed' }}
          />

          <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        </div>

        <GridOverlay baseSize={100} opacity={0.1} />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10" />

        <div className="relative z-20 h-full flex flex-col justify-center items-center px-6">
          <div
            ref={titleRowRef}
            className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-4 lg:gap-6 mb-4 text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
              NOOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">CONSTRUCTION</span> WORKS
            </h1>
          </div>

          <div className="relative overflow-hidden">
            <p
              ref={subtitleRef}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 text-center px-4 py-2"
            >
              Engineering Excellence Since 2025
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <a href="/projects">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/30">
                View Our Projects
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-medium rounded-md transition-all hover:scale-105 active:scale-95">
                Contact Our Team
              </button>
            </a>
          </div>
        </div>
        <div
          className="absolute bottom-5 right-31 z-40 cursor-default"
          aria-label="Scroll to Next Section"
        >
          <span className="text-xs tracking-widest text-white/80 font-mono">
            SCROLL TO EXPLORE
          </span>
        </div>

        <WaveReveal fill="#0a0a0a" className="absolute bottom-0 left-0 z-30 w-full" style={{ height: "15vh" }} />
      </section>
    </>
  );
}
