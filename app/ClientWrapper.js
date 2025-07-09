// "use client";

// import { useState, useEffect } from "react";
// import Loader from "../components/Loader";

// export default function ClientWrapper({ children }) {
//   const [loading, setLoading] = useState(true);
//   const [revealDone, setRevealDone] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000); // loader visible 3s
//     return () => clearTimeout(timer);
//   }, []);

//   // Trigger reveal animation after loader removed
//   useEffect(() => {
//     if (!loading) {
//       const revealTimer = setTimeout(() => setRevealDone(true), 1800); // animation duration 1.8s
//       return () => clearTimeout(revealTimer);
//     }
//   }, [loading]);

//   return (
//     <>
//       {loading && <Loader />}

//       {/* Curtain Reveal */}
//       {!loading && !revealDone && <CurtainReveal />}

//       {/* Main Content */}
//       {revealDone && children}
//     </>
//   );
// }

// function CurtainReveal() {
//   return (
//     <>
//       <div className="fixed top-0 left-0 w-full h-1/2 bg-white animate-slideDown z-40" />
//       <div className="fixed bottom-0 left-0 w-full h-1/2 bg-white animate-slideUp z-40" />

//       <style>{`
//         @keyframes slideDown {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-100%); }
//         }
//         @keyframes slideUp {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(100%); }
//         }
//         .animate-slideDown {
//           animation: slideDown 1.8s ease forwards;
//         }
//         .animate-slideUp {
//           animation: slideUp 1.8s ease forwards;
//         }
//       `}</style>
//     </>
//   );
// }

///////
"use client";

import { useState, useEffect } from "react";
import Loader from "../components/Loader";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [revealDone, setRevealDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const revealTimer = setTimeout(() => setRevealDone(true), 1800);
      return () => clearTimeout(revealTimer);
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}

      {!loading && !revealDone && <CurtainReveal />}

      {revealDone && children}
    </>
  );
}

function CurtainReveal() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1/2 bg-white animate-slideDown z-40" />
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-white animate-slideUp z-40" />

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-slideDown {
          animation: slideDown 1.8s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 1.8s ease forwards;
        }
      `}</style>
    </>
  );
}
