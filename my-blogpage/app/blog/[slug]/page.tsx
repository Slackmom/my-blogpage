import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getCategoryStyle, formatDate } from "../../data/posts";
import { Sparkle } from "../../components/Sparkle";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found — Sandra Kiel" };
  return {
    title: `${post.title} — Sandra Kiel`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">

      {/* ── Article header ──────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(155,110,255,0.08)] py-20 px-6 md:px-12">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-[#9B6EFF] blur-[180px] opacity-[0.08] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#636876] text-sm hover:text-[#9B6EFF] transition-colors duration-200 mb-8"
          >
            <span>&larr;</span>
            <span>All posts</span>
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(post.category)}`}>
              {post.category}
            </span>
            <span className="text-[11px] text-[#636876]">{formatDate(post.date)}</span>
            <span className="text-[11px] text-[#636876]">{post.readTime} read</span>
          </div>

          {/* Title — DM Serif Display */}
          <h1
            className="text-4xl md:text-6xl font-normal leading-[1.1] text-[#F8FAFC] mb-6"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {post.title}
          </h1>

          {/* Excerpt / lead */}
          <p className="text-xl text-[#636876] leading-relaxed border-l-2 border-[rgba(155,110,255,0.4)] pl-5">
            {post.excerpt}
          </p>

          {/* Author strip */}
          <div className="mt-10 flex items-center gap-4 pt-8 border-t border-[rgba(155,110,255,0.08)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9B6EFF] to-[#D946EF] flex items-center justify-center flex-shrink-0">
              <span
                className="text-xs font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                SK
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F8FAFC]">Sandra Kiel</div>
              <div className="text-[11px] text-[#636876]">Playpreneur · Speaker · Mentor</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        {post.content ? (
          <div className="prose-sk">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <div className="prose-sk">
            <p>
              This post is coming soon. Check back shortly &mdash; good things are on the way.
            </p>
          </div>
        )}

        {/* End sparkle divider */}
        <div className="flex items-center justify-center gap-4 mt-16 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(155,110,255,0.2)]" />
          <Sparkle size={14} className="text-[#D946EF]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(155,110,255,0.2)]" />
        </div>

        {/* CTA after article */}
        <div className="mt-12 rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.13)] p-8 text-center">
          <p
            className="text-2xl font-bold text-[#F8FAFC] mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Want more like this?
          </p>
          <p className="text-[#636876] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            I write about play, leadership, Women in Tech, and building things that matter.
            More posts below &mdash; or reach out if you want to talk.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-full bg-[rgba(155,110,255,0.12)] border border-[rgba(155,110,255,0.3)] text-[#9B6EFF] text-sm font-semibold hover:bg-[rgba(155,110,255,0.22)] transition-all duration-200"
            >
              All posts
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </article>

      {/* ── More posts ──────────────────────────────────────────── */}
      {otherPosts.length > 0 && (
        <div className="border-t border-[rgba(155,110,255,0.08)] py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl font-bold text-[#F8FAFC] mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              More to Read
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <article className="h-full rounded-xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] hover:border-[rgba(155,110,255,0.35)] card-lift p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getCategoryStyle(p.category)}`}>
                        {p.category}
                      </span>
                    </div>
                    <h3
                      className="text-base font-normal leading-snug text-[#C4C9D4] group-hover:text-[#F8FAFC] transition-colors mb-2"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {p.title}
                    </h3>
                    <span className="text-[10px] text-[#636876]">{p.readTime} read</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
