import Link from "next/link";
import { posts, getCategoryStyle, formatDate } from "../data/posts";
import { Sparkle } from "../components/Sparkle";

export const metadata = {
  title: "Blog — Sandra Kiel",
  description:
    "Writing on play, leadership, Women in Tech, creativity, and the art of building a life that feels like yours.",
};

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen pt-20">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(155,110,255,0.1)] py-20 px-6 md:px-12">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-[#9B6EFF] blur-[160px] opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] rounded-full bg-[#D946EF] blur-[140px] opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#9B6EFF] mb-5">
            <Sparkle size={12} />
            <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Blog</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Writing Out<br />
            <span className="gradient-text">Loud</span>
          </h1>
          <p className="max-w-xl text-[#636876] text-lg leading-relaxed">
            On play, leadership, creativity, Women in Tech, and the surprisingly serious
            business of building a life that feels like yours.
          </p>
        </div>
      </div>

      {/* ── Category filter (visual) ─────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${
                i === 0
                  ? "bg-[rgba(155,110,255,0.15)] text-[#9B6EFF] border-[rgba(155,110,255,0.4)]"
                  : "bg-transparent text-[#636876] border-[rgba(155,110,255,0.12)] hover:border-[rgba(155,110,255,0.3)] hover:text-[#C4C9D4]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Posts ───────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-28">

        {/* Featured */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-8">
          <article className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.13)] hover:border-[rgba(155,110,255,0.4)] card-lift p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#9B6EFF] blur-[120px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none" />

            {/* NEWEST tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(217,70,239,0.12)] border border-[rgba(217,70,239,0.3)] text-[#D946EF] text-[10px] font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse" />
                Newest
              </span>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(featured.category)}`}>
                {featured.category}
              </span>
              <span className="text-[11px] text-[#636876]">{formatDate(featured.date)}</span>
              <span className="text-[11px] text-[#636876]">{featured.readTime} read</span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-normal leading-snug text-[#F8FAFC] mb-4 max-w-2xl"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {featured.title}
            </h2>
            <p className="text-[#636876] text-base leading-relaxed max-w-2xl mb-6">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-[#9B6EFF] text-sm font-semibold group-hover:gap-4 transition-all duration-200">
              Read the post <span>&rarr;</span>
            </span>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9B6EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>
        </Link>

        {/* Rest — 2 column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="relative h-full rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] hover:border-[rgba(155,110,255,0.35)] card-lift p-7 overflow-hidden flex flex-col">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#636876]">{formatDate(post.date)}</span>
                </div>

                <h2
                  className="text-xl font-normal leading-snug text-[#F8FAFC] mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {post.title}
                </h2>

                <p className="text-[#636876] text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#636876]">{post.readTime} read</span>
                  <span className="text-[11px] text-[#9B6EFF] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read &rarr;
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
