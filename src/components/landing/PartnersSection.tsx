import { motion } from "framer-motion";
import logoApu from "@/assets/logo-apu.png";
import logoInti from "@/assets/logo-inti.png";
import logoSegi from "@/assets/logo-segi.png";
import logoUcsi from "@/assets/logo-ucsi.png";
import logoTarumt from "@/assets/logo-tarumt.png";
import logoUoc from "@/assets/logo-uoc.png";

const partners = [
  { name: "APU", logo: logoApu },
  { name: "INTI", logo: logoInti },
  { name: "SEGi", logo: logoSegi },
  { name: "UCSI", logo: logoUcsi },
  { name: "TAR UMT", logo: logoTarumt },
  { name: "Univ. of Cyberjaya", logo: logoUoc },
];

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-elevated flex flex-col items-center justify-center p-5 md:p-6 bg-popover"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-16 md:h-20 w-auto object-contain mb-3"
              />
              <span className="font-body text-xs text-muted-foreground font-medium">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-center text-sm text-muted-foreground mt-8 font-body">
          More trusted partners, coming soon
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
