import { motion } from "framer-motion";
import { GraduationCap, Megaphone, Compass, Plane } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Student Recruitment",
    description:
      "We guide students in discovering the right academic pathways by leveraging trusted agent networks, innovative digital campaigns, and strong institutional partnerships — matching ambition with the right opportunities.",
  },
  {
    icon: Megaphone,
    title: "Student Marketing",
    description:
      "We engage potential students through school roadshows, education fairs, and targeted on‑ground campaigns. These face‑to‑face initiatives help build trust with students and parents while showcasing opportunities in a personalised way.",
  },
  {
    icon: Compass,
    title: "Advisory Matching",
    description:
      "We provide actionable insights, compliance guidance, and strategic roadmaps for universities entering or expanding in new markets. From data‑driven analytics to hands‑on support, we ensure informed decisions that lead to long‑term success.",
  },
  {
    icon: Plane,
    title: "Pre‑Departure Services",
    description:
      "We provide step‑by‑step guidance on EMGS and immigration procedures, and support in arranging accommodation. From application to arrival, we ensure students and families have a confident start to their education journey.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Our Core Services</h2>
          <p className="text-body max-w-2xl mx-auto">
            Our services are specially designed to match talent with opportunity, combining global reach with local expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated bg-popover flex gap-5"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-navy flex items-center justify-center mt-1">
                <service.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
