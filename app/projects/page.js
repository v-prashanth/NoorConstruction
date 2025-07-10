
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


////////////

// 'use client';

// import { useState, useEffect, useRef, useCallback } from 'react';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Navbar from '@/components/shared/Navbar';
// import GridOverlay from '@/components/shared/GridOverlay';
// import ProjectDetail from '@/components/shared/ProjectDetail';
// import { projects } from '@/data/projects';

// export default function ProjectShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mediaIndex, setMediaIndex] = useState(0);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(0);
//   const isScrolling = useRef(false);

//   const scrollToProject = useCallback((nextIndex) => {
//     if (
//       isScrolling.current ||
//       nextIndex === currentIndex ||
//       nextIndex < 0 ||
//       nextIndex >= projects.length
//     ) return;

//     isScrolling.current = true;
//     setMediaIndex(0);

//     gsap.to(containerRef.current, {
//       y: -nextIndex * window.innerHeight,
//       duration: 1.1,
//       ease: 'power3.inOut',
//       onComplete: () => {
//         setCurrentIndex(nextIndex);
//         isScrolling.current = false;
//       },
//     });
//   }, [currentIndex]);

//   const handleWheel = useCallback((e) => {
//     if (Math.abs(e.deltaY) < 10 || isScrolling.current) return;
//     e.preventDefault();
//     scrollToProject(e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1);
//   }, [currentIndex, scrollToProject]);

//   const handleTouchStart = useCallback((e) => {
//     touchStartY.current = e.touches[0].clientY;
//   }, []);

//   const handleTouchEnd = useCallback((e) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY.current - touchEndY;
//     if (Math.abs(diff) < 50 || isScrolling.current) return;
//     scrollToProject(diff > 0 ? currentIndex + 1 : currentIndex - 1);
//   }, [currentIndex, scrollToProject]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     window.addEventListener('wheel', handleWheel, { passive: false });
//     window.addEventListener('touchstart', handleTouchStart, { passive: true });
//     window.addEventListener('touchend', handleTouchEnd, { passive: true });

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('touchstart', handleTouchStart);
//       window.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, [handleWheel, handleTouchStart, handleTouchEnd]);

//   const currentProject = projects[currentIndex];

//   const nextMedia = () => {
//     setMediaIndex((prev) => (prev + 1) % currentProject.media.length);
//   };

//   const prevMedia = () => {
//     setMediaIndex((prev) => (prev - 1 + currentProject.media.length) % currentProject.media.length);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/*       <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//         {/* Fixed Background */}
//        <div className="fixed inset-0 z-0">
//          <div
//             className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.20] scale-105"
//             style={{ backgroundAttachment: "fixed" }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
//         </div>

//         <GridOverlay baseSize={100} opacity={0.2} />

//         <Navbar className="relative z-30" />

//         {/* Animated Container */}
//         <div
//           ref={containerRef}
//           className="relative z-10 w-full h-full transition-transform duration-1000"
//           style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
//         >
//           {projects.map((project, i) => (
//             <section
//               key={project.id}
//               className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 snap-center"
//             >
//               {/* Media */}
//               <div className="w-full md:w-1/2 h-[40vh] md:h-[65vh] relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
//                 {project.media[mediaIndex].type === "image" ? (
//                   <Image
//                     src={project.media[mediaIndex].src}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                     priority={i === currentIndex}
//                   />
//                 ) : (
//                   <video
//                     src={project.media[mediaIndex].src}
//                     className="w-full h-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 )}

//                 {project.media.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevMedia}
//                       aria-label="Previous Media"
//                       className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20"
//                     >
//                       <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                       </svg>
//                     </button>

//                     <button
//                       onClick={nextMedia}
//                       aria-label="Next Media"
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20"
//                     >
//                       <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>

