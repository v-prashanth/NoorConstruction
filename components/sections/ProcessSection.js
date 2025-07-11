// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GridOverlay from "../shared/GridOverlay";
// import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProcessSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const processRefs = useRef([]);
//   const videoRef = useRef(null);

//   const [activeIndex, setActiveIndex] = useState(0);

//   // const processes = [
//   //   { id: 1, title: "Strategic Planning", description: "BIM modeling and digital twin development", icon: "📐" },
//   //   { id: 2, title: "Precision Procurement", description: "material sourcing and procurement", icon: "📦" },
//   //   { id: 3, title: "Execution", description: "Automated Mivan formwork with IoT monitoring", icon: "🏗️" },
//   //   { id: 4, title: "Handover", description: "Drone inspections with augmented reality walkthroughs", icon: "🔑" },
//   // ];
//   const processes = [
//   { 
//     id: 1, 
//     title: "Consultation & Planning", 
//     description: "We meet with clients to understand their vision, needs, and budget before creating a detailed project plan.", 
//     icon: "📝" 
//   },
//   { 
//     id: 2, 
//     title: "Design & Approvals", 
//     description: "Our team works with architects and engineers to finalize designs and obtain necessary permits.", 
//     icon: "📄" 
//   },
//   { 
//     id: 3, 
//     title: "Construction", 
//     description: "We execute the project with careful supervision, using quality materials, skilled workers, modern tools, and on-site safety.",
//     icon: "🏗️" 
//   },
//   { 
//     id: 4, 
//     title: "Completion & Handover", 
//     description: "We ensure every detail is in place before handing over the completed project to the client.", 
//     icon: "🎉" 
//   },
// ];


//   const nextProcess = () => setActiveIndex(prev => (prev + 1) % processes.length);
//   const prevProcess = () => setActiveIndex(prev => (prev - 1 + processes.length) % processes.length);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(titleRef.current, {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out"
//       });

//       gsap.from(descRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         delay: 0.3,
//         ease: "power2.out"
//       });

//       if (window.innerWidth > 768) {
//         gsap.from(processRefs.current, {
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: "back.out(1.2)",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%"
//           }
//         });
//       }

//       gsap.to(videoRef.current, {
//         scale: 1.05,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true
//         }
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Our Process | Noor Construction Works</title>
//         <meta name="description" content="Explore the modern construction process of Noor Construction Works—innovation, technology, and precision combined." />
//       </Head>

//       <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-black text-white">
//         {/* <video
//           ref={videoRef}
//           className="absolute inset-0 w-full h-full object-cover opacity-15"
//           autoPlay
//           loop
//           muted
//           playsInline
//           src="/videos/process-bg.mp4"
//           // poster="/images/hero-poster.jpg"
//         />
//          */}
//         {/*Prallax/Zoom Layer */}
//           <div
//             className="absolute inset-0 bg-[url('/images/processBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />

//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        

//         <GridOverlay baseSize={100} opacity={0.1} />

//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-500/10 blur-[100px]" />
//         <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]" />

//         <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-36 py-40 lg:py-40">
//           <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Construction Process</span>
//           </h2>

//           <p ref={descRef} className="text-lg md:text-xl text-gray-400 max-w-3xl mb-4">
//             A meticulously engineered workflow combining cutting-edge technology with decades of construction expertise.
//           </p>

//           {/* Desktop Timeline */}
//           <div className="hidden md:block">
//             <div className="relative">
//               <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

