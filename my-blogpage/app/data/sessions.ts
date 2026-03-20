export type Session = {
  id: string;
  title: string;
  description: string;
  event: string;
  eventUrl?: string;
  date: string;
  year: number;
  category: "Keynote" | "Workshop" | "Panel" | "Podcast" | "Talk";
  location?: string;
};

export const sessions: Session[] = [
  {
    id: "play-to-win-2026",
    title: "Play to Win: Gamification for Leaders Who Mean Business",
    description:
      "A high-energy keynote on using game mechanics to drive engagement, innovation, and real results — without turning work into a hollow points system. Includes live audience experiments.",
    event: "Future of Work Summit",
    eventUrl: "#",
    date: "2026-03-08",
    year: 2026,
    category: "Keynote",
    location: "Amsterdam, NL",
  },
  {
    id: "women-who-build-2026",
    title: "Women Who Build: The Case for Redesigning the Room",
    description:
      "An honest, unfiltered conversation about what it actually takes to show up as a woman in tech — and what organizations need to do differently if they want to keep the talent they claim to value.",
    event: "Women in Tech Europe",
    eventUrl: "#",
    date: "2026-02-20",
    year: 2026,
    category: "Keynote",
    location: "Berlin, DE",
  },
  {
    id: "playpreneur-workshop-2025",
    title: "Become a Playpreneur: A Half-Day Innovation Workshop",
    description:
      "An immersive working session where teams reframe their biggest stuck problems through play-based design thinking. Not a training — an experience with deliverables you actually use.",
    event: "InnovateCon 2025",
    eventUrl: "#",
    date: "2025-11-14",
    year: 2025,
    category: "Workshop",
    location: "Utrecht, NL",
  },
  {
    id: "psychological-safety-panel-2025",
    title: "Beyond Buzzwords: Building Real Psychological Safety",
    description:
      "A panel on what psychological safety actually means in practice — with specific examples of what it looks like, what kills it, and why play is one of the fastest ways to create it.",
    event: "HR Tech Conference 2025",
    date: "2025-09-22",
    year: 2025,
    category: "Panel",
    location: "Rotterdam, NL",
  },
  {
    id: "serious-play-podcast-2025",
    title: "On Playful Careers, Big Bets, and Naming Yourself",
    description:
      "A deep conversation about building a personal brand around a word you invented, the identity work behind becoming a Playpreneur, and why taking play seriously is the most subversive thing you can do.",
    event: "The Serious Play Podcast",
    eventUrl: "#",
    date: "2025-06-11",
    year: 2025,
    category: "Podcast",
  },
  {
    id: "level-up-keynote-2025",
    title: "Level Up: Building Cultures That Actually Work",
    description:
      "A keynote on the intersection of game design, organizational culture, and human motivation — arguing that the best culture decks in the world are nothing without the playful infrastructure to back them up.",
    event: "Startup Grind Amsterdam",
    eventUrl: "#",
    date: "2025-03-05",
    year: 2025,
    category: "Keynote",
    location: "Amsterdam, NL",
  },
  {
    id: "tedx-playpreneur-2024",
    title: "From Player to Playpreneur",
    description:
      "The TEDx talk that started it all — a personal story about discovering that play isn't the opposite of serious work, it's the engine underneath it. The talk that gave the Playpreneur identity its public debut.",
    event: "TEDxAmsterdamWomen",
    eventUrl: "#",
    date: "2024-11-09",
    year: 2024,
    category: "Talk",
    location: "Amsterdam, NL",
  },
  {
    id: "mentoring-panel-2024",
    title: "What Nobody Tells You About Mentoring (And Being Mentored)",
    description:
      "A candid panel on the dynamics of mentoring relationships — what makes them transformative versus transactional, how to find mentors who actually challenge you, and why reciprocity matters more than hierarchy.",
    event: "Tech Sisters Summit 2024",
    eventUrl: "#",
    date: "2024-06-18",
    year: 2024,
    category: "Panel",
    location: "The Hague, NL",
  },
  {
    id: "creative-leadership-2024",
    title: "The Playful Organization: Why Creativity Needs Infrastructure",
    description:
      "Creativity doesn't happen in a vacuum — or in a two-day offsite. This talk explores how organizations can build the systems, rituals, and leadership behaviours that make creativity sustainable, not a one-off event.",
    event: "Creative Leadership Forum",
    date: "2024-02-29",
    year: 2024,
    category: "Keynote",
    location: "Eindhoven, NL",
  },
];

export function getSessionCategoryStyle(category: string): string {
  const styles: Record<string, string> = {
    Keynote:
      "bg-[rgba(155,110,255,0.12)] text-[#9B6EFF] border border-[rgba(155,110,255,0.25)]",
    Workshop:
      "bg-[rgba(45,212,191,0.12)] text-[#2DD4BF] border border-[rgba(45,212,191,0.25)]",
    Panel:
      "bg-[rgba(217,70,239,0.12)] text-[#D946EF] border border-[rgba(217,70,239,0.25)]",
    Podcast:
      "bg-[rgba(244,114,182,0.12)] text-[#F472B6] border border-[rgba(244,114,182,0.25)]",
    Talk:
      "bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.25)]",
  };
  return (
    styles[category] ??
    "bg-[rgba(155,110,255,0.12)] text-[#9B6EFF] border border-[rgba(155,110,255,0.25)]"
  );
}

export function formatSessionDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}
