import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start with a deep dive into your business, goals, target audience, and competitors. I'll map out the technical strategy and project roadmap before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "I create wireframes and design mockups for your approval. On the backend, I architect a scalable database and API structure that will grow with your business.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Agile development with regular updates. You'll see progress at every milestone. I write clean, well-documented code with thorough testing on all devices and browsers.",
  },
  {
    number: "04",
    title: "Launch & Ongoing Support",
    description: "Smooth deployment with zero downtime. Post-launch, I provide monitoring, bug fixes, and feature updates. Your digital product is in safe hands — long after go-live.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">My Process</div>
          <h2 className="section-title">
            How we <span className="text-gradient">work together</span>
          </h2>
          <p className="section-desc mx-auto">
            A proven 4-step process that eliminates surprises and delivers results 
            you can measure. Transparent from start to finish.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex gap-6 pb-12 last:pb-0 md:gap-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                {step.number}
              </div>

              {/* Content card */}
              <div className={`card-elevated p-6 flex-1 ${
                i % 2 === 0 ? 'md:mr-[calc(50%+24px)]' : 'md:ml-[calc(50%+24px)]'
              }`}>
                <h3 className="font-display text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <a href="/contact" className="btn-primary">
            Start Your Project Today
            <span className="text-lg leading-none">→</span>
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Typical response time: under 4 hours</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
