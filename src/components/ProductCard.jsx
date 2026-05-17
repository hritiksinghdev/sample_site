import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card mb-4">
          <img
            src={hovered && product.hoverImage ? product.hoverImage : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {product.tag && (
            <span className="absolute top-4 left-4 text-[0.6rem] tracking-[0.25em] uppercase bg-accent/90 backdrop-blur-sm text-cream px-3 py-1.5 rounded-sm font-medium">
              {product.tag}
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <span className="inline-flex items-center justify-center w-full bg-accent/90 backdrop-blur-sm text-cream text-[0.7rem] tracking-[0.18em] uppercase py-3 rounded-sm hover:bg-accent-hover transition-colors duration-300">
              Quick Add
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium">
            {product.category}
          </p>
          <h3 className="font-heading text-lg text-primary group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-secondary text-sm font-light">
            {product.currency}{product.price.toLocaleString('en-IN')}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
