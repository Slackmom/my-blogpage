"use client";

import { useState, useCallback } from "react";
import { Sparkle } from "./Sparkle";

// ─── Symbols ──────────────────────────────────────────────────────────────────

interface GameSymbol {
  id: string;
  label: string;
  accent: string;
}

const SYMBOLS: GameSymbol[] = [
  { id: "ai",     label: "AI",       accent: "#F59E0B" },
  { id: "chat",   label: "Chat",     accent: "#9B6EFF" },
  { id: "notes",  label: "Notes",    accent: "#2DD4BF" },
  { id: "slides", label: "Slides",   accent: "#F472B6" },
  { id: "sheets", label: "Sheets",   accent: "#2DD4BF" },
  { id: "email",  label: "Email",    accent: "#D946EF" },
  { id: "cloud",  label: "Cloud",    accent: "#9B6EFF" },
  { id: "loop",   label: "Loop",     accent: "#F59E0B" },
  { id: "files",  label: "Files",    accent: "#F472B6" },
  { id: "apps",   label: "Apps",     accent: "#9B6EFF" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function SymbolIcon({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "ai":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path d="M21 4L11 20h7l-3 12 12-16h-8Z"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            fill={color} fillOpacity="0.18" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path d="M5 7q0-2 2-2h22q2 0 2 2v14q0 2-2 2H16l-6 6 2-6H7q-2 0-2-2Z"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            fill={color} fillOpacity="0.14" />
          <circle cx="12" cy="14" r="1.6" fill={color} />
          <circle cx="18" cy="14" r="1.6" fill={color} />
          <circle cx="24" cy="14" r="1.6" fill={color} />
        </svg>
      );
    case "notes":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path d="M8 3h14l8 8v22q0 2-2 2H8q-2 0-2-2V5q0-2 2-2z"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            fill={color} fillOpacity="0.1" />
          <path d="M22 3v8h8" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M11 18h14M11 23h14M11 28h8"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "slides":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <rect x="2" y="4" width="32" height="22" rx="2"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
          <path d="M18 26v6M11 32h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <rect x="8"  y="18" width="4" height="5"  rx="1" fill={color} fillOpacity="0.65" />
          <rect x="14" y="14" width="4" height="9"  rx="1" fill={color} fillOpacity="0.65" />
          <rect x="20" y="10" width="4" height="13" rx="1" fill={color} fillOpacity="0.85" />
          <rect x="26" y="15" width="4" height="8"  rx="1" fill={color} fillOpacity="0.65" />
        </svg>
      );
    case "sheets":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <rect x="3" y="3" width="30" height="30" rx="2.5"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" />
          <rect x="3" y="3" width="30" height="8.5" rx="2.5"
            fill={color} fillOpacity="0.24" />
          <path d="M3 19.5h30M3 28h30M14 3v30M24 3v30"
            stroke={color} strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <rect x="2" y="9" width="32" height="21" rx="2.5"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
          <path d="M2 11.5L18 22l16-10.5"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path d="M7 29Q3 29 3 24Q3 19 7 18.5Q7 13 13 13Q17 13 18.5 16Q21 13 26 14.5Q31 16 31 21Q34 22.5 34 25.5Q34 29 30 29Z"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            fill={color} fillOpacity="0.12" />
        </svg>
      );
    case "loop":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path d="M10 18A8 8 0 0 1 26 18"
            stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M26 14v4h-4"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 18A8 8 0 0 1 10 18"
            stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M10 22v-4h4"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "files":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <path d="M4 13q0-2 2-2h24q2 0 2 2V30q0 2-2 2H6q-2 0-2-2Z"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            fill={color} fillOpacity="0.1" />
          <path d="M4 11q0-1 2-1h11l3-4h8q2 0 2 2v3"
            stroke={color} strokeWidth="1.5" strokeLinejoin="round"
            fill={color} fillOpacity="0.2" />
        </svg>
      );
    case "apps":
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <rect x="3"  y="3"  width="13" height="13" rx="2.5"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.18" />
          <rect x="20" y="3"  width="13" height="13" rx="2.5"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
          <rect x="3"  y="20" width="13" height="13" rx="2.5"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
          <rect x="20" y="20" width="13" height="13" rx="2.5"
            stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.28" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
          <circle cx="18" cy="18" r="10" stroke={color} strokeWidth="1.5" />
        </svg>
      );
  }
}

