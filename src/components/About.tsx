import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
            About
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Code is my <span className="text-gradient">craft</span>
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
            Over the past 10 years, I've helped startups, agencies, and enterprises 
            bring their ideas to life through clean, scalable, and performant web solutions. 
            I specialize in PHP, Laravel, WordPress, React.js, and modern AI integrations.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
            Whether you need a simple landing page or a complex SaaS platform, 
            I bring a consultative approach — understanding your goals first, then 
            engineering the right solution.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "PHP", sub: "Expert" },
              { label: "Laravel", sub: "Expert" },
              { label: "React", sub: "Advanced" },
              { label: "WordPress", sub: "Expert" },
            ].map((skill) => (
              <div key={skill.label} className="card-elevated rounded-xl border border-border p-4">
                <div className="font-display text-sm font-bold">{skill.label}</div>
                <div className="mt-1 font-body text-xs text-primary">{skill.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
