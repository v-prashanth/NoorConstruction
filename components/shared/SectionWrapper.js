export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`w-full pt-28 md:pt-32 pb-20 md:pb-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}
