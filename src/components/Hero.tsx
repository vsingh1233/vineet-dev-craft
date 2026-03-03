import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Amber glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{
        background: "radial-gradient(circle, hsl(40, 95%, 55%), transparent 70%)",
      }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <Code2 size={14} className="text-primary" />
            <span className="font-display text-xs text-muted-foreground">
              10+ Years of Experience
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building the web,
            <br />
            <span className="text-gradient">one line at a time.</span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            Hi, I'm <span className="text-foreground font-medium">Vineet</span> — a full-stack developer crafting 
            high-performance websites, web apps, and AI-powered solutions for businesses worldwide.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
            >
              View Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-7 py-3.5 font-display text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-12 border-t border-border pt-8">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-1 font-body text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
