import { Terminal, Server, ShoppingCart, RefreshCw, Database, Shield, Workflow, Settings } from "lucide-react";
import type { ServiceData } from "../services";

export const phpDevData: ServiceData = {
  slug: "php-development",
  icon: Terminal,
  title: "PHP Development",
  tagline: "Reliable, battle-tested web solutions",
  heroDescription: "Custom PHP applications for e-commerce, CRMs, business tools, and legacy system modernization. Reliable, performant, and secure — backed by a decade of PHP expertise.",
  heroStats: [
    { value: "150+", label: "PHP Projects" },
    { value: "10+", label: "Years PHP Expertise" },
    { value: "99%", label: "Client Retention" },
    { value: "50+", label: "Integrations Built" },
  ],
  painPoints: [
    { problem: "Your legacy PHP app is slow and full of security holes", solution: "Modernization to PHP 8+ with proper architecture, security patches, and performance improvements." },
    { problem: "You need a custom tool but SaaS solutions don't fit", solution: "Tailor-made business applications — CRMs, ERPs, booking systems — built exactly to your workflow." },
    { problem: "Your e-commerce site can't handle peak traffic", solution: "Optimized PHP backends with caching, CDN, and database tuning for high-traffic periods." },
    { problem: "Integration nightmares with third-party services", solution: "Clean API integrations with payment gateways, CRMs, shipping providers, and any third-party service." },
  ],
  features: [
    { title: "Custom Web Applications", description: "CRMs, ERPs, booking systems, and internal tools tailored to your business.", icon: Settings },
    { title: "E-commerce Solutions", description: "Custom carts, payment integrations, and inventory management.", icon: ShoppingCart },
    { title: "Legacy Modernization", description: "Upgrade older PHP codebases to modern standards.", icon: RefreshCw },
    { title: "API & Integration", description: "Connect to payment gateways, CRMs, and shipping providers.", icon: Workflow },
    { title: "Database Optimization", description: "Query optimization, indexing, and schema improvements.", icon: Database },
    { title: "Security Hardening", description: "Input validation, encryption, and protection against common attacks.", icon: Shield },
  ],
  caseStudies: [
    {
      title: "Custom CRM for Real Estate Agency",
      category: "CRM",
      description: "Built a custom CRM with lead management, property listings, automated follow-ups, and reporting dashboards.",
      results: [{ label: "Lead Conversion", value: "+65%" }, { label: "Time Saved", value: "20hrs/week" }, { label: "Properties Managed", value: "2,000+" }, { label: "Active Agents", value: "45" }],
      techUsed: ["PHP 8", "MySQL", "jQuery", "REST API", "Twilio", "AWS"],
    },
  ],
  process: [
    { step: "01", title: "Assessment", description: "Audit existing systems and define requirements." },
    { step: "02", title: "Architecture", description: "Design application structure and database schema." },
    { step: "03", title: "Development", description: "Build in phases with regular reviews and testing." },
    { step: "04", title: "Deployment", description: "Server setup, automation, and ongoing support." },
  ],
  techStack: [
    { name: "PHP 8+", category: "Language" }, { name: "MySQL", category: "Database" }, { name: "PostgreSQL", category: "Database" },
    { name: "Composer", category: "Package" }, { name: "PHPUnit", category: "Testing" }, { name: "Docker", category: "DevOps" },
    { name: "REST APIs", category: "Integration" }, { name: "Redis", category: "Cache" }, { name: "AWS", category: "Cloud" },
  ],
  pricing: [
    { name: "Small App", price: "₹60,000", description: "Simple business tools and utilities", features: ["Custom application", "Database design", "Basic UI", "Deployment", "14 days support"] },
    { name: "Business App", price: "₹1,80,000", description: "Full business applications with integrations", features: ["Complex features", "API integrations", "Admin panel", "Testing", "30 days support"], popular: true },
    { name: "Enterprise", price: "₹4,00,000+", description: "Large-scale systems and modernization", features: ["Enterprise scale", "Legacy migration", "Advanced security", "CI/CD", "SLA support"] },
  ],
  testimonials: [
    { name: "Deepak Gupta", role: "Director", company: "Prime Realty", quote: "The CRM Vineet built transformed how we manage leads. Our agents save 20 hours per week on manual tasks.", rating: 5 },
  ],
  faqs: [
    { question: "Is PHP still relevant?", answer: "PHP powers 77% of all websites. Modern PHP 8+ is fast, type-safe, and developer-friendly." },
    { question: "Can you modernize my old PHP app?", answer: "Yes — refactoring code, upgrading PHP versions, and improving architecture is a core specialty." },
    { question: "Do you work with frameworks?", answer: "Laravel, Symfony, CodeIgniter, and vanilla PHP for simpler projects." },
  ],
};
