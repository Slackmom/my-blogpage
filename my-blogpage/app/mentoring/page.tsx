import Link from "next/link";
import { getAll } from "@/lib/content";
import { getCategoryStyle, formatDate } from "@/lib/styles";
import type { MentoringStory } from "@/lib/types";
import { Sparkle } from "../components/Sparkle";

export const metadata = {
  title: "Mentoring — Sandra Kiel",
  description:
    "Sandra Kiel mentors women in tech navigating pivots, senior moves, and the work of figuring out what they want to build.",
};

const values = [
  {
    icon: "✦",
    title: "Real over polished.",
    body: "I don't do mentoring theater. I care about honest conversations, not advice that sounds good in a LinkedIn post.",
  },
  {
    icon: "♟",
    title: "Strategy meets self.",
    body: "Career advice without self-knowledge is just tactics. We figure out both — what you want to build and who you want to be while you build it.",
  },
  {
    icon: "⚡",
    title: "Play as a lens.",
    body: "We explore your challenges with curiosity, not anxiety. Playful thinking opens up options that seriousness tends to close.",
  },
];

export default function MentoringPage() {
  const stories = getAll<MentoringStory>("mentoring");

  return (
    <div className="min-h-screen pt-20">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(217,70,239,0.12)] py-24 px-6 md:px-12">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-[#D946EF] blur-[180px] opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#9B6EFF] blur-[160px] opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="absolute top-16 right-24 text-[#D946EF] animate-sparkle" style={{ opacity: 0.5 }}>
          <Sparkle size={22} />
        </div>
        <div className="absolute bottom-20 left-16 text-[#F472B6] animate-sparkle-slow" style={{ opacity: 0.35 }}>
          <Sparkle size={14} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#D946EF] mb-5">
            <Sparkle size={12} />
            <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Mentoring · Women in Tech</span>
          </div>
          <h1
            className="text-4xl md:text-7xl font-bold text-[#F8FAFC] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Building the table{" "}
            <span style={{
              background: "linear-gradient(135deg, #D946EF 0%, #F472B6 50%, #9B6EFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              we all deserved
            </span>{" "}
            sooner.
          </h1>
          <p className="max-w-xl text-[#636876] text-lg leading-relaxed">
            I mentor women in tech who are figuring out their next bold move.
            Whether that&apos;s a pivot, a promotion, a startup, or just a clearer sense
            of what the hell they&apos;re actually building &mdash; I&apos;m here for it.
          </p>
        </div>
      </div>

      {/* ── Mentoring stories ────────────────────────────────────── */}
      {stories.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[10px] text-[#D946EF] tracking-[0.22em] uppercase mb-2">// Stories</div>
              <h2
                className="text-3xl font-bold text-[#F8FAFC]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                From the Mentoring Room
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((story) => (
              <Link key={story.slug} href={`/mentoring/${story.slug}`} className="group block">
                <article className="relative h-full rounded-2xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.12)] hover:border-[rgba(217,70,239,0.35)] card-lift-pink p-7 overflow-hidden flex flex-col card-lift">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getCategoryStyle(story.category)}`}>
                      {story.category}
                    </span>
                    <span className="text-[11px] text-[#636876]">{formatDate(story.date)}</span>
                  </div>

                  <h3
                    className="text-xl font-normal leading-snug text-[#F8FAFC] mb-3 group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    {story.title}
                  </h3>

                  <p className="text-[#636876] text-sm leading-relaxed flex-1 mb-4">
                    {story.summary}
                  </p>

                  <span className="text-[11px] text-[#D946EF] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read the story &rarr;
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── How I mentor ────────────────────────────────────────── */}
      <div className="border-t border-[rgba(217,70,239,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] text-[#D946EF] tracking-[0.22em] uppercase mb-4">// How I Work</div>
          <h2
            className="text-3xl font-bold text-[#F8FAFC] mb-10"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What Mentoring with Me Looks Like
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.12)] hover:border-[rgba(217,70,239,0.3)] card-lift p-7"
              >
                <div className="text-xl text-[#D946EF] mb-4">{v.icon}</div>
                <h3
                  className="text-base font-bold text-[#F8FAFC] mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#636876] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Women in Tech ────────────────────────────────────────── */}
      <div className="border-t border-[rgba(217,70,239,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[10px] text-[#D946EF] tracking-[0.22em] uppercase mb-4">// Women in Tech</div>
            <h2
              className="text-3xl font-bold text-[#F8FAFC] mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Why this work matters to me.
            </h2>
            <p className="text-[#636876] text-base leading-relaxed mb-4">
              I&apos;ve been the only woman in the room enough times to know that &ldquo;diversity&rdquo;
              initiatives that don&apos;t change the room don&apos;t change anything. The work I
              care about is structural: building mentoring relationships that give women
              real tools, real networks, and real permission to take up the space they deserve.
            </p>
            <p className="text-[#636876] text-base leading-relaxed">
              I speak on Women in Tech at conferences, I mentor individually, and I&apos;m
              always looking for more ways to make this industry better &mdash; for everyone
              who currently has to fight to belong in it.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "TEDxAmsterdamWomen speaker", year: "2024" },
              { label: "Women in Tech Europe panelist", year: "2026" },
              { label: "Tech Sisters Summit speaker", year: "2024" },
              { label: "Mentoring relationships active", value: "10+" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.1)] px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <Sparkle size={9} className="text-[#D946EF] flex-shrink-0" />
                  <span className="text-sm text-[#C4C9D4]">{item.label}</span>
                </div>
                <span className="text-[11px] text-[#D946EF] font-medium">
                  {item.year ?? item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Reach out CTA ────────────────────────────────────────── */}
      <div className="border-t border-[rgba(217,70,239,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(217,70,239,0.2)] p-10 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px bg-gradient-to-r from-transparent via-[#D946EF] to-transparent" />
            <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(217,70,239,0.3)] bg-[rgba(217,70,239,0.08)] text-[#D946EF] text-[11px] font-medium tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse" />
                Open for conversations
              </div>
              <p className="text-[#636876] text-base leading-relaxed max-w-lg mx-auto mb-8">
                If you&apos;d like to connect about mentoring, reach out directly.
                I reply to every thoughtful message.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D946EF] to-[#9B6EFF] text-white font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                <Sparkle size={11} />
                Reach Out &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticker archive teaser ───────────────────────────────── */}
      <div className="border-t border-[rgba(217,70,239,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(245,158,11,0.2)] p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#F59E0B] blur-[80px] opacity-[0.08] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#F59E0B] mb-3">
                  <span>✦</span>
                  <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Coming Soon</span>
                </div>
                <h3
                  className="text-xl font-bold text-[#F8FAFC] mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  The Sticker Archive
                </h3>
                <p className="text-[#636876] text-sm leading-relaxed max-w-md">
                  Every sticker on my laptop is a community I&apos;ve been part of, a room I&apos;ve
                  entered, a person I&apos;ve met. I&apos;m building a page for all of them &mdash; with
                  the small stories behind the best ones.
                </p>
              </div>
              <div className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[rgba(245,158,11,0.3)] text-[#F59E0B] text-sm font-medium opacity-60 cursor-not-allowed whitespace-nowrap">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
