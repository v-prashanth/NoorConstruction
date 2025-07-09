
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Noor Construction Works</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future with precision and innovation in construction and architecture.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Quick Links">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              {/* <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li> */}
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="space-y-4" aria-label="Services">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Mivan Shuttering</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Tunnel Formwork</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Ply Shuttering</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Tiling</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Plastering</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Total Finishing Works</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic space-y-4 text-gray-300">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h4>
            <p>#4-164/139/A/1, Road Number 18,<br />Near Rock Church, Omnagar Colony,<br />Kismatpur, Bandlaguda Jagir</p>
            <p>Hyderabad – 500030, TS, India</p>
            <p><a href="mailto:ahmednoorshaik@gmail.com" className="hover:text-white transition">ahmednoorshaik@gmail.com</a></p>
            <p><a href="tel:+918639614138" className="hover:text-white transition">+91 8639614138</a></p>
            <p><a href="tel:+918790240203" className="hover:text-white transition">+91 8790240203</a></p>
          </address>

        </div>

        {/* Divider with Logo */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-sm text-gray-400 flex items-center">
              <Image 
                src="/logo.png" 
                alt="Noor Construction Works Logo"
                width={24}
                height={24}
                priority
                className="mr-2"
              />
              Noor Construction Works
            </span>
          </div>
        </div>

        {/* Bottom Footer + Developed by */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Noor Construction Works. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition">Sitemap</Link>
          </div>
          <div className="mt-4 md:mt-0 text-gray-600 text-xs">
            Developed by <a href="https:prashanthv.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">Prashanth V</a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Noor Construction Works",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+918639614138",
              "contactType": "customer service",
              "areaServed": "IN"
            }],
            "sameAs": [
              "https://linkedin.com",
              "https://instagram.com",
              "https://twitter.com"
            ]
          }),
        }}
      />
    </footer>
  );
}
