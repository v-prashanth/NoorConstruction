// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import GridOverlay from "@/components/shared/GridOverlay";
// import WaveReveal from "../transitions/WaveReveal";
// import Head from "next/head";

// export default function HeroSection({ isActive }) {
//   const containerRef = useRef(null);
//   const titleRowRef = useRef(null);
//   const subtitleRef = useRef(null);

//   useEffect(() => {
//     if (!isActive) return;  // 🚨 Animate only when section is active

//     const titleChildren = titleRowRef.current?.children || [];

//     const tl = gsap.timeline();

//     tl.fromTo(titleChildren, 
//       { y: 80, opacity: 0 }, 
//       { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "back.out(1.7)" }
//     )
//     .fromTo(subtitleRef.current, 
//       { scaleX: 0, opacity: 0 }, 
//       { scaleX: 1, opacity: 1, duration: 1, ease: "power3.out" }, 
//       "-=0.8"
//     );

//     return () => tl.kill();
//   }, [isActive]);  // ✅ Only runs when this section is shown

//   return (
//     <>
//       <Head>
//         <title>Noor Construction Works | Engineering Excellence</title>
//         <meta
//           name="description"
//           content="Noor Construction Works delivers top-tier engineering solutions since 2025. Explore our premium construction projects."
//         />
//       </Head>

//       <section
//         ref={containerRef}
//         className="relative w-full h-screen overflow-hidden bg-black"
//       >
//         {/* <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           src="/videos/hero-bg.mp4"
//         /> */}

//         <div className="absolute inset-0 z-0 overflow-hidden">
//   {/* Parallax/Zoom Layer */}
//           <div
//             className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />

//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
//         </div>

//         <GridOverlay baseSize={100} opacity={0.1} />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10" />

//         <div className="relative z-20 h-full flex flex-col justify-center items-center px-6">
//           <div
//             ref={titleRowRef}
//             className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-4 lg:gap-6 mb-4 text-center"
//           >
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
//               NOOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">CONSTRUCTION</span> WORKS
//             </h1>
//           </div>

//           <div className="relative overflow-hidden">
//             <p
//               ref={subtitleRef}
//               className="text-xl sm:text-2xl md:text-3xl text-gray-300 text-center px-4 py-2"
//             >
//               Engineering Excellence Since 2025
//             </p>
//           </div>

//           <div className="mt-8 flex flex-wrap justify-center gap-2">
//             <a href="/projects">
//               <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/30">
//                 View Our Projects
//               </button>
//             </a>
//             <a href="/contact">
//               <button className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-medium rounded-md transition-all hover:scale-105 active:scale-95">
//                 Contact Our Team
//               </button>
//             </a>
//           </div>
//         </div>
//         <div
//           className="absolute bottom-5 right-31 z-40 cursor-default"
//           aria-label="Scroll to Next Section"
//         >
//           <span className="text-xs tracking-widest text-white/80 font-mono">
//             SCROLL TO EXPLORE
//           </span>
//         </div>

//         <WaveReveal fill="#0a0a0a" className="absolute bottom-0 left-0 z-30 w-full" style={{ height: "15vh" }} />
//       </section>
//     </>
//   );
// }


/////////////

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import GridOverlay from "@/components/shared/GridOverlay";
// import WaveReveal from "../transitions/WaveReveal";
// import SectionWrapper from "@/components/shared/SectionWrapper";
// import Head from "next/head";

// export default function HeroSection({ isActive }) {
//   const titleRowRef = useRef(null);
//   const subtitleRef = useRef(null);

//   useEffect(() => {
//     if (!isActive) return;

//     const titleChildren = titleRowRef.current?.children || [];
//     const tl = gsap.timeline();

//     tl.fromTo(
//       titleChildren,
//       { y: 80, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "back.out(1.7)" }
//     ).fromTo(
//       subtitleRef.current,
//       { scaleX: 0, opacity: 0 },
//       { scaleX: 1, opacity: 1, duration: 1, ease: "power3.out" },
//       "-=0.8"
//     );

//     return () => tl.kill();
//   }, [isActive]);

//   return (
//     <>
//       <Head>
//         <title>Noor Construction Works | Engineering Excellence</title>
//         <meta
//           name="description"
//           content="Noor Construction Works delivers top-tier engineering solutions since 2025. Explore our premium construction projects."
//         />
//       </Head>

//       <SectionWrapper className="relative min-h-screen bg-black overflow-hidden">

//         {/* Background Layers */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <div
//             className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />
//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
//         </div>

//         <GridOverlay baseSize={100} opacity={0.1} />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10" />

//         {/* Content */}
//         <div className="relative z-20 flex flex-col items-center text-center min-h-[60vh]">
//           {/* <div ref={sectionRef} className="relative z-20 flex flex-col justify-center items-start text-left max-w-4xl mx-auto min-h-[50vh]"></div> */}

