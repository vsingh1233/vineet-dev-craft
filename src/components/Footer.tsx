import { Link } from "react-router-dom";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

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
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, hsl(var(--primary-foreground)) 80px, hsl(var(--primary-foreground)) 81px)`,
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08]" style={{ background: "var(--gradient-amber)", filter: "blur(100px)" }} />
      <div className="absolute -bottom-20 left-1/4 w-[350px] h-[350px] rounded-full opacity-[0.05]" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />

      {/* Main content */}
      <div className="relative container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column — larger */}
          <div className="lg:col-span-5">
            <a href="/" className="font-mono text-2xl font-bold tracking-tight inline-block">
              <span className="text-gradient">{"<"}</span>
              vineet
              <span className="text-gradient">{"/>"}</span>
            </a>
            <p className="mt-5 text-[15px] text-white/45 leading-relaxed max-w-sm">
              Full-stack web developer with 10+ years of experience building 
              digital products that drive business results.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-3">
              <a href="mailto:hello@thevineet.com" className="flex items-center gap-3 text-sm text-white/45 hover:text-primary transition-colors">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10">
                  <Mail size={14} className="text-primary" />
                </div>
                hello@thevineet.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/45">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={14} className="text-primary" />
                </div>
                Available worldwide, remote-first
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-2">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] text-white/35 transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:scale-105"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-6">Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => {
                const className = "group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white";
                const dot = <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />;
                return (
                  <li key={link.href}>
                    {'isRoute' in link && link.isRoute ? (
                      <Link to={link.href} className={className}>{dot}{link.label}</Link>
                    ) : (
                      <a href={link.href} className={className}>{dot}{link.label}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter / CTA mini */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary mb-6">Work with me</h4>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Have a project in mind? Let's make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy bg-gradient-to-r from-primary to-accent rounded-lg px-5 py-2.5 transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ color: "hsl(var(--primary-foreground))" }}
            >
              Let's Talk
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} thevineet.com
          </p>
          <p className="text-xs text-white/25">
            Crafted with <span className="text-primary">♥</span> by Vineet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
