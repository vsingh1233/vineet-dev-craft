import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "It depends on the scope. A simple website takes 1-2 weeks. A complex web app or SaaS platform can take 4-8 weeks. I'll give you a detailed timeline during our discovery call — and I stick to it.",
  },
  {
    q: "How much do your services cost?",
    a: "I offer transparent, project-based pricing. A basic website starts from $500, while complex applications are quoted after understanding your requirements. No hidden fees, no surprises. I'll provide a detailed proposal before we begin.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. I offer flexible maintenance plans that include bug fixes, security updates, performance monitoring, and feature additions. Most clients stay with me long-term because I treat their project like my own.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Yes! I frequently collaborate with in-house teams, designers, and other developers. I'm comfortable with Git workflows, code reviews, and agile sprints. Communication is my strong suit.",
  },
  {
    q: "What if I need changes after the project is done?",
    a: "I include a revision period in every project. After launch, my maintenance plans cover ongoing changes. I build with clean, documented code so modifications are always straightforward.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, I'm happy to sign NDAs before discussing your project details. Client confidentiality is something I take very seriously. Your ideas and data are always protected.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-sm font-semibold text-navy pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">FAQ</div>
          <h2 className="section-title">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="section-desc mx-auto">
            Got questions? Here are the most common ones. Don't see yours? 
            Feel free to reach out.
          </p>
        </div>

        <div className="mx-auto max-w-2xl card-elevated p-2 md:p-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
