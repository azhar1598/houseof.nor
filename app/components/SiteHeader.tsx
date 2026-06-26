"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#collection", label: "Collection" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#signature", label: "The Cherry" },
  { href: "#atelier", label: "Atelier" },
  { href: "#order", label: "Order" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-line bg-[#0a0807]/85 backdrop-blur-md py-4"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-serif text-2xl tracking-[0.3em] text-foreground transition-colors hover:text-copper-soft"
          aria-label="NOR home"
        >
          N<span className="text-copper">Ō</span>R
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.72rem] uppercase tracking-wide-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#order"
          className="hidden rounded-full border border-line px-6 py-2.5 text-[0.7rem] uppercase tracking-wide-sm text-copper-soft transition-all duration-500 hover:border-copper hover:bg-copper hover:text-[#0a0807] md:inline-block"
        >
          Enquire
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0a0807]/97 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-serif text-3xl tracking-wide text-foreground transition-colors hover:text-copper-soft"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#order"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full border border-copper px-8 py-3 text-xs uppercase tracking-wide-sm text-copper-soft"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
