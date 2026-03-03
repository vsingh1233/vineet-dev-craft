import { Sparkles, Bot, FileText, Brain, Workflow, BarChart3, Lightbulb, Cpu } from "lucide-react";
import type { ServiceData } from "../services";

export const aiIntegrationData: ServiceData = {
  slug: "ai-integration",
  icon: Sparkles,
  title: "AI Integration",
  tagline: "Supercharge your products with artificial intelligence",
  heroDescription: "Add AI capabilities to your existing products or build new AI-powered solutions. Chatbots, content generation, recommendation engines, and intelligent automation.",
  heroStats: [
    { value: "30+", label: "AI Projects" },
    { value: "500K+", label: "AI Queries Processed" },
    { value: "40%", label: "Avg Cost Reduction" },
    { value: "3+", label: "Years AI Experience" },
  ],
  painPoints: [
    { problem: "Your team spends hours on repetitive tasks", solution: "AI-powered automation for document processing, data entry, email responses, and content creation." },
    { problem: "Customer support is overwhelmed with basic queries", solution: "Intelligent chatbots trained on your data that handle 70% of queries without human intervention." },
    { problem: "You're not leveraging your data for personalization", solution: "Recommendation engines that increase engagement, cross-sells, and customer lifetime value." },
    { problem: "Content creation is slow and expensive", solution: "AI content pipelines with human-in-the-loop quality control for blogs, descriptions, and marketing copy." },
  ],
  features: [
    { title: "AI Chatbots", description: "Custom chatbots powered by GPT-4/Claude, trained on your data.", icon: Bot },
    { title: "Content Generation", description: "Automated content pipelines with human-in-the-loop QC.", icon: FileText },
    { title: "Recommendation Engines", description: "Personalized recommendations that boost engagement.", icon: Brain },
    { title: "Process Automation", description: "Document processing, data extraction, and classification.", icon: Workflow },
    { title: "Analytics & Insights", description: "AI-powered analytics for patterns humans might miss.", icon: BarChart3 },
    { title: "Custom AI Solutions", description: "Bespoke AI features tailored to your unique business needs.", icon: Lightbulb },
  ],
  caseStudies: [
    {
      title: "AI Customer Support Bot for E-commerce",
      category: "Chatbot",
      description: "Built an AI chatbot trained on 5,000+ product FAQs that handles order tracking, returns, and product recommendations.",
      results: [{ label: "Queries Automated", value: "72%" }, { label: "Response Time", value: "<3s" }, { label: "CSAT Score", value: "4.6/5" }, { label: "Support Cost", value: "-45%" }],
      techUsed: ["OpenAI GPT-4", "LangChain", "Pinecone", "Node.js", "React"],
    },
  ],
  process: [
    { step: "01", title: "Use Case Discovery", description: "Identify where AI adds the most value — cost reduction, UX improvement, or automation." },
    { step: "02", title: "Proof of Concept", description: "Working prototype to validate approach, test accuracy, and measure ROI." },
    { step: "03", title: "Production Build", description: "Scale with error handling, monitoring, fallbacks, and cost optimization." },
    { step: "04", title: "Iteration", description: "Continuously improve with feedback loops, fine-tuning, and A/B testing." },
  ],
  techStack: [
    { name: "OpenAI API", category: "LLM" }, { name: "Claude API", category: "LLM" }, { name: "LangChain", category: "Framework" },
    { name: "Python", category: "Language" }, { name: "RAG", category: "Architecture" }, { name: "Pinecone", category: "Vector DB" },
    { name: "Hugging Face", category: "Models" }, { name: "Node.js", category: "Backend" }, { name: "React", category: "Frontend" },
  ],
  pricing: [
    { name: "Starter AI", price: "₹50,000", description: "Simple chatbot or content automation", features: ["Basic chatbot", "FAQ training", "Web integration", "Analytics", "14 days support"] },
    { name: "Business AI", price: "₹2,00,000", description: "Custom AI features with your data", features: ["Custom RAG system", "Data training", "API integration", "Monitoring", "30 days support"], popular: true },
    { name: "Enterprise AI", price: "₹5,00,000+", description: "Complex AI systems at scale", features: ["Multi-model setup", "Custom fine-tuning", "Advanced analytics", "SLA support", "Ongoing optimization"] },
  ],
  testimonials: [
    { name: "Nisha Reddy", role: "Head of Support", company: "ShopEase", quote: "The AI chatbot handles 72% of our support queries automatically. Our team now focuses on complex issues instead of answering the same questions daily.", rating: 5 },
  ],
  faqs: [
    { question: "Which AI models do you work with?", answer: "OpenAI GPT-4, Anthropic Claude, and open-source models. Choice depends on use case, budget, and data privacy." },
    { question: "How much does AI integration cost?", answer: "Simple chatbots ₹50K–2L. Custom recommendation engines ₹3L–10L+. API costs are ongoing." },
    { question: "Can AI work with my existing data?", answer: "Yes — RAG systems that use your documents, databases, and knowledge bases for accurate responses." },
  ],
};
