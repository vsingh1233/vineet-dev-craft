import laravelImg from "@/assets/blog/laravel-2025.jpg";
import reactImg from "@/assets/blog/react-performance.jpg";
import aiImg from "@/assets/blog/ai-integration.jpg";
import wordpressImg from "@/assets/blog/wordpress-2025.jpg";
import cleanCodeImg from "@/assets/blog/clean-code.jpg";
import tailwindImg from "@/assets/blog/tailwind-css.jpg";

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
}

export const authors: Author[] = [
  {
    id: "vineet",
    name: "Vineet Kumar",
    slug: "vineet-kumar",
    bio: "Full-stack developer with 10+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and sharing knowledge through writing.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    role: "Lead Developer & Writer",
    social: {
      twitter: "https://twitter.com/vineet",
      linkedin: "https://linkedin.com/in/vineet",
      github: "https://github.com/vineet",
    },
  },
  {
    id: "priya",
    name: "Priya Sharma",
    slug: "priya-sharma",
    bio: "Frontend specialist and UI/UX enthusiast. Loves crafting pixel-perfect interfaces and writing about modern web technologies.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    role: "Frontend Developer",
    social: {
      twitter: "https://twitter.com/priya",
      linkedin: "https://linkedin.com/in/priya",
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Laravel Remains the Best PHP Framework in 2025",
    slug: "why-laravel-best-php-framework-2025",
    excerpt: "Laravel continues to dominate the PHP ecosystem with its elegant syntax, powerful features, and thriving community. Here's why it should be your go-to framework.",
    content: `
## The Evolution of Laravel

Laravel has come a long way since its inception. With each version, it has introduced features that make web development more enjoyable and productive.

### Elegant Syntax

One of Laravel's standout features is its clean, readable syntax. Unlike other frameworks that require verbose configuration, Laravel embraces convention over configuration.

\`\`\`php
// Clean route definition
Route::get('/posts', [PostController::class, 'index']);

// Eloquent ORM - simple and powerful
$posts = Post::where('published', true)
    ->with('author')
    ->latest()
    ->paginate(15);
\`\`\`

### Built-in Tools

Laravel ships with everything you need:

- **Eloquent ORM** — An intuitive ActiveRecord implementation
- **Blade Templates** — Powerful templating with zero overhead
- **Artisan CLI** — Command-line tool for common tasks
- **Queue System** — Robust background job processing
- **Laravel Forge** — Server management made simple

### The Ecosystem

What truly sets Laravel apart is its ecosystem. From Laravel Nova for admin panels to Laravel Vapor for serverless deployment, the ecosystem covers every need.

## Performance Improvements

Laravel 11 brought significant performance improvements, including:

1. Route caching optimizations
2. Improved query builder performance
3. Better memory management
4. Streamlined middleware pipeline

## Community & Support

With over 75,000 GitHub stars and a vibrant community, getting help with Laravel is never a problem. The official documentation is comprehensive, and resources like Laracasts provide world-class video tutorials.

## Conclusion

Laravel's combination of elegant syntax, powerful features, and a thriving ecosystem makes it the best choice for PHP development in 2025. Whether you're building a simple blog or a complex SaaS application, Laravel has you covered.
    `,
    coverImage: laravelImg,
    category: "PHP",
    tags: ["Laravel", "PHP", "Backend", "Web Development"],
    author: authors[0],
    publishedAt: "2025-03-01",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Building Performant React Applications: A Complete Guide",
    slug: "building-performant-react-applications",
    excerpt: "Learn the techniques and patterns that separate good React apps from great ones. From memoization to code splitting, master performance optimization.",
    content: `
## Why Performance Matters

A slow React application leads to poor user experience and lower conversion rates. Studies show that even a 100ms delay can impact user engagement.

### Key Performance Metrics

- **First Contentful Paint (FCP)** — When the first content appears
- **Largest Contentful Paint (LCP)** — When the main content loads
- **Time to Interactive (TTI)** — When the page becomes interactive
- **Cumulative Layout Shift (CLS)** — Visual stability

## Optimization Techniques

### 1. React.memo and useMemo

Prevent unnecessary re-renders by memoizing components and computed values:

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processed = useMemo(() => 
    data.map(item => heavyComputation(item)), 
    [data]
  );
  
  return <List items={processed} />;
});
\`\`\`

### 2. Code Splitting

Use dynamic imports to load code only when needed:

\`\`\`tsx
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

### 3. Virtual Lists

For long lists, render only visible items using virtualization.

## State Management

Choose the right state management approach based on your needs. Not every app needs Redux — often React's built-in state management is sufficient.

## Conclusion

Performance optimization is an ongoing process. Start with measurement, apply targeted optimizations, and continuously monitor your metrics.
    `,
    coverImage: reactImg,
    category: "React",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    author: authors[0],
    publishedAt: "2025-02-15",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Integrating AI Into Your Web Applications: A Practical Approach",
    slug: "integrating-ai-web-applications-practical-approach",
    excerpt: "AI doesn't have to be complicated. Learn how to add intelligent features to your existing web apps with practical examples and real-world use cases.",
    content: `
## AI is More Accessible Than Ever

Gone are the days when AI required a PhD and massive infrastructure. Modern APIs and tools make it possible for any developer to add AI capabilities to their applications.

### Common AI Use Cases for Web Apps

1. **Content Generation** — Blog posts, product descriptions, emails
2. **Chatbots** — Customer support, lead qualification
3. **Search Enhancement** — Semantic search, recommendations
4. **Image Processing** — Moderation, tagging, generation
5. **Data Analysis** — Pattern recognition, anomaly detection

## Getting Started with OpenAI API

The simplest way to add AI is through API integrations:

\`\`\`javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  body: JSON.stringify({ prompt: userInput }),
});

const { result } = await response.json();
\`\`\`

## Building an AI-Powered Search

Semantic search understands intent, not just keywords. By converting your content into embeddings, you can find relevant results even when exact terms don't match.

## Practical Tips

- **Start small** — Add AI to one feature first
- **Cache responses** — AI API calls are expensive, cache when possible
- **Handle failures gracefully** — Always have a fallback
- **Monitor costs** — Set usage limits and alerts

## Conclusion

AI integration is a journey, not a destination. Start with the simplest implementation that adds value, then iterate based on user feedback.
    `,
    coverImage: aiImg,
    category: "AI",
    tags: ["AI", "Machine Learning", "API", "Web Development"],
    author: authors[1],
    publishedAt: "2025-02-28",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "WordPress in 2025: Still Relevant for Modern Web Development?",
    slug: "wordpress-2025-still-relevant",
    excerpt: "WordPress powers 43% of the web, but is it still the right choice? We explore when WordPress makes sense and when to consider alternatives.",
    content: `
## The State of WordPress

WordPress continues to evolve. With the block editor (Gutenberg), Full Site Editing, and a growing REST API, it's more capable than ever.

### When WordPress is the Right Choice

- **Content-heavy sites** — Blogs, news sites, magazines
- **Client projects** — Non-technical users can manage content
- **E-commerce** — WooCommerce is a powerhouse
- **Quick launches** — Get a site live in days, not weeks

### When to Consider Alternatives

- **Complex web applications** — React/Vue with a headless CMS
- **High-traffic APIs** — Node.js or Go might be better suited
- **Real-time features** — WebSocket-heavy applications

## The Headless WordPress Approach

The best of both worlds: use WordPress as a CMS and React/Next.js for the frontend.

## Performance Optimization

WordPress sites can be fast with the right approach:

1. Quality hosting (avoid cheap shared hosting)
2. Minimal plugins (each one adds overhead)
3. Image optimization
4. Caching at every layer
5. CDN for static assets

## Conclusion

WordPress remains an excellent choice for content-driven websites. The key is knowing when it's the right tool and how to optimize it properly.
    `,
    coverImage: wordpressImg,
    category: "WordPress",
    tags: ["WordPress", "CMS", "Web Development", "PHP"],
    author: authors[0],
    publishedAt: "2025-01-20",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "The Art of Clean Code: Principles Every Developer Should Follow",
    slug: "art-of-clean-code-principles",
    excerpt: "Writing clean code isn't about following rigid rules — it's about making your code readable, maintainable, and a joy to work with.",
    content: `
## What is Clean Code?

Clean code is code that is easy to read, understand, and modify. It communicates its intent clearly without requiring extensive comments or documentation.

### Core Principles

#### 1. Meaningful Names

Variables, functions, and classes should reveal their purpose:

\`\`\`typescript
// Bad
const d = new Date();
const fn = (u: any) => u.n + ' ' + u.l;

// Good
const currentDate = new Date();
const getFullName = (user: User) => user.firstName + ' ' + user.lastName;
\`\`\`

#### 2. Small Functions

Each function should do one thing and do it well. If a function needs a comment to explain what it does, it should probably be split into smaller functions.

#### 3. DRY (Don't Repeat Yourself)

Duplication is the root of many maintenance nightmares. Extract common logic into shared utilities.

#### 4. Consistent Style

Pick a style and stick with it. Use linters and formatters to enforce consistency automatically.

## The Boy Scout Rule

Always leave the code cleaner than you found it. Small improvements compound over time.

## Conclusion

Clean code is a practice, not a destination. Every line you write is an opportunity to make your codebase better.
    `,
    coverImage: cleanCodeImg,
    category: "Best Practices",
    tags: ["Clean Code", "Best Practices", "Software Engineering"],
    author: authors[1],
    publishedAt: "2025-02-05",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Mastering Tailwind CSS: From Utility-First to Design System",
    slug: "mastering-tailwind-css-design-system",
    excerpt: "Tailwind CSS is more than utility classes. Learn how to build a scalable design system that keeps your styles consistent and maintainable.",
    content: `
## Beyond Utility Classes

Tailwind CSS has revolutionized how we write CSS. But to truly master it, you need to understand how to build a design system on top of it.

### Setting Up Your Design Tokens

Start by defining your tokens in tailwind.config.ts:

\`\`\`typescript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef7ed',
          500: '#e67e22',
          900: '#1a2332',
        },
      },
    },
  },
};
\`\`\`

### Component Patterns

Use CVA (Class Variance Authority) to create component variants that scale.

### Responsive Design

Tailwind's responsive modifiers make building adaptive layouts intuitive.

## Conclusion

A well-structured Tailwind setup is the foundation for consistent, maintainable designs.
    `,
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop",
    category: "CSS",
    tags: ["Tailwind CSS", "Design System", "Frontend", "CSS"],
    author: authors[0],
    publishedAt: "2025-03-05",
    readTime: "9 min read",
    featured: true,
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const getAuthorBySlug = (slug: string) => authors.find((a) => a.slug === slug);
export const getPostsByAuthor = (authorId: string) => blogPosts.filter((p) => p.author.id === authorId);
export const getRelatedPosts = (post: BlogPost, limit = 3) =>
  blogPosts.filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))).slice(0, limit);
export const getCategories = () => [...new Set(blogPosts.map((p) => p.category))];
