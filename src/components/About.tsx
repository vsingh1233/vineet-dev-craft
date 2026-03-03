import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              The developer behind <span className="text-gradient">the code</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm Vineet — a full-stack web developer with over a decade of experience 
              building digital products that drive real business results. Since 2014, I've 
              worked with startups, agencies, and enterprises across 15+ industries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My approach is simple: understand the business problem first, then engineer the 
              right solution. I don't believe in over-engineering or cutting corners. Every 
              project gets the same level of dedication — clean architecture, thorough testing, 
              and a commitment to excellence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When I'm not coding, I'm staying updated with the latest in AI, cloud architecture, 
              and web performance optimization — because the best developers never stop learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "PHP & Laravel", level: "Expert", years: "10+ years" },
              { label: "WordPress", level: "Expert", years: "10+ years" },
              { label: "React & Next.js", level: "Advanced", years: "5+ years" },
              { label: "AI & ML Integration", level: "Advanced", years: "3+ years" },
              { label: "MySQL & PostgreSQL", level: "Expert", years: "10+ years" },
              { label: "DevOps & Cloud", level: "Intermediate", years: "4+ years" },
            ].map((skill) => (
              <div key={skill.label} className="card-elevated p-5">
                <div className="text-sm font-bold text-navy">{skill.label}</div>
                <div className="mt-1 text-xs font-semibold text-primary">{skill.level}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{skill.years}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
