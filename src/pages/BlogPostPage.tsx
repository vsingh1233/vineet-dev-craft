import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post);

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <br key={i} />;
        if (trimmed.startsWith("### "))
          return <h3 key={i} className="mt-8 mb-3 font-display text-xl font-bold text-navy">{trimmed.slice(4)}</h3>;
        if (trimmed.startsWith("## "))
          return <h2 key={i} className="mt-10 mb-4 font-display text-2xl font-extrabold text-navy">{trimmed.slice(3)}</h2>;
        if (trimmed.startsWith("```"))
          return null; // skip code fence markers
        if (trimmed.startsWith("- **"))
          return (
            <li key={i} className="ml-4 mb-1 text-muted-foreground leading-relaxed list-disc">
              <span dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy">$1</strong>').replace(/`(.*?)`/g, '<code class="rounded bg-secondary px-1.5 py-0.5 text-sm font-mono text-primary">$1</code>') }} />
            </li>
          );
        if (/^\d+\.\s/.test(trimmed))
          return (
            <li key={i} className="ml-4 mb-1 text-muted-foreground leading-relaxed list-decimal">
              {trimmed.replace(/^\d+\.\s/, "")}
            </li>
          );
        // Inline formatting
        const html = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy">$1</strong>')
          .replace(/`(.*?)`/g, '<code class="rounded bg-secondary px-1.5 py-0.5 text-sm font-mono text-primary">$1</code>');
        return <p key={i} className="mb-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />;
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-28 pb-24">
        <div className="container max-w-3xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category & Meta */}
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>

            <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Date */}
            <div className="mt-8 flex items-center gap-4 border-b border-border pb-8">
              <Link to={`/author/${post.author.slug}`}>
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full object-cover hover:ring-2 hover:ring-primary transition-all"
                />
              </Link>
              <div>
                <Link
                  to={`/author/${post.author.slug}`}
                  className="text-sm font-bold text-navy hover:text-primary transition-colors"
                >
                  {post.author.name}
                </Link>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-xl object-cover aspect-[2/1]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-8">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-12 card-elevated p-8 flex flex-col sm:flex-row gap-6 items-start">
            <Link to={`/author/${post.author.slug}`}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-20 w-20 rounded-full object-cover hover:ring-2 hover:ring-primary transition-all"
              />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Written by</p>
              <Link
                to={`/author/${post.author.slug}`}
                className="font-display text-xl font-bold text-navy hover:text-primary transition-colors"
              >
                {post.author.name}
              </Link>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {post.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="container mt-20">
            <h2 className="font-display text-2xl font-extrabold text-navy mb-8">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((rPost) => (
                <Link
                  key={rPost.id}
                  to={`/blog/${rPost.slug}`}
                  className="group block"
                >
                  <article className="card-elevated card-hover overflow-hidden h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={rPost.coverImage}
                        alt={rPost.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {rPost.category}
                      </span>
                      <h3 className="mt-2 font-display text-base font-bold text-navy leading-snug line-clamp-2">
                        {rPost.title}
                      </h3>
                      <span className="mt-auto pt-3 text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {rPost.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
