
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function MamanNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white uppercase tracking-widest text-sm font-semibold">
          <Image src="/logo.png" alt="Noor Construction Works Logo" width={28} height={28} className="object-contain" />
          <span className="text-sm">Noor Construction Works</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={idx}
                href={link.href}
                className={`text-white uppercase text-xs tracking-widest relative group ${isActive ? 'font-semibold' : ''}`}
              >
                <span>{link.label}</span>
                <span
                  className={`block h-0.5 bg-red-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>
            );
          })}
        </nav>

        <button className="md:hidden text-white ml-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 z-40"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white p-3 rounded hover:bg-white/10 transition duration-300"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-white uppercase text-2xl tracking-widest ${isActive ? 'underline underline-offset-8 decoration-red-500' : 'hover:text-red-500'} transition duration-300`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}