const Footer = () => {
  const services = [
    { label: "Website Development", href: "/website-development/" },
    { label: "WordPress Development", href: "/wordpress-development/" },
    { label: "Laravel Development", href: "/laravel-development/" },
    { label: "React.js Development", href: "/react-js-development/" },
    { label: "PHP Development", href: "/php-development/" },
    { label: "AI Integration", href: "/ai-integration/" },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="/" className="font-mono text-lg font-bold tracking-tight text-navy">
              <span className="text-gradient">{"<"}</span>
              vineet
              <span className="text-gradient">{"/>"}</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Full-stack web developer with 10+ years of experience building 
              digital products that drive business results.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-navy mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-sm text-muted-foreground hover:text-navy transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-navy mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Why Choose Me", href: "#why-me" },
                { label: "My Process", href: "#process" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-navy transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} thevineet.com — All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & Developed by Vineet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
