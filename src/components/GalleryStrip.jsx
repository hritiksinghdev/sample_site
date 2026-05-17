import { motion } from 'framer-motion';
import { galleryImages } from '../data/products';

export default function GalleryStrip() {
  return (
    <section className="py-14 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          className="text-center mb-8 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.instagram.com/houseofrheaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] lg:text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium hover:text-accent transition-colors duration-300"
          >
            @houseofrheaa
          </a>
          <h2 className="font-heading text-2xl lg:text-4xl text-primary mt-2 lg:mt-3">
            Follow the Vibe
          </h2>
        </motion.div>
      </div>

      {/* Mobile: 2x2 grid + 1 */}
      <div className="lg:hidden grid grid-cols-3 gap-1.5 px-4">
        {galleryImages.map((img, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/houseofrheaa"
            target="_blank"
            rel="noopener noreferrer"
            className={`aspect-square overflow-hidden rounded-lg ${i === 0 ? 'col-span-2 row-span-2 rounded-xl' : ''}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <img
              src={img}
              alt={`House of Rhea ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.a>
        ))}
      </div>

      {/* Desktop: horizontal strip — unchanged */}
      <motion.div
        className="hidden lg:flex gap-4 px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {galleryImages.map((img, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/houseofrheaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[19vw] aspect-square overflow-hidden rounded-sm group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <img
              src={img}
              alt={`House of Rhea ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
