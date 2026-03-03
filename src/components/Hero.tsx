import { motion } from "framer-motion";
import { ArrowRight, Code2, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-16">
      {/* Warm gradient bg */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, hsl(40, 33%, 97%) 0%, hsl(40, 25%, 94%) 50%, hsl(40, 33%, 97%) 100%)",
      }} />

      {/* Decorative amber circle */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] translate-x-1/3" style={{
        background: "radial-gradient(circle, hsl(25, 90%, 48%), transparent 70%)",
      }} />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="section-label mb-8">
              <Code2 size={14} />
              <span>10+ Years · Full-Stack Developer</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Your vision,
              <br />
              <span className="text-gradient">expertly built.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Hi, I'm <strong className="text-navy font-semibold">Vineet</strong> — I help businesses 
              grow with high-performance websites, web applications, and AI-powered solutions 
              that convert visitors into customers.
            </p>

            {/* Trust signals */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                "200+ projects delivered across 15+ industries",
                "Clients from USA, UK, Australia & India",
                "Transparent pricing, on-time delivery",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Start Your Project
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Stats cards on right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "10+", label: "Years of Experience", desc: "Since 2014" },
              { value: "200+", label: "Projects Delivered", desc: "Across all platforms" },
              { value: "50+", label: "Happy Clients", desc: "Worldwide" },
              { value: "99%", label: "Client Retention", desc: "They keep coming back" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`card-elevated p-6 ${i === 0 ? 'lg:mt-8' : ''} ${i === 3 ? 'lg:-mt-4' : ''}`}
              >
                <div className="text-3xl font-extrabold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-navy">{stat.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
