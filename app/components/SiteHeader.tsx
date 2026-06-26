"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

export default function SiteHeader() {
  const { t, toggle, otherLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#house", label: t.nav.house },
    { href: "#collection", label: t.nav.collection },
    { href: "#signature", label: t.nav.cherry },
    { href: "#atelier", label: t.nav.atelier },
    { href: "#journal", label: t.nav.journal },
    { href: "#order", label: t.nav.order },
  ];

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
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
            className="group flex flex-col font-serif leading-[1.02] text-foreground"
            aria-label="House of NOR home"
          >
            <span className="text-[0.72rem] font-light tracking-[0.18em] text-muted transition-colors group-hover:text-copper-soft">
              House of
            </span>
            <span className="latin-mark text-2xl tracking-[0.28em] transition-colors group-hover:text-copper-soft">
              N<span className="text-copper">Ō</span>R
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
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

          <div className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch language to ${otherLang === "fa" ? "Persian" : "English"}`}
              className="latin-mark text-[0.7rem] uppercase tracking-wide-sm text-muted transition-colors hover:text-copper-soft"
            >
              {t.otherLangName}
            </button>
            <a
              href="#order"
              className="rounded-full border border-line px-6 py-2.5 text-[0.7rem] uppercase tracking-wide-sm text-copper-soft transition-all duration-500 hover:border-copper hover:bg-copper hover:text-[#0a0807]"
            >
              {t.cta.enquire}
            </a>
          </div>

          <div className="flex items-center gap-5 md:hidden">
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch language to ${otherLang === "fa" ? "Persian" : "English"}`}
              className="latin-mark text-[0.7rem] uppercase tracking-wide-sm text-muted"
            >
              {t.otherLangName}
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            >
              <span className="h-px w-6 bg-foreground" />
              <span className="h-px w-6 bg-foreground" />
              <span className="h-px w-6 bg-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen, solid, scrollable overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-[#0a0807] transition-opacity duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between px-6 py-6">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex flex-col font-serif leading-[1.02] text-foreground"
            aria-label="House of NOR home"
          >
            <span className="text-[0.72rem] font-light tracking-[0.18em] text-muted">
              House of
            </span>
            <span className="latin-mark text-2xl tracking-[0.28em]">
              N<span className="text-copper">Ō</span>R
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="relative flex h-9 w-9 items-center justify-center"
          >
            <span className="absolute h-px w-6 rotate-45 bg-foreground" />
            <span className="absolute h-px w-6 -rotate-45 bg-foreground" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-7 overflow-y-auto px-6 py-10">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${120 + i * 55}ms` : "0ms",
              }}
              className={`font-serif text-3xl tracking-wide text-foreground transition-all duration-500 hover:text-copper-soft ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setOpen(false)}
            style={{
              transitionDelay: open ? `${120 + links.length * 55}ms` : "0ms",
            }}
            className={`mt-4 rounded-full border border-copper px-9 py-3.5 text-xs uppercase tracking-wide-sm text-copper-soft transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            {t.cta.enquire}
          </a>
          <button
            type="button"
            onClick={() => {
              toggle();
              setOpen(false);
            }}
            className="latin-mark mt-2 text-[0.72rem] uppercase tracking-wide-sm text-muted transition-colors hover:text-copper-soft"
          >
            {t.otherLangName}
          </button>
          <p
            className="mt-4 text-[0.7rem] uppercase tracking-luxe text-copper"
            dir="rtl"
            lang="ar"
          >
            بسم الله النور
          </p>
        </nav>
      </div>
    </>
  );
}
