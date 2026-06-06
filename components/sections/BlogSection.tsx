const posts = [
  {
    date: "May 2026",
    title: "Why I Switched From Create React App to Next.js 16",
    excerpt:
      "The new App Router, Server Components, and instant navigation changed everything. Here's a full breakdown of my migration.",
    slug: "cra-to-nextjs-16",
  },
  {
    date: "Apr 2026",
    title: "Building Pixel-Perfect UIs: A Developer's Design Checklist",
    excerpt:
      "Spacing, typography, color — these three pillars separate good UIs from great ones. My personal checklist before shipping.",
    slug: "pixel-perfect-ui-checklist",
  },
  {
    date: "Mar 2026",
    title: "AI Workflows That Actually Save Time (My Stack)",
    excerpt:
      "Not all AI tools are created equal. Here are the exact workflows and prompts I use daily to ship faster.",
    slug: "ai-workflows-stack",
  },
  {
    date: "Feb 2026",
    title: "PostgreSQL Performance Patterns I Use In Production",
    excerpt:
      "Connection pooling, partial indexes, and EXPLAIN ANALYZE — lessons from optimizing queries in real apps.",
    slug: "postgresql-performance-patterns",
  },
  {
    date: "Jan 2026",
    title: "The Right Way to Handle Auth in Next.js Applications",
    excerpt:
      "JWT vs sessions, middleware-based protection, and why I now always reach for Supabase Auth for new projects.",
    slug: "nextjs-auth-patterns",
  },
  {
    date: "Dec 2025",
    title: "Designing Dark Mode UIs That Don't Look Washed Out",
    excerpt:
      "Pure black backgrounds are a trap. Here's how to pick the right dark palette and make your dark mode feel premium.",
    slug: "dark-mode-design",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="snap-section" aria-label="Blog">
      <div className="section-inner">
        <p className="section-label">Thoughts & Learnings</p>
        <h2 className="section-title">Writing</h2>
        <div className="section-divider" aria-hidden="true" />

        <div className="blog-list" id="blog-list">
          {posts.map((post) => (
            <article key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="blog-card"
                id={`blog-${post.slug}`}
              >
                <time className="blog-date" dateTime={post.date}>
                  {post.date}
                </time>
                <div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
