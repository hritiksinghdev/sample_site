import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ["Women's", "Men's", 'Wedding Customs', 'Our Story'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-cream/95 backdrop-blur-md ${
          scrolled ? 'shadow-[0_1px_0_0_#E8DED3]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="House of Rhea" className="h-10 lg:h-12 w-auto" />
              <div className="hidden sm:block">
                <span className="font-heading text-lg lg:text-xl tracking-[0.06em] text-primary leading-none block">
                  HOUSE OF RHEA
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[0.8rem] tracking-[0.15em] uppercase text-secondary hover:text-accent transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className="text-primary hover:text-accent transition-colors duration-300" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <button className="hidden lg:block text-primary hover:text-accent transition-colors duration-300" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <button className="text-primary hover:text-accent transition-colors duration-300 relative" aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-primary text-[9px] rounded-full flex items-center justify-center font-medium">
                  2
                </span>
              </button>

              <button
                className="lg:hidden text-primary ml-1"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h18M3 16h18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-cream"
          >
            <div className="px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="House of Rhea" className="h-9 w-auto" />
                <span className="font-heading text-lg tracking-[0.06em] text-primary">HOUSE OF RHEA</span>
              </div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center gap-8 pt-20"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                  className="font-heading text-3xl text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