//                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
//                       {project.media.map((_, idx) => (
//                         <button
//                           key={idx}
//                           onClick={() => setMediaIndex(idx)}
//                           aria-label={`Select media ${idx + 1}`}
//                           className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white w-3' : 'bg-white/30'}`}
//                         />
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* Project Details */}
//               <ProjectDetail project={project} mediaIndex={mediaIndex} setMediaIndex={setMediaIndex} />
//             </section>
//           ))}
//         </div>

//         {/* Navigation Dots */}
//         <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => scrollToProject(i)}
//               aria-label={`Go to project ${i + 1}`}
//               className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'} transition`}
//             />
//           ))}
//         </div>

//         {/* Scroll Arrows */}
//         <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
//           {currentIndex > 0 && (
//             <button onClick={() => scrollToProject(currentIndex - 1)} aria-label="Scroll Up" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
//               <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//               </svg>
//             </button>
//           )}
//           {currentIndex < projects.length - 1 && (
//             <button onClick={() => scrollToProject(currentIndex + 1)} aria-label="Scroll Down" className="p-2 rounded-full bg-white/10 hover:bg-white/20 animate-bounce">
//               <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//           )}
//         </div>
//      </div>
//    );
    
// }


////////////////
// 'use client';

// import { useState, useEffect, useRef, useCallback } from 'react';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Navbar from '@/components/shared/Navbar';
// import GridOverlay from '@/components/shared/GridOverlay';
// import ProjectDetail from '@/components/shared/ProjectDetail';
// import { projects } from '@/data/projects';

// export default function ProjectShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mediaIndex, setMediaIndex] = useState(0);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(0);
//   const isScrolling = useRef(false);
//   const lastScrollTime = useRef(0);

//   const scrollToProject = useCallback((nextIndex) => {
//     const now = Date.now();
//     if (now - lastScrollTime.current < 600) return;
//     if (
//       isScrolling.current ||
//       nextIndex === currentIndex ||
//       nextIndex < 0 ||
//       nextIndex >= projects.length
//     ) return;

//     isScrolling.current = true;
//     setMediaIndex(0);
//     lastScrollTime.current = now;

//     gsap.to(containerRef.current, {
//       y: -nextIndex * window.innerHeight,
//       duration: 0.6,
//       ease: 'power2.out',
//       onComplete: () => {
//         setCurrentIndex(nextIndex);
//         isScrolling.current = false;
//       },
//     });
//   }, [currentIndex]);

//   const handleWheel = useCallback((e) => {
//     if (isScrolling.current) return;
//     e.preventDefault();

//     const direction = e.deltaY > 0 ? 1 : -1;
//     scrollToProject(currentIndex + direction);
//   }, [currentIndex, scrollToProject]);

//   const handleTouchStart = useCallback((e) => {
//     touchStartY.current = e.touches[0].clientY;
//   }, []);

//   const handleTouchEnd = useCallback((e) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY.current - touchEndY;
//     if (Math.abs(diff) < 30 || isScrolling.current) return;

//     const direction = diff > 0 ? 1 : -1;
//     scrollToProject(currentIndex + direction);
//   }, [currentIndex, scrollToProject]);

//   const handleKeyDown = useCallback((e) => {
//     if (e.key === 'ArrowDown' || e.key === 'PageDown') {
//       scrollToProject(currentIndex + 1);
//     } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
//       scrollToProject(currentIndex - 1);
//     }
//   }, [currentIndex, scrollToProject]);

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     window.addEventListener('touchstart', handleTouchStart, { passive: true });
//     window.addEventListener('touchend', handleTouchEnd, { passive: true });
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('touchstart', handleTouchStart);
//       window.removeEventListener('touchend', handleTouchEnd);
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

//   const currentProject = projects[currentIndex];

//   const nextMedia = () => {
//     setMediaIndex((prev) => (prev + 1) % currentProject.media.length);
//   };

//   const prevMedia = () => {
//     setMediaIndex((prev) => (prev - 1 + currentProject.media.length) % currentProject.media.length);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.20] scale-105" style={{ backgroundAttachment: 'fixed' }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
//       </div>

//       <GridOverlay baseSize={100} opacity={0.2} />
//       <Navbar className="relative z-30" />

//       <div ref={containerRef} className="relative z-10 w-full h-full" style={{ transform: `translateY(-${currentIndex * 100}vh)` }}>
//         {projects.map((project, i) => (
//           <section key={project.id} className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8">
//             <div className="w-full md:w-1/2 h-[40vh] md:h-[65vh] relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
//               {project.media[mediaIndex].type === 'image' ? (
//                 <Image src={project.media[mediaIndex].src} alt={project.title} fill className="object-cover" priority={i === currentIndex} />
//               ) : (
//                 <video src={project.media[mediaIndex].src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
//               )}

//               {project.media.length > 1 && (
//                 <>
//                   <button onClick={prevMedia} aria-label="Previous Media" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20">
//                     <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>

//                   <button onClick={nextMedia} aria-label="Next Media" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20">
//                     <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>

//                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
//                     {project.media.map((_, idx) => (
//                       <button key={idx} onClick={() => setMediaIndex(idx)} aria-label={`Select media ${idx + 1}`} className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white w-3' : 'bg-white/30'}`} />
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>

//             <ProjectDetail project={project} mediaIndex={mediaIndex} setMediaIndex={setMediaIndex} />
//           </section>
//         ))}
//       </div>

//       <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {projects.map((_, i) => (
//           <button key={i} onClick={() => scrollToProject(i)} aria-label={`Go to project ${i + 1}`} className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'} transition`} />
//         ))}
//       </div>

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
///////

// 'use client';

// import { useState, useRef, useCallback, useEffect } from 'react';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Navbar from '@/components/shared/Navbar';
// import GridOverlay from '@/components/shared/GridOverlay';
// import ProjectDetail from '@/components/shared/ProjectDetail';
// import { projects } from '@/data/projects';

// export default function ProjectShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mediaIndex, setMediaIndex] = useState(0);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(0);
//   const isScrolling = useRef(false);
//   const wheelDelta = useRef(0);
//   const scrollDirection = useRef(null);

//   // Controlled scroll function with perfect timing
//   const scrollToProject = useCallback((nextIndex) => {
//     if (
//       isScrolling.current ||
//       nextIndex === currentIndex ||
//       nextIndex < 0 ||
//       nextIndex >= projects.length
//     ) return;

//     isScrolling.current = true;
//     setMediaIndex(0);

//     gsap.to(containerRef.current, {
//       y: -nextIndex * window.innerHeight,
//       duration: 0.7, // Optimal duration for perception
//       ease: 'power2.inOut', // Smooth acceleration/deceleration
//       onComplete: () => {
//         setCurrentIndex(nextIndex);
//         isScrolling.current = false;
//         wheelDelta.current = 0; // Reset wheel delta
//       }
//     });
//   }, [currentIndex]);

//   // Wheel handler with delta accumulation
//   const handleWheel = useCallback((e) => {
//     if (isScrolling.current) {
//       e.preventDefault();
//       return;
//     }

//     wheelDelta.current += Math.abs(e.deltaY);
    
//     // Require minimum delta before scrolling (for precise control)
//     if (wheelDelta.current < 60) {
//       e.preventDefault();
//       return;
//     }

//     // Determine direction once threshold is reached
//     const newDirection = e.deltaY > 0 ? 'down' : 'up';
    
//     // Only proceed if direction is consistent
//     if (scrollDirection.current && scrollDirection.current !== newDirection) {
//       wheelDelta.current = 0;
//       scrollDirection.current = null;
//       return;
//     }

//     scrollDirection.current = newDirection;
//     e.preventDefault();
    
//     const direction = e.deltaY > 0 ? 1 : -1;
//     scrollToProject(currentIndex + direction);
//     wheelDelta.current = 0;
//   }, [currentIndex, scrollToProject]);

//   // Touch handlers with velocity calculation
//   const handleTouchStart = useCallback((e) => {
//     touchStartY.current = e.touches[0].clientY;
//     scrollDirection.current = null;
//   }, []);

//   const handleTouchMove = useCallback((e) => {
//     if (isScrolling.current) {
//       e.preventDefault();
//       return;
//     }
//     e.preventDefault();
//   }, []);

//   const handleTouchEnd = useCallback((e) => {
//     if (isScrolling.current) return;
    
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY.current - touchEndY;
    
//     // Require minimum swipe distance
//     if (Math.abs(diff) < 50) return;
    
//     const direction = diff > 0 ? 1 : -1;
//     scrollToProject(currentIndex + direction);
//   }, [currentIndex, scrollToProject]);

//   // Keyboard navigation
//   const handleKeyDown = useCallback((e) => {
//     if (isScrolling.current) return;
    
//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       scrollToProject(Math.min(currentIndex + 1, projects.length - 1));
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       scrollToProject(Math.max(currentIndex - 1, 0));
//     }
//   }, [currentIndex, scrollToProject]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // Performance optimization
//     container.style.willChange = 'transform';

//     const options = { passive: false };
//     window.addEventListener('wheel', handleWheel, options);
//     window.addEventListener('touchstart', handleTouchStart, { passive: true });
//     window.addEventListener('touchmove', handleTouchMove, options);
//     window.addEventListener('touchend', handleTouchEnd, { passive: true });
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('touchstart', handleTouchStart);
//       window.removeEventListener('touchmove', handleTouchMove);
//       window.removeEventListener('touchend', handleTouchEnd);
//       window.removeEventListener('keydown', handleKeyDown);
//       container.style.willChange = 'auto';
//     };
//   }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, handleKeyDown]);

//   // Media controls
//   const nextMedia = useCallback(() => {
//     setMediaIndex((prev) => (prev + 1) % projects[currentIndex].media.length);
//   }, [currentIndex]);

//   const prevMedia = useCallback(() => {
//     setMediaIndex((prev) => (prev - 1 + projects[currentIndex].media.length) % projects[currentIndex].media.length);
//   }, [currentIndex]);

//   // Current project data
//   const currentProject = projects[currentIndex];

// //   return (
// //     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
// //       {/* Fixed Background */}
// //       <div className="fixed inset-0 z-0">
// //         <div
// //           className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.20] scale-105"
// //           style={{ backgroundAttachment: "fixed" }}
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
// //       </div>

// //       <GridOverlay baseSize={100} opacity={0.2} />

// //       <Navbar className="relative z-30" />

// //       {/* Animated Container */}
// //       <div
// //         ref={containerRef}
// //         className="relative z-10 w-full h-full"
// //         style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
// //       >
// //         {projects.map((project, i) => (
// //           <section
// //             key={project.id}
// //             className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 snap-center"
// //           >
// //             {/* Media Section */}
// //             <div className="w-full md:w-1/2 h-[40vh] md:h-[65vh] relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
// //               {project.media[mediaIndex].type === "image" ? (
// //                 <Image
// //                   src={project.media[mediaIndex].src}
// //                   alt={project.title}
// //                   fill
// //                   className="object-cover"
// //                   priority={i === currentIndex}
// //                 />
// //               ) : (
// //                 <video
// //                   src={project.media[mediaIndex].src}
// //                   className="w-full h-full object-cover"
// //                   autoPlay
// //                   muted
// //                   loop
// //                   playsInline
// //                 />
// //               )}

// //               {project.media.length > 1 && (
// //                 <>
// //                   <button
// //                     onClick={prevMedia}
// //                     aria-label="Previous Media"
// //                     className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20 transition-opacity duration-200 hover:opacity-100 opacity-70"
// //                   >
// //                     <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //                     </svg>
// //                   </button>

// //                   <button
// //                     onClick={nextMedia}
// //                     aria-label="Next Media"
// //                     className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 rounded-full p-2 z-20 transition-opacity duration-200 hover:opacity-100 opacity-70"
// //                   >
// //                     <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                     </svg>
// //                   </button>

// //                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
// //                     {project.media.map((_, idx) => (
// //                       <button
// //                         key={idx}
// //                         onClick={() => setMediaIndex(idx)}
// //                         aria-label={`Select media ${idx + 1}`}
// //                         className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white w-3' : 'bg-white/30'}`}
// //                       />
// //                     ))}
// //                   </div>
// //                 </>
// //               )}
// //             </div>

// //             {/* Project Details */}
// //             <ProjectDetail project={project} mediaIndex={mediaIndex} setMediaIndex={setMediaIndex} />
// //           </section>
// //         ))}
// //       </div>

// //       {/* Navigation Dots */}
// //       <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //         {projects.map((_, i) => (
// //           <button
// //             key={i}
// //             onClick={() => scrollToProject(i)}
// //             aria-label={`Go to project ${i + 1}`}
// //             className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'}`}
// //           />
// //         ))}
// //       </div>

// //       {/* Scroll Arrows */}
// //       <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-20">
// //         {currentIndex > 0 && (
// //           <button 
// //             onClick={() => scrollToProject(currentIndex - 1)} 
// //             aria-label="Scroll Up" 
// //             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
// //           >
// //             <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
// //             </svg>
// //           </button>
// //         )}
// //         {currentIndex < projects.length - 1 && (
// //           <button 
// //             onClick={() => scrollToProject(currentIndex + 1)} 
// //             aria-label="Scroll Down" 
// //             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
// //           >
// //             <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //             </svg>
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Background elements (keep existing) */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.20] scale-105" 
//              style={{ backgroundAttachment: "fixed" }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
//       </div>

//       <GridOverlay baseSize={100} opacity={0.2} />
//       <Navbar className="relative z-30" />

//       {/* Main container with device-specific layouts */}
//       <div ref={containerRef} className="relative z-10 w-full h-full">
//         {projects.map((project, i) => (
//           <section key={project.id} className="w-full h-screen">
//             {/* Mobile & Tablet (stacked layout) */}
//             <div className="lg:hidden w-full h-full flex flex-col">
//               {/* Media container - larger on mobile */}
//               <div className="w-full h-[55vh] md:h-[60vh] relative rounded-b-lg overflow-hidden border-b border-white/10">
//                 {project.media[mediaIndex].type === "image" ? (
//                   <Image
//                     src={project.media[mediaIndex].src}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                     priority={i === currentIndex}
//                   />
//                 ) : (
//                   <video
//                     src={project.media[mediaIndex].src}
//                     className="w-full h-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 )}
                
//                 {/* Media controls (positioned absolutely) */}
//                 {project.media.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                     {project.media.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setMediaIndex(idx)}
//                         className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white' : 'bg-white/30'}`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Project details - scrollable area */}
//               <div className="flex-1 overflow-y-auto p-6 md:p-8">
//                 <ProjectDetail project={project} />
//               </div>
//             </div>

//             {/* Desktop (side-by-side layout) */}
//             <div className="hidden lg:flex w-full h-full items-center justify-center p-12 gap-12">
//               <div className="w-1/2 h-[70vh] relative rounded-lg overflow-hidden border border-white/10 shadow-xl">
//                 {project.media[mediaIndex].type === "image" ? (
//                   <Image
//                     src={project.media[mediaIndex].src}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                     priority={i === currentIndex}
//                   />
//                 ) : (
//                   <video
//                     src={project.media[mediaIndex].src}
//                     className="w-full h-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 )}

//                 {project.media.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                     {project.media.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setMediaIndex(idx)}
//                         className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white' : 'bg-white/30'}`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="w-1/2 h-[70vh] flex items-center">
//                 <ProjectDetail project={project} />
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>

//       {/* Navigation dots - positioned differently per device */}
//       <div className="fixed left-1/2 -translate-x-1/2 z-20 
//                      bottom-24 md:bottom-20 lg:bottom-8 flex gap-2">
//         {projects.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => scrollToProject(i)}
//             className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
//           />
//         ))}
//       </div>

