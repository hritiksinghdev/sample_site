import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function BestSellers() {
  return (
    <section className="py-14 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-end justify-between mb-8 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[0.6rem] lg:text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium">
              Curated for you
            </span>
            <h2 className="font-heading text-2xl lg:text-4xl text-primary mt-2 lg:mt-3">
              Best Sellers
            </h2>
          </motion.div>

          <motion.a
            href="#"
            className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.15em] uppercase text-secondary hover:text-accent transition-colors duration-300 font-light border-b border-border hover:border-accent pb-0.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View All
          </motion.a>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto hide-scrollbar snap-x -mx-5 px-5 pb-2">
          {products.map((product, i) => (
            <div key={product.id} className="flex-shrink-0 w-[42vw] snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop: grid — unchanged */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
