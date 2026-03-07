import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAuthorBySlug, getPostsByAuthor } from "@/data/blog";

const AuthorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? getAuthorBySlug(slug) : undefined;

  if (!author) return <Navigate to="/blog" replace />;

  const posts = getPostsByAuthor(author.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-24">
        <div className="container max-w-4xl">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Author Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-elevated p-8 sm:p-12 flex flex-col sm:flex-row gap-8 items-start"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-secondary"
            />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Author</p>
              <h1 className="mt-1 font-display text-3xl font-extrabold text-navy">
                {author.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{author.role}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{author.bio}</p>

              {author.social && (
                <div className="mt-5 flex items-center gap-4">
                  {Object.entries(author.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors capitalize"
                    >
                      {platform} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Posts */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-extrabold text-navy mb-8">
              Articles by {author.name}
              <span className="ml-2 text-base font-normal text-muted-foreground">({posts.length})</span>
            </h2>

            <div className="space-y-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <article className="card-elevated card-hover overflow-hidden flex flex-col sm:flex-row gap-0">
                      <div className="sm:w-64 shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-6 flex-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {post.category}
                        </span>
                        <h3 className="mt-1 font-display text-lg font-bold text-navy leading-snug">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <span className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuthorPage;
