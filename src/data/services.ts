import { Globe, Layers, Code, Cpu, Terminal, Sparkles } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: typeof Globe;
  title: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  techStack: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    tagline: "Custom websites that convert visitors into customers",
    description:
      "I build fast, responsive, SEO-optimized websites tailored to your business. From elegant landing pages to complex multi-page portals — every pixel is crafted for performance and conversion.",
    features: [
      { title: "Mobile-First Design", description: "Every site I build looks and works flawlessly on phones, tablets, and desktops — because over 60% of your traffic is mobile." },
      { title: "Lightning-Fast Performance", description: "Optimized assets, lazy loading, and modern build tools ensure your site loads in under 2 seconds." },
      { title: "SEO Built-In", description: "Clean semantic HTML, structured data, meta tags, and Core Web Vitals optimization from day one." },
      { title: "Conversion-Focused", description: "Strategic CTAs, trust signals, and user journeys designed to turn visitors into paying customers." },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React", "Next.js", "Vite", "GSAP"],
    process: [
      { step: "01", title: "Requirements & Wireframing", description: "We discuss your goals, target audience, and content structure. I deliver wireframes for approval." },
      { step: "02", title: "UI Design & Prototyping", description: "Pixel-perfect mockups with your brand colors, fonts, and imagery — fully interactive prototypes." },
      { step: "03", title: "Development & Testing", description: "Clean, semantic code with cross-browser testing, accessibility checks, and performance optimization." },
      { step: "04", title: "Launch & Support", description: "Deployment, analytics setup, and 30 days of post-launch support to ensure everything runs smoothly." },
    ],
    faqs: [
      { question: "How long does a website take to build?", answer: "A standard business website takes 2–4 weeks. Complex sites with custom features may take 4–8 weeks." },
      { question: "Do you provide hosting?", answer: "I can recommend and set up hosting, or deploy to your preferred provider. I work with Vercel, Netlify, AWS, and traditional hosts." },
      { question: "Will my site be mobile-friendly?", answer: "Absolutely. Every site I build is mobile-first and tested on real devices across multiple screen sizes." },
    ],
  },
  {
    slug: "wordpress-development",
    icon: Layers,
    title: "WordPress Development",
    tagline: "Powerful WordPress sites your team will love managing",
    description:
      "Custom WordPress themes, plugins, and WooCommerce stores built for speed, security, and ease of use. No bloated page builders — just clean, maintainable code.",
    features: [
      { title: "Custom Theme Development", description: "Bespoke themes built from scratch — no bloated templates. Fast, secure, and perfectly aligned with your brand." },
      { title: "Plugin Development", description: "Custom plugins for unique functionality — booking systems, calculators, integrations, and more." },
      { title: "WooCommerce Stores", description: "Full e-commerce solutions with custom product pages, payment gateways, and inventory management." },
      { title: "Easy Content Management", description: "Intuitive admin panels with custom fields, so your team can update content without touching code." },
    ],
    techStack: ["WordPress", "PHP", "ACF Pro", "WooCommerce", "Elementor", "MySQL", "REST API", "Gutenberg"],
    process: [
      { step: "01", title: "Site Audit & Planning", description: "Analyze your current site (if any), define content architecture, and plan the custom development roadmap." },
      { step: "02", title: "Theme & Plugin Design", description: "Design the theme structure and identify required plugins — custom or existing." },
      { step: "03", title: "Development & Migration", description: "Build the theme, develop custom plugins, migrate content, and set up staging for review." },
      { step: "04", title: "Launch & Training", description: "Go live, train your team on the admin panel, and provide documentation for ongoing management." },
    ],
    faqs: [
      { question: "Can you customize existing WordPress themes?", answer: "Yes, I can modify or build child themes on top of existing themes, though custom themes offer better performance and flexibility." },
      { question: "Do you build WooCommerce stores?", answer: "Absolutely. I build complete e-commerce solutions with custom product pages, checkout flows, and payment gateway integrations." },
      { question: "How do you handle WordPress security?", answer: "I follow best practices — secure hosting, regular updates, strong authentication, and security plugins. I also harden wp-config and limit login attempts." },
    ],
  },
  {
    slug: "laravel-development",
    icon: Code,
    title: "Laravel Development",
    tagline: "Enterprise-grade web applications built to scale",
    description:
      "Robust backend systems, REST APIs, and SaaS platforms built with Laravel's elegant architecture. Clean code, comprehensive testing, and maintainable systems that grow with your business.",
    features: [
      { title: "SaaS Platform Development", description: "Multi-tenant applications with subscription billing, user management, and role-based access control." },
      { title: "REST API Development", description: "Well-documented, versioned APIs with authentication, rate limiting, and comprehensive error handling." },
      { title: "Admin Dashboards", description: "Custom admin panels with real-time data, charts, reports, and user management — built with Laravel and modern frontend." },
      { title: "Database Architecture", description: "Optimized database design with migrations, seeders, and query optimization for high-performance applications." },
    ],
    techStack: ["Laravel", "PHP 8+", "MySQL", "PostgreSQL", "Redis", "Livewire", "Inertia.js", "PHPUnit"],
    process: [
      { step: "01", title: "Technical Specification", description: "Define the system architecture, database schema, API contracts, and integration requirements." },
      { step: "02", title: "Sprint Planning", description: "Break the project into 2-week sprints with clear deliverables and milestones." },
      { step: "03", title: "Agile Development", description: "Build features iteratively with code reviews, automated testing, and regular demo sessions." },
      { step: "04", title: "Deployment & Monitoring", description: "CI/CD pipeline setup, server configuration, and monitoring for uptime and performance." },
    ],
    faqs: [
      { question: "Why Laravel over other PHP frameworks?", answer: "Laravel offers elegant syntax, built-in tools for common tasks (auth, queues, caching), and a massive ecosystem. It's the most productive PHP framework for building modern web apps." },
      { question: "Can you build APIs for mobile apps?", answer: "Yes, I build RESTful APIs with Laravel Sanctum or Passport for authentication, designed to power iOS, Android, and web frontends." },
      { question: "Do you write tests?", answer: "Always. I write unit and feature tests using PHPUnit and Pest, ensuring code reliability and making future changes safe." },
    ],
  },
  {
    slug: "react-js-development",
    icon: Cpu,
    title: "React.js Development",
    tagline: "Modern, blazing-fast user interfaces",
    description:
      "Component-driven UIs that feel lightning-fast. Single-page applications, dashboards, and interactive web apps with smooth animations and excellent developer experience.",
    features: [
      { title: "Single Page Applications", description: "Fast, app-like experiences with client-side routing, state management, and real-time data updates." },
      { title: "Interactive Dashboards", description: "Data-rich dashboards with charts, tables, filters, and real-time updates — built for complex data visualization." },
      { title: "Component Libraries", description: "Reusable, well-documented component systems that ensure consistency and speed up future development." },
      { title: "Performance Optimization", description: "Code splitting, lazy loading, memoization, and virtual scrolling for buttery-smooth 60fps interfaces." },
    ],
    techStack: ["React 18", "TypeScript", "Next.js", "Tailwind CSS", "Zustand", "React Query", "Framer Motion", "Vite"],
    process: [
      { step: "01", title: "Component Architecture", description: "Plan the component tree, state management strategy, and data flow patterns." },
      { step: "02", title: "Design System Setup", description: "Build the foundation — theme, tokens, base components, and Storybook documentation." },
      { step: "03", title: "Feature Development", description: "Build features with TypeScript, write tests, and integrate with your API layer." },
      { step: "04", title: "Optimization & Launch", description: "Performance audit, bundle optimization, and deployment with CI/CD." },
    ],
    faqs: [
      { question: "React or Next.js?", answer: "For SEO-critical sites, I recommend Next.js (server rendering). For dashboards and internal tools, plain React with Vite is faster and simpler." },
      { question: "Can you integrate with existing APIs?", answer: "Yes. I can connect your React frontend to any REST or GraphQL API, with proper caching and error handling." },
      { question: "Do you use TypeScript?", answer: "Always. TypeScript catches bugs early, improves maintainability, and makes the codebase self-documenting." },
    ],
  },
  {
    slug: "php-development",
    icon: Terminal,
    title: "PHP Development",
    tagline: "Reliable, battle-tested web solutions",
    description:
      "Custom PHP applications for e-commerce, CRMs, business tools, and legacy system modernization. Reliable, performant, and secure — backed by a decade of PHP expertise.",
    features: [
      { title: "Custom Web Applications", description: "Tailored solutions for unique business requirements — CRMs, ERPs, booking systems, and internal tools." },
      { title: "E-commerce Solutions", description: "Custom shopping carts, payment integrations, inventory management, and order processing systems." },
      { title: "Legacy Modernization", description: "Upgrade older PHP codebases to modern standards — better security, performance, and maintainability." },
      { title: "API & Integration", description: "Connect your PHP application to third-party services — payment gateways, CRMs, shipping providers, and more." },
    ],
    techStack: ["PHP 8+", "MySQL", "PostgreSQL", "Composer", "PHPUnit", "Docker", "REST APIs", "Redis"],
    process: [
      { step: "01", title: "Assessment & Planning", description: "Audit existing systems, define requirements, and create a development roadmap with clear priorities." },
      { step: "02", title: "Architecture Design", description: "Design the application structure, database schema, and integration points." },
      { step: "03", title: "Iterative Development", description: "Build in phases with regular reviews, testing, and stakeholder feedback." },
      { step: "04", title: "Deployment & Maintenance", description: "Server setup, deployment automation, and ongoing support with SLA options." },
    ],
    faqs: [
      { question: "Is PHP still relevant?", answer: "Absolutely. PHP powers 77% of all websites (including WordPress and Facebook). Modern PHP 8+ is fast, type-safe, and developer-friendly." },
      { question: "Can you modernize my old PHP app?", answer: "Yes. I specialize in upgrading legacy PHP applications — refactoring code, upgrading PHP versions, and improving architecture." },
      { question: "Do you work with frameworks?", answer: "Yes — Laravel, Symfony, and CodeIgniter. For simpler projects, I also work with vanilla PHP and micro-frameworks." },
    ],
  },
  {
    slug: "ai-integration",
    icon: Sparkles,
    title: "AI Integration",
    tagline: "Supercharge your products with artificial intelligence",
    description:
      "Add AI capabilities to your existing products or build new AI-powered solutions. Chatbots, content generation, recommendation engines, and intelligent automation.",
    features: [
      { title: "AI Chatbots & Assistants", description: "Custom chatbots powered by GPT-4, Claude, or open-source models — trained on your data and integrated into your platform." },
      { title: "Content Generation", description: "Automated content pipelines for blog posts, product descriptions, emails, and social media — with human-in-the-loop quality control." },
      { title: "Recommendation Engines", description: "Personalized product, content, or service recommendations that increase engagement and revenue." },
      { title: "Process Automation", description: "Intelligent workflow automation — document processing, data extraction, classification, and summarization." },
    ],
    techStack: ["OpenAI API", "Claude API", "LangChain", "Python", "RAG", "Vector DBs", "Hugging Face", "TensorFlow"],
    process: [
      { step: "01", title: "Use Case Discovery", description: "Identify where AI can add the most value — reducing costs, improving UX, or automating repetitive tasks." },
      { step: "02", title: "Proof of Concept", description: "Build a working prototype to validate the approach, test accuracy, and measure ROI potential." },
      { step: "03", title: "Production Build", description: "Scale the solution with proper error handling, monitoring, fallbacks, and cost optimization." },
      { step: "04", title: "Iteration & Training", description: "Continuously improve model performance with feedback loops, fine-tuning, and A/B testing." },
    ],
    faqs: [
      { question: "Which AI models do you work with?", answer: "I work with OpenAI (GPT-4), Anthropic (Claude), and open-source models. The choice depends on your use case, budget, and data privacy requirements." },
      { question: "How much does AI integration cost?", answer: "It varies widely. A simple chatbot might cost ₹50K–2L, while a custom recommendation engine could be ₹3L–10L+. API costs are ongoing." },
      { question: "Can AI work with my existing data?", answer: "Yes. I can build RAG (Retrieval-Augmented Generation) systems that use your documents, databases, and knowledge bases to provide accurate, contextual responses." },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  servicesData.find((s) => s.slug === slug);
