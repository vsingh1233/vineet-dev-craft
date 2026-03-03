import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated mx-auto max-w-2xl rounded-2xl border border-border p-10 text-center md:p-14"
        >
          <div className="mx-auto mb-6 inline-flex rounded-full bg-primary/10 p-4">
            <Mail size={28} className="text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-muted-foreground leading-relaxed">
            Have a project in mind? I'd love to hear about it. Drop me a message 
            and let's turn your idea into reality.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@thevineet.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
            >
              hello@thevineet.com
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