// ─── Deck ─────────────────────────────────────────────────────────────────────

interface CardData {
  uid: number;
  pairId: string;
  symbol: GameSymbol;
}

function buildShuffledDeck(): CardData[] {
  const deck = SYMBOLS.flatMap((symbol) => [
    { pairId: symbol.id, symbol },
    { pairId: symbol.id, symbol },
  ]);
  // Fisher-Yates shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.map((card, i) => ({ ...card, uid: i }));
}

// ─── Single card ──────────────────────────────────────────────────────────────

interface GameCardProps {
  card: CardData;
  isRevealed: boolean;
  isMatched: boolean;
  onClick: () => void;
}

function GameCard({ card, isRevealed, isMatched, onClick }: GameCardProps) {
  const { symbol } = card;
  const a = symbol.accent;

  return (
    <div
      className="flip-wrapper select-none"
      style={{ cursor: isMatched ? "default" : "pointer" }}
      onClick={onClick}
      role="button"
      tabIndex={isMatched ? -1 : 0}
      aria-label={isRevealed ? symbol.label : "Hidden card — tap to reveal"}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !isMatched && onClick()}
    >
      {/* flip-inner in normal flow (NOT absolute) — aspect-ratio gives it height.
          Same pattern as SessionCard. flip-faces are absolute inset-0 inside it. */}
      <div
        className={`flip-inner${isRevealed ? "" : " is-flipped"}`}
        style={{ aspectRatio: "3/4" }}
      >

        {/* ── FRONT: Icon face ───────────────────────────────── */}
        <div className="flip-face absolute inset-0">
          <div
            className="absolute inset-0 rounded-[10px] transition-all duration-300"
            style={{
              padding: "1.5px",
              background: isMatched
                ? `linear-gradient(135deg, ${a}, ${a}aa)`
                : `linear-gradient(135deg, ${a}99, ${a}44)`,
              boxShadow: isMatched ? `0 0 14px ${a}66, 0 0 4px ${a}44` : "none",
            }}
          >
            <div
              className="h-full rounded-[8.5px] flex items-center justify-center relative overflow-hidden"
              style={{ background: "#08081a" }}
            >
              {/* Matched glow behind icon */}
              {isMatched && (
                <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 45%, ${a}22 0%, transparent 65%)` }}
                />
              )}
              {/* Icon */}
              <div className="relative z-10" style={{ width: "52%", height: "52%" }}>
                <SymbolIcon id={symbol.id} color={a} />
              </div>
              {/* Matched checkmark */}
              {isMatched && (
                <div
                  className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                  style={{ background: a, color: "#06060f", fontSize: "7px", fontWeight: 900 }}
                >
                  ✓
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── BACK: Hidden card ──────────────────────────────── */}
        <div className="flip-face-back absolute inset-0">
          <div
            className="absolute inset-0 rounded-[10px]"
            style={{
              padding: "1.5px",
              background: "linear-gradient(135deg, rgba(155,110,255,0.55), rgba(217,70,239,0.4), rgba(45,212,191,0.45))",
            }}
          >
            <div
              className="h-full rounded-[8.5px] flex items-center justify-center"
              style={{ background: "#060611" }}
            >
              <span style={{ color: "rgba(155,110,255,0.35)", lineHeight: 1, fontSize: "clamp(14px, 3.5vw, 22px)" }}>
                ✦
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressPips({ matched, total }: { matched: number; total: number }) {
  return (
    <div className="flex gap-1 flex-wrap justify-center mt-4 md:mt-5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-500"
          style={{
            width: "6px", height: "6px",
            background: i < matched
              ? "linear-gradient(135deg, #9B6EFF, #D946EF)"
              : "rgba(255,255,255,0.1)",
            boxShadow: i < matched ? "0 0 6px rgba(155,110,255,0.5)" : "none",
          }}
        />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function MemoryGame() {
  const [deck, setDeck]         = useState<CardData[]>(() => buildShuffledDeck());
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [matched, setMatched]   = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<number[]>([]);
  const [checking, setChecking] = useState(false);
  const [moves, setMoves]       = useState(0);

  const isWon = matched.size === SYMBOLS.length;

  const handleClick = useCallback((uid: number, pairId: string) => {
    if (checking || matched.has(pairId) || revealed.has(uid) || selected.length >= 2) return;

    const nextRevealed = new Set(revealed).add(uid);
    const nextSelected = [...selected, uid];
    setRevealed(nextRevealed);
    setSelected(nextSelected);

    if (nextSelected.length === 2) {
      setMoves((m) => m + 1);
      const [aUid, bUid] = nextSelected;
      const aPair = deck.find((c) => c.uid === aUid)!.pairId;
      const bPair = deck.find((c) => c.uid === bUid)!.pairId;
      setChecking(true);

      setTimeout(() => {
        if (aPair === bPair) {
          // Match — keep revealed, mark as matched
          setMatched((prev) => new Set(prev).add(aPair));
        } else {
          // No match — flip back
          setRevealed((prev) => {
            const next = new Set(prev);
            next.delete(aUid);
            next.delete(bUid);
            return next;
          });
        }
        setSelected([]);
        setChecking(false);
      }, 820);
    }
  }, [checking, matched, revealed, selected, deck]);

  function handleReset() {
    setDeck(buildShuffledDeck());
    setRevealed(new Set());
    setMatched(new Set());
    setSelected([]);
    setChecking(false);
    setMoves(0);
  }

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 border-t border-[rgba(155,110,255,0.07)]">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4 mb-7 md:mb-9">
          <div>
            <div className="flex items-center gap-2 text-[#9B6EFF] mb-3">
              <Sparkle size={10} />
              <span className="text-[10px] font-medium tracking-[0.22em] uppercase">Play First</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-2 leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The Productivity Match
            </h2>
            <p className="text-[#636876] text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
              Ten pairs of Microsoft productivity tools.
              Tap to flip &mdash; how fast can your brain connect the dots?
            </p>
          </div>

          {/* Score */}
          <div className="text-right flex-shrink-0 pt-1">
            <div
              className="text-2xl md:text-3xl font-black gradient-text leading-none"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {matched.size}<span className="text-[#3a3a5a] font-normal text-lg">/10</span>
            </div>
            <div className="text-[9px] text-[#636876] uppercase tracking-widest mt-0.5">Matched</div>
            {moves > 0 && (
              <div className="text-[9px] text-[#636876] mt-1">{moves} moves</div>
            )}
          </div>
        </div>

        {/* ── Game board ─────────────────────────────────────── */}
        <div className="relative">
          <div className="grid grid-cols-5 gap-2 md:gap-3">
            {deck.map((card) => (
              <GameCard
                key={card.uid}
                card={card}
                isRevealed={revealed.has(card.uid) || matched.has(card.pairId)}
                isMatched={matched.has(card.pairId)}
                onClick={() => handleClick(card.uid, card.pairId)}
              />
            ))}
          </div>

          {/* Win overlay */}
          {isWon && (
            <div
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              style={{ background: "rgba(6,6,15,0.9)", backdropFilter: "blur(8px)" }}
            >
              <div
                className="text-center px-8 py-8 rounded-2xl mx-4"
                style={{
                  background: "rgba(12,12,30,0.97)",
                  border: "1px solid rgba(155,110,255,0.25)",
                  boxShadow: "0 0 40px rgba(155,110,255,0.15)",
                }}
              >
                <div className="text-3xl mb-3" style={{ color: "#9B6EFF" }}>✦</div>
                <h3
                  className="text-xl font-black text-[#F8FAFC] mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  All Matched!
                </h3>
                <p className="text-[#636876] text-sm mb-5">
                  {moves} moves &middot; {SYMBOLS.length} pairs
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #9B6EFF, #D946EF)" }}
                >
                  Play again &rarr;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Pair progress pips ─────────────────────────────── */}
        <ProgressPips matched={matched.size} total={SYMBOLS.length} />

        {/* ── Reset link ─────────────────────────────────────── */}
        {!isWon && moves > 0 && (
          <div className="mt-3 flex justify-center">
            <button
              onClick={handleReset}
              className="text-[11px] text-[#636876] hover:text-[#9B6EFF] transition-colors duration-200"
            >
              Reset game
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
