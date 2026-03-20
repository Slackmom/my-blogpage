import Link from "next/link";
import { getAll } from "@/lib/content";
import { getTopicStyle } from "@/lib/styles";
import type { Session } from "@/lib/types";
import { Sparkle } from "../components/Sparkle";

export const metadata = {
  title: "Sessions — Sandra Kiel",
  description:
    "A curated archive of keynotes, workshops, panels, and talks on play, leadership, creativity, and Women in Tech.",
};

const topicEmoji: Record<string, string> = {
  Keynote:  "🎯",
  Workshop: "⚡",
  Panel:    "💬",
  Podcast:  "🎙",
  Talk:     "✦",
  Session:  "✦",
};

export default function SessionsPage() {
  const sessions = getAll<Session>("sessions");

  return (
    <div className="min-h-screen pt-20">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(155,110,255,0.1)] py-20 px-6 md:px-12">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-[#2DD4BF] blur-[160px] opacity-[0.07] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[200px] rounded-full bg-[#9B6EFF] blur-[140px] opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#9B6EFF] mb-5">
            <Sparkle size={12} />
            <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Sessions</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            On Stage &amp;<br />
            <span className="gradient-text">In the Room</span>
          </h1>
          <p className="max-w-xl text-[#636876] text-lg leading-relaxed">
            A curated archive of keynotes, workshops, panels, and conversations &mdash;
            on play, leadership, creativity, and why the most serious work is often the most playful.
          </p>

          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 mt-10">
            {[
              { value: sessions.length + "+", label: "Sessions Listed" },
              { value: "8+",  label: "Countries" },
              { value: "5",   label: "Format Types" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold text-[#F8FAFC]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] text-[#636876] uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sessions grid ───────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {sessions.map((session) => (
            <Link
              key={session.slug}
              href={`/sessions/${session.slug}`}
              className="group block"
            >
              <article className="relative rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] hover:border-[rgba(155,110,255,0.35)] card-lift p-7 overflow-hidden h-full">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${getTopicStyle(session.topic)}`}>
                    {topicEmoji[session.topic] ?? "✦"} {session.topic}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold leading-snug text-[#F8FAFC] mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {session.title}
                </h3>

                <p className="text-[#636876] text-sm leading-relaxed line-clamp-2 mb-4">
                  {session.summary}
                </p>

                <span className="text-[11px] text-[#9B6EFF] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more &rarr;
                </span>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9B6EFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Book me strip ────────────────────────────────────────── */}
      <div className="border-t border-[rgba(155,110,255,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.15)] p-8 md:p-12">
          <div>
            <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-3">// Want me on your stage?</div>
            <h2
              className="text-2xl font-bold text-[#F8FAFC] mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s make your event unforgettable.
            </h2>
            <p className="text-[#636876] text-base">
              I keynote, workshop, and lead conversations that change how people think.
              Reach out and let&apos;s build something worth remembering.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white font-semibold hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          >
            Book a Talk &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
