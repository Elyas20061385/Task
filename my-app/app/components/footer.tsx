const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#21a07f] p-16 w-full">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              alt="Amazon English Academy"
              src="logo.png"
              className="w-auto h-8 sm:h-10 lg:h-12 object-contain rounded-xl"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-white/70">
            <a href="#" className="hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © {currentYear} Amazon Tech. Designed by Elyas Alowdin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
