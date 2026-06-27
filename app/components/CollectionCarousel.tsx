"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = {
  name: string;
  tagline: string;
  color: string;
};

type Props = {
  items: Item[];
  images: string[];
  viewLabel: string;
};

const AUTOPLAY_MS = 4500;

export default function CollectionCarousel({ items, images, viewLabel }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [paused, setPaused] = useState(false);
  const [imgCenter, setImgCenter] = useState<number | null>(null);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const x = Math.abs(el.scrollLeft);
    setAtStart(x <= 2);
    setAtEnd(x >= max - 2);
    const imageBox = el.querySelector("article")
      ?.firstElementChild as HTMLElement | null;
    if (imageBox) setImgCenter(imageBox.clientHeight / 2);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const cardStep = useCallback((el: HTMLDivElement) => {
    const first = el.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap || "24") || 24;
    return first ? first.clientWidth + gap : el.clientWidth;
  }, []);

  const scrollByDir = useCallback(
    (dir: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      const rtl = getComputedStyle(el).direction === "rtl";
      el.scrollBy({ left: cardStep(el) * dir * (rtl ? -1 : 1), behavior: "smooth" });
    },
    [cardStep],
  );

  const advance = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    const max = el.scrollWidth - el.clientWidth;
    if (Math.abs(el.scrollLeft) >= max - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: cardStep(el) * (rtl ? -1 : 1), behavior: "smooth" });
  }, [cardStep]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = window.setInterval(advance, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, advance]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 lg:-mx-10 lg:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <article
            key={images[i]}
            className="group w-full shrink-0 cursor-pointer snap-center sm:w-[46%] sm:snap-start lg:w-[31%] xl:w-[23.5%]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#15110e]">
              <Image
                src={images[i]}
                alt={`${item.name} — ${item.color}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 24vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 start-4 translate-y-3 text-[0.65rem] uppercase tracking-wide-sm text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {viewLabel}
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl font-normal leading-tight">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs font-light tracking-wide-sm text-muted">
                  {item.tagline}
                </p>
              </div>
              <span className="mt-1 whitespace-nowrap text-[0.65rem] uppercase tracking-wide-sm text-copper-soft">
                {item.color}
              </span>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByDir(-1)}
        aria-label="Previous"
        style={{ top: imgCenter ? `${imgCenter}px` : "40%" }}
        className={`absolute start-3 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/65 sm:flex ${
          atStart ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rtl:rotate-180">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByDir(1)}
        aria-label="Next"
        style={{ top: imgCenter ? `${imgCenter}px` : "40%" }}
        className={`absolute end-3 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/65 sm:flex ${
          atEnd ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rtl:rotate-180">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
