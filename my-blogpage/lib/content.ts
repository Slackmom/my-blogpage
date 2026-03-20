// ── Content reading utilities ─────────────────────────────────────────────────
//
// All content lives in /content/{type}/*.md
// Frontmatter is parsed by gray-matter.
// Markdown body is rendered to HTML by remark + remark-html.
//
// getAll()     — synchronous, frontmatter only, sorted by date desc.
//                Use on list/overview pages — fast, no async needed.
//
// getBySlug()  — async, frontmatter + rendered HTML body.
//                Use on detail pages.
//
// getSlugs()   — returns all slugs for a type.
//                Use in generateStaticParams().

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentRoot = path.join(process.cwd(), "content");

// ── getSlugs ─────────────────────────────────────────────────────────────────

export function getSlugs(type: string): string[] {
  const dir = path.join(contentRoot, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// ── getAll ────────────────────────────────────────────────────────────────────
// Returns all items for a content type, sorted by date descending.
// Does NOT render the markdown body — only frontmatter fields.

export function getAll<T extends { date: string }>(
  type: string
): Array<T & { slug: string }> {
  const slugs = getSlugs(type);
  const items = slugs.map((slug) => {
    const raw = fs.readFileSync(
      path.join(contentRoot, type, `${slug}.md`),
      "utf8"
    );
    const { data } = matter(raw);
    return { slug, ...data } as unknown as T & { slug: string };
  });
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// ── getBySlug ─────────────────────────────────────────────────────────────────
// Returns a single item with frontmatter + rendered HTML body.

export async function getBySlug<T>(
  type: string,
  slug: string
): Promise<T & { slug: string; content: string }> {
  const raw = fs.readFileSync(
    path.join(contentRoot, type, `${slug}.md`),
    "utf8"
  );
  const { data, content } = matter(raw);
  const html = (await remark().use(remarkHtml).process(content)).toString();
  return { slug, ...data, content: html } as unknown as T & {
    slug: string;
    content: string;
  };
}