//       {/* Scroll arrows - desktop only */}
//       <div className="hidden lg:flex fixed bottom-8 right-8 flex-col gap-3 z-20">
//         {currentIndex > 0 && (
//           <button onClick={() => scrollToProject(currentIndex - 1)} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
//             <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//             </svg>
//           </button>
//         )}
//         {currentIndex < projects.length - 1 && (
//           <button onClick={() => scrollToProject(currentIndex + 1)} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
//             <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


///////

// 'use client';

// import { useState, useRef, useCallback, useEffect } from 'react';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Navbar from '@/components/shared/Navbar';
// import GridOverlay from '@/components/shared/GridOverlay';
// import ProjectDetail from '@/components/shared/ProjectDetail';
// import { projects } from '@/data/projects';

// export default function ProjectShowcase() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mediaIndex, setMediaIndex] = useState(0);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(0);
//   const isScrolling = useRef(false);
//   const wheelDelta = useRef(0);
//   const lastScrollTime = useRef(0);

//   const scrollToProject = useCallback((nextIndex) => {
//     const now = Date.now();
//     if (now - lastScrollTime.current < 800) return;
//     if (
//       isScrolling.current ||
//       nextIndex === currentIndex ||
//       nextIndex < 0 ||
//       nextIndex >= projects.length
//     ) return;

//     lastScrollTime.current = now;
//     isScrolling.current = true;
//     setMediaIndex(0);

//     gsap.to(containerRef.current, {
//       y: -nextIndex * window.innerHeight,
//       duration: 0.8,
//       ease: 'power2.inOut',
//       onComplete: () => {
//         setCurrentIndex(nextIndex);
//         isScrolling.current = false;
//       },
//     });
//   }, [currentIndex]);

//   const handleWheel = useCallback((e) => {
//     if (isScrolling.current) {
//       e.preventDefault();
//       return;
//     }

//     wheelDelta.current += Math.abs(e.deltaY);
//     if (wheelDelta.current < 60) return;

//     const direction = e.deltaY > 0 ? 1 : -1;
//     scrollToProject(currentIndex + direction);
//     wheelDelta.current = 0;
//     e.preventDefault();
//   }, [currentIndex, scrollToProject]);

//   const handleTouchStart = useCallback((e) => {
//     touchStartY.current = e.touches[0].clientY;
//   }, []);

//   const handleTouchEnd = useCallback((e) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY.current - touchEndY;
//     if (Math.abs(diff) < 50 || isScrolling.current) return;

//     const direction = diff > 0 ? 1 : -1;
//     scrollToProject(currentIndex + direction);
//   }, [currentIndex, scrollToProject]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.style.willChange = 'transform';
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     window.addEventListener('touchstart', handleTouchStart, { passive: false });
//     window.addEventListener('touchend', handleTouchEnd, { passive: false });

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('touchstart', handleTouchStart);
//       window.removeEventListener('touchend', handleTouchEnd);
//       container.style.willChange = 'auto';
//     };
//   }, [handleWheel, handleTouchStart, handleTouchEnd]);

//   const currentProject = projects[currentIndex];

//   const nextMedia = () => {
//     setMediaIndex((prev) => (prev + 1) % currentProject.media.length);
//   };

//   const prevMedia = () => {
//     setMediaIndex((prev) => (prev - 1 + currentProject.media.length) % currentProject.media.length);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Background elements */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.20] scale-105" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
//       </div>

//       <GridOverlay baseSize={100} opacity={0.2} />
//       <Navbar className="relative z-30" />

