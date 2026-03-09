import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--warm-white)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] mb-6"
            style={{ color: "hsl(var(--warm-white))" }}
          >
            Real Journey. Real Transformation. Real Proof.
          </h2>
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "hsla(40,20%,97%,0.7)" }}
          >
            Our testimonials and social media reveal the impact of a future‑proof, data‑driven approach to education. Not hype — evidence. Not noise — clarity. Real people sharing real transformations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
