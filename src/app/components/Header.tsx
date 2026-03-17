"use client";

import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { href: "#about", en: "ABOUT", ja: "プロフィール" },
  { href: "#skills", en: "SKILLS", ja: "能力スタック" },
  { href: "#history", en: "HISTORY", ja: "経歴" },
  { href: "#hobbies", en: "HOBBIES", ja: "趣味" },
  { href: "#contact", en: "CONTACT", ja: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle, mounted } = useTheme();

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between">
        <a href="#" className="text-xs tracking-[0.2em] font-bold uppercase text-foreground">
          <span className="block text-[10px] tracking-[0.15em] font-normal">経営 × マーケティング</span>
          HAYASHIDA SHOGO
        </a>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggle}
              className="w-10 h-10 flex items-center justify-center text-foreground hover:text-muted transition-colors"
              aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Desktop Side Navigation */}
      <nav className="hidden lg:flex fixed top-0 right-0 h-full w-64 z-40 flex-col items-start justify-center px-10 gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 text-foreground"
          >
            <span className="text-sm font-bold tracking-[0.15em]">{link.en}</span>
            <span className="w-8 h-px bg-foreground/30 group-hover:w-12 transition-all" />
            <span className="text-[11px] text-muted">{link.ja}</span>
          </a>
        ))}
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="block text-xl font-bold tracking-[0.2em]">{link.en}</span>
              <span className="block text-xs text-muted mt-1">{link.ja}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
