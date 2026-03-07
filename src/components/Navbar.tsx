import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog", isRoute: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-mono text-lg font-bold tracking-tight text-navy">
          <span className="text-gradient">{"<"}</span>
          vineet
          <span className="text-gradient">{"/>"}</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            'isRoute' in link && link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            )
          )}
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs">
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="container flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground font-medium transition-colors hover:text-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
