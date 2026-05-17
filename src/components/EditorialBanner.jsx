import { motion } from 'framer-motion';

export default function EditorialBanner() {
  return (
    <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
        alt="Fashion editorial"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-accent/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center px-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[0.6rem] tracking-[0.4em] uppercase text-gold font-medium">
            Our Philosophy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mt-5 mb-6 leading-tight">
            Wear Your
            <br />
            <em className="font-normal">Confidence.</em>
          </h2>
          <p className="text-white/70 text-sm lg:text-base font-light leading-relaxed max-w-lg mx-auto mb-8">
            Every piece at House of Rhea is designed to make you feel like
            the main character — bold, beautiful, and unapologetically you.
          </p>
          <a
            href="https://www.instagram.com/houseofrheaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.18em] uppercase text-white border border-white/40 px-8 py-3 hover:bg-white hover:text-accent transition-all duration-500 rounded-sm"
          >
            Follow Our Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
