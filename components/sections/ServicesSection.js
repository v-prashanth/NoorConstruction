// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GridOverlay from "../shared/GridOverlay";

// // Register GSAP Plugin
// gsap.registerPlugin(ScrollTrigger);

// export default function ServicesSection() {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const itemsRef = useRef([]);
//   const gridRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(contentRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });

//       gsap.from(itemsRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power2.out",
//         stagger: 0.15,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(gridRef.current, {
//         opacity: 0,
//         scale: 1.05,
//         duration: 1.5,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       });

//       gsap.to(gridRef.current, {
//         y: 20,
//         duration: 8,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const services = [
//     "Mivan Shuttering",
//     "Tunnel Formwork",
//     "Ply Shuttering", 
//     "Brick Work",
//     "Tiling",
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full min-h-screen overflow-hidden bg-[#0b0b0b] text-white"
//     >
//       {/* <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-15"
//         src="/videos/services-bg.mp4"
//       /> */}
      
//       {/* Parallax/Zoom Layer */}
//           <div
//             className="absolute inset-0 bg-[url('/images/serviceBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />

//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        

//       <div ref={gridRef} className="absolute inset-0">
//         <GridOverlay baseSize={100} opacity={0.1} />
//       </div>

//       <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-[#ff3c3c] rounded-full opacity-15 blur-[120px] z-0" />

//       <div
//         ref={contentRef}
//         className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-8 md:px-12 max-w-5xl mx-auto py-50 md:py-24 lg:py-40"
//       >
//         <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 md:mb-10 leading-tight">
//           Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">for Excellence</span>
//         </h2>

//         <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mb-6 md:mb-8">
//           We specialize in advanced construction methodologies tailored for modern infrastructure. Here&apos;s what we bring to every project:
//         </p>

//         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 w-full max-w-3xl">
//           {services.map((item, i) => (
//             <li
//               key={i}
//               ref={(el) => (itemsRef.current[i] = el)}
//               className="relative group"
//             >
//               <div className="flex items-start gap-3 text-gray-200 transition-all duration-300 group-hover:text-white pl-4 border-l-2 border-gray-800 group-hover:border-red-500">
//                 <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block mt-1.5 flex-shrink-0 transition-all group-hover:scale-125"></span>
//                 <div>
//                   <span className="block font-medium text-base md:text-lg">{item}</span>
//                   <span className="block text-xs text-gray-500 mt-1">
//                     {getServiceDescription(item)}
//                   </span>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         <a
//           href="/services"
//           className="mt-8 md:mt-12 inline-flex items-center gap-2 text-sm md:text-base font-medium text-white hover:text-red-500 transition-colors duration-300 group"
//         >
//           <span className="border-b border-transparent group-hover:border-red-500 pb-1">
//             Explore our All services
//           </span>
//           <span className="group-hover:translate-x-1 transition-transform">→</span>
//         </a>
//       </div>
//     </section>
//   );
// }

// function getServiceDescription(service) {
//   const descriptions = {
//     "Mivan Shuttering": "Aluminum formwork system for rapid, precise construction",
//     "Tunnel Formwork": "Efficient monolithic casting technology",
//     "Ply Shuttering": "Traditional formwork with modern precision",
//     "Brick Work": "High-quality masonry with engineered materials",
//     "Tiling": "Premium finishes with guided precision",
//   };
//   return descriptions[service] || "";
// }


////////////

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridOverlay from "../shared/GridOverlay";
import SectionWrapper from "../shared/SectionWrapper";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(itemsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(gridRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.to(gridRef.current, {
        y: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    "Mivan Shuttering",
    "Tunnel Formwork",
    "Ply Shuttering",
    "Brick Work",
    "Tiling",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#0b0b0b] text-white"
    >
      <div
        className="absolute inset-0 bg-[url('/images/serviceBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
        style={{ backgroundAttachment: 'fixed' }}
      />

      <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div ref={gridRef} className="absolute inset-0">
        <GridOverlay baseSize={100} opacity={0.1} />
      </div>

      <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-[#D4AF37] rounded-full opacity-15 blur-[120px] z-0" />

      <SectionWrapper>
        {/* <div
          ref={contentRef}
          className="relative z-10 flex flex-col justify-center items-start h-full"
        > */}
        <div ref={sectionRef} className="relative z-20 flex flex-col justify-center items-start text-left max-w-4xl mx-auto min-h-[70vh]">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 md:mb-10 leading-tight">
            Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#e5c96f]">for Excellence</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mb-6 md:mb-8">
            We specialize in advanced construction methodologies tailored for modern infrastructure. Here's what we bring to every project:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6 w-full max-w-3xl">
            {services.map((item, i) => (
              <li
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="relative group"
              >
                <div className="flex items-start gap-3 text-gray-200 transition-all duration-300 group-hover:text-white pl-4 border-l-2 border-gray-800 group-hover:border-[#D4AF37]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] inline-block mt-1.5 flex-shrink-0 transition-all group-hover:scale-125"></span>
                  <div>
                    <span className="block font-medium text-base md:text-lg">{item}</span>
                    <span className="block text-xs text-gray-500 mt-1">
                      {getServiceDescription(item)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="/services"
            className="mt-8 md:mt-12 inline-flex items-center gap-2 text-sm md:text-base font-medium text-white hover:text-[#D4AF37] transition-colors duration-300 group"
          >
            <span className="border-b border-transparent group-hover:border-[#D4AF37] pb-1">
              Explore our All services
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </SectionWrapper>
    </section>
  );
}

function getServiceDescription(service) {
  const descriptions = {
    "Mivan Shuttering": "Aluminum formwork system for rapid, precise construction",
    "Tunnel Formwork": "Efficient monolithic casting technology",
    "Ply Shuttering": "Traditional formwork with modern precision",
    "Brick Work": "High-quality masonry with engineered materials",
    "Tiling": "Premium finishes with guided precision",
  };
  return descriptions[service] || "";
}
