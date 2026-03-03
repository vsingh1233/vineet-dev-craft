import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, TrendingUp, Award, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10+ Years of Proven Expertise",
    description: "Not a beginner experimenting with your project. I bring a decade of battle-tested experience across PHP, Laravel, WordPress, React.js, and modern AI — delivering enterprise-grade results every time.",
  },
  {
    icon: HeartHandshake,
    title: "You Talk to the Developer, Not a Middleman",
    description: "No project managers, no miscommunication. You work directly with me — the person writing your code. This means faster decisions, better understanding of your vision, and zero lost-in-translation moments.",
  },
  {
    icon: TrendingUp,
    title: "Built for Business Results, Not Just Code",
    description: "I don't just build websites — I build revenue-generating digital assets. Every decision I make is guided by your business goals: conversions, speed, SEO rankings, and user experience.",
  },
  {
    icon: Shield,
    title: "Security & Performance Are Non-Negotiable",
    description: "Every project gets SSL, input validation, SQL injection protection, and performance optimization baked in from day one. Your users get a fast, secure experience — always.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "In 10 years, I've maintained a 95%+ on-time delivery rate. I set realistic timelines, communicate proactively, and never ghost my clients. You'll always know where your project stands.",
  },
  {
    icon: MessageCircle,
    title: "Post-Launch Support & Maintenance",
    description: "My relationship with clients doesn't end at launch. I offer ongoing support, bug fixes, and feature updates so your website continues to grow alongside your business.",
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

const WhyChooseMe = () => {
  return (
    <section id="why-me" className="py-20 md:py-28 bg-cream-dark">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-label mx-auto">Why Choose Me</div>
          <h2 className="section-title">
            Not just another <span className="text-gradient">developer</span>
          </h2>
          <p className="section-desc mx-auto">
            Hiring a developer is a big decision. Here's why 50+ clients trust me 
            with their most important digital projects.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              className="card-elevated card-hover p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/8 p-3">
                <reason.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-navy leading-snug">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
