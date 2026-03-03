import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    content: "Vineet transformed our outdated website into a modern, high-converting platform. Our lead generation increased by 40% within the first month. His attention to detail and understanding of business goals is remarkable.",
    rating: 5,
  },
  {
    name: "James Cooper",
    role: "Founder, GreenLeaf E-commerce",
    content: "We needed a complex WooCommerce store with custom features. Vineet delivered on time, on budget, and the final product exceeded our expectations. He's now our go-to developer for all projects.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, FinServ India",
    content: "The Laravel-based CRM Vineet built for us has saved our team 20+ hours per week. His code is clean, well-documented, and the post-launch support has been exceptional. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CTO, AI Startup Labs",
    content: "Vineet integrated GPT-4 into our SaaS product seamlessly. His understanding of both frontend and AI backend made the project smooth. The chatbot he built handles 80% of our customer queries automatically.",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream-dark">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Testimonials</div>
          <h2 className="section-title">
            What clients <span className="text-gradient">say about me</span>
          </h2>
          <p className="section-desc mx-auto">
            Don't just take my word for it. Here's what real clients have to say 
            about working with me.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="card-elevated p-7 relative"
            >
              <Quote size={32} className="absolute top-6 right-6 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                "{t.content}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-primary-foreground">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