//               <div className="grid grid-cols-4 gap-6">
//                 {processes.map((process, i) => (
//                   <div
//                     key={process.id}
//                     ref={el => processRefs.current[i] = el}
//                     className="group"
//                   >
//                     <div className="mx-auto w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm mb-4">
//                       {process.id}
//                     </div>
//                     <div className="p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-xl backdrop-blur-sm group-hover:border-red-500/50 group-hover:bg-gray-900/70">
//                       <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
//                       <h3 className="text-xl font-semibold mb-2 text-white">{process.title}</h3>
//                       <p className="text-gray-400 text-sm md:text-base">{process.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Mobile Slider */}
//           <div className="md:hidden relative">
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500"
//                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//               >
//                 {processes.map((process, i) => (
//                   <div key={process.id} className="w-full flex-shrink-0 px-4">
//                     <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-xl backdrop-blur-sm p-6 mx-auto max-w-sm">
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
//                         {process.id}
//                       </div>
//                       <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
//                       <h3 className="text-xl font-semibold mb-2 text-white">{process.title}</h3>
//                       <p className="text-gray-400 text-sm">{process.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-6 space-x-4">
//               <button onClick={prevProcess} aria-label="Previous Step" className="w-10 h-10 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-white">&larr;</button>
//               <div className="flex space-x-2">
//                 {processes.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActiveIndex(i)}
//                     aria-label={`Go to step ${i + 1}`}
//                     className={`w-2 h-2 rounded-full ${i === activeIndex ? 'bg-red-500' : 'bg-gray-600'}`}
//                   />
//                 ))}
//               </div>
//               <button onClick={nextProcess} aria-label="Next Step" className="w-10 h-10 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-white">&rarr;</button>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


/////

// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GridOverlay from "../shared/GridOverlay";
// import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProcessSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const processRefs = useRef([]);
//   const videoRef = useRef(null);

//   const [activeIndex, setActiveIndex] = useState(0);

//   const processes = [
//     { id: 1, title: "Consultation & Planning", description: "We meet with clients to understand their vision, needs to create a detailed project plan.", icon: "📝" },
//     { id: 2, title: "Design & Approvals", description: "Our team works with architects and engineers to finalize designs and obtain permits that are necessary", icon: "📄" },
//     { id: 3, title: "Construction", description: "We execute the project with careful supervision, using quality materials, skilled workers, modern tools, and on-site safety.", icon: "🏗️" },
//     { id: 4, title: "Completion & Handover", description: "We ensure every detail is in place before handing over the completed project to the client.", icon: "🎉" },
//   ];

//   const nextProcess = () => setActiveIndex(prev => (prev + 1) % processes.length);
//   const prevProcess = () => setActiveIndex(prev => (prev - 1 + processes.length) % processes.length);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(titleRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out" });
//       gsap.from(descRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out" });

//       if (window.innerWidth > 768) {
//         gsap.from(processRefs.current, {
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: "back.out(1.2)",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%"
//           }
//         });
//       }

//       gsap.to(videoRef.current, {
//         scale: 1.05,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true
//         }
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Our Process | Noor Construction Works</title>
//         <meta name="description" content="Explore the modern construction process of Noor Construction Works—innovation, technology, and precision combined." />
//       </Head>

//       <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-black text-white">

//         <div className="absolute inset-0 bg-[url('/images/processBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]" style={{ backgroundAttachment: 'fixed' }} />
//         <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//         <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />

//         <GridOverlay baseSize={100} opacity={0.1} />

//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-500/10 blur-[100px]" />
//         <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]" />

//         <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 py-50 md:py-32 lg:py-40">

//           <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
//             <span className="text-white">Our </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Construction Process</span>
//           </h2>

//           <p ref={descRef} className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8">
//             A meticulously engineered workflow combining cutting-edge technology with decades of construction expertise.
//           </p>

//           <div className="hidden md:block">
//             <div className="relative">
//               <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {processes.map((process, i) => (
//                   <div key={process.id} ref={el => processRefs.current[i] = el} className="group">
//                     <div className="mx-auto w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-base mb-4">
//                       {process.id}
//                     </div>
//                     <div className="p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl backdrop-blur-sm group-hover:border-red-500/50 group-hover:bg-gray-900/70 transition-colors duration-300">
//                       <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
//                       <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">{process.title}</h3>
//                       <p className="text-gray-400 text-sm md:text-base">{process.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="md:hidden relative">
//             <div className="overflow-hidden">
//               <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//                 {processes.map((process, i) => (
//                   <div key={process.id} className="w-full flex-shrink-0 px-4">
//                     <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl backdrop-blur-sm p-6 mx-auto max-w-xs">
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
//                         {process.id}
//                       </div>
//                       <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
//                       <h3 className="text-lg font-semibold mb-2 text-white">{process.title}</h3>
//                       <p className="text-gray-400 text-sm">{process.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center justify-center mt-4 space-x-3">
//               <button onClick={prevProcess} aria-label="Previous Step" className="w-8 h-8 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-white text-lg">&larr;</button>
//               <div className="flex space-x-2">
//                 {processes.map((_, i) => (
//                   <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Go to step ${i + 1}`} className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-red-500' : 'bg-gray-600'}`} />
//                 ))}
//               </div>
//               <button onClick={nextProcess} aria-label="Next Step" className="w-8 h-8 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-white text-lg">&rarr;</button>
//             </div>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

