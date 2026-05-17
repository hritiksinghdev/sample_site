import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import MobileBottomNav from '../components/MobileBottomNav';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 lg:py-5 text-left"
      >
        <span className="text-[0.72rem] lg:text-[0.78rem] tracking-[0.1em] uppercase text-primary font-medium">
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
            <div className="pb-4 lg:pb-5 text-secondary text-sm font-light leading-relaxed">
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

      <main className="pt-20 lg:pt-36 pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          {/* Breadcrumb — desktop only */}
          <motion.div
            className="hidden lg:block mb-10"
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

          {/* Mobile back button */}
          <motion.div
            className="lg:hidden mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="inline-flex items-center gap-1.5 text-secondary text-xs font-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16">
            {/* Images */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Mobile: swipeable full-width images */}
              <div className="lg:hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-card">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>

                  {product.tag && (
                    <span className="absolute top-3 left-3 text-[0.55rem] tracking-[0.2em] uppercase bg-accent/90 backdrop-blur-sm text-cream px-3 py-1 rounded-full font-medium">
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-3 justify-center">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                        selectedImage === i ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: thumbnail sidebar + main image */}
              <div className="hidden lg:grid grid-cols-12 gap-4">
                <div className="col-span-2 flex flex-col gap-3">
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
                <div className="col-span-10">
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

            {/* Product info */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="lg:sticky lg:top-32">
                {product.tag && (
                  <span className="hidden lg:inline-block text-[0.6rem] tracking-[0.3em] uppercase text-gold font-medium mb-4">
                    {product.tag}
                  </span>
                )}

                <h1 className="font-heading text-2xl lg:text-4xl text-primary mb-2 lg:mb-3 leading-tight">
                  {product.name}
                </h1>

                <p className="text-secondary text-lg lg:text-xl font-light mb-4 lg:mb-6">
                  {product.currency}{product.price.toLocaleString('en-IN')}
                </p>

                <p className="text-secondary text-[0.85rem] lg:text-[0.95rem] font-light leading-relaxed mb-6 lg:mb-8 border-b border-border pb-6 lg:pb-8">
                  {product.description}
                </p>

                <div className="mb-6 lg:mb-8">
                  <label className="text-[0.65rem] lg:text-[0.7rem] tracking-[0.2em] uppercase text-primary font-medium mb-2.5 lg:mb-3 block">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, i) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(i)}
                        className={`px-4 py-2 lg:px-5 lg:py-2.5 text-[0.72rem] lg:text-[0.75rem] tracking-[0.08em] border transition-all duration-300 rounded-full lg:rounded-sm ${
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

                <div className="mb-6 lg:mb-8">
                  <label className="text-[0.65rem] lg:text-[0.7rem] tracking-[0.2em] uppercase text-primary font-medium mb-2.5 lg:mb-3 block">
                    Quantity
                  </label>
                  <div className="inline-flex items-center border border-border rounded-full lg:rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center text-secondary hover:text-primary transition-colors duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-10 lg:w-12 text-center text-sm text-primary font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center text-secondary hover:text-primary transition-colors duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Desktop CTA buttons */}
                <div className="hidden lg:block">
                  <button className="w-full bg-accent hover:bg-accent-hover text-cream text-[0.78rem] tracking-[0.18em] uppercase py-4 rounded-sm transition-colors duration-500 font-medium mb-3">
                    Add to Cart — {product.currency}{(product.price * quantity).toLocaleString('en-IN')}
                  </button>

                  <button className="w-full border border-border hover:border-accent text-primary hover:text-accent text-[0.78rem] tracking-[0.18em] uppercase py-4 rounded-sm transition-all duration-300 font-medium mb-8">
                    Add to Wishlist
                  </button>
                </div>

                <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-10 py-4 lg:py-5 border-y border-border">
                  <div className="flex items-center gap-1.5 lg:gap-2 text-secondary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-[0.65rem] lg:text-xs font-light">Free shipping over ₹2999</span>
                  </div>
                  <div className="flex items-center gap-1.5 lg:gap-2 text-secondary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" /><path d="M12 8v4l2.5 2.5" />
                    </svg>
                    <span className="text-[0.65rem] lg:text-xs font-light">7-day easy returns</span>
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

        <section className="mt-16 lg:mt-32 relative h-[40vh] lg:h-[60vh] overflow-hidden mx-4 rounded-2xl lg:mx-0 lg:rounded-none">
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
              <h2 className="font-heading text-2xl lg:text-4xl text-white mb-3 lg:mb-4">
                Styled for <em className="font-normal">Every Moment</em>
              </h2>
              <p className="text-white/60 text-xs lg:text-sm font-light max-w-md mx-auto">
                From poolside to party — pieces designed to turn heads.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <motion.div
              className="text-center mb-8 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[0.6rem] lg:text-[0.65rem] tracking-[0.35em] uppercase text-gold font-medium">
                You may also like
              </span>
              <h2 className="font-heading text-2xl lg:text-4xl text-primary mt-2 lg:mt-3">
                Complete the Look
              </h2>
            </motion.div>

            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden flex gap-4 overflow-x-auto hide-scrollbar snap-x -mx-4 px-4 pb-2">
              {otherProducts.slice(0, 3).map((p, i) => (
                <div key={p.id} className="flex-shrink-0 w-[42vw] snap-start">
                  <ProductCard product={p} index={i} />
                </div>
              ))}
            </div>

            {/* Desktop: grid */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {otherProducts.slice(0, 3).map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Mobile sticky Add to Cart bar */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-border/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 flex items-center justify-center border border-border rounded-full text-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
          <button className="flex-1 bg-accent text-cream text-[0.72rem] tracking-[0.15em] uppercase py-3.5 rounded-full font-medium">
            Add to Cart — {product.currency}{(product.price * quantity).toLocaleString('en-IN')}
          </button>
        </div>
      </div>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
