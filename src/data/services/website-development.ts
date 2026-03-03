import { Globe, Smartphone, Search, Zap, PaintBucket, BarChart3, Shield, Rocket } from "lucide-react";
import type { ServiceData } from "../services";

export const websiteDevData: ServiceData = {
  slug: "website-development",
  icon: Globe,
  title: "Website Development",
  tagline: "Custom websites that convert visitors into customers",
  heroDescription: "I build fast, responsive, SEO-optimized websites tailored to your business. From elegant landing pages to complex multi-page portals — every pixel is crafted for performance and conversion.",
  heroStats: [
    { value: "200+", label: "Websites Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "<1.5s", label: "Avg Load Time" },
    { value: "10+", label: "Years Experience" },
  ],
  painPoints: [
    { problem: "Your website looks outdated and doesn't reflect your brand", solution: "Modern, custom designs that make a strong first impression and build instant trust with visitors." },
    { problem: "Visitors leave because pages load too slowly", solution: "Performance-first development with optimized assets, lazy loading, and modern build tools for sub-2-second load times." },
    { problem: "Your site doesn't show up on Google", solution: "SEO baked in from day one — semantic HTML, structured data, Core Web Vitals optimization, and technical SEO best practices." },
    { problem: "Your site isn't mobile-friendly and you're losing traffic", solution: "Mobile-first, responsive design tested on real devices across all screen sizes." },
  ],
  features: [
    { title: "Mobile-First Design", description: "Every site looks and works flawlessly on phones, tablets, and desktops.", icon: Smartphone },
    { title: "Lightning Performance", description: "Optimized assets, lazy loading, and modern tools ensure sub-2-second load times.", icon: Zap },
    { title: "SEO Built-In", description: "Clean semantic HTML, structured data, meta tags, and Core Web Vitals optimization.", icon: Search },
    { title: "Conversion Focused", description: "Strategic CTAs, trust signals, and user journeys designed to convert.", icon: BarChart3 },
    { title: "Pixel-Perfect Design", description: "Custom designs that match your brand perfectly — no templates.", icon: PaintBucket },
    { title: "Security & SSL", description: "HTTPS, secure forms, input validation, and protection against common attacks.", icon: Shield },
  ],
  caseStudies: [
    {
      title: "SaaS Landing Page for HR Tech Startup",
      category: "Landing Page",
      description: "High-converting landing page with animated hero, feature sections, pricing table, and integrated demo booking.",
      results: [{ label: "Conversion Rate", value: "12.5%" }, { label: "Bounce Rate", value: "-35%" }, { label: "Load Time", value: "0.9s" }, { label: "Demo Bookings", value: "+200%" }],
      techUsed: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
    {
      title: "Multi-page Corporate Site for Logistics Firm",
      category: "Corporate",
      description: "20-page corporate website with service pages, team profiles, case studies, blog, and career portal.",
      results: [{ label: "Organic Traffic", value: "+280%" }, { label: "Page Speed", value: "97/100" }, { label: "Lead Inquiries", value: "+150%" }, { label: "Pages", value: "20+" }],
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    },
  ],
  process: [
    { step: "01", title: "Requirements & Wireframing", description: "We discuss your goals, target audience, and content structure. I deliver wireframes for approval." },
    { step: "02", title: "UI Design", description: "Pixel-perfect mockups with your brand colors, fonts, and imagery." },
    { step: "03", title: "Development", description: "Clean, semantic code with cross-browser testing and performance optimization." },
    { step: "04", title: "Launch & Support", description: "Deployment, analytics setup, and 30 days of post-launch support." },
  ],
  techStack: [
    { name: "HTML5", category: "Frontend" }, { name: "CSS3", category: "Frontend" }, { name: "JavaScript", category: "Frontend" },
    { name: "React", category: "Framework" }, { name: "Next.js", category: "Framework" }, { name: "Tailwind CSS", category: "Styling" },
    { name: "Vite", category: "Build" }, { name: "GSAP", category: "Animation" }, { name: "Vercel", category: "Hosting" },
  ],
  pricing: [
    { name: "Landing Page", price: "₹25,000", description: "Single-page sites for campaigns or launches", features: ["Single page design", "Responsive layout", "Contact form", "Basic SEO", "14 days support"] },
    { name: "Business Site", price: "₹80,000", description: "Multi-page sites for established businesses", features: ["Up to 10 pages", "Custom design", "CMS integration", "SEO optimization", "30 days support"], popular: true },
    { name: "Web Portal", price: "₹2,00,000+", description: "Complex sites with custom features", features: ["Unlimited pages", "Custom features", "API integrations", "Advanced SEO", "60 days support"] },
  ],
  testimonials: [
    { name: "Priya Kapoor", role: "CEO", company: "LogiTech Solutions", quote: "Vineet delivered a stunning corporate site that tripled our organic traffic. His attention to performance and SEO was exceptional.", rating: 5 },
    { name: "Mark Wilson", role: "Founder", company: "LaunchPad HR", quote: "Our SaaS landing page converts at 12.5%. Vineet understood our audience perfectly and crafted a page that sells.", rating: 5 },
  ],
  faqs: [
    { question: "How long does a website take to build?", answer: "A landing page takes 1-2 weeks. Multi-page business sites take 3-5 weeks. Complex portals take 6-10 weeks." },
    { question: "Do you provide hosting?", answer: "I recommend and set up hosting on Vercel, Netlify, or AWS based on your needs. I don't lock you into my hosting." },
    { question: "Will my site be mobile-friendly?", answer: "Every site is mobile-first and tested on real devices across multiple screen sizes and browsers." },
  ],
};
