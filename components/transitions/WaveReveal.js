// components/transitions/WaveReveal.js
export default function WaveReveal({ fill = "#f4f4f4", className = "" }) {
  return (
    <div className={`w-full h-32 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,112C672,107,768,149,864,181.3C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
