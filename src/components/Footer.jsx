import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerLinks = {
  Shop: ["Women's", "Men's", 'New Arrivals', 'Best Sellers', 'Wedding Customs'],
  Company: ['Our Story', 'Sustainability', 'Careers', 'Press'],
  Support: ['Contact Us', 'Shipping & Returns', 'FAQ', 'Size Guide'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-cream pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          className="py-14 lg:py-28 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl mx-auto text-center">
            <span className="text-[0.55rem] lg:text-[0.6rem] tracking-[0.35em] uppercase text-gold/70 font-medium">
              Stay in the loop
            </span>
            <h3 className="font-heading text-xl lg:text-3xl text-white mt-2 lg:mt-3 mb-3 lg:mb-4">
              Join the Rhea Family
            </h3>
            <p className="text-white/50 text-xs lg:text-sm font-light mb-6 lg:mb-8">
              Be the first to know about new drops, exclusive offers, and behind-the-scenes stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/15 rounded-full lg:rounded-sm px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button className="bg-gold hover:bg-gold/80 text-primary text-[0.7rem] tracking-[0.18em] uppercase px-7 py-3 rounded-full lg:rounded-sm transition-colors duration-300 font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile: simplified accordion-style footer */}
        <div className="lg:hidden py-10">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.svg" alt="House of Rhea" className="h-8 w-auto invert brightness-200" />
            <span className="font-heading text-base tracking-[0.06em] text-white">
              HOUSE OF RHEA
            </span>
          </div>
          <p className="text-white/40 text-xs font-light leading-relaxed mb-8">
            Statement pieces that speak. Designed in India for the world.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-gold/60 font-medium mb-3">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/60 text-xs font-light">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
            <p className="text-white/30 text-[0.65rem] font-light">
              &copy; 2025 House of Rhea
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/houseofrheaa" target="_blank" rel="noopener noreferrer" className="text-white/40 text-[0.65rem] font-light">Instagram</a>
              <a href="#" className="text-white/40 text-[0.65rem] font-light">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Desktop: full footer — unchanged */}
        <div className="hidden lg:grid py-16 lg:py-20 grid-cols-5 gap-10">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="House of Rhea" className="h-10 w-auto invert brightness-200" />
              <span className="font-heading text-xl tracking-[0.06em] text-white">
                HOUSE OF RHEA
              </span>
            </Link>
            <p className="text-white/40 text-sm font-light mt-4 leading-relaxed">
              Statement pieces that speak. Designed in India for the world.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-gold/60 font-medium mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm font-light transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex py-8 border-t border-white/10 flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; 2025 House of Rhea. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/houseofrheaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold text-xs font-light transition-colors duration-300"
            >
              Instagram
            </a>
            {['Pinterest', 'WhatsApp'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/40 hover:text-white text-xs font-light transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
