import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function BestSellers() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium">
              Curated for you
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-primary mt-3">
              Best Sellers
            </h2>
          </motion.div>

          <motion.a
            href="#"
            className="text-[0.75rem] tracking-[0.15em] uppercase text-secondary hover:text-accent transition-colors duration-300 font-light border-b border-border hover:border-accent pb-0.5 self-start md:self-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View All
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
