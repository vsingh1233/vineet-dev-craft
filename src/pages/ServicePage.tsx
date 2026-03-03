import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";
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
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-5 inline-flex rounded-xl bg-primary/8 p-4">
              <Icon size={32} className="text-primary" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-navy">
              {service.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-xl font-medium text-primary">
              {service.tagline}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
              {service.heroDescription}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a href="#case-studies" className="btn-outline">
                View Case Studies
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {service.heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="card-elevated p-5 text-center"
              >
                <p className="text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─── */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Sound Familiar?</div>
            <h2 className="section-title">
              Problems I <span className="text-gradient">solve</span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {service.painPoints.map((pp) => (
              <motion.div key={pp.problem} variants={fadeUp} className="card-elevated p-7">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0 text-destructive" />
                  <p className="font-semibold text-navy text-sm">{pp.problem}</p>
                </div>
                <div className="flex items-start gap-3 pl-0 border-l-2 border-primary ml-2 pl-5">
                  <Lightbulb size={16} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{pp.solution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-16 md:py-24">
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
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.features.map((feature) => {
              const FIcon = feature.icon;
              return (
                <motion.div key={feature.title} variants={fadeUp} className="card-elevated card-hover p-7">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/8 p-3">
                    <FIcon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section id="case-studies" className="py-16 md:py-24 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Real Results</div>
            <h2 className="section-title">
              Case <span className="text-gradient">studies</span>
            </h2>
          </div>

          <div className="space-y-8">
            {service.caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {cs.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy md:text-2xl">{cs.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{cs.description}</p>

                  {/* Results Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="rounded-lg bg-background p-4 text-center">
                        <p className="text-xl font-extrabold text-primary">{r.value}</p>
                        <p className="mt-1 text-xs font-medium text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.techUsed.map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">My Process</div>
            <h2 className="section-title">
              How we <span className="text-gradient">work together</span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl space-y-5"
          >
            {service.process.map((step) => (
              <motion.div key={step.step} variants={fadeUp} className="card-elevated p-6 flex gap-5">
                <span className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-sm font-bold">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Tech Stack</div>
            <h2 className="section-title">
              Tools & <span className="text-gradient">technologies</span>
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
                key={tech.name}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-navy shadow-sm"
              >
                {tech.name}
                <span className="ml-2 text-xs text-muted-foreground font-normal">{tech.category}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Investment</div>
            <h2 className="section-title">
              Transparent <span className="text-gradient">pricing</span>
            </h2>
            <p className="section-desc mx-auto">
              Every project is unique, but here's a starting point. Final pricing depends on complexity and requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {service.pricing.map((tier) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`card-elevated p-7 relative ${
                  tier.popular ? "border-primary ring-1 ring-primary" : ""
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-navy">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
                <p className="mt-4 text-3xl font-extrabold text-primary">
                  {tier.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">onwards</span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 block text-center rounded-xl py-3 text-sm font-bold transition-all ${
                    tier.popular
                      ? "btn-primary !block"
                      : "btn-outline !block"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      {service.testimonials.length > 0 && (
        <section className="py-16 md:py-24 bg-cream-dark">
          <div className="container">
            <div className="text-center mb-14">
              <div className="section-label mx-auto">Client Love</div>
              <h2 className="section-title">
                What clients <span className="text-gradient">say</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {service.testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-elevated p-7"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="font-bold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─── */}
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

      {/* ─── OTHER SERVICES ─── */}
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
                <Link key={s.slug} to={`/${s.slug}/`} className="card-elevated card-hover p-6 group">
                  <div className="mb-3 inline-flex rounded-xl bg-primary/8 p-3">
                    <SIcon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-navy">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="card-elevated mx-auto max-w-3xl p-10 text-center md:p-14 bg-navy">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to get <span className="text-gradient">started?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/70 leading-relaxed">
              Let's discuss your {service.title.toLowerCase()} requirements and create something exceptional together.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a href="mailto:hello@thevineet.com" className="btn-outline !border-primary-foreground/20 !text-primary-foreground hover:!bg-primary-foreground/10">
                hello@thevineet.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
