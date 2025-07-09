// /app/sitemap/page.jsx
import Link from 'next/link';

export default function Sitemap() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Sitemap</h1>
      <ul className="space-y-3 text-gray-300">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/services">Services</Link></li>
        {/* <li><Link href="/about">About</Link></li> */}
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms of Service</Link></li>
      </ul>
    </div>
  );
}
