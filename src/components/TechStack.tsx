import { motion } from "framer-motion";

const techCategories = [
  {
    label: "Frontend",
    techs: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    techs: ["PHP", "Laravel", "Node.js", "REST API", "GraphQL", "MySQL", "PostgreSQL"],
  },
  {
    label: "CMS & E-commerce",
    techs: ["WordPress", "WooCommerce", "Shopify", "Elementor", "ACF"],
  },
  {
    label: "AI & Tools",
    techs: ["OpenAI / GPT", "LangChain", "Python", "Git", "Docker", "AWS", "Vercel"],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Tech Stack</div>
          <h2 className="section-title">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="section-desc mx-auto">
            The right tool for the right job. Here's the modern stack I use to 
            build fast, scalable, and maintainable web solutions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {techCategories.map((cat) => (
            <div key={cat.label} className="card-elevated p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-secondary px-3.5 py-2 text-sm font-medium text-navy transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground mb-4">Not sure which tech stack fits your project?</p>
          <a href="/contact" className="btn-outline">
            Get a Free Tech Consultation
            <span className="text-lg leading-none">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
