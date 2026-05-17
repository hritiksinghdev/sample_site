import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[0.78rem] tracking-[0.1em] uppercase text-primary font-medium">
          {title}
        </span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-secondary flex-shrink-0"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-secondary text-sm font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setSelectedSize(0);
    setQuantity(1);
  }, [id]);

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="pt-28 lg:pt-36 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase text-secondary font-light">
              <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
              <span className="text-border">/</span>
              <span className="text-primary">{product.name}</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-12 gap-3 lg:gap-4">
                <div className="col-span-2 lg:col-span-2 flex flex-col gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`aspect-square overflow-hidden rounded-sm border-2 transition-all duration-300 ${
                        selectedImage === i ? 'border-accent' : 'border-transparent hover:border-border'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="col-span-10 lg:col-span-10">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm bg-card group cursor-zoom-in">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedImage}
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="lg:sticky lg:top-32">
                {product.tag && (
                  <span className="inline-block text-[0.6rem] tracking-[0.3em] uppercase text-gold font-medium mb-4">
                    {product.tag}
                  </span>
                )}

                <h1 className="font-heading text-3xl lg:text-4xl text-primary mb-3 leading-tight">
                  {product.name}
                </h1>

                <p className="text-secondary text-xl font-light mb-6">
                  {product.currency}{product.price.toLocaleString('en-IN')}
                </p>

                <p className="text-secondary text-[0.95rem] font-light leading-relaxed mb-8 border-b border-border pb-8">
                  {product.description}
                </p>

                <div className="mb-8">
                  <label className="text-[0.7rem] tracking-[0.2em] uppercase text-primary font-medium mb-3 block">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {product.sizes.map((size, i) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(i)}
                        className={`px-5 py-2.5 text-[0.75rem] tracking-[0.08em] rounded-sm border transition-all duration-300 ${
                          selectedSize === i
                            ? 'border-accent bg-accent text-cream'
                            : 'border-border text-secondary hover:border-accent hover:text-accent'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-[0.7rem] tracking-[0.2em] uppercase text-primary font-medium mb-3 block">
                    Quantity
                  </label>
                  <div className="inline-flex items-center border border-border rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-11 h-11 flex items-center justify-center text-secondary hover:text-primary transition-colors duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-12 text-center text-sm text-primary font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-11 h-11 flex items-center justify-center text-secondary hover:text-primary transition-colors duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>

                <button className="w-full bg-accent hover:bg-accent-hover text-cream text-[0.78rem] tracking-[0.18em] uppercase py-4 rounded-sm transition-colors duration-500 font-medium mb-3">
                  Add to Cart — {product.currency}{(product.price * quantity).toLocaleString('en-IN')}
                </button>

                <button className="w-full border border-border hover:border-accent text-primary hover:text-accent text-[0.78rem] tracking-[0.18em] uppercase py-4 rounded-sm transition-all duration-300 font-medium mb-8">
                  Add to Wishlist
                </button>

                <div className="flex items-center gap-6 mb-10 py-5 border-y border-border">
                  <div className="flex items-center gap-2 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-xs font-light">Free shipping over ₹2999</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" /><path d="M12 8v4l2.5 2.5" />
                    </svg>
                    <span className="text-xs font-light">7-day easy returns</span>
                  </div>
                </div>

                <div>
                  <AccordionItem title="Details" defaultOpen>
                    <ul className="space-y-2">
                      {product.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>

                  <AccordionItem title="Shipping & Returns">
                    <p>
                      Free standard shipping on all orders over ₹2999.
                      Express shipping available at checkout. Returns accepted
                      within 7 days of delivery in original condition with tags attached.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Care Instructions">
                    <p>
                      Dry clean recommended for delicate fabrics. Machine wash cold
                      for cotton pieces. Do not bleach. Iron on low heat.
                      Refer to the care label for specific guidance.
                    </p>
                  </AccordionItem>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <section className="mt-24 lg:mt-32 relative h-[50vh] lg:h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80"
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-white mb-4">
                Styled for <em className="font-normal">Every Moment</em>
              </h2>
              <p className="text-white/60 text-sm font-light max-w-md mx-auto">
                From poolside to party — pieces designed to turn heads.
              </p>
            </motion.div>
          </div>
        </section>

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
                You may also like
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl text-primary mt-3">
                Complete the Look
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
              {otherProducts.slice(0, 3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
