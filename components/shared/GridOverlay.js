"use client";

import { useState, useEffect } from "react";

export default function GridOverlay({ baseSize = 80, opacity = 0.15, lineColor = "rgba(255,255,255,0.1)", dotColor = "rgba(255,80,80,0.5)" }) {
  const [gridSize, setGridSize] = useState(baseSize);

  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setGridSize(baseSize * 0.6);   // Mobile → Smaller grid
      } else if (width < 1024) {
        setGridSize(baseSize * 0.8);   // Tablet → Medium grid
      } else {
        setGridSize(baseSize);         // Desktop → Base grid
      }
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, [baseSize]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="gridPattern"
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
            stroke={lineColor}
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
          <circle cx={gridSize * 0.25} cy={gridSize * 0.25} r="1.2" fill={dotColor} />
          <circle cx={gridSize * 0.75} cy={gridSize * 0.75} r="1.2" fill={dotColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
    </svg>
  );
}
