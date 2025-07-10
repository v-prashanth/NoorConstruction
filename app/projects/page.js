
// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";
// import Navbar from "@/components/shared/Navbar";
// import GridOverlay from "@/components/shared/GridOverlay";
// import ProjectDetail from "@/components/shared/ProjectDetail";
// import { projects } from "@/data/projects";

// export default function ProjectShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mediaIndex, setMediaIndex] = useState(0);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(0);
//   const isScrolling = useRef(false);

//   const scrollToProject = (nextIndex) => {
//     if (
//       isScrolling.current ||
//       nextIndex === currentIndex ||
//       nextIndex < 0 ||
//       nextIndex >= projects.length
//     )
//       return;

//     isScrolling.current = true;
//     setMediaIndex(0);

//     gsap.to(containerRef.current, {
//       y: -nextIndex * window.innerHeight,
//       duration: 1.1,
//       ease: "power3.inOut",
//       onComplete: () => {
//         setCurrentIndex(nextIndex);
//         isScrolling.current = false;
//       },
//     });
//   };

//   const handleWheel = (e) => {
//     if (Math.abs(e.deltaY) < 10 || isScrolling.current) return;
//     e.preventDefault();
//     scrollToProject(e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1);
//   };

//   const handleTouchStart = (e) => {
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY.current - touchEndY;
//     if (Math.abs(diff) < 50 || isScrolling.current) return;
//     scrollToProject(diff > 0 ? currentIndex + 1 : currentIndex - 1);
//   };

//   // useEffect(() => {
//   //   window.addEventListener("wheel", handleWheel, { passive: false });
//   //   window.addEventListener("touchstart", handleTouchStart, { passive: true });
//   //   window.addEventListener("touchend", handleTouchEnd, { passive: true });

//   //   return () => {
//   //     window.removeEventListener("wheel", handleWheel);
//   //     window.removeEventListener("touchstart", handleTouchStart);
//   //     window.removeEventListener("touchend", handleTouchEnd);
//   //   };
//   // }, [currentIndex]) ;

//   useEffect(() => {
//   window.addEventListener("wheel", handleWheel, { passive: false });
//   window.addEventListener("touchstart", handleTouchStart, { passive: true });
//   window.addEventListener("touchend", handleTouchEnd, { passive: true });

//   return () => {
//     window.removeEventListener("wheel", handleWheel);
//     window.removeEventListener("touchstart", handleTouchStart);
//     window.removeEventListener("touchend", handleTouchEnd);
//   };
// }, [handleWheel, handleTouchStart, handleTouchEnd]);


//   const currentProject = projects[currentIndex];

//   const nextMedia = () => {
//     setMediaIndex((prev) => (prev + 1) % currentProject.media.length);
//   };

//   const prevMedia = () => {
//     setMediaIndex((prev) => (prev - 1 + currentProject.media.length) % currentProject.media.length);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Fixed Background */}
//       <div className="fixed inset-0 z-0">
//         <div
//           className="absolute inset-0 bg-[url('/images/hero3.jpg')] bg-cover bg-center brightness-[.20] scale-105"
//           style={{ backgroundAttachment: "fixed" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
//       </div>

//       <GridOverlay baseSize={100} opacity={0.2} />

//       <Navbar className="relative z-30" />

//       {/* Animated Container */}
//       <div
//         ref={containerRef}
//         className="relative z-10 w-full h-full transition-transform duration-1000"
//         style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
//       >
//         {projects.map((project, i) => (
//           <section
//             key={project.id}
//             className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 snap-center"
//           >
//             {/* Media */}
//             <div className="w-full md:w-1/2 h-[40vh] md:h-[65vh] relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
//               {project.media[mediaIndex].type === "image" ? (
//                 <Image
//                   src={project.media[mediaIndex].src}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                   priority={i === currentIndex}
//                 />
//               ) : (
//                 <video
//                   src={project.media[mediaIndex].src}
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               )}

//               {project.media.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevMedia}
//                     aria-label="Previous Media"
//                     className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20"
//                   >
//                     <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>

//                   <button
//                     onClick={nextMedia}
//                     aria-label="Next Media"
//                     className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20"
//                   >
//                     <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>

//                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
//                     {project.media.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setMediaIndex(idx)}
//                         aria-label={`Select media ${idx + 1}`}
//                         className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white w-3' : 'bg-white/30'}`}
//                       />
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Project Details */}
//             <ProjectDetail project={project} mediaIndex={mediaIndex} setMediaIndex={setMediaIndex} />
//           </section>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {projects.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => scrollToProject(i)}
//             aria-label={`Go to project ${i + 1}`}
//             className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'} transition`}
//           />
//         ))}
//       </div>

//       {/* Scroll Arrows */}
//       <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
//         {currentIndex > 0 && (
//           <button onClick={() => scrollToProject(currentIndex - 1)} aria-label="Scroll Up" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
//             <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//             </svg>
//           </button>
//         )}
//         {currentIndex < projects.length - 1 && (
//           <button onClick={() => scrollToProject(currentIndex + 1)} aria-label="Scroll Down" className="p-2 rounded-full bg-white/10 hover:bg-white/20 animate-bounce">
//             <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }



'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import GridOverlay from '@/components/shared/GridOverlay';
import ProjectDetail from '@/components/shared/ProjectDetail';
import { projects } from '@/data/projects';

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const isScrolling = useRef(false);

  const scrollToProject = useCallback((nextIndex) => {
    if (
      isScrolling.current ||
      nextIndex === currentIndex ||
      nextIndex < 0 ||
      nextIndex >= projects.length
    ) return;

    isScrolling.current = true;
    setMediaIndex(0);

    gsap.to(containerRef.current, {
      y: -nextIndex * window.innerHeight,
      duration: 1.1,
      ease: 'power3.inOut',
      onComplete: () => {
        setCurrentIndex(nextIndex);
        isScrolling.current = false;
      },
    });
  }, [currentIndex]);

  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaY) < 10 || isScrolling.current) return;
    e.preventDefault();
    scrollToProject(e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1);
  }, [currentIndex, scrollToProject]);

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    if (Math.abs(diff) < 50 || isScrolling.current) return;
    scrollToProject(diff > 0 ? currentIndex + 1 : currentIndex - 1);
  }, [currentIndex, scrollToProject]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  const currentProject = projects[currentIndex];

  const nextMedia = () => {
    setMediaIndex((prev) => (prev + 1) % currentProject.media.length);
  };

  const prevMedia = () => {
    setMediaIndex((prev) => (prev - 1 + currentProject.media.length) % currentProject.media.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/*       <div className="relative w-full h-screen overflow-hidden bg-black text-white">
        {/* Fixed Background */}
       <div className="fixed inset-0 z-0">
         <div
            className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.20] scale-105"
            style={{ backgroundAttachment: "fixed" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
        </div>

        <GridOverlay baseSize={100} opacity={0.2} />

        <Navbar className="relative z-30" />

        {/* Animated Container */}
        <div
          ref={containerRef}
          className="relative z-10 w-full h-full transition-transform duration-1000"
          style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
        >
          {projects.map((project, i) => (
            <section
              key={project.id}
              className="w-full h-screen flex flex-col md:flex-row items-center justify-center pt-0 p-6 md:p-12 gap-6 snap-center"
            >
              {/* Media */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-[65vh] relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
                {project.media[mediaIndex].type === "image" ? (
                  <Image
                    src={project.media[mediaIndex].src}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={i === currentIndex}
                  />
                ) : (
                  <video
                    src={project.media[mediaIndex].src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}

                {project.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      aria-label="Previous Media"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={nextMedia}
                      aria-label="Next Media"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                      {project.media.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setMediaIndex(idx)}
                          aria-label={`Select media ${idx + 1}`}
                          className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white w-3' : 'bg-white/30'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <ProjectDetail project={project} mediaIndex={mediaIndex} setMediaIndex={setMediaIndex} />
            </section>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToProject(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'} transition`}
            />
          ))}
        </div>

        {/* Scroll Arrows */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
          {currentIndex > 0 && (
            <button onClick={() => scrollToProject(currentIndex - 1)} aria-label="Scroll Up" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          )}
          {currentIndex < projects.length - 1 && (
            <button onClick={() => scrollToProject(currentIndex + 1)} aria-label="Scroll Down" className="p-2 rounded-full bg-white/10 hover:bg-white/20 animate-bounce">
              <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
     </div>
   );
    
}