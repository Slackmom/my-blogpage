import Link from "next/link";
import { posts, getCategoryStyle, formatDate } from "./data/posts";
import { sessions, getSessionCategoryStyle, formatSessionDate } from "./data/sessions";
import { Sparkle } from "./components/Sparkle";

/* ── Helpers ──────────────────────────────────────────────────── */
const featured = posts[0];
const secondary = posts.slice(1, 3);
const tertiary = posts.slice(3);
const recentSessions = sessions.slice(0, 3);

/* ── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">

        {/* Background texture + glow orbs */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full bg-[#9B6EFF] blur-[180px] opacity-[0.11] animate-glow pointer-events-none" />
        <div className="absolute -bottom-32 -right-16 w-[520px] h-[520px] rounded-full bg-[#D946EF] blur-[160px] opacity-[0.09] animate-glow-delayed pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full bg-[#2DD4BF] blur-[120px] opacity-[0.06] pointer-events-none" />

        {/* Floating sparkle elements */}
        <div className="absolute top-36 right-[12%] text-[#9B6EFF] animate-sparkle pointer-events-none" style={{ opacity: 0.55 }}>
          <Sparkle size={22} />
        </div>
        <div className="absolute top-[55%] left-[8%] text-[#D946EF] animate-sparkle-delayed pointer-events-none" style={{ opacity: 0.4 }}>
          <Sparkle size={13} />
        </div>
        <div className="absolute bottom-44 right-[30%] text-[#2DD4BF] animate-sparkle-slow pointer-events-none" style={{ opacity: 0.45 }}>
          <Sparkle size={17} />
        </div>
        <div className="absolute top-24 left-[20%] text-[#F472B6] animate-sparkle pointer-events-none" style={{ opacity: 0.3 }}>
          <Sparkle size={10} />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-44 right-[22%] w-10 h-10 border border-[rgba(155,110,255,0.3)] rotate-45 animate-float pointer-events-none" />
        <div className="absolute bottom-52 left-[14%] w-6 h-6 border border-[rgba(217,70,239,0.35)] rounded-full animate-float-delayed pointer-events-none" />
        <div className="absolute top-[42%] right-[6%] w-4 h-4 bg-[rgba(45,212,191,0.25)] rotate-12 animate-float-slow pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(155,110,255,0.22)] bg-[rgba(155,110,255,0.07)] text-[#9B6EFF] text-[11px] font-medium tracking-[0.18em] uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse" />
            Playpreneur &middot; Speaker &middot; Mentor
          </div>

          {/* Headline — keep the slogan */}
          <h1
            className="text-[clamp(4rem,12vw,9rem)] font-bold leading-[0.84] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="block text-[#F8FAFC]">I Turn</span>
            <span className="block gradient-text">Play Into</span>
            <span className="block text-[#F8FAFC]">Power.</span>
          </h1>

          {/* Subline */}
          <p className="max-w-xl mx-auto text-lg text-[#636876] leading-relaxed mb-12">
            Where bold ideas meet playful strategy. I help leaders, builders, and dreamers
            unlock their best work &mdash; through the art and science of play.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white font-semibold text-base hover:opacity-90 transition-opacity duration-200 hover:shadow-[0_0_48px_rgba(155,110,255,0.45)] active:scale-95"
            >
              Book a Talk &rarr;
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 rounded-full border border-[rgba(248,250,252,0.12)] text-[#C4C9D4] font-semibold text-base hover:border-[rgba(155,110,255,0.4)] hover:text-[#F8FAFC] transition-all duration-200"
            >
              Read the Blog
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-3 gap-6 max-w-xs mx-auto border-t border-[rgba(155,110,255,0.1)] pt-9">
            {[
              { value: "100+",  label: "Stages" },
              { value: "50k+",  label: "Lives Reached" },
              { value: "12+",   label: "Years Playing" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-bold text-[#F8FAFC]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {s.value}
                </div>
                <div className="text-[9px] text-[#636876] uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[9px] text-[#636876] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#636876] to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LATEST POSTS — editorial layout
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 max-w-5xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-2">// From the Blog</div>
            <h2
              className="text-4xl font-bold text-[#F8FAFC]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Latest Writing
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-[#636876] hover:text-[#9B6EFF] transition-colors duration-200 hidden sm:block"
          >
            All posts &rarr;
          </Link>
        </div>

        {/* Featured post — full width hero card */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-6">
          <article className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.13)] hover:border-[rgba(155,110,255,0.4)] card-lift overflow-hidden p-8 md:p-12">
            {/* Glow on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#9B6EFF] blur-[100px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1 max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(featured.category)}`}>
                    {featured.category}
                  </span>
                  <span className="text-[11px] text-[#636876]">{formatDate(featured.date)}</span>
                  <span className="text-[11px] text-[#636876]">{featured.readTime} read</span>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-normal leading-snug text-[#F8FAFC] mb-4 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {featured.title}
                </h3>

                <p className="text-[#636876] text-base leading-relaxed max-w-xl">
                  {featured.excerpt}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 text-[#9B6EFF] text-sm font-semibold group-hover:gap-4 transition-all duration-200">
                <span>Read</span>
                <span>&rarr;</span>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9B6EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>
        </Link>

        {/* Secondary posts — 2 column */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {secondary.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="relative h-full rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] hover:border-[rgba(217,70,239,0.35)] card-lift p-7 overflow-hidden">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#636876]">{formatDate(post.date)}</span>
                </div>

                <h3
                  className="text-xl font-normal leading-snug text-[#F8FAFC] mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {post.title}
                </h3>

                <p className="text-[#636876] text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <span className="text-[11px] text-[#636876]">{post.readTime} read &rarr;</span>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            </Link>
          ))}
        </div>

        {/* Tertiary posts — 3 column, compact */}
        {tertiary.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4">
            {tertiary.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="rounded-xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.08)] hover:border-[rgba(155,110,255,0.3)] card-lift p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getCategoryStyle(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <h4
                    className="text-base font-normal leading-snug text-[#C4C9D4] group-hover:text-[#F8FAFC] transition-colors mb-2"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {post.title}
                  </h4>
                  <span className="text-[10px] text-[#636876]">{formatDate(post.date)} &middot; {post.readTime}</span>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile: view all */}
        <div className="mt-8 sm:hidden text-center">
          <Link href="/blog" className="text-sm text-[#9B6EFF] font-medium">
            All posts &rarr;
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-[rgba(155,110,255,0.07)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <div className="relative flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(155,110,255,0.2)] to-[rgba(217,70,239,0.12)] border border-[rgba(155,110,255,0.2)]" />
              <div className="absolute inset-[3px] rounded-2xl bg-[#0c0c1e] flex flex-col items-center justify-center gap-3">
                <div
                  className="text-6xl font-bold gradient-text leading-none"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  SK
                </div>
                <div className="text-[9px] text-[#636876] tracking-[0.3em] uppercase">Sandra Kiel</div>
              </div>
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-l-2 border-t-2 border-[#9B6EFF]" />
              <div className="absolute -top-2 -right-2 w-5 h-5 border-r-2 border-t-2 border-[#9B6EFF]" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-l-2 border-b-2 border-[#2DD4BF]" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-r-2 border-b-2 border-[#2DD4BF]" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-2 md:-right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c0c1e] border border-[rgba(244,114,182,0.3)] text-[#F472B6] text-[11px] font-medium shadow-lg">
              <Sparkle size={9} />
              TEDx Speaker
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-4">// About</div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#F8FAFC]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Seriously into Play
            </h2>
            <p className="text-[#636876] text-lg leading-relaxed mb-5">
              I&apos;m Sandra Kiel &mdash; Playpreneur, keynote speaker, mentor, and a
              deeply committed Women in Tech advocate. My work sits at the intersection
              of creativity, strategy, and the radical idea that play is one of the most
              powerful tools we have for building better organizations and better lives.
            </p>
            <p className="text-[#636876] text-lg leading-relaxed mb-8">
              I&apos;ve spoken on stages across Europe, built programs that have shifted
              how teams work, and mentored women who went on to build things that
              matter. I believe in making serious work feel less serious &mdash;
              and watching what happens when it does.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#9B6EFF] font-semibold text-base group"
            >
              <span>More about me</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SESSIONS PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-[rgba(155,110,255,0.07)]">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-2">// On Stage</div>
              <h2
                className="text-4xl font-bold text-[#F8FAFC]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Recent Sessions
              </h2>
            </div>
            <Link href="/sessions" className="text-sm text-[#636876] hover:text-[#9B6EFF] transition-colors duration-200 hidden sm:block">
              Full archive &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {recentSessions.map((session) => (
              <article
                key={session.id}
                className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] hover:border-[rgba(155,110,255,0.35)] card-lift p-6 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getSessionCategoryStyle(session.category)}`}>
                    {session.category}
                  </span>
                  <span className="text-[11px] text-[#636876]">{formatSessionDate(session.date)}</span>
                </div>
                <h3
                  className="text-base font-bold leading-snug text-[#F8FAFC] mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {session.title}
                </h3>
                <p className="text-[11px] text-[#636876] mb-3">{session.event}</p>
                {session.location && (
                  <p className="text-[10px] text-[#636876] tracking-wide">{session.location}</p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link href="/sessions" className="text-sm text-[#9B6EFF] font-medium">Full archive &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MENTORING STRIP
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 border-t border-[rgba(155,110,255,0.07)]">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.18)] p-8 md:p-12 overflow-hidden">

            {/* Glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#D946EF] blur-[100px] opacity-[0.08] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent opacity-40" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-lg">
                <div className="flex items-center gap-2 text-[#D946EF] mb-4">
                  <Sparkle size={12} />
                  <span className="text-[10px] font-medium tracking-[0.22em] uppercase">Women in Tech &middot; Mentoring</span>
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Building the table we all deserved sooner.
                </h2>
                <p className="text-[#636876] text-base leading-relaxed">
                  I mentor women in tech who are figuring out their next bold move. If you&apos;re
                  building something that matters and could use a thinking partner, I&apos;d love to hear from you.
                </p>
              </div>
              <Link
                href="/mentoring"
                className="flex-shrink-0 px-6 py-3 rounded-full border border-[rgba(217,70,239,0.35)] text-[#D946EF] text-sm font-semibold hover:bg-[rgba(217,70,239,0.1)] transition-all duration-200 whitespace-nowrap"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 border-t border-[rgba(155,110,255,0.07)]">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.18)] p-12 md:p-20 text-center overflow-hidden">

            {/* Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-[#9B6EFF] to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent" />
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#9B6EFF] blur-[120px] opacity-[0.09] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#D946EF] blur-[120px] opacity-[0.07] pointer-events-none" />
            <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

            {/* Corner sparkles */}
            <div className="absolute top-6 left-8 text-[#9B6EFF] animate-sparkle-delayed" style={{ opacity: 0.4 }}>
              <Sparkle size={11} />
            </div>
            <div className="absolute bottom-6 right-8 text-[#D946EF] animate-sparkle" style={{ opacity: 0.35 }}>
              <Sparkle size={9} />
            </div>

            <div className="relative z-10">
              <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-4">// Let&apos;s Play</div>
              <h2
                className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#F8FAFC]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Ready to Level Up?
              </h2>
              <p className="max-w-xl mx-auto text-[#636876] text-lg leading-relaxed mb-10">
                Whether you want me on your stage, embedded in your team, or just a thinking
                partner on your next big idea &mdash; I&apos;m genuinely excited to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white font-semibold text-base hover:opacity-90 transition-all duration-200 hover:shadow-[0_0_48px_rgba(155,110,255,0.4)] active:scale-95"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-[rgba(248,250,252,0.12)] text-[#C4C9D4] font-semibold text-base hover:border-[rgba(155,110,255,0.4)] hover:text-[#F8FAFC] transition-all duration-200"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
