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

        <div className="space-y-5 lg:space-y-6">
          <motion.a
            href="#"
            className="group relative block overflow-hidden rounded-sm aspect-[16/9] md:aspect-[21/9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={wedding.image}
              alt={wedding.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-center">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold/80 mb-2">
                {wedding.subtitle}
              </p>
              <h3 className="font-heading text-3xl lg:text-5xl text-white">
                {wedding.name}
              </h3>
            </div>
          </motion.a>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {sides.map((cat, i) => (
              <motion.a
                key={cat.name}
                href="#"
                className="group relative block overflow-hidden rounded-sm aspect-[3/4] md:aspect-[4/5]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold/80 mb-1.5">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl lg:text-3xl text-white">
                    {cat.name}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
