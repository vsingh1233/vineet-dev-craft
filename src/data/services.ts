import { Globe, Layers, Code, Cpu, Terminal, Sparkles, LucideIcon } from "lucide-react";

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  results: { label: string; value: string }[];
  techUsed: string[];
}

export interface PainPoint {
  problem: string;
  solution: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  heroDescription: string;
  heroStats: { value: string; label: string }[];
  painPoints: PainPoint[];
  features: { title: string; description: string; icon: LucideIcon }[];
  caseStudies: CaseStudy[];
  process: { step: string; title: string; description: string }[];
  techStack: { name: string; category: string }[];
  pricing: PricingTier[];
  testimonials: ServiceTestimonial[];
  faqs: { question: string; answer: string }[];
}

// We'll import sub-data per service
import { websiteDevData } from "./services/website-development";
import { wordpressDevData } from "./services/wordpress-development";
import { laravelDevData } from "./services/laravel-development";
import { reactDevData } from "./services/react-development";
import { phpDevData } from "./services/php-development";
import { aiIntegrationData } from "./services/ai-integration";

export const servicesData: ServiceData[] = [
  websiteDevData,
  wordpressDevData,
  laravelDevData,
  reactDevData,
  phpDevData,
  aiIntegrationData,
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  servicesData.find((s) => s.slug === slug);
