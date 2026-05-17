import { motion } from 'framer-motion';
import { categories } from '../data/products';

export default function FeaturedCategories() {
  const wedding = categories[1];
  const sides = [categories[0], categories[2]];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium">
            Explore
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-primary mt-3">
            Our Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-5 lg:gap-6 items-stretch">
          {[sides[0], wedding, sides[1]].map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#"
              className={`group relative block overflow-hidden rounded-sm ${
                i === 1 ? 'aspect-[3/4] md:aspect-auto md:min-h-[520px] lg:min-h-[580px]' : 'aspect-[3/4] md:aspect-auto'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
              <div className={`absolute bottom-0 left-0 right-0 ${i === 1 ? 'p-8 lg:p-10 text-center' : 'p-6 lg:p-8'}`}>
                <p className={`tracking-[0.3em] uppercase text-gold/80 ${i === 1 ? 'text-[0.65rem] mb-2' : 'text-[0.6rem] mb-1.5'}`}>
                  {cat.subtitle}
                </p>
                <h3 className={`font-heading text-white ${i === 1 ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'}`}>
                  {cat.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
