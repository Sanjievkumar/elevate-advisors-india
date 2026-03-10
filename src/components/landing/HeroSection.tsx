import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [backendStatus, setBackendStatus] = useState<string>("Connecting to backend...");

  useEffect(() => {
    // 5. Test frontend connection to the backend
    // This fetches data from the Express server we just created
    fetch("http://localhost:5000/api/status")
      .then((res) => res.json())
      .then((data) => {
        setBackendStatus(data.message); // Should be "Backend Connected!"
      })
      .catch((err) => {
        console.error("Backend connection failed:", err);
        setBackendStatus("Backend Disconnected");
      });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Executive workspace"
          className="w-full h-full object-cover"
        />
        {/* Navy gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(207,38%,17%,0.88) 0%, hsla(207,38%,17%,0.65) 50%, hsla(207,38%,17%,0.80) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.25em] uppercase mb-6"
          style={{ color: "hsl(var(--gold))" }}
        >
          Welcome to the
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8"
          style={{ color: "hsl(var(--warm-white))" }}
        >
          Anti‑Agent‑Agency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          style={{ color: "hsla(40,20%,97%,0.85)" }}
        >
          Future‑focused education strategist that transforms uncertainty into direction and ambition.
        </motion.p>

        {/* Backend Connection Status Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10 inline-block px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm"
        >
          <p className={`text-sm md:text-base font-medium ${backendStatus.includes('Connected') ? 'text-green-400' : 'text-yellow-400'}`}>
            Status: {backendStatus}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="gold" size="lg" asChild className="text-base px-10 py-6">
            <a href="#contact">Find Out More</a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to top, hsl(var(--background)), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
