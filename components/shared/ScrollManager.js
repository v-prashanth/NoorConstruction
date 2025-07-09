// // 'use client';

// // import { useEffect, useRef, useState } from 'react';
// // import gsap from 'gsap';

// // export default function ScrollManager({ children }) {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [prevIndex, setPrevIndex] = useState(0);
// //   const isScrolling = useRef(false);
// //   const touchStartY = useRef(0);
// //   const containerRef = useRef(null);
// //   const sectionRefs = useRef([]);

// //   const sections = Array.isArray(children) ? children : [children];

// //   const SCROLL_COOLDOWN = 900;  // Slightly faster but smooth
// //   const WHEEL_THRESHOLD = 10;
// //   const TOUCH_THRESHOLD = 20;

// //   const scrollToSection = (index) => {
// //     if (isScrolling.current || index < 0 || index >= sections.length) return;

// //     const current = sectionRefs.current[activeIndex];
// //     const next = sectionRefs.current[index];

// //     if (!current || !next) return;

// //     isScrolling.current = true;
// //     setPrevIndex(activeIndex);
// //     setActiveIndex(index);

// //     gsap.killTweensOf([current, next]);

// //     gsap.to(current, {
// //       opacity: 0,
// //       scale: 0.98,
// //       duration: 0.5,
// //       ease: 'power2.out',
// //     });

// //     gsap.fromTo(next, 
// //       { opacity: 0, scale: 0.98 }, 
// //       { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
// //     );

// //     setTimeout(() => {
// //       isScrolling.current = false;
// //     }, SCROLL_COOLDOWN);
// //   };

// //   const handleWheel = (e) => {
// //     if (isScrolling.current) { e.preventDefault(); return; }
// //     if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
// //     e.preventDefault();
// //     scrollToSection(activeIndex + (e.deltaY > 0 ? 1 : -1));
// //   };

// //   const handleTouchStart = (e) => {
// //     touchStartY.current = e.touches[0].clientY;
// //   };

// //   const handleTouchEnd = (e) => {
// //     if (isScrolling.current) return;
// //     const deltaY = touchStartY.current - e.changedTouches[0].clientY;
// //     if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;
// //     scrollToSection(activeIndex + (deltaY > 0 ? 1 : -1));
// //   };

// //   const handleKeyDown = (e) => {
// //     if (isScrolling.current) return;
// //     if (['ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); scrollToSection(activeIndex + 1); }
// //     if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); scrollToSection(activeIndex - 1); }
// //     if (e.key === 'Home') { e.preventDefault(); scrollToSection(0); }
// //     if (e.key === 'End') { e.preventDefault(); scrollToSection(sections.length - 1); }
// //   };

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     container.addEventListener('wheel', handleWheel, { passive: false });
// //     container.addEventListener('touchstart', handleTouchStart, { passive: true });
// //     container.addEventListener('touchend', handleTouchEnd, { passive: true });
// //     window.addEventListener('keydown', handleKeyDown);

// //     return () => {
// //       container.removeEventListener('wheel', handleWheel);
// //       container.removeEventListener('touchstart', handleTouchStart);
// //       container.removeEventListener('touchend', handleTouchEnd);
// //       window.removeEventListener('keydown', handleKeyDown);
// //     };
// //   }, [activeIndex]);

// //   const sectionStyle = {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     width: '100%',
// //     height: '100%',
// //     willChange: 'transform, opacity',
// //   };

// //   return (
// //     <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black text-white">
// //       <div className="fixed z-50 bottom-4 right-4 flex items-center gap-3">
// //         <span className="text-xs md:text-sm tracking-wide">
// //           {String(activeIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
// //         </span>
// //         <button
// //           onClick={() => scrollToSection((activeIndex + 1) % sections.length)}
// //           className="w-8 h-8 grid place-items-center rounded-full bg-black/40 hover:bg-red-600 transition"
// //           aria-label="Next section"
// //         >
// //           ↓
// //         </button>
// //       </div>

// //       <div className="relative w-full h-full">
// //         {sections.map((section, i) => (
// //           <div
// //             key={i}
// //             ref={(el) => (sectionRefs.current[i] = el)}
// //             style={{
// //               ...sectionStyle,
// //               opacity: i === activeIndex ? 1 : 0,
// //               pointerEvents: i === activeIndex ? 'auto' : 'none',
// //               zIndex: i === activeIndex ? 2 : 1,
// //             }}
// //           >
// //             {section}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// /////'use client';

// import { useEffect, useRef, useState, useCallback } from 'react';
// import gsap from 'gsap';

// export default function ScrollManager({ children }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const isScrolling = useRef(false);
//   const touchStartY = useRef(0);
//   const containerRef = useRef(null);
//   const sectionRefs = useRef([]);

//   const sections = Array.isArray(children) ? children : [children];

//   const SCROLL_COOLDOWN = 900;  // Slightly faster but smooth
//   const WHEEL_THRESHOLD = 10;
//   const TOUCH_THRESHOLD = 20;

//   const scrollToSection = useCallback((index) => {
//     if (isScrolling.current || index < 0 || index >= sections.length) return;

//     const current = sectionRefs.current[activeIndex];
//     const next = sectionRefs.current[index];

//     if (!current || !next) return;

//     isScrolling.current = true;
//     setPrevIndex(activeIndex);
//     setActiveIndex(index);

//     gsap.killTweensOf([current, next]);

//     gsap.to(current, {
//       opacity: 0,
//       scale: 0.98,
//       duration: 0.5,
//       ease: 'power2.out',
//     });

//     gsap.fromTo(next, 
//       { opacity: 0, scale: 0.98 }, 
//       { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
//     );

