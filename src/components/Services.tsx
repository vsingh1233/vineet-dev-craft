import { motion } from "framer-motion";
import { Globe, Code, Layers, Cpu, Terminal, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites built for speed, SEO, and conversion. From landing pages to complex web portals — pixel-perfect and mobile-first.",
    tags: ["HTML/CSS", "Responsive", "SEO"],
    href: "/website-development/",
  },
  {
    icon: Layers,
    title: "WordPress Development",
    description: "Custom themes, plugins, and WooCommerce stores. Fast, secure, and designed to scale — with easy-to-use admin panels your team will love.",
    tags: ["Themes", "Plugins", "WooCommerce"],
    href: "/wordpress-development/",
  },
  {
    icon: Code,
    title: "Laravel Development",
    description: "Enterprise-grade backend systems, REST APIs, and SaaS platforms built with Laravel's elegant architecture. Clean code, maintainable systems.",
    tags: ["API", "SaaS", "Backend"],
    href: "/laravel-development/",
  },
  {
    icon: Cpu,
    title: "React.js Development",
    description: "Modern, component-driven UIs that feel lightning-fast. SPAs, dashboards, and interactive web apps with smooth animations.",
    tags: ["SPA", "Dashboard", "UI/UX"],
    href: "/react-js-development/",
  },
  {
    icon: Terminal,
    title: "PHP Development",
    description: "Battle-tested PHP solutions for web apps, e-commerce, CRMs, and custom business tools. Reliable, performant, and secure.",
    tags: ["Custom Apps", "E-commerce", "CRM"],
    href: "/php-development/",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Supercharge your products with AI — chatbots, content generation, recommendation engines, and intelligent automation that saves hours.",
    tags: ["ChatGPT", "Automation", "ML"],
    href: "/ai-integration/",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Services</div>
          <h2 className="section-title">
            Solutions that <span className="text-gradient">drive results</span>
          </h2>
          <p className="section-desc mx-auto">
            From simple websites to complex SaaS platforms — I bring a decade of full-stack 
            expertise to every project. Here's how I can help you.
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
              className="group card-elevated card-hover p-7"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/8 p-3.5">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
