"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridOverlay from "../shared/GridOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);
  const gridRef = useRef(null);
  const gradientRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(gradientRef.current, {
        scale: 1.05,
        opacity: 0.5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      iconRefs.current.forEach((icon, i) => {
        gsap.to(icon, {
          y: i % 2 === 0 ? -10 : 10,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.fromTo(
        gridRef.current,
        { opacity: 0 },
        {
          opacity: 0.3,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-16 md:py-24 px-4 md:px-10"
    >
      <div className="absolute inset-0 z-0">
        <div
            className="absolute inset-0 bg-[url('/images/image.jpg')] bg-cover bg-center brightness-[0.4] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
            style={{ backgroundAttachment: 'fixed' }}
          />

          <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        {/* <div
          className="absolute inset-0 bg-[url('/images/image.jpg')] bg-cover bg-center brightness-[.4] scale-105"
          style={{ backgroundAttachment: "fixed" }}
          
        /> */}
        <div
          ref={gradientRef}
          className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-blue-900/30 opacity-20"
        />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {["\ud83d\udd17", "\ud83c\udf10", "\ud83c\udfe2", "\ud83c\udf3f"].map((icon, i) => (
          <div
            key={i}
            ref={(el) => (iconRefs.current[i] = el)}
            className="absolute text-4xl md:text-6xl opacity-10"
            style={{
              left: `${10 + i * 22}%`,
              top: `${15 + i * 18}%`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div ref={gridRef}>
        <GridOverlay baseSize={100} opacity={0.8} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div ref={(el) => (contentRef.current[0] = el)} className="mb-8 md:mb-12 pl-2 md:pl-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
            <span>Foundations </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              for Tomorrow
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            At Noor Construction, we craft not just buildings but <span className="text-white font-semibold">timeless landmarks</span>, blending <span className="text-red-400">precision</span>, <span className="text-green-400">sustainability</span>, and <span className="text-blue-400">innovation</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pl-2 md:pl-6 max-w-3xl">
          {[
            { icon: "\ud83d\udd17", title: "Formwork Pioneers", desc: "Mivan technology specialists" },
            { icon: "\ud83c\udf31", title: "Green Builders", desc: "Eco-conscious construction" },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (contentRef.current[i + 1] = el)}
              className="group bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-2xl transition-all duration-500 hover:border-red-500/40 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl md:text-4xl text-red-500">{item.icon}</div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-xs md:text-base">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


//////

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function ScrollManager({ children }) {
//   const sections = Array.isArray(children) ? children : [children];
//   const totalSections = sections.length;

//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const lenisRef = useRef(null);
//   const isScrolling = useRef(false);
//   const touchStartY = useRef(0);

//   const SCROLL_COOLDOWN = 800; 

//   const scrollToSection = (index) => {
//     if (index < 0) index = 0;
//     if (index >= totalSections) index = totalSections - 1;

//     setActiveIndex(index);
//     isScrolling.current = true;

//     const targetSection = containerRef.current.children[index];
//     if (targetSection && lenisRef.current) {
//       lenisRef.current.scrollTo(targetSection, {
//         offset: 0,
//         duration: 1.2,
//         easing: (t) => 1 - Math.pow(1 - t, 3),
//       });
//     }

//     setTimeout(() => {
//       isScrolling.current = false;
//     }, SCROLL_COOLDOWN);
//   };

//   const handleWheel = (e) => {
//     if (isScrolling.current) {
//       e.preventDefault();
//       return;
//     }

//     if (Math.abs(e.deltaY) < 20) return;

//     const direction = e.deltaY > 0 ? 1 : -1;
//     scrollToSection(activeIndex + direction);
//   };

//   const handleTouchStart = (e) => {
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e) => {
//     if (isScrolling.current) return;

//     const deltaY = touchStartY.current - e.changedTouches[0].clientY;
//     if (Math.abs(deltaY) < 30) return;

//     const direction = deltaY > 0 ? 1 : -1;
//     scrollToSection(activeIndex + direction);
//   };

//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       lerp: 0.1,
//     });

//     lenisRef.current = lenis;

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };
//     requestAnimationFrame(raf);

//     const container = containerRef.current;
//     container.addEventListener("wheel", handleWheel, { passive: false });
//     container.addEventListener("touchstart", handleTouchStart, { passive: true });
//     container.addEventListener("touchend", handleTouchEnd, { passive: true });

//     return () => {
//       lenis.destroy();
//       container.removeEventListener("wheel", handleWheel);
//       container.removeEventListener("touchstart", handleTouchStart);
//       container.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [activeIndex]);

//   return (
//     <div ref={containerRef} className="relative w-full">
//       {/* Scroll Indicator */}
//       <div className="fixed z-50 bottom-4 right-4 flex items-center gap-2">
//         <span className="text-sm font-medium text-white">
//           {activeIndex + 1}/{totalSections}
//         </span>
//         <button
//           onClick={() => scrollToSection((activeIndex + 1) % totalSections)}
//           className="w-8 h-8 grid place-items-center rounded-full bg-black/10 hover:bg-red-600 text-white"
//           aria-label="Next section"
//         >
//           ↓
//         </button>
//       </div>

//       {/* Sections */}
//       {sections.map((section, index) => (
//         <section key={index} className="w-full min-h-screen h-screen overflow-hidden">
//           {section}
//         </section>
//       ))}
//     </div>
//   );
// }
