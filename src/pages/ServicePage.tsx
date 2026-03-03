import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;

  // Get other services for cross-linking
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-5 inline-flex rounded-xl bg-primary/8 p-4">
              <Icon size={32} className="text-primary" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-navy"
            >
              {service.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-xl font-medium text-primary"
            >
              {service.tagline}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl"
            >
              {service.description}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
              <a href="/#services" className="btn-outline">
                View All Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">What You Get</div>
            <h2 className="section-title">
              Key <span className="text-gradient">features</span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {service.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="card-elevated card-hover p-7"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Tech Stack</div>
            <h2 className="section-title">
              Tools I <span className="text-gradient">use</span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {service.techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">My Process</div>
            <h2 className="section-title">
              How I <span className="text-gradient">work</span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl space-y-6"
          >
            {service.process.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="card-elevated p-6 flex gap-5"
              >
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-sm font-bold">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">FAQ</div>
            <h2 className="section-title">
              Common <span className="text-gradient">questions</span>
            </h2>
          </div>

          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="card-elevated px-6 border rounded-xl"
                >
                  <AccordionTrigger className="text-left font-display font-bold text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="section-title">
              Other <span className="text-gradient">services</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.slice(0, 3).map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}/`}
                  className="card-elevated card-hover p-6 group"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-primary/8 p-3">
                    <SIcon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {s.tagline}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="card-elevated mx-auto max-w-3xl p-10 text-center md:p-14">
            <h2 className="section-title !mt-0">
              Ready to get <span className="text-gradient">started?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
              Let's discuss your {service.title.toLowerCase()} requirements and create something exceptional together.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
