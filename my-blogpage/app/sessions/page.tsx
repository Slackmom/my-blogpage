import Link from "next/link";
import { getAll } from "@/lib/content";
import type { Session } from "@/lib/types";
import { Sparkle } from "../components/Sparkle";
import SessionsGallery from "./SessionsGallery";

export const metadata = {
  title: "Sessions — Sandra Kiel",
  description:
    "A collectible card archive of keynotes, workshops, panels, and talks on play, leadership, creativity, and Women in Tech. Flip a card to discover each session.",
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
            <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Speaker Card Collection</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            On Stage &amp;<br />
            <span className="gradient-text">In the Room</span>
          </h1>
          <p className="max-w-xl text-[#636876] text-lg leading-relaxed">
            Every session is a collectible. Flip the cards to discover what&rsquo;s inside &mdash;
            keynotes, workshops, and conversations on play, leadership, and the serious work of
            making things stick.
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

      {/* ── Collectible card gallery (client) ───────────────────── */}
      <SessionsGallery sessions={sessions} />

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
            Book a Call &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
