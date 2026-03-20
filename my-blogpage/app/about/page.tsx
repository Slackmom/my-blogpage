import Link from "next/link";
import Image from "next/image";
import { Sparkle } from "../components/Sparkle";

export const metadata = {
  title: "About — Sandra Kiel",
  description:
    "Sandra Kiel is a Microsoft MVP, Power Platform & M365 specialist, and international conference speaker — making tech adoption genuinely engaging through the power of game design.",
};

const beliefs = [
  {
    label: "Adoption is a design problem.",
    body: "Most technology fails not because it doesn't work, but because nobody wants to use it. Good UX design — especially game-inspired UX — is the gap between a rolled-out tool and a used one.",
  },
  {
    label: "Representation isn't a favour.",
    body: "Women in tech deserve spaces that were designed with them in mind, not retrofitted after the fact. I work to build those spaces — and support the women navigating rooms that weren't.",
  },
  {
    label: "Play is the mechanism, not the reward.",
    body: "Game design principles aren't decoration. They're a proven framework for motivation, behavior change, and genuine engagement. That's why they work in Power Apps as well as they work in Duolingo.",
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

        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Visual / photo */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(155,110,255,0.22)] to-[rgba(217,70,239,0.14)] border border-[rgba(155,110,255,0.22)]" />
              <div className="absolute inset-[3px] rounded-3xl overflow-hidden bg-[#0c0c1e]">
                <Image
                  src="/images/sandra.jpg"
                  alt="Sandra Kiel"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
              {/* Corner brackets */}
              <div className="absolute -top-2.5 -left-2.5 w-6 h-6 border-l-2 border-t-2 border-[#9B6EFF]" />
              <div className="absolute -top-2.5 -right-2.5 w-6 h-6 border-r-2 border-t-2 border-[#9B6EFF]" />
              <div className="absolute -bottom-2.5 -left-2.5 w-6 h-6 border-l-2 border-b-2 border-[#2DD4BF]" />
              <div className="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-r-2 border-b-2 border-[#2DD4BF]" />
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
            <p className="text-[#636876] text-lg leading-relaxed mb-6">
              Microsoft MVP. International conference speaker. Power Platform &amp; M365 specialist.
              And the person who keeps asking: what if adoption was actually fun?
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/sandra-kiel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(155,110,255,0.1)] border border-[rgba(155,110,255,0.25)] text-[#9B6EFF] text-sm font-medium hover:bg-[rgba(155,110,255,0.2)] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="https://mvp.microsoft.com/de-de/PublicProfile/5004592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.25)] text-[#2DD4BF] text-sm font-medium hover:bg-[rgba(45,212,191,0.2)] transition-colors duration-200"
              >
                <span className="text-[#F59E0B]">★</span>
                Microsoft MVP
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bio ───────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        <div className="prose-sk">
          <p>
            I&apos;m a <strong>Microsoft MVP</strong> specializing in Power Platform and Microsoft 365 — and
            I&apos;ve spent the last several years obsessed with one question: why do people adopt
            some tools and ignore others, and what does game design know about that gap that
            enterprise IT doesn&apos;t?
          </p>
          <p>
            The answer turns out to be: quite a lot. Streaks, progress bars, onboarding flows,
            celebration moments, contextual hints — these aren&apos;t gimmicks. They&apos;re the
            mechanisms that make Duolingo the most-used language learning app in the world while
            most corporate tools get opened once and quietly ignored forever.
            <strong> I build Power Apps and adoption frameworks that borrow those mechanics.</strong>
          </p>
          <p>
            I&apos;ve spoken at conferences across Europe and beyond — ESPC, Experts Live Europe,
            CollabDays, Teams Nation, Modern Workplace Conference Paris, and more — on topics
            ranging from gamification in Power Platform to Microsoft Mesh for neurodiverse teams
            to GitHub Copilot as a pair programmer for people who think they&apos;re &ldquo;not technical enough.&rdquo;
          </p>
          <p>
            I also mentor women in tech who are figuring out how to navigate spaces that
            weren&apos;t originally designed with them in mind. And when I&apos;m not on stage or
            building something, I&apos;m collecting conference stickers and thinking about the
            next question nobody&apos;s quite asking yet.
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
              { value: "19+",  label: "Conference Sessions" },
              { value: "MVP",  label: "Microsoft Award" },
              { value: "8+",   label: "Countries on Stage" },
              { value: "2023", label: "Speaking Since" },
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
