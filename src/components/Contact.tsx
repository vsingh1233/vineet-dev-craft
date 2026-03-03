import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated mx-auto max-w-3xl p-10 text-center md:p-14"
        >
          <div className="mx-auto mb-6 inline-flex rounded-full bg-primary/8 p-4">
            <Mail size={28} className="text-primary" />
          </div>
          <h2 className="section-title !mt-0">
            Ready to start your <span className="text-gradient">project?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Whether you have a detailed specification or just an idea on a napkin — 
            I'd love to hear about it. Let's discuss how I can help bring your vision to life.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="mailto:hello@thevineet.com" className="btn-primary">
              hello@thevineet.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              Available Mon–Sat
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              India · Serving clients worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
