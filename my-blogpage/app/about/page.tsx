import Link from "next/link";
import { Sparkle } from "../components/Sparkle";

export const metadata = {
  title: "About — Sandra Kiel",
  description:
    "Sandra Kiel is a playpreneur, keynote speaker, mentor, and Women in Tech advocate on a mission to prove that play is serious business.",
};

const beliefs = [
  {
    label: "Play is serious business.",
    body: "Not a perk, not a reward. A practice. The organizations that stay curious, adaptive, and genuinely good to work in — they protect space for play.",
  },
  {
    label: "Representation isn't a favour.",
    body: "Women in tech deserve spaces that were designed with them in mind, not retrofitted after the fact. I work to build those spaces — and support the women navigating rooms that weren't.",
  },
  {
    label: "Creativity needs infrastructure.",
    body: "Inspiration is everywhere. Good ideas are everywhere. What's rare is the system, the culture, and the leadership that lets those ideas become real things.",
  },
  {
    label: "The best mentors stay curious.",
    body: "I learn as much from the women I mentor as they learn from me. The relationship only works if both people are willing to be changed by it.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-[rgba(155,110,255,0.1)] py-24 px-6 md:px-12">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-[#D946EF] blur-[180px] opacity-[0.07] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#9B6EFF] blur-[160px] opacity-[0.07] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        {/* Sparkles */}
        <div className="absolute top-16 right-24 text-[#9B6EFF] animate-sparkle" style={{ opacity: 0.4 }}>
          <Sparkle size={18} />
        </div>
        <div className="absolute bottom-20 left-20 text-[#D946EF] animate-sparkle-delayed" style={{ opacity: 0.35 }}>
          <Sparkle size={12} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Visual / avatar */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(155,110,255,0.22)] to-[rgba(217,70,239,0.14)] border border-[rgba(155,110,255,0.22)]" />
              <div className="absolute inset-[3px] rounded-3xl bg-[#0c0c1e] flex flex-col items-center justify-center gap-4">
                <div
                  className="text-7xl font-bold gradient-text leading-none"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  SK
                </div>
                <div className="text-[9px] text-[#636876] tracking-[0.3em] uppercase">Sandra Kiel</div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[rgba(244,114,182,0.3)] bg-[rgba(244,114,182,0.08)] text-[#F472B6] text-[10px] font-medium">
                  <Sparkle size={8} />
                  Playpreneur
                </div>
              </div>
              {/* Corner brackets */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-l-2 border-t-2 border-[#9B6EFF]" />
              <div className="absolute -top-2.5 -right-2.5 w-6 h-6 border-r-2 border-t-2 border-[#9B6EFF]" />
              <div className="absolute -bottom-2.5 -left-2.5 w-6 h-6 border-l-2 border-b-2 border-[#2DD4BF]" />
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-r-2 border-b-2 border-[#2DD4BF]" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-2 md:-right-8 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.3)] text-[11px] shadow-lg">
              <span className="text-[#F59E0B]">✦</span>
              <span className="text-[#C4C9D4] font-medium">TEDxAmsterdamWomen</span>
            </div>
          </div>

          {/* Headline */}
          <div>
            <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-5">// About</div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight text-[#F8FAFC] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              I make the<br />
              serious stuff<br />
              <span className="gradient-text">feel alive.</span>
            </h1>
            <p className="text-[#636876] text-lg leading-relaxed">
              Speaker. Playpreneur. Women in Tech advocate. Mentor.
              And a person who genuinely believes that how you play is
              a window into how you lead.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bio ───────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        <div className="prose-sk">
          <p>
            I didn&apos;t plan to become a Playpreneur. I planned to build a conventional
            tech career and be very responsible about it. What happened instead was a
            series of experiments, accidents, and deeply uncomfortable conversations
            that eventually turned into a point of view I couldn&apos;t stop talking about:
            <strong> play is not the opposite of work. It&apos;s the thing that makes work worth doing.</strong>
          </p>
          <p>
            Over the last twelve-plus years, I&apos;ve keynoted at conferences across Europe,
            run innovation workshops for teams who thought they didn&apos;t have time to play
            (they were wrong), and built mentoring relationships with women in tech who
            were figuring out how to navigate spaces that weren&apos;t designed with them in mind.
            I&apos;ve given a TEDx talk, appeared on podcasts, and collected enough conference
            badges to wallpaper a small room.
          </p>
          <p>
            My work sits at the intersection of play theory, organizational design, and
            personal leadership &mdash; with a heavy dose of Women in Tech advocacy woven
            through all of it. I care about building things that last, cultures that
            breathe, and rooms that actually include everybody.
          </p>
          <p>
            When I&apos;m not on stage or deep in a workshop, I&apos;m usually writing, mentoring,
            collecting stickers from conferences I loved, or thinking about the next
            question that nobody&apos;s quite asking yet.
          </p>
        </div>
      </div>

      {/* ── I believe in ──────────────────────────────────────── */}
      <div className="border-t border-[rgba(155,110,255,0.08)] py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] text-[#9B6EFF] tracking-[0.22em] uppercase mb-4">// What I Stand On</div>
          <h2
            className="text-4xl font-bold text-[#F8FAFC] mb-12"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Things I Believe
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {beliefs.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] hover:border-[rgba(155,110,255,0.3)] card-lift p-7"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Sparkle size={12} className="text-[#D946EF] flex-shrink-0 mt-1" />
                  <h3
                    className="text-base font-bold text-[#F8FAFC] leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {b.label}
                  </h3>
                </div>
                <p className="text-[#636876] text-sm leading-relaxed pl-6">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Credentials strip ─────────────────────────────────── */}
      <div className="border-t border-[rgba(155,110,255,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Talks & Sessions" },
              { value: "50k+", label: "People Reached" },
              { value: "12+",  label: "Years of Play" },
              { value: "3",    label: "Countries on Stage" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-[#0c0c1e] border border-[rgba(155,110,255,0.1)] p-6 text-center"
              >
                <div
                  className="text-3xl font-bold gradient-text mb-2"
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

      {/* ── CTAs ─────────────────────────────────────────────── */}
      <div className="border-t border-[rgba(155,110,255,0.08)] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/sessions"
            className="px-7 py-3.5 rounded-full bg-[rgba(155,110,255,0.12)] border border-[rgba(155,110,255,0.3)] text-[#9B6EFF] font-semibold hover:bg-[rgba(155,110,255,0.22)] transition-all duration-200"
          >
            See My Sessions &rarr;
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch &rarr;
          </Link>
          <Link
            href="/mentoring"
            className="px-7 py-3.5 rounded-full border border-[rgba(217,70,239,0.3)] text-[#D946EF] font-semibold hover:bg-[rgba(217,70,239,0.08)] transition-all duration-200"
          >
            Mentoring &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
