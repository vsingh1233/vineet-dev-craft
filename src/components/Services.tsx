import { motion } from "framer-motion";
import { Globe, Code, Layers, Cpu, Terminal, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites built for speed, SEO, and conversion. From landing pages to complex portals.",
    href: "/website-development/",
  },
  {
    icon: Layers,
    title: "WordPress Development",
    description: "Tailored WordPress themes and plugins. Fast, secure, and easy to manage — built to scale with your business.",
    href: "/wordpress-development/",
  },
  {
    icon: Code,
    title: "Laravel Development",
    description: "Robust backend systems and APIs with Laravel. Clean architecture for complex business logic.",
    href: "/laravel-development/",
  },
  {
    icon: Cpu,
    title: "React.js Development",
    description: "Dynamic, component-driven UIs with React. Lightning-fast SPAs and interactive dashboards.",
    href: "/react-js-development/",
  },
  {
    icon: Terminal,
    title: "PHP Development",
    description: "Battle-tested PHP solutions for web apps, e-commerce, and enterprise systems. Reliable and performant.",
    href: "/php-development/",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Integrate AI into your products — chatbots, content generation, recommendation engines, and automation.",
    href: "/ai-integration/",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="mb-16 max-w-xl">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What I <span className="text-gradient">build</span> for you
          </h2>
          <p className="mt-4 font-body text-muted-foreground leading-relaxed">
            A decade of delivering clean code and real results across the full web stack.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.a
              key={service.href}
              href={service.href}
              variants={item}
              className="group card-elevated rounded-xl border border-border p-7 transition-all hover:border-primary/30 hover:glow"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 inline-block font-display text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