//           <div
//             ref={titleRowRef}
//             className="flex flex-col md:flex-row items-baseline justify-center gap-2 md:gap-4 lg:gap-6 mb-4"
//           >
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
//               NOOR{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5f5f5]">
//                 CONSTRUCTION
//               </span>{" "}
//               WORKS
//             </h1>
//           </div>

//           <div className="relative overflow-hidden mb-8">
//             <p
//               ref={subtitleRef}
//               className="text-xl sm:text-2xl md:text-3xl text-gray-300 px-4 max-w-3xl leading-relaxed"
//             >
//               Engineering Excellence Since 2025
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4">
//             <a href="/projects">
//               <button className="px-8 py-3 bg-[#D4AF37] hover:bg-[#c8a136] text-black font-medium rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-yellow-300/30">
//                 View Our Projects
//               </button>
//             </a>
//             <a href="/contact">
//               <button className="px-8 py-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-medium rounded-2xl transition-all hover:scale-105 active:scale-95">
//                 Contact Our Team
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 cursor-default">
//           <span className="text-xs tracking-widest text-white/80 font-mono">
//             SCROLL TO EXPLORE
//           </span>
//         </div>

//         <WaveReveal fill="#0a0a0a" className="absolute bottom-0 left-0 z-30 w-full" style={{ height: "15vh" }} />
//       </SectionWrapper>
//     </>
//   );
// }



//////////////
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import GridOverlay from "@/components/shared/GridOverlay";
import WaveReveal from "../transitions/WaveReveal";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Head from "next/head";

export default function HeroSection({ isActive }) {
  const titleRowRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const titleChildren = titleRowRef.current?.children || [];
    const tl = gsap.timeline();

    tl.fromTo(
      titleChildren,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "back.out(1.7)" }
    ).fromTo(
      subtitleRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    return () => tl.kill();
  }, [isActive]);

  return (
    <>
      <Head>
        <title>Noor Construction Works | Engineering Excellence</title>
        <meta
          name="description"
          content="Noor Construction Works delivers top-tier engineering solutions since 2025. Explore our premium construction projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SectionWrapper className="relative min-h-[calc(100vh-80px)] md:min-h-screen bg-black overflow-hidden">
        {/* Enhanced Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/images/hero.jpeg')] sm:bg-[url('/images/hero.jpeg')] bg-cover bg-center brightness-[0.3] md:brightness-[0.4] scale-[1.1] md:scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
            style={{ 
              backgroundAttachment: 'fixed',
              imageRendering: 'crisp-edges'
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-10 bg-black/60 md:bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" aria-hidden="true" />
          <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-10 md:opacity-5 mix-blend-overlay pointer-events-none" aria-hidden="true" />
        </div>

        <GridOverlay baseSize={60} opacity={0.15} className="md:baseSize-100 md:opacity-0.1" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10" aria-hidden="true" />

        {/* Content with increased visual weight */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[60vh] px-5 py-12 md:py-16">
          <div
            ref={titleRowRef}
            className="flex flex-col items-center justify-center mb-8 md:mb-6 w-full"
          >
            <h1 className="text-[3rem] leading-[1.05] xs:text-[3.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight px-4">
              <span className="block">NOOR</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5f5f5] px-2">
                CONSTRUCTION
              </span>
              <span className="block">WORKS</span>
            </h1>
          </div>

          <div className="relative overflow-hidden mb-10 md:mb-8 w-full max-w-[95vw]">
            <p
              ref={subtitleRef}
              className="text-2xl sm:text-3xl md:text-3xl text-gray-200 font-medium leading-snug"
            >
              Engineering Excellence Since 2025
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 max-w-md sm:max-w-none">
            <a href="/projects" className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-2xl">
              <button 
                className="w-full px-8 py-4 md:py-3 bg-[#D4AF37] hover:bg-[#c8a136] text-black font-semibold text-lg md:text-base rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-yellow-300/30"
                aria-label="View our projects"
              >
                View Our Projects
              </button>
            </a>
            <a href="/contact" className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-2xl">
              <button 
                className="w-full px-8 py-4 md:py-3 bg-transparent border-2 border-white/40 hover:border-white text-white font-semibold text-lg md:text-base rounded-2xl transition-all hover:scale-[1.02] active:scale-95"
                aria-label="Contact our team"
              >
                Contact Our Team
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-8 left-1/2 -translate-x-1/2 z-40 cursor-default">
          <span className="text-sm tracking-widest text-white/80 font-mono">
            SCROLL TO EXPLORE
          </span>
        </div>

        <WaveReveal 
          fill="#0a0a0a" 
          className="absolute bottom-0 left-0 z-30 w-full" 
          style={{ height: "10vh" }} 
          aria-hidden="true"
        />
      </SectionWrapper>
    </>
  );
}