import Link from "next/link";
import { Sparkle } from "../components/Sparkle";

export const metadata = {
  title: "Contact — Sandra Kiel",
  description:
    "Reach out for speaking, mentoring, collaboration, press, or just a good conversation.",
};

const opportunities = [
  {
    icon: "🎯",
    title: "Keynote & Speaking",
    body: "Available for conferences, corporate events, offsites, and educational institutions. I tailor every talk — no two are exactly the same.",
    color: "rgba(155,110,255,0.15)",
    border: "rgba(155,110,255,0.3)",
    text: "#9B6EFF",
  },
  {
    icon: "♟",
    title: "Strategy & Workshops",
    body: "Embedded half-day or full-day working sessions for teams who need more than a keynote — they need to actually do the work.",
    color: "rgba(45,212,191,0.12)",
    border: "rgba(45,212,191,0.3)",
    text: "#2DD4BF",
  },
  {
    icon: "✦",
    title: "Mentoring",
    body: "I mentor women in tech navigating pivots, senior moves, and the work of figuring out what they actually want to build.",
    color: "rgba(217,70,239,0.12)",
    border: "rgba(217,70,239,0.3)",
    text: "#D946EF",
  },
  {
    icon: "💬",
    title: "Press & Podcasts",
    body: "Happy to speak to journalists, appear on podcasts, or join panels on play, leadership, creativity, and Women in Tech.",
    color: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.3)",
    text: "#F472B6",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(155,110,255,0.1)] py-24 px-6 md:px-12">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-[#9B6EFF] blur-[160px] opacity-[0.09] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[200px] rounded-full bg-[#D946EF] blur-[140px] opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        <div className="absolute top-12 right-20 text-[#D946EF] animate-sparkle" style={{ opacity: 0.4 }}>
          <Sparkle size={20} />
        </div>
        <div className="absolute bottom-16 left-24 text-[#9B6EFF] animate-sparkle-delayed" style={{ opacity: 0.35 }}>
          <Sparkle size={13} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[#9B6EFF] mb-5">
            <Sparkle size={12} />
            <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Contact</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let&apos;s Create<br />
            <span className="gradient-text">Something</span>
          </h1>
          <p className="max-w-xl text-[#636876] text-lg leading-relaxed">
            Whether you want me on your stage, embedded with your team, or just want to
            start a conversation &mdash; I&apos;m genuinely glad you&apos;re here.
          </p>
        </div>
      </div>

      {/* ── Opportunity types ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-4">// What I&apos;m Open For</div>
        <h2
          className="text-3xl font-bold text-[#F8FAFC] mb-10"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          How We Could Work Together
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {opportunities.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl p-7 border card-lift"
              style={{
                background: o.color,
                borderColor: o.border,
              }}
            >
              <div className="text-2xl mb-4">{o.icon}</div>
              <h3
                className="text-lg font-bold mb-3"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: o.text,
                }}
              >
                {o.title}
              </h3>
              <p className="text-[#636876] text-sm leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Direct contact ───────────────────────────────────────── */}
      <div className="border-t border-[rgba(155,110,255,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: direct info */}
          <div>
            <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-4">// Reach Out</div>
            <h2
              className="text-3xl font-bold text-[#F8FAFC] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Say Hello
            </h2>
            <p className="text-[#636876] text-base leading-relaxed mb-8">
              The best way to reach me is email. I read every message and reply to the
              ones that feel like the start of something interesting.
            </p>

            <a
              href="mailto:sandra.kiel@event-punks.com"
              className="inline-flex items-center gap-2 text-[#9B6EFF] font-semibold text-lg hover:text-[#D946EF] transition-colors duration-200 group mb-8"
            >
              sandra.kiel@event-punks.com
              <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </a>

            <div className="space-y-3 mt-8">
              <div className="text-[10px] text-[#636876] tracking-widest uppercase mb-3">Also find me here</div>
              {[
                { label: "LinkedIn", handle: "/in/sandrakiel", color: "#9B6EFF" },
                { label: "Instagram", handle: "@sandrakiel", color: "#D946EF" },
                { label: "Twitter / X", handle: "@sandrakiel", color: "#2DD4BF" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="text-sm text-[#636876]">{s.label}</span>
                  <span className="text-sm" style={{ color: s.color }}>{s.handle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: simple form placeholder */}
          <div className="rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.13)] p-8">
            <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-6">// Send a Message</div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#636876] tracking-wide mb-2">Your Name</label>
                <div className="w-full rounded-xl bg-[#111128] border border-[rgba(155,110,255,0.15)] px-4 py-3 text-[#636876] text-sm">
                  Full name
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#636876] tracking-wide mb-2">Email</label>
                <div className="w-full rounded-xl bg-[#111128] border border-[rgba(155,110,255,0.15)] px-4 py-3 text-[#636876] text-sm">
                  your@email.com
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#636876] tracking-wide mb-2">What&apos;s this about?</label>
                <div className="w-full rounded-xl bg-[#111128] border border-[rgba(155,110,255,0.15)] px-4 py-3 text-[#636876] text-sm">
                  Speaking, mentoring, collaboration...
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#636876] tracking-wide mb-2">Message</label>
                <div className="w-full rounded-xl bg-[#111128] border border-[rgba(155,110,255,0.15)] px-4 py-3 text-[#636876] text-sm h-28">
                  Tell me what you&apos;re building or what you&apos;d love to create together...
                </div>
              </div>
              <a
                href="mailto:sandra.kiel@event-punks.com"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
              >
                <Sparkle size={11} />
                Send Message
              </a>
              <p className="text-[10px] text-[#636876] text-center leading-relaxed">
                Form coming soon &mdash; for now, click above to email me directly.<br />
                I typically respond within 48 hours.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom quote ─────────────────────────────────────────── */}
      <div className="border-t border-[rgba(155,110,255,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkle size={16} className="text-[#D946EF] mx-auto mb-6" />
          <blockquote
            className="text-2xl md:text-3xl font-normal text-[#C4C9D4] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            &ldquo;The people who do the most interesting work are almost always the
            ones willing to play with what comes next.&rdquo;
          </blockquote>
          <div className="mt-6 text-sm text-[#636876]">— Sandra Kiel</div>
        </div>
      </div>

    </div>
  );
}
