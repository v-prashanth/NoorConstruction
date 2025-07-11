// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GridOverlay from "../shared/GridOverlay";
// import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);

// export default function OurStory() {
//   const sectionRef = useRef(null);
//   const headlineRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const statsRef = useRef(null);
//   const blueprintRef = useRef(null);
//   const blobRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           toggleActions: "play none none none",
//         },
//       });

//       tl.from(headlineRef.current, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       })
//       .from(paragraphRef.current, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       }, "-=0.6");

//       const statItems = statsRef.current.children;
//       Array.from(statItems).forEach((stat, i) => {
//         const numberEl = stat.querySelector("span:first-child");
//         const targetValue = parseInt(numberEl.textContent.replace(/\D/g, ""));
//         const numberObj = { val: 0 };

//         tl.to(numberObj, {
//           val: targetValue,
//           duration: 1.5,
//           ease: "power1.out",
//           onUpdate: () => {
//             const value = Math.floor(numberObj.val);
//             numberEl.textContent = value + (targetValue === 100 ? "%" : "");
//           },
//         }, `-=${1.2 - i * 0.3}`);

//         tl.from(stat, {
//           y: 30,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2.out",
//         }, `-=${1.5 - i * 0.3}`);
//       });

//       gsap.to(blueprintRef.current, {
//         y: 20,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         duration: 8,
//       });

//       gsap.to(blobRef.current, {
//         y: -15,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         duration: 6,
//       });

//       gsap.to(videoRef.current, {
//         scale: 1.07,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Our Story | Noor Construction Works</title>
//         <meta name="description" content="Discover the story of Noor Construction Works, delivering innovative construction solutions since 2025." />
//       </Head>

//       <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black" id="about">
//         {/* <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover opacity-15"
//           autoPlay
//           loop
//           muted
//           playsInline
//           src="/videos/hero-bg.mp4"
//           poster="/images/hero-poster.jpg"
//         /> */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//   {/* Parallax/Zoom Layer */}
//           <div
//             className="absolute inset-0 bg-[url('/projects/TempleTree/TreeResidence1.jpeg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />

//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />



//           {/* Optional Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/60" />
//         </div>
//         <GridOverlay baseSize={100} opacity={0.2} />

//         <div ref={blobRef} className="absolute -bottom-32 -right-28 w-[350px] h-[350px] bg-[#ff3c3c] rounded-full opacity-20 blur-[120px] z-10" />

//         {/* <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col justify-center px-8 sm:px-8 md:px-12"> */}
// <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col justify-center py-50 md:py-24 lg:py-40 px-8 sm:px-8 md:px-12">
//           <h1 ref={headlineRef} className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4 sm:mb-6 max-w-3xl">
//             We don&apos;t just build — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">We Engineer.</span>
//           </h1>

//           <p ref={paragraphRef} className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 md:mb-12">
//             Established in 2025, Noor Construction Works delivers modern construction solutions through precision formwork methods like Mivan and tunnel form systems. With a 150-member team and 3 ongoing large-scale projects, we combine innovation, efficiency, and commitment to quality from the ground up.
//           </p>

//           <div ref={statsRef} className="flex flex-wrap gap-6 sm:gap-10 text-white text-sm sm:text-lg font-semibold">
//             <div className="flex flex-col items-start">
//               <span className="text-3xl sm:text-4xl md:text-5xl text-[#ff3c3c]">2025</span>
//               <span className="text-gray-400 text-xs sm:text-sm mt-1">Founded</span>
//             </div>
//             <div className="flex flex-col items-start">
//               <span className="text-3xl sm:text-4xl md:text-5xl text-[#ff3c3c]">150</span>
//               <span className="text-gray-400 text-xs sm:text-sm mt-1">Team Members</span>
//             </div>
//             <div className="flex flex-col items-start">
//               <span className="text-3xl sm:text-4xl md:text-5xl text-[#ff3c3c]">3</span>
//               <span className="text-gray-400 text-xs sm:text-sm mt-1">Ongoing Projects</span>
//             </div>
//             <div className="flex flex-col items-start">
//               <span className="text-3xl sm:text-4xl md:text-5xl text-[#ff3c3c]">100</span>
//               <span className="text-gray-400 text-xs sm:text-sm mt-1">Commitment to Quality</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


////////////

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GridOverlay from "../shared/GridOverlay";
// import SectionWrapper from "../shared/SectionWrapper";
// import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);

// export default function OurStory() {
//   const sectionRef = useRef(null);
//   const headlineRef = useRef(null);
//   const paragraphRef = useRef(null);
//   const statsRef = useRef(null);
//   const blobRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           toggleActions: "play none none none",
//         },
//       });

//       tl.from(headlineRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
//         .from(paragraphRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6");

//       const statItems = statsRef.current.children;
//       Array.from(statItems).forEach((stat, i) => {
//         const numberEl = stat.querySelector("span:first-child");
//         const targetValue = parseInt(numberEl.textContent.replace(/\D/g, ""));
//         const numberObj = { val: 0 };

//         tl.to(numberObj, {
//           val: targetValue,
//           duration: 1.5,
//           ease: "power1.out",
//           onUpdate: () => {
//             const value = Math.floor(numberObj.val);
//             numberEl.textContent = value + (targetValue === 100 ? "%" : "");
//           },
//         }, `-=${1.2 - i * 0.3}`);

