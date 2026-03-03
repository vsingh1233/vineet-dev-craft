import { Code, Server, Database, Lock, TestTube, GitBranch, LayoutDashboard, Workflow } from "lucide-react";
import type { ServiceData } from "../services";

export const laravelDevData: ServiceData = {
  slug: "laravel-development",
  icon: Code,
  title: "Laravel Development",
  tagline: "Enterprise-grade web applications built to scale",
  heroDescription: "Robust backend systems, REST APIs, and SaaS platforms built with Laravel's elegant architecture. Clean code, comprehensive testing, and maintainable systems.",
  heroStats: [
    { value: "80+", label: "Laravel Projects" },
    { value: "50M+", label: "API Requests Handled" },
    { value: "99.9%", label: "Uptime Achieved" },
    { value: "7+", label: "Years Laravel Exp" },
  ],
  painPoints: [
    { problem: "Your backend is a tangled mess that's impossible to maintain", solution: "Clean MVC architecture with Laravel's elegant patterns — repositories, services, and proper separation of concerns." },
    { problem: "Your API is slow and can't handle growing traffic", solution: "Optimized queries, Redis caching, queue workers, and horizontal scaling strategies for high-traffic applications." },
    { problem: "You need a SaaS platform but don't know where to start", solution: "End-to-end SaaS development — multi-tenancy, subscription billing, user management, and admin dashboards." },
    { problem: "Your current developer left and no one understands the code", solution: "Well-documented, tested code with CI/CD pipelines. Any Laravel developer can pick it up and continue." },
  ],
  features: [
    { title: "SaaS Platforms", description: "Multi-tenant apps with subscriptions, user management, and role-based access.", icon: LayoutDashboard },
    { title: "REST API Development", description: "Versioned, documented APIs with auth, rate limiting, and error handling.", icon: Server },
    { title: "Database Design", description: "Optimized schemas with migrations, seeders, and query optimization.", icon: Database },
    { title: "Authentication & Security", description: "Laravel Sanctum/Passport, 2FA, encryption, and security best practices.", icon: Lock },
    { title: "Automated Testing", description: "Unit and feature tests with PHPUnit/Pest for reliable, bug-free deployments.", icon: TestTube },
    { title: "CI/CD Pipelines", description: "Automated deployments with GitHub Actions, Laravel Forge, and zero-downtime deploys.", icon: GitBranch },
  ],
  caseStudies: [
    {
      title: "Multi-tenant SaaS for Project Management",
      category: "SaaS",
      description: "Built a full project management SaaS with team workspaces, task boards, time tracking, and Stripe billing.",
      results: [{ label: "Active Teams", value: "500+" }, { label: "Monthly Revenue", value: "₹15L" }, { label: "API Response", value: "<100ms" }, { label: "Uptime", value: "99.99%" }],
      techUsed: ["Laravel 10", "Livewire", "MySQL", "Redis", "Stripe", "Laravel Horizon"],
    },
    {
      title: "REST API for Mobile Fintech App",
      category: "API",
      description: "High-performance API serving 10M+ monthly requests for a financial services mobile app with real-time notifications.",
      results: [{ label: "Monthly Requests", value: "10M+" }, { label: "Avg Response", value: "45ms" }, { label: "Test Coverage", value: "92%" }, { label: "Downtime", value: "0" }],
      techUsed: ["Laravel", "PostgreSQL", "Redis", "Laravel Sanctum", "Firebase", "Docker"],
    },
  ],
  process: [
    { step: "01", title: "Technical Specification", description: "Define system architecture, database schema, and API contracts." },
    { step: "02", title: "Sprint Planning", description: "Break into 2-week sprints with clear deliverables." },
    { step: "03", title: "Agile Development", description: "Build features with code reviews, testing, and regular demos." },
    { step: "04", title: "Deployment & Monitoring", description: "CI/CD setup, server config, and performance monitoring." },
  ],
  techStack: [
    { name: "Laravel 10+", category: "Framework" }, { name: "PHP 8+", category: "Language" }, { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" }, { name: "Redis", category: "Cache" }, { name: "Livewire", category: "Frontend" },
    { name: "Inertia.js", category: "Frontend" }, { name: "PHPUnit", category: "Testing" }, { name: "Docker", category: "DevOps" },
    { name: "Laravel Forge", category: "Deployment" },
  ],
  pricing: [
    { name: "API / Backend", price: "₹80,000", description: "REST APIs and backend services", features: ["API development", "Authentication", "Database design", "Documentation", "30 days support"] },
    { name: "Full Application", price: "₹2,50,000", description: "Complete web applications with admin", features: ["Full-stack app", "Admin dashboard", "API + Frontend", "Testing suite", "CI/CD pipeline", "60 days support"], popular: true },
    { name: "SaaS Platform", price: "₹5,00,000+", description: "Multi-tenant SaaS with billing", features: ["Multi-tenancy", "Subscription billing", "Advanced auth", "Queue workers", "Monitoring", "90 days support"] },
  ],
  testimonials: [
    { name: "Vikram Patel", role: "CTO", company: "TaskFlow", quote: "Vineet built our entire SaaS platform from scratch. The code quality is exceptional — clean, tested, and well-documented.", rating: 5 },
    { name: "David Chen", role: "Product Manager", company: "FinServ App", quote: "Our API handles 10M+ requests monthly with zero downtime. Vineet's Laravel expertise is world-class.", rating: 5 },
  ],
  faqs: [
    { question: "Why Laravel over other PHP frameworks?", answer: "Laravel offers elegant syntax, built-in tools for auth, queues, and caching, and the most productive ecosystem for building modern web apps." },
    { question: "Can you build APIs for mobile apps?", answer: "Yes, I build RESTful APIs with Sanctum/Passport for iOS, Android, and web frontends." },
    { question: "Do you write tests?", answer: "Always. Unit and feature tests with PHPUnit/Pest, ensuring 80%+ code coverage." },
  ],
};
