import { motion } from 'framer-motion';
import { galleryImages } from '../data/products';

export default function GalleryStrip() {
  return (
    <section className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.instagram.com/houseofrheaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium hover:text-accent transition-colors duration-300"
          >
            @houseofrheaa
          </a>
          <h2 className="font-heading text-3xl lg:text-4xl text-primary mt-3">
            Follow the Vibe
          </h2>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-3 lg:gap-4 px-6 lg:px-10"
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
            className="flex-shrink-0 w-[45vw] sm:w-[30vw] lg:w-[19vw] aspect-square overflow-hidden rounded-sm group cursor-pointer"
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
