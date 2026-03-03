import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";

const services = servicesData;

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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={item}>
                <Link
                  to={`/${service.slug}/`}
                  className="group card-elevated card-hover p-7 block h-full"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-primary/8 p-3.5">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.heroDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span key={tech.name} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
