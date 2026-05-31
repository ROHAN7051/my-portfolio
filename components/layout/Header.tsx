"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "border-b border-border bg-bg/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-14 items-center justify-between">
          <a href="#" className="font-mono text-sm font-bold text-text">
            ~/{site.name.split(" ")[0].toLowerCase()}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:bg-bg-hover hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="relative flex h-8 w-8 items-center justify-center rounded border border-border text-text-secondary md:hidden"
            >
              <span
                className={`absolute h-0.5 w-3.5 bg-current transition-all duration-200 ${
                  menuOpen ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-3.5 bg-current transition-all duration-200 ${
                  menuOpen ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-bg/98 backdrop-blur-md transition-opacity duration-200 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-lg text-text-secondary transition-colors hover:text-green"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
