import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background)) 0%, hsla(207,38%,17%,0.88) 30%, hsla(207,38%,17%,0.90) 70%, hsl(var(--background)) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 section-container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section mb-4" style={{ color: "hsl(var(--warm-white))" }}>
              Get Your Personalised Blueprint Pathway
            </h2>
            <p className="font-body text-base" style={{ color: "hsla(40,20%,97%,0.8)" }}>
              The information collected is for the purpose of processing your request.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-elevated space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <p className="font-heading text-2xl font-semibold text-navy mb-2">
                  Thank you
                </p>
                <p className="text-muted-foreground font-body">
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
                />
                <Button variant="gold" size="lg" type="submit" className="w-full text-base">
                  Submit
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
