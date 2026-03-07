import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, getCategories } from "@/data/blog";
import { Badge } from "@/components/ui/badge";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...getCategories()];
  const featured = blogPosts.find((p) => p.featured);
  const filtered = activeCategory === "All"
    ? blogPosts.filter((p) => p.id !== featured?.id)
    : blogPosts.filter((p) => p.category === activeCategory && p.id !== featured?.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Blog</span>
            <h1 className="section-title">Insights & Articles</h1>
            <p className="section-desc">
              Thoughts on web development, technology, and building great digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === "All" && (
        <section className="pb-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to={`/blog/${featured.slug}`} className="group block">
                <div className="card-elevated card-hover overflow-hidden grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <Badge variant="secondary" className="w-fit mb-4 text-xs">
                      Featured
                    </Badge>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      {featured.category}
                    </span>
                    <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-navy leading-tight">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <img
                        src={featured.author.avatar}
                        alt={featured.author.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-navy">{featured.author.name}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {featured.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <article className="card-elevated card-hover h-full flex flex-col overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                        <Link
                          to={`/author/${post.author.slug}`}
                          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-7 w-7 rounded-full object-cover"
                          />
                          <span className="text-xs font-medium text-navy">{post.author.name}</span>
                        </Link>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              No articles found in this category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
