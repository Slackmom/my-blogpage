import Link from "next/link";
import { Sparkle } from "./Sparkle";

const footerLinks = [
  { href: "/blog",      label: "Blog" },
  { href: "/sessions",  label: "Sessions" },
  { href: "/mentoring", label: "Mentoring" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(155,110,255,0.1)] bg-[#06060f]">
      <div className="max-w-5xl mx-auto px-6 py-12 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div>
            <div
              className="text-lg font-bold text-[#F8FAFC] mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="gradient-text">S</span>andra Kiel
            </div>
            <div className="text-xs text-[#636876] tracking-widest uppercase">
              Playpreneur · Speaker · Mentor
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#636876]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#C4C9D4] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-5 text-sm text-[#636876]">
            <a href="#" className="hover:text-[#9B6EFF] transition-colors duration-200">LinkedIn</a>
            <a href="#" className="hover:text-[#D946EF] transition-colors duration-200">Instagram</a>
            <a href="#" className="hover:text-[#2DD4BF] transition-colors duration-200">Twitter/X</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[rgba(155,110,255,0.08)] text-[10px] text-[#636876] tracking-wide">
          <span>&copy; 2026 Sandra Kiel. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with
            <Sparkle size={9} className="text-[#D946EF]" />
            and a healthy obsession with play.
          </span>
        </div>
      </div>
    </footer>
  );
}
