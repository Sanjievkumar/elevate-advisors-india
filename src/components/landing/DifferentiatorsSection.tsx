import { motion } from "framer-motion";
import { Lightbulb, Clock, MapPin, Search } from "lucide-react";

const differentiators = [
  {
    icon: Lightbulb,
    title: "AI‑Driven Recruitment Innovation",
    description:
      "From lead generation and personalised engagement to automated application management and support.",
  },
  {
    icon: Clock,
    title: "Hybrid Model",
    description:
      "On‑ground counsellors, vetted sub‑agents, and a digital portal for transparent, fast, and compliant processing.",
  },
  {
    icon: MapPin,
    title: "Deep Local Insights",
    description:
      "Across emerging markets paired with global institutional partnerships.",
  },
  {
    icon: Search,
    title: "Industry‑Shaping Perspective",
    description: "We don't follow trends; we set them.",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-section">
            Leading the Education Industry
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated text-center"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
