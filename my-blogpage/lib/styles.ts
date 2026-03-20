// ── Shared styling utilities ──────────────────────────────────────────────────
// Moved from app/data/ so all pages can share these without importing data files.

export function getCategoryStyle(category: string): string {
  const styles: Record<string, string> = {
    Leadership:
      "bg-[rgba(155,110,255,0.12)] text-[#9B6EFF] border border-[rgba(155,110,255,0.25)]",
    "Women in Tech":
      "bg-[rgba(217,70,239,0.12)] text-[#D946EF] border border-[rgba(217,70,239,0.25)]",
    Playpreneur:
      "bg-[rgba(45,212,191,0.12)] text-[#2DD4BF] border border-[rgba(45,212,191,0.25)]",
    Personal:
      "bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.25)]",
    Mentoring:
      "bg-[rgba(244,114,182,0.12)] text-[#F472B6] border border-[rgba(244,114,182,0.25)]",
    "Career Growth":
      "bg-[rgba(244,114,182,0.12)] text-[#F472B6] border border-[rgba(244,114,182,0.25)]",
    Career:
      "bg-[rgba(244,114,182,0.12)] text-[#F472B6] border border-[rgba(244,114,182,0.25)]",
    Pivot:
      "bg-[rgba(45,212,191,0.12)] text-[#2DD4BF] border border-[rgba(45,212,191,0.25)]",
    Identity:
      "bg-[rgba(155,110,255,0.12)] text-[#9B6EFF] border border-[rgba(155,110,255,0.25)]",
    "Power Platform":
      "bg-[rgba(45,212,191,0.12)] text-[#2DD4BF] border border-[rgba(45,212,191,0.25)]",
  };
  return (
    styles[category] ??
    "bg-[rgba(155,110,255,0.12)] text-[#9B6EFF] border border-[rgba(155,110,255,0.25)]"
  );
}

export function getTopicStyle(topic: string): string {
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
    Session:
      "bg-[rgba(45,212,191,0.12)] text-[#2DD4BF] border border-[rgba(45,212,191,0.25)]",
  };
  return (
    styles[topic] ??
    "bg-[rgba(155,110,255,0.12)] text-[#9B6EFF] border border-[rgba(155,110,255,0.25)]"
  );
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}
