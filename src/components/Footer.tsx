const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="/" className="font-display text-sm font-bold tracking-tight">
          <span className="text-gradient">{"<"}</span>
          vineet
          <span className="text-gradient">{"/>"}</span>
        </a>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} thevineet.com — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