//     setTimeout(() => {
//       isScrolling.current = false;
//     }, SCROLL_COOLDOWN);
//   }, [activeIndex, sections.length]);

//   const handleWheel = useCallback((e) => {
//     if (isScrolling.current) { e.preventDefault(); return; }
//     if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
//     e.preventDefault();
//     scrollToSection(activeIndex + (e.deltaY > 0 ? 1 : -1));
//   }, [activeIndex, scrollToSection]);

//   const handleTouchStart = useCallback((e) => {
//     touchStartY.current = e.touches[0].clientY;
//   }, []);

//   const handleTouchEnd = useCallback((e) => {
//     if (isScrolling.current) return;
//     const deltaY = touchStartY.current - e.changedTouches[0].clientY;
//     if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;
//     scrollToSection(activeIndex + (deltaY > 0 ? 1 : -1));
//   }, [activeIndex, scrollToSection]);

//   const handleKeyDown = useCallback((e) => {
//     if (isScrolling.current) return;
//     if (['ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); scrollToSection(activeIndex + 1); }
//     if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); scrollToSection(activeIndex - 1); }
//     if (e.key === 'Home') { e.preventDefault(); scrollToSection(0); }
//     if (e.key === 'End') { e.preventDefault(); scrollToSection(sections.length - 1); }
//   }, [activeIndex, scrollToSection, sections.length]);

//   useEffect(() => {
//     const container = containerRef.current;
//     container.addEventListener('wheel', handleWheel, { passive: false });
//     container.addEventListener('touchstart', handleTouchStart, { passive: true });
//     container.addEventListener('touchend', handleTouchEnd, { passive: true });
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       container.removeEventListener('wheel', handleWheel);
//       container.removeEventListener('touchstart', handleTouchStart);
//       container.removeEventListener('touchend', handleTouchEnd);
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

//   const sectionStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     willChange: 'transform, opacity',
//   };

//   return (
//     <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black text-white">
//       <div className="fixed z-50 bottom-4 right-4 flex items-center gap-3">
//         <span className="text-xs md:text-sm tracking-wide">
//           {String(activeIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
//         </span>
//         <button
//           onClick={() => scrollToSection((activeIndex + 1) % sections.length)}
//           className="w-8 h-8 grid place-items-center rounded-full bg-black/40 hover:bg-red-600 transition"
//           aria-label="Next section"
//         >
//           ↓
//         </button>
//       </div>

//       <div className="relative w-full h-full">
//         {sections.map((section, i) => (
//           <div
//             key={i}
//             ref={(el) => (sectionRefs.current[i] = el)}
//             style={{
//               ...sectionStyle,
//               opacity: i === activeIndex ? 1 : 0,
//               pointerEvents: i === activeIndex ? 'auto' : 'none',
//               zIndex: i === activeIndex ? 2 : 1,
//             }}
//           >
//             {section}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//////////////
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

export default function ScrollManager({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections = Array.isArray(children) ? children : [children];

  const SCROLL_COOLDOWN = 900;
  const WHEEL_THRESHOLD = 10;
  const TOUCH_THRESHOLD = 20;

  const scrollToSection = useCallback((index) => {
    if (isScrolling.current || index < 0 || index >= sections.length) return;

    const current = sectionRefs.current[activeIndex];
    const next = sectionRefs.current[index];

    if (!current || !next) return;

    isScrolling.current = true;
    setPrevIndex(activeIndex);
    setActiveIndex(index);

    gsap.killTweensOf([current, next]);

    gsap.to(current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.fromTo(next, 
      { opacity: 0, scale: 0.98 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    );

    setTimeout(() => {
      isScrolling.current = false;
    }, SCROLL_COOLDOWN);
  }, [activeIndex, sections.length]);

  const handleWheel = useCallback((e) => {
    if (isScrolling.current) { e.preventDefault(); return; }
    if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
    e.preventDefault();
    scrollToSection(activeIndex + (e.deltaY > 0 ? 1 : -1));
  }, [activeIndex, scrollToSection]);

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (isScrolling.current) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;
    scrollToSection(activeIndex + (deltaY > 0 ? 1 : -1));
  }, [activeIndex, scrollToSection]);

  const handleKeyDown = useCallback((e) => {
    if (isScrolling.current) return;
    if (['ArrowDown', 'PageDown'].includes(e.key)) { 
      e.preventDefault(); 
      scrollToSection(activeIndex + 1); 
    }
    if (['ArrowUp', 'PageUp'].includes(e.key)) { 
      e.preventDefault(); 
      scrollToSection(activeIndex - 1); 
    }
    if (e.key === 'Home') { 
      e.preventDefault(); 
      scrollToSection(0); 
    }
    if (e.key === 'End') { 
      e.preventDefault(); 
      scrollToSection(sections.length - 1); 
    }
  }, [activeIndex, scrollToSection, sections.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd, handleKeyDown]);

  const sectionStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    willChange: 'transform, opacity',
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div className="fixed z-50 bottom-4 right-4 flex items-center gap-3">
        <span className="text-xs md:text-sm tracking-wide">
          {String(activeIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => scrollToSection((activeIndex + 1) % sections.length)}
          className="w-8 h-8 grid place-items-center rounded-full bg-black/40 hover:bg-red-600 transition"
          aria-label="Next section"
        >
          ↓
        </button>
      </div>

      <div className="relative w-full h-full">
        {sections.map((section, i) => (
          <div
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            style={{
              ...sectionStyle,
              opacity: i === activeIndex ? 1 : 0,
              pointerEvents: i === activeIndex ? 'auto' : 'none',
              zIndex: i === activeIndex ? 2 : 1,
            }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}