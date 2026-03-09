import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-heading text-xl md:text-2xl font-semibold text-navy">
            Elevate Advisors
          </span>
          <span className="text-xs font-body font-medium tracking-widest uppercase text-gold">
            India
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-navy transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">Talk to Us</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-glass border-t border-border animate-fade-up">
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-body font-medium text-foreground hover:text-navy transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" asChild className="mt-2">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Talk to Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
