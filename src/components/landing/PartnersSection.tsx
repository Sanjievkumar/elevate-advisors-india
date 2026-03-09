import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-section mb-6">
            Trusted by Leading Education Institutes Worldwide
          </h2>
          <p className="text-body">
            Our partner network includes reputable universities and international schools known for safety, quality, and strong graduate outcomes. Parents choose us because our partnerships reflect trust, credibility, and a clear path to a secure future.
          </p>
        </motion.div>

        {/* Partner logos placeholder row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60"
        >
          {["APU", "INTI", "SEGi", "UCSI", "TAR UMT", "Univ. of Cyberjaya"].map(
            (name) => (
              <div
                key={name}
                className="font-heading text-lg md:text-xl font-semibold text-navy/40 select-none"
              >
                {name}
              </div>
            )
          )}
        </motion.div>
        <p className="text-center text-sm text-muted-foreground mt-8 font-body">
          More trusted partners, coming soon
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
