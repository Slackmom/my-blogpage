"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sparkle } from "./Sparkle";

const navLinks = [
  { href: "/blog",      label: "Blog" },
  { href: "/sessions",  label: "Sessions" },
  { href: "/mentoring", label: "Mentoring" },
  { href: "/about",     label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#06060f]/85 border-b border-[rgba(155,110,255,0.1)]">

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          aria-label="Sandra Kiel — home"
        >
          <span
            className="text-[1.05rem] font-bold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="gradient-text">S</span>andra Kiel
          </span>
          <span className="text-[9px] tracking-[0.22em] text-[#636876] uppercase mt-0.5">
            Playpreneur
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  active
                    ? "text-[#F8FAFC] font-medium"
                    : "text-[#636876] hover:text-[#C4C9D4]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[rgba(155,110,255,0.12)] border border-[rgba(155,110,255,0.3)] text-[#9B6EFF] text-sm font-semibold hover:bg-[rgba(155,110,255,0.22)] hover:border-[rgba(155,110,255,0.5)] transition-all duration-200"
          >
            <Sparkle size={10} />
            Book Me
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-[rgba(155,110,255,0.08)] transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block w-5 h-px bg-[#C4C9D4] transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#C4C9D4] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#C4C9D4] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#06060f]/90 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute top-[65px] left-0 right-0 bg-[#06060f] border-b border-[rgba(155,110,255,0.15)] px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3.5 text-lg font-medium border-b border-[rgba(155,110,255,0.07)] transition-colors duration-200 ${
                    active ? "text-[#F8FAFC]" : "text-[#636876]"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-6 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#9B6EFF] to-[#D946EF] text-white font-semibold text-base"
            >
              <Sparkle size={11} />
              Book Me
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