//////////

// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GridOverlay from "../shared/GridOverlay";
// import SectionWrapper from "../shared/SectionWrapper";
// import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProcessSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const processRefs = useRef([]);
//   const videoRef = useRef(null);

//   const [activeIndex, setActiveIndex] = useState(0);

//   const processes = [
//     {
//       id: 1,
//       title: "Consultation & Planning",
//       description: "We meet with clients to understand their vision, needs to create a detailed project plan.",
//       icon: "📝"
//     },
//     {
//       id: 2,
//       title: "Design & Approvals",
//       description: "Our team works with architects and engineers to finalize designs and obtain permits that are necessary",
//       icon: "📄"
//     },
//     {
//       id: 3,
//       title: "Construction",
//       description: "We execute the project with careful supervision, using quality materials, skilled workers, modern tools, and on-site safety.",
//       icon: "🏗️"
//     },
//     {
//       id: 4,
//       title: "Completion & Handover",
//       description: "We ensure every detail is in place before handing over the completed project to the client.",
//       icon: "🎉"
//     },
//   ];

//   const nextProcess = () => setActiveIndex(prev => (prev + 1) % processes.length);
//   const prevProcess = () => setActiveIndex(prev => (prev - 1 + processes.length) % processes.length);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(titleRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out" });
//       gsap.from(descRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out" });

//       if (window.innerWidth > 768) {
//         gsap.from(processRefs.current, {
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: "back.out(1.2)",
//           scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
//         });
//       }

//       gsap.to(videoRef.current, {
//         scale: 1.05,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true
//         }
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Our Process | Noor Construction Works</title>
//         <meta name="description" content="Explore the modern construction process of Noor Construction Works—innovation, technology, and precision combined." />
//       </Head>

//       <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-black text-white">
//         <div className="absolute inset-0 bg-[url('/images/processBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]" style={{ backgroundAttachment: 'fixed' }} />
//         <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//         <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />

//         <GridOverlay baseSize={100} opacity={0.1} />

//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
//         <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]" />

//         <SectionWrapper>
//           {/* <div className="flex flex-col justify-center ml-4 sm:ml-8 md:ml-16 lg:ml-26"> */}
//           <div
//   ref={sectionRef}
//   className="relative z-20 h-full flex flex-col justify-center items-start text-left max-w-6xl w-full px-[clamp(16px,5vw,80px)]"
// >
//             <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-left">
//               <span className="text-white">Our </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E79F]">Construction Process</span>
//             </h2>

//             <p ref={descRef} className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8 text-left">
//               A meticulously engineered workflow combining cutting-edge technology with decades of construction expertise.
//             </p>

//             {/* Desktop Timeline */}
//             <div className="hidden md:block">
//               <div className="relative">
//                 <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {processes.map((process, i) => (
//                     <div key={process.id} ref={el => processRefs.current[i] = el} className="group">
//                       <div className="mx-auto w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold mb-4">{process.id}</div>
//                       <div className="p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl backdrop-blur-sm group-hover:border-[#D4AF37]/50 group-hover:bg-gray-900/70 transition-colors duration-300">
//                         <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
//                         <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">{process.title}</h3>
//                         <p className="text-gray-400 text-sm md:text-base">{process.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Slider */}
//             <div className="md:hidden relative mt-2">
//               <div className="overflow-hidden">
//                 <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//                   {processes.map((process, i) => (
//                     <div key={process.id} className="w-full flex-shrink-0 px-4">
//                       <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl backdrop-blur-sm p-6 mx-auto max-w-xs">
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-sm">
//                           {process.id}
//                         </div>
//                         <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
//                         <h3 className="text-lg font-semibold mb-2 text-white">{process.title}</h3>
//                         <p className="text-gray-400 text-sm">{process.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex items-center justify-center mt-4 space-x-3">
//                 <button onClick={prevProcess} aria-label="Previous Step" className="w-8 h-8 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-white text-lg">&larr;</button>
//                 <div className="flex space-x-2">
//                   {processes.map((_, i) => (
//                     <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Go to step ${i + 1}`} className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-[#D4AF37]' : 'bg-gray-600'}`} />
//                   ))}
//                 </div>
//                 <button onClick={nextProcess} aria-label="Next Step" className="w-8 h-8 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-white text-lg">&rarr;</button>
//               </div>
//             </div>