//         tl.from(stat, { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, `-=${1.5 - i * 0.3}`);
//       });

//       gsap.to(blobRef.current, {
//         y: -15,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         duration: 6,
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Our Story | Noor Construction Works</title>
//         <meta name="description" content="Discover the story of Noor Construction Works, delivering innovative construction solutions since 2025." />
//       </Head>

//       <SectionWrapper className="relative min-h-screen bg-black overflow-hidden" id="about">
//         {/* Background Layers */}
//         <div className="absolute inset-0 z-0 overflow-hidden">
//           <div
//             className="absolute inset-0 bg-[url('/projects/TempleTree/TreeResidence1.jpeg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />
//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
//           <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/60" />
//         </div>

//         <GridOverlay baseSize={100} opacity={0.2} />

//         <div ref={blobRef} className="absolute -bottom-32 -right-28 w-[350px] h-[350px] bg-[#D4AF37] rounded-full opacity-20 blur-[120px] z-10" />

//         {/* Content Block (Aligned like Hero) */}
//         <div
//           ref={sectionRef}
//           className="relative z-20 h-full flex flex-col justify-center items-center text-center"
//         >
//           <h1
//             ref={headlineRef}
//             className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6 max-w-3xl"
//           >
//             We don&apos;t just build —{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5f5f5]">
//               We Engineer.
//             </span>
//           </h1>

//           <p
//             ref={paragraphRef}
//             className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10"
//           >
//             Established in 2025, Noor Construction Works delivers modern construction solutions through precision formwork methods like Mivan and tunnel form systems. With a 150-member team and 3 ongoing large-scale projects, we combine innovation, efficiency, and commitment to quality from the ground up.
//           </p>

//           <div
//             ref={statsRef}
//             className="flex flex-wrap justify-center gap-6 sm:gap-10 text-white text-sm sm:text-lg font-semibold"
//           >
//             {[
//               { label: "Founded", value: "2025" },
//               { label: "Team Members", value: "150" },
//               { label: "Ongoing Projects", value: "3" },
//               { label: "Commitment to Quality", value: "100%" },
//             ].map((stat, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <span className="text-3xl sm:text-4xl md:text-5xl text-[#D4AF37]">{stat.value}</span>
//                 <span className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </SectionWrapper>
//     </>
//   );
// }

/////
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridOverlay from "../shared/GridOverlay";
import SectionWrapper from "../shared/SectionWrapper";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const statsRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headlineRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
        .from(paragraphRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6");

      const statItems = statsRef.current.children;
      Array.from(statItems).forEach((stat, i) => {
        const numberEl = stat.querySelector("span:first-child");
        const targetValue = parseInt(numberEl.textContent.replace(/\D/g, ""));
        const numberObj = { val: 0 };

        tl.to(numberObj, {
          val: targetValue,
          duration: 1.5,
          ease: "power1.out",
          onUpdate: () => {
            const value = Math.floor(numberObj.val);
            numberEl.textContent = value + (targetValue === 100 ? "%" : "");
          },
        }, `-=${1.2 - i * 0.3}`);

        tl.from(stat, { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, `-=${1.5 - i * 0.3}`);
      });

      gsap.to(blobRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Our Story | Noor Construction Works</title>
        <meta
          name="description"
          content="Discover the story of Noor Construction Works, delivering innovative construction solutions since 2025."
        />
      </Head>

      <SectionWrapper className="relative min-h-screen bg-black overflow-hidden" id="about">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/projects/TempleTree/TreeResidence1.jpeg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
            style={{ backgroundAttachment: 'fixed' }}
          />
          <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/60" />
        </div>

        <GridOverlay baseSize={100} opacity={0.2} />
        <div ref={blobRef} className="absolute -bottom-32 -right-28 w-[350px] h-[350px] bg-[#D4AF37] rounded-full opacity-20 blur-[120px] z-10" />

        {/* Inner Content (Left-Aligned, Balanced) */}
        {/* <div
          ref={sectionRef}
          className="relative z-20 h-full flex flex-col justify-center items-start text-left max-w-5xl"
        > */}
        {/* <div
  ref={sectionRef}
  className="relative z-20 h-full flex flex-col justify-center items-start text-left max-w-6xl w-full px-[clamp(16px,5vw,80px)]"
> */}
<div ref={sectionRef} className="relative z-20 flex flex-col justify-center items-start text-left max-w-4xl mx-auto min-h-[50vh]">


          <h1
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6"
          >
            We don&apos;t just build —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#f5f5f5]">
              We Engineer.
            </span>
          </h1>

          <p
            ref={paragraphRef}
            className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
          >
            Established in 2025, Noor Construction Works delivers modern construction solutions through precision formwork methods like Mivan and tunnel form systems. With a 150-member team and 3 ongoing large-scale projects, we combine innovation, efficiency, and commitment to quality from the ground up.
          </p>

          <div
            ref={statsRef}
            className="flex flex-wrap justify-start gap-6 sm:gap-10 text-white text-sm sm:text-lg font-semibold"
          >
            {[
              { label: "Founded", value: "2025" },
              { label: "Team Members", value: "150" },
              { label: "Ongoing Projects", value: "3" },
              { label: "Commitment to Quality", value: "100%" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="text-3xl sm:text-4xl md:text-5xl text-[#D4AF37]">{stat.value}</span>
                <span className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
