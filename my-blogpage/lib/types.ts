// ── Shared content types ─────────────────────────────────────────────────────
// All content types share a common base.
// `content` is the rendered HTML body — only present after calling getBySlug().

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  content?: string;
}

export interface Session {
  slug: string;
  title: string;
  date: string;
  summary: string;
  topic: string;
  tags: string[];
  featured?: boolean;
  content?: string;
}

export interface MentoringStory {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  tags: string[];
  featured?: boolean;
  content?: string;
}
