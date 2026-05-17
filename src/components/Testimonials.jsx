import { motion } from 'framer-motion';
import { testimonials } from '../data/products';

export default function Testimonials() {
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
            Love Letters
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-primary mt-3">
            What They Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-sm p-8 lg:p-10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <svg className="w-8 h-8 text-gold/40 mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 7.05C7.14 7.56 4 10.86 4 14.9c0 2.49 1.77 3.6 3.38 3.6 1.55 0 2.62-1.1 2.62-2.5 0-1.37-1.05-2.36-2.36-2.36-.42 0-.83.13-1.17.35.5-2.08 2.36-3.96 4.53-4.65V7.05zm9 0c-3.86.51-7 3.81-7 7.85 0 2.49 1.77 3.6 3.38 3.6 1.55 0 2.62-1.1 2.62-2.5 0-1.37-1.05-2.36-2.36-2.36-.42 0-.83.13-1.17.35.5-2.08 2.36-3.96 4.53-4.65V7.05z" />
              </svg>
              <p className="text-secondary text-[0.95rem] leading-relaxed font-light mb-8 italic">
                {t.text}
              </p>
              <div>
                <p className="text-primary text-sm font-medium">{t.author}</p>
                <p className="text-secondary/70 text-xs mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
