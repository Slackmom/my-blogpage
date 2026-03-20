import { notFound } from "next/navigation";
import Link from "next/link";
import { getSlugs, getBySlug, getAll } from "@/lib/content";
import { getCategoryStyle, formatDate } from "@/lib/styles";
import type { MentoringStory } from "@/lib/types";
import { Sparkle } from "../../components/Sparkle";

export async function generateStaticParams() {
  return getSlugs("mentoring").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("mentoring");
  if (!slugs.includes(slug)) return { title: "Story Not Found — Sandra Kiel" };
  const story = await getBySlug<MentoringStory>("mentoring", slug);
  return {
    title: `${story.title} — Sandra Kiel`,
    description: story.summary,
  };
}

export default async function MentoringStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getSlugs("mentoring");
  if (!slugs.includes(slug)) notFound();

  const story = await getBySlug<MentoringStory>("mentoring", slug);
  const allStories = getAll<MentoringStory>("mentoring");
  const otherStories = allStories.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-20">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(217,70,239,0.1)] py-20 px-6 md:px-12">
        <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-[#D946EF] blur-[180px] opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            href="/mentoring"
            className="inline-flex items-center gap-2 text-[#636876] text-sm hover:text-[#D946EF] transition-colors duration-200 mb-8"
          >
            <span>&larr;</span>
            <span>Mentoring stories</span>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(story.category)}`}>
              {story.category}
            </span>
            <span className="text-[11px] text-[#636876]">{formatDate(story.date)}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-normal leading-[1.15] text-[#F8FAFC] mb-6"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {story.title}
          </h1>

          <p className="text-xl text-[#636876] leading-relaxed border-l-2 border-[rgba(217,70,239,0.4)] pl-5">
            {story.summary}
          </p>

          <div className="mt-10 flex items-center gap-4 pt-8 border-t border-[rgba(217,70,239,0.08)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D946EF] to-[#9B6EFF] flex items-center justify-center flex-shrink-0">
              <span
                className="text-xs font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                SK
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold text-[#F8FAFC]">Sandra Kiel</div>
              <div className="text-[11px] text-[#636876]">Playpreneur · Mentor · Women in Tech</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Story body ───────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <div
          className="prose-sk"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />

        <div className="flex items-center justify-center gap-4 mt-16 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(217,70,239,0.2)]" />
          <Sparkle size={14} className="text-[#D946EF]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(217,70,239,0.2)]" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.15)] p-8 text-center">
          <p
            className="text-2xl font-bold text-[#F8FAFC] mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Is this your story too?
          </p>
          <p className="text-[#636876] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            If something here resonated, I&apos;d love to hear from you.
            I mentor women in tech navigating exactly these kinds of moments.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/mentoring"
              className="px-5 py-2.5 rounded-full bg-[rgba(217,70,239,0.12)] border border-[rgba(217,70,239,0.3)] text-[#D946EF] text-sm font-semibold hover:bg-[rgba(217,70,239,0.22)] transition-all duration-200"
            >
              More stories
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D946EF] to-[#9B6EFF] text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Reach out &rarr;
            </Link>
          </div>
        </div>
      </article>

      {/* ── More stories ─────────────────────────────────────────── */}
      {otherStories.length > 0 && (
        <div className="border-t border-[rgba(217,70,239,0.08)] py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl font-bold text-[#F8FAFC] mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              More from the Mentoring Room
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {otherStories.map((s) => (
                <Link key={s.slug} href={`/mentoring/${s.slug}`} className="group block">
                  <article className="h-full rounded-xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.1)] hover:border-[rgba(217,70,239,0.35)] card-lift p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getCategoryStyle(s.category)}`}>
                        {s.category}
                      </span>
                    </div>
                    <h3
                      className="text-base font-normal leading-snug text-[#C4C9D4] group-hover:text-[#F8FAFC] transition-colors mb-2"
                      style={{ fontFamily: "var(--font-dm-serif)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-[#636876] line-clamp-2">{s.summary}</p>
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
