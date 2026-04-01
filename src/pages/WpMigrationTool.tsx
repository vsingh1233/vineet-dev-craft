import { useState } from "react";
import { Copy, Check, Database, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const generateQueries = (oldDomain: string, newDomain: string, prefix: string) => {
  // Clean domains - remove trailing slashes and protocol
  const cleanDomain = (d: string) => d.replace(/\/+$/, "").replace(/^https?:\/\//, "");
  
  const oldClean = cleanDomain(oldDomain);
  const newClean = cleanDomain(newDomain);
  const oldUrl = oldDomain.startsWith("http") ? oldDomain.replace(/\/+$/, "") : `https://${oldDomain}`.replace(/\/+$/, "");
  const newUrl = newDomain.startsWith("http") ? newDomain.replace(/\/+$/, "") : `https://${newDomain}`.replace(/\/+$/, "");

  // Build both http and https variants for thorough replacement
  const oldHttp = `http://${oldClean}`;
  const oldHttps = `https://${oldClean}`;
  const newProtocol = newUrl.startsWith("https") ? "https" : "http";

  const queries = [
    {
      title: "Update Site URL & Home URL",
      description: "Changes the core WordPress site and home URLs in the options table.",
      sql: `UPDATE ${prefix}options SET option_value = REPLACE(option_value, '${oldUrl}', '${newUrl}') WHERE option_name = 'siteurl' OR option_name = 'home';`,
    },
    {
      title: "Update Post Content",
      description: "Replaces all occurrences of the old domain in post/page content.",
      sql: `UPDATE ${prefix}posts SET post_content = REPLACE(post_content, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Post Excerpts",
      description: "Updates any domain references in post excerpts.",
      sql: `UPDATE ${prefix}posts SET post_excerpt = REPLACE(post_excerpt, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Post GUIDs",
      description: "Updates the globally unique identifiers for posts. Note: Some recommend NOT changing GUIDs for existing posts.",
      sql: `UPDATE ${prefix}posts SET guid = REPLACE(guid, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Post Meta",
      description: "Replaces domain references stored in post metadata (custom fields, page builders, etc.).",
      sql: `UPDATE ${prefix}postmeta SET meta_value = REPLACE(meta_value, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Comments",
      description: "Updates URLs within comment content.",
      sql: `UPDATE ${prefix}comments SET comment_content = REPLACE(comment_content, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Comment Author URLs",
      description: "Updates author website URLs in comments.",
      sql: `UPDATE ${prefix}comments SET comment_author_url = REPLACE(comment_author_url, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Options Table (All)",
      description: "Catches any remaining domain references in the options table.",
      sql: `UPDATE ${prefix}options SET option_value = REPLACE(option_value, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update User Meta",
      description: "Replaces domain references in user metadata.",
      sql: `UPDATE ${prefix}usermeta SET meta_value = REPLACE(meta_value, '${oldUrl}', '${newUrl}');`,
    },
    {
      title: "Update Term Meta",
      description: "Updates domain references in taxonomy term metadata.",
      sql: `UPDATE ${prefix}termmeta SET meta_value = REPLACE(meta_value, '${oldUrl}', '${newUrl}');`,
    },
  ];

  // Add HTTP→HTTPS conversion queries if protocols differ
  if (oldUrl.startsWith("http://") && newUrl.startsWith("https://")) {
    queries.push({
      title: "Fix Mixed Content (HTTP → HTTPS)",
      description: "Converts any remaining http:// references to https:// for the new domain to prevent mixed content warnings.",
      sql: `UPDATE ${prefix}posts SET post_content = REPLACE(post_content, 'http://${newClean}', 'https://${newClean}');\nUPDATE ${prefix}postmeta SET meta_value = REPLACE(meta_value, 'http://${newClean}', 'https://${newClean}');\nUPDATE ${prefix}options SET option_value = REPLACE(option_value, 'http://${newClean}', 'https://${newClean}');`,
    });
  }

  return queries;
};

const WpMigrationTool = () => {
  const [oldDomain, setOldDomain] = useState("");
  const [newDomain, setNewDomain] = useState("");
  const [prefix, setPrefix] = useState("wp_");
  const [queries, setQueries] = useState<ReturnType<typeof generateQueries> | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!oldDomain.trim() || !newDomain.trim()) {
      toast({
        title: "Missing fields",
        description: "Please enter both old and new domain URLs.",
        variant: "destructive",
      });
      return;
    }
    if (!prefix.trim()) {
      toast({
        title: "Missing prefix",
        description: "Please enter your WordPress database prefix.",
        variant: "destructive",
      });
      return;
    }
    setQueries(generateQueries(oldDomain.trim(), newDomain.trim(), prefix.trim()));
    setCopiedAll(false);
    setCopiedIndex(null);
  };

  const copyToClipboard = async (text: string, index?: number) => {
    try {
      await navigator.clipboard.writeText(text);
      if (index !== undefined) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } else {
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2000);
      }
      toast({ title: "Copied to clipboard!" });
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const allQueriesText = queries?.map((q) => `-- ${q.title}\n${q.sql}`).join("\n\n") || "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <Database size={14} className="text-primary" />
              <span className="text-xs font-mono font-medium text-primary">Free Tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              WordPress Domain
              <span className="text-gradient"> Migration</span> SQL Generator
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Generate all the SQL queries you need to migrate your WordPress website from one domain to another. Just fill in the details and run the queries in your database.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-16 lg:pb-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm"
          >
            <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto]">
              <div className="space-y-2">
                <Label htmlFor="old-domain" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  From (Old Domain)
                </Label>
                <Input
                  id="old-domain"
                  placeholder="https://old-domain.com"
                  value={oldDomain}
                  onChange={(e) => setOldDomain(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-domain" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  To (New Domain)
                </Label>
                <Input
                  id="new-domain"
                  placeholder="https://new-domain.com"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prefix" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  DB Prefix
                </Label>
                <Input
                  id="prefix"
                  placeholder="wp_"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  className="font-mono text-sm w-28"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={handleGenerate} className="btn-primary gap-2">
                Generate Queries
                <ArrowRight size={16} />
              </Button>
              {queries && (
                <Button
                  variant="outline"
                  onClick={() => copyToClipboard(allQueriesText)}
                  className="gap-2 font-mono text-xs"
                >
                  {copiedAll ? <Check size={14} /> : <Copy size={14} />}
                  {copiedAll ? "Copied!" : "Copy All Queries"}
                </Button>
              )}
            </div>
          </motion.div>

          {/* Generated Queries */}
          {queries && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-foreground">
                Generated SQL Queries
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({queries.length} queries)
                </span>
              </h2>

              {queries.map((query, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30"
                >
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/30">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{query.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{query.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(query.sql, index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity gap-1.5 text-xs"
                    >
                      {copiedIndex === index ? <Check size={12} /> : <Copy size={12} />}
                      {copiedIndex === index ? "Copied" : "Copy"}
                    </Button>
                  </div>
                  <pre className="p-5 text-sm font-mono text-foreground/80 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed bg-muted/10">
                    {query.sql}
                  </pre>
                </div>
              ))}
            </motion.div>
          )}

          {/* How to use section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">How to Use This Tool</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">1</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Enter your domains</h3>
                  <p className="text-sm">Enter the old domain (where your WordPress is currently hosted) and the new domain (where you're migrating to). Include the full URL with protocol (http:// or https://).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">2</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Set your database prefix</h3>
                  <p className="text-sm">The default WordPress prefix is <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp_</code>. If you changed it during installation, enter your custom prefix. You can find it in your <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp-config.php</code> file.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">3</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Generate & run queries</h3>
                  <p className="text-sm">Click "Generate Queries" and then run the SQL queries in your database using phpMyAdmin, MySQL CLI, or any database management tool. <strong className="text-foreground">Always back up your database before running these queries.</strong></p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <span className="text-primary">⚠</span> Important Notes
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Always backup</strong> your database before running any migration queries.</li>
                <li>These queries handle standard WordPress tables. Some plugins may store URLs in custom tables not covered here.</li>
                <li>Serialized data (used by many plugins/themes) may not be correctly updated by simple SQL REPLACE. Consider using <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">WP-CLI search-replace</code> for serialized data.</li>
                <li>After running the queries, clear all caches (plugin caches, CDN, browser cache).</li>
                <li>Update your <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp-config.php</code> if it contains hardcoded URLs.</li>
              </ul>
            </div>

            {/* Multisite note */}
            <div className="mt-6 rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">WordPress Multisite</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For multisite networks, you'll need to run the queries for each subsite separately using their specific prefix (e.g., <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp_2_</code>, <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp_3_</code>). Additionally, you'll need to manually update the <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp_blogs</code>, <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp_site</code>, and <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">wp_sitemeta</code> tables.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WpMigrationTool;