//           </div>
//         </SectionWrapper>
//       </section>
//     </>
//   );
// }


//////////
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridOverlay from "../shared/GridOverlay";
import SectionWrapper from "../shared/SectionWrapper";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const processRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const processes = [
    {
      id: 1,
      title: "Consultation & Planning",
      description: "We meet with clients to understand their vision, needs to create a detailed project plan.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Design & Approvals",
      description: "Our team works with architects and engineers to finalize designs and obtain permits that are necessary",
      icon: "📄",
    },
    {
      id: 3,
      title: "Construction",
      description: "We execute the project with careful supervision, using quality materials, skilled workers, modern tools, and on-site safety.",
      icon: "🏗️",
    },
    {
      id: 4,
      title: "Completion & Handover",
      description: "We ensure every detail is in place before handing over the completed project to the client.",
      icon: "🎉",
    },
  ];

  const nextProcess = () => setActiveIndex(prev => (prev + 1) % processes.length);
  const prevProcess = () => setActiveIndex(prev => (prev - 1 + processes.length) % processes.length);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(descRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out" });

      if (window.innerWidth > 768) {
        gsap.from(processRefs.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Our Process | Noor Construction Works</title>
        <meta name="description" content="Explore the modern construction process of Noor Construction Works—innovation, technology, and precision combined." />
      </Head>

      <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('/images/processBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]" style={{ backgroundAttachment: 'fixed' }} />
        <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />

        <GridOverlay baseSize={100} opacity={0.1} />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px]" />

        <SectionWrapper>
          {/* <div className="relative z-20 flex flex-col justify-center items-start text-left max-w-6xl w-full"> */}
          <div ref={sectionRef} className="relative z-20 flex flex-col justify-center items-start text-left max-w-4xl mx-auto min-h-[60vh]">
            <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E79F]">Construction Process</span>
            </h2>

            <p ref={descRef} className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8">
              A meticulously engineered workflow combining cutting-edge technology with decades of construction expertise.
            </p>

            {/* Desktop Timeline */}
            <div className="hidden md:block w-full">
              <div className="relative">
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processes.map((process, i) => (
                    <div key={process.id} ref={el => processRefs.current[i] = el} className="group">
                      <div className="mx-auto w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold mb-4">{process.id}</div>
                      <div className="p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl backdrop-blur-sm group-hover:border-[#D4AF37]/50 group-hover:bg-gray-900/70 transition-colors duration-300">
                        <div className="text-3xl mb-4 opacity-80">{process.icon}</div>
                        <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">{process.title}</h3>
                        <p className="text-gray-400 text-sm md:text-base">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Slider with Snap Scrolling */}
            <div className="md:hidden mt-4 relative w-full">
              <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4 no-scrollbar px-2">
                {processes.map((process, i) => (
                  <div key={process.id} className="snap-center min-w-[85%] bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl backdrop-blur-sm p-6 mx-auto">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold text-sm mb-3 mx-auto">{process.id}</div>
                    <div className="text-3xl mb-4 text-center">{process.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-center text-white">{process.title}</h3>
                    <p className="text-gray-400 text-sm text-center">{process.description}</p>
                  </div>
                ))}
              </div>

              {/* <div className="flex items-center justify-center gap-4 mt-2">
                <button onClick={prevProcess} aria-label="Previous" className="p-2 border border-gray-600 rounded-full hover:border-[#D4AF37] transition">&larr;</button>
                <div className="flex gap-2">
                  {processes.map((_, i) => (
                    <button key={i} onClick={() => setActiveIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? 'bg-[#D4AF37]' : 'bg-gray-600'}`} />
                  ))}
                </div>
                <button onClick={nextProcess} aria-label="Next" className="p-2 border border-gray-600 rounded-full hover:border-[#D4AF37] transition">&rarr;</button>
              </div> */}
            </div>

          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
