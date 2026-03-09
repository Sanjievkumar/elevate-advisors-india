const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-lg font-semibold text-navy">
            Elevate Advisors
          </span>
          <span className="text-[10px] font-body font-medium tracking-widest uppercase text-gold">
            India
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Elevate Advisors. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
