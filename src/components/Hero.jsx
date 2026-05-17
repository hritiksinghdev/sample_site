import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Mobile: full-bleed image hero with overlay text */}
      <div className="lg:hidden absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
          alt="House of Rhea fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-primary/10" />
      </div>

      <div className="relative z-10 w-full">
        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col items-center justify-end min-h-screen px-5 pb-28 pt-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[0.6rem] tracking-[0.4em] uppercase text-gold font-medium mb-4">
              New Collection 2025
            </span>
            <h1 className="font-heading text-[2.6rem] leading-[1.05] text-white mb-5">
              Statement
              <br />
              <em className="font-normal text-gold/90">Pieces That</em>
              <br />
              Speak
            </h1>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto mb-8 font-light">
              Clothing crafted for those who refuse to blend in.
            </p>

            <div className="flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
              <Link
                to="/product/1"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 text-[0.75rem] tracking-[0.18em] uppercase font-medium rounded-full transition-colors duration-300"
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://www.instagram.com/houseofrheaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] tracking-[0.1em] text-white/60 font-light"
              >
                @houseofrheaa
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop layout — unchanged */}
        <div className="hidden lg:block max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-5 text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium mb-6">
                New Collection 2025
              </span>
              <h1 className="font-heading text-[4rem] xl:text-[4.5rem] leading-[1.08] text-primary mb-6">
                Statement
                <br />
                <em className="font-normal text-accent">Pieces That</em>
                <br />
                Speak
              </h1>
              <p className="text-secondary text-[1.05rem] leading-relaxed max-w-md mb-10 font-light">
                From vacation-ready fits to wedding customs — discover
                clothing crafted for those who refuse to blend in.
              </p>

              <div className="flex flex-row items-center gap-4 justify-start">
                <Link
                  to="/product/1"
                  className="inline-flex items-center gap-3 bg-accent text-cream px-8 py-3.5 text-[0.78rem] tracking-[0.18em] uppercase font-medium hover:bg-accent-hover transition-colors duration-500 rounded-sm"
                >
                  Shop Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://www.instagram.com/houseofrheaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.78rem] tracking-[0.12em] uppercase text-secondary hover:text-accent transition-colors duration-300 font-light border-b border-border hover:border-accent pb-0.5"
                >
                  @houseofrheaa
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
                  alt="House of Rhea fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/15 to-transparent" />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-card p-6 shadow-sm border border-border rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1">Designed in</p>
                <p className="font-heading text-lg text-primary">India</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
