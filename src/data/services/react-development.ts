import { Cpu, Blocks, BarChart3, Zap, Paintbrush, Layers, MonitorSmartphone, TestTube } from "lucide-react";
import type { ServiceData } from "../services";

export const reactDevData: ServiceData = {
  slug: "react-js-development",
  icon: Cpu,
  title: "React.js Development",
  tagline: "Modern, blazing-fast user interfaces",
  heroDescription: "Component-driven UIs that feel lightning-fast. SPAs, dashboards, and interactive web apps with smooth animations and excellent developer experience.",
  heroStats: [
    { value: "60+", label: "React Projects" },
    { value: "60fps", label: "Smooth Animations" },
    { value: "95+", label: "Lighthouse Score" },
    { value: "5+", label: "Years React Exp" },
  ],
  painPoints: [
    { problem: "Your app is slow and users are dropping off", solution: "Performance-optimized React with code splitting, memoization, and virtual scrolling for 60fps interfaces." },
    { problem: "Your frontend code is spaghetti and hard to maintain", solution: "Clean component architecture with TypeScript, proper state management, and reusable design systems." },
    { problem: "You need a rich dashboard but off-the-shelf tools don't fit", solution: "Custom dashboards with charts, tables, filters, and real-time updates tailored to your data." },
    { problem: "Your mobile web experience is terrible", solution: "Progressive Web App features — offline support, push notifications, and app-like experience on mobile." },
  ],
  features: [
    { title: "Single Page Applications", description: "Fast, app-like experiences with routing and real-time data.", icon: MonitorSmartphone },
    { title: "Interactive Dashboards", description: "Data-rich dashboards with charts, tables, and real-time updates.", icon: BarChart3 },
    { title: "Component Libraries", description: "Reusable, documented component systems for consistency.", icon: Blocks },
    { title: "Performance Optimization", description: "Code splitting, lazy loading, and memoization for 60fps.", icon: Zap },
    { title: "Design Systems", description: "Themeable, accessible component libraries with Storybook.", icon: Paintbrush },
    { title: "Testing & QA", description: "Unit, integration, and E2E tests for reliable deployments.", icon: TestTube },
  ],
  caseStudies: [
    {
      title: "Analytics Dashboard for SaaS Platform",
      category: "Dashboard",
      description: "Real-time analytics dashboard with 20+ chart types, advanced filtering, data export, and role-based views.",
      results: [{ label: "Data Points", value: "1M+" }, { label: "Render Time", value: "<200ms" }, { label: "User Adoption", value: "95%" }, { label: "Components", value: "80+" }],
      techUsed: ["React 18", "TypeScript", "Recharts", "TanStack Table", "Zustand", "Tailwind CSS"],
    },
  ],
  process: [
    { step: "01", title: "Component Architecture", description: "Plan component tree, state management, and data flow." },
    { step: "02", title: "Design System Setup", description: "Build theme, tokens, base components, and Storybook docs." },
    { step: "03", title: "Feature Development", description: "Build features with TypeScript, tests, and API integration." },
    { step: "04", title: "Optimization & Launch", description: "Performance audit, bundle optimization, and CI/CD deployment." },
  ],
  techStack: [
    { name: "React 18", category: "Library" }, { name: "TypeScript", category: "Language" }, { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" }, { name: "Zustand", category: "State" }, { name: "React Query", category: "Data" },
    { name: "Framer Motion", category: "Animation" }, { name: "Vite", category: "Build" }, { name: "Vitest", category: "Testing" },
  ],
  pricing: [
    { name: "Component", price: "₹50,000", description: "Individual components or small features", features: ["Custom components", "TypeScript", "Responsive", "Unit tests", "14 days support"] },
    { name: "Application", price: "₹1,50,000", description: "Full SPAs and dashboards", features: ["Full SPA", "State management", "API integration", "Design system", "Testing suite", "30 days support"], popular: true },
    { name: "Enterprise", price: "₹4,00,000+", description: "Complex platforms with design systems", features: ["Large-scale app", "Component library", "Storybook", "CI/CD", "Performance monitoring", "60 days support"] },
  ],
  testimonials: [
    { name: "Alex Rivera", role: "VP Engineering", company: "DataPulse", quote: "The dashboard Vineet built handles millions of data points with sub-200ms renders. Our users love it.", rating: 5 },
  ],
  faqs: [
    { question: "React or Next.js?", answer: "For SEO-critical sites, Next.js. For dashboards and internal tools, React with Vite is faster and simpler." },
    { question: "Do you use TypeScript?", answer: "Always. TypeScript catches bugs early and makes the codebase self-documenting." },
    { question: "Can you integrate with existing APIs?", answer: "Yes — REST or GraphQL APIs with proper caching and error handling." },
  ],
};
