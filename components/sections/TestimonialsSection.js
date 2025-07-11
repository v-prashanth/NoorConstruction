// "use client";

// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import dynamic from "next/dynamic";
// import GridOverlay from "../shared/GridOverlay";
// import { testimonials } from "@/data/testimonials";

// const StarIcon = dynamic(() => import('@heroicons/react/24/solid/StarIcon'), {
//   ssr: false,
//   loading: () => <div className="w-5 h-5" />,
// });

// gsap.registerPlugin(ScrollTrigger);

// export default function TestimonialsSection() {
//   const [current, setCurrent] = useState(0);
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const contentRef = useRef(null);

//   const transitionTestimonial = (newIndex) => {
//     if (newIndex === current) return;
//     const direction = newIndex > current ? 'next' : 'prev';

//     gsap.to(contentRef.current, {
//       opacity: 0,
//       x: direction === 'next' ? -40 : 40,
//       duration: 0.5,
//       ease: "power2.inOut",
//       onComplete: () => {
//         setCurrent(newIndex);
//         gsap.fromTo(contentRef.current, { opacity: 0, x: direction === 'next' ? 40 : -40 }, { opacity: 1, x: 0, duration: 0.7 });
//       }
//     });
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(headingRef.current.children, {
//         y: 50,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true
//         },
//       });

//       gsap.from(contentRef.current, {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           once: true
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const { name, role, feedback, rating, company } = testimonials[current];

//   return (
//     <section ref={sectionRef} className="relative w-full h-screen bg-black text-white overflow-hidden snap-start" aria-label="Testimonials Section">
//       {/* <div className="absolute inset-0 opacity-30" aria-hidden="true">
//         <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover">
//           <source src="/videos/T3.webm" type="video/webm" />
//           <source src="/videos/T3.mp4" type="video/mp4" />
//         </video>
//       </div> */}
//         <div
//             className="absolute inset-0 bg-[url('/images/processBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]"
//             style={{ backgroundAttachment: 'fixed' }}
//           />

//           <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
//           <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
//       <GridOverlay baseSize={100} opacity={0.1} />

//       <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto">
//         <div ref={headingRef} className="mb-8 md:mb-12 max-w-3xl">
//           <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-left">
//             <span className="text-white">Client </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Testimonials</span>
//           </h2>
//           <p className="text-sm md:text-base text-gray-400 max-w-lg leading-relaxed text-left">
//             Hear what our client&apos;s say about our work.
//           </p>
//         </div>

//         <div ref={contentRef} className="bg-black/50 p-6 sm:p-8 rounded-lg border border-white/10 backdrop-blur-sm max-w-3xl">
//           <blockquote className="text-base sm:text-lg md:text-xl italic mb-6 leading-relaxed text-left">
//             “{feedback}”
//           </blockquote>

//           <div className="flex flex-col text-left">
//             <div className="text-red-300 font-semibold text-base sm:text-lg">
//               — {name}, <span className="text-red-200 font-normal">{role}</span>
//             </div>
//             <div className="text-white/70 text-xs sm:text-sm mt-1">{company}</div>
//             <div className="flex mt-3" aria-label={`Rating: ${rating} out of 5`}>
//               {[...Array(5)].map((_, i) => (
//                 <StarIcon key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`} />
//               ))}
//             </div>
//           </div>

//           <div className="mt-6 sm:mt-8 flex justify-start space-x-6">
//             <button 
//               onClick={() => transitionTestimonial((current - 1 + testimonials.length) % testimonials.length)}
//               className="group relative px-3 py-1 text-red-500 text-sm font-medium"
//               aria-label="Previous testimonial"
//             >
//               <span className="relative z-10">← Previous</span>
//               <span className="absolute inset-0 bg-red-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
//             </button>
//             <button 
//               onClick={() => transitionTestimonial((current + 1) % testimonials.length)}
//               className="group relative px-3 py-1 text-red-500 text-sm font-medium"
//               aria-label="Next testimonial"
//             >
//               <span className="relative z-10">Next →</span>
//               <span className="absolute inset-0 bg-red-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>

//         <div className="mt-6 absolute bottom-6 left-0 right-0 flex justify-center">
//           <div className="flex space-x-3">
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => transitionTestimonial(i)}
//                 aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
//                 className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-red-500 scale-125' : 'bg-white/30 hover:bg-white/50'}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






//////////

"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import GridOverlay from "../shared/GridOverlay";
import SectionWrapper from "../shared/SectionWrapper";
import { testimonials } from "@/data/testimonials";

const StarIcon = dynamic(() => import("@heroicons/react/24/solid/StarIcon"), {
  ssr: false,
  loading: () => <div className="w-5 h-5" />,
});

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const transitionTestimonial = (newIndex) => {
    if (newIndex === current) return;
    const direction = newIndex > current ? 'next' : 'prev';

    gsap.to(contentRef.current, {
      opacity: 0,
      x: direction === 'next' ? -40 : 40,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrent(newIndex);
        gsap.fromTo(contentRef.current, { opacity: 0, x: direction === 'next' ? 40 : -40 }, { opacity: 1, x: 0, duration: 0.7 });
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        },
      });

      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [current]);

  const { name, role, feedback, rating, company } = testimonials[current];

  return (
    <SectionWrapper className="relative bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-[url('/images/processBg.jpeg')] bg-cover bg-center brightness-[0.2] scale-105 animate-[floatImage_12s_ease-in-out_infinite]" style={{ backgroundAttachment: 'fixed' }} />
      <div className="absolute inset-0 z-10 bg-black/50 animate-[fadeOverlay_10s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[url('/images/547.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <GridOverlay baseSize={100} opacity={0.1} />

      <div ref={sectionRef} className="relative z-20 flex flex-col justify-center items-start text-left max-w-4xl mx-auto min-h-[50vh]">

        <div ref={headingRef} className="mb-8 md:mb-12">
          {/* <p className="uppercase tracking-wider text-xs md:text-sm text-[#D4AF37] mb-2">Testimonials</p> */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Client </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#e5c96f]">Testimonials</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-lg leading-relaxed">
            Hear what our clients say about our commitment to quality, precision, and excellence.
          </p>
        </div>

        <div ref={contentRef} className="bg-black/50 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-lg w-full">
          <blockquote className="text-base sm:text-lg md:text-xl italic mb-6 leading-relaxed">
            “{feedback}”
          </blockquote>

          <div className="flex flex-col">
            <div className="text-[#D4AF37] font-semibold text-base sm:text-lg">
              — {name}, <span className="text-white/80 font-normal">{role}</span>
            </div>
            <div className="text-white/60 text-xs sm:text-sm mt-1">{company}</div>
            <div className="flex mt-3" aria-label={`Rating: ${rating} out of 5`}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`} />
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex space-x-6">
            <button onClick={() => transitionTestimonial((current - 1 + testimonials.length) % testimonials.length)} className="group relative px-3 py-1 text-[#D4AF37] text-sm font-medium">
              <span className="relative z-10">← Previous</span>
              <span className="absolute inset-0 bg-[#D4AF37]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>

            <button onClick={() => transitionTestimonial((current + 1) % testimonials.length)} className="group relative px-3 py-1 text-[#D4AF37] text-sm font-medium">
              <span className="relative z-10">Next →</span>
              <span className="absolute inset-0 bg-[#D4AF37]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="flex space-x-3">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => transitionTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-[#D4AF37] scale-125' : 'bg-white/30 hover:bg-white/50'}`} />
              ))}
            </div>
          </div>

        </div>

      </div>

    </SectionWrapper>
  );
}
