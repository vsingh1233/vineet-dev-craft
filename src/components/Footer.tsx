import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const services = [
    { label: "Website Development", href: "/website-development/" },
    { label: "WordPress Development", href: "/wordpress-development/" },
    { label: "Laravel Development", href: "/laravel-development/" },
    { label: "React.js Development", href: "/react-js-development/" },
    { label: "PHP Development", href: "/php-development/" },
    { label: "AI Integration", href: "/ai-integration/" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Why Choose Me", href: "#why-me" },
    { label: "My Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{ background: "var(--gradient-amber)", filter: "blur(120px)" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.05]" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />

      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">Ready to start?</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Let's build something{" "}
                <span className="text-gradient">extraordinary</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 btn-primary !rounded-full !px-8 !py-4 text-base font-bold"
            >
              Start a Project
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="/" className="font-mono text-xl font-bold tracking-tight">
              <span className="text-gradient">{"<"}</span>
              vineet
              <span className="text-gradient">{"/>"}</span>
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Full-stack web developer with 10+ years of experience building 
              digital products that drive business results.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/40 transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {'isRoute' in link && link.isRoute ? (
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">Get in touch</h4>
            <div className="space-y-4">
              <a href="mailto:hello@thevineet.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Mail size={15} className="text-primary/60" />
                hello@thevineet.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={15} className="text-primary/60 mt-0.5 shrink-0" />
                Available worldwide for remote projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} thevineet.com — All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed & Developed with <span className="text-primary">♥</span> by Vineet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