//       {/* Main container with fixed section heights */}
//       <div
//         ref={containerRef}
//         className="relative z-10 w-full h-full"
//         style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
//       >
//         {projects.map((project, i) => (
//           <section
//             key={project.id}
//             className="w-full h-screen flex flex-col lg:flex-row items-center justify-center p-6 md:p-8 lg:p-12 gap-6"
//           >
//             {/* Media section - consistent height across devices */}
//             <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative rounded-lg overflow-hidden border border-white/10">
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
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                   {project.media.map((_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setMediaIndex(idx)}
//                       className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-white' : 'bg-white/30'}`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Project details - consistent scrolling area */}
//             <div className="w-full lg:w-1/2 h-[40vh] lg:h-[70vh] overflow-y-auto">
//               <ProjectDetail project={project} />
//             </div>
//           </section>
//         ))}
//       </div>

//       {/* Navigation dots - fixed position */}
//       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {projects.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => scrollToProject(i)}
//             className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white' : 'bg-white/30'}`}
//           />
//         ))}
//       </div>

//       {/* Scroll arrows - desktop only */}
//       <div className="hidden lg:flex fixed bottom-8 right-8 flex-col gap-3 z-20">
//         {currentIndex > 0 && (
//           <button 
//             onClick={() => scrollToProject(currentIndex - 1)}
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//             </svg>
//           </button>
//         )}
//         {currentIndex < projects.length - 1 && (
//           <button 
//             onClick={() => scrollToProject(currentIndex + 1)}
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

/////
'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
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
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);
  const wheelDelta = useRef(0);

  const scrollToProject = useCallback((nextIndex) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 800) return;
    if (isScrolling.current || nextIndex === currentIndex || nextIndex < 0 || nextIndex >= projects.length) return;

    lastScrollTime.current = now;
    isScrolling.current = true;
    setMediaIndex(0);

    gsap.to(containerRef.current, {
      y: -nextIndex * window.innerHeight,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentIndex(nextIndex);
        isScrolling.current = false;
      },
    });
  }, [currentIndex]);

  const handleWheel = useCallback((e) => {
    if (isScrolling.current) {
      e.preventDefault();
      return;
    }
    wheelDelta.current += Math.abs(e.deltaY);
    if (wheelDelta.current < 60) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    scrollToProject(currentIndex + direction);
    wheelDelta.current = 0;
    e.preventDefault();
  }, [currentIndex, scrollToProject]);

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    if (Math.abs(diff) < 50 || isScrolling.current) return;

    const direction = diff > 0 ? 1 : -1;
    scrollToProject(currentIndex + direction);
  }, [currentIndex, scrollToProject]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.willChange = 'transform';
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      container.style.willChange = 'auto';
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero3.jpeg')] bg-cover bg-center brightness-[.2] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
      </div>

      <GridOverlay baseSize={100} opacity={0.2} />
      <Navbar className="relative z-30" />

      <div ref={containerRef} className="relative z-10 w-full h-full" style={{ transform: `translateY(-${currentIndex * 100}vh)` }}>
        {projects.map((project, i) => (
          <section key={project.id} className="w-full h-screen flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 gap-6">
            <div className="w-full lg:w-3/5 h-[50vh] lg:h-[70vh] relative rounded-lg overflow-hidden border border-white/10">
              {project.media[mediaIndex]?.type === 'image' ? (
                <Image src={project.media[mediaIndex].src} alt={project.title} fill className="object-cover" priority={i === currentIndex} />
              ) : (
                <video src={project.media[mediaIndex].src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              )}

              {project.media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {project.media.map((_, idx) => (
                    <button key={idx} onClick={() => setMediaIndex(idx)} className={`w-2 h-2 rounded-full ${idx === mediaIndex ? 'bg-white' : 'bg-white/30'}`} />
                  ))}
                </div>
              )}
            </div>

            <div className="w-full lg:w-2/5 max-h-[70vh] overflow-y-auto">
              <ProjectDetail project={project} />
            </div>
          </section>
        ))}
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {projects.map((_, i) => (
          <button key={i} onClick={() => scrollToProject(i)} className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/30'}`} />
        ))}
      </div>

      <div className="hidden lg:flex fixed bottom-4 right-8 flex-col gap-3 z-20">
        {currentIndex > 0 && (
          <button onClick={() => scrollToProject(currentIndex - 1)} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
        {currentIndex < projects.length - 1 && (
          <button onClick={() => scrollToProject(currentIndex + 1)} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
