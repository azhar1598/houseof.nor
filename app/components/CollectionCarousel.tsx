"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
const GAP = 24;
const DRAG_THRESHOLD = 45;

// SSR-safe layout effect.
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function CollectionCarousel({ items, images, viewLabel }: Props) {
  const n = items.length;
  // Three copies so the slider can loop seamlessly in either direction.
  const slides = [...items, ...items, ...items];

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(n);
  const [step, setStep] = useState(0);
  const [imgCenter, setImgCenter] = useState<number | null>(null);
  const [animate, setAnimate] = useState(true);
  const [dragPx, setDragPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);

  const startX = useRef(0);
  const draggingRef = useRef(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const slide = track?.children[0] as HTMLElement | undefined;
    if (!slide) return;
    setStep(slide.getBoundingClientRect().width + GAP);
    const imageBox = slide.firstElementChild as HTMLElement | null;
    if (imageBox) setImgCenter(imageBox.clientHeight / 2);
  }, []);

  useIsoLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const move = useCallback((dir: 1 | -1) => {
    setAnimate(true);
    setIndex((i) => i + dir);
  }, []);

  // Seamless loop: after a transition lands in a clone copy, jump (without
  // animation) back into the middle copy at the equivalent position.
  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.propertyName !== "transform") return;
      setIndex((i) => {
        if (i >= 2 * n) {
          setAnimate(false);
          return i - n;
        }
        if (i < n) {
          setAnimate(false);
          return i + n;
        }
        return i;
      });
    },
    [n],
  );

  // Re-enable animation on the frame after a no-animation normalisation jump.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // Autoplay.
  useEffect(() => {
    if (paused || dragging || step === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => move(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, dragging, step, move]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (step === 0) return;
    draggingRef.current = true;
    setDragging(true);
    setAnimate(false);
    startX.current = e.clientX;
    setDragPx(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setDragPx(e.clientX - startX.current);
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const delta = e.clientX - startX.current;
    setDragPx(0);
    setDragging(false);
    setAnimate(true);
    if (delta <= -DRAG_THRESHOLD) setIndex((i) => i + 1);
    else if (delta >= DRAG_THRESHOLD) setIndex((i) => i - 1);
  };

  const x = -(index * step) + dragPx;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        dir="ltr"
        className="-mx-6 overflow-hidden px-6 lg:-mx-10 lg:px-10"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-6 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `translate3d(${x}px, 0, 0)`,
            transition: animate
              ? "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)"
              : "none",
          }}
        >
          {slides.map((item, i) => {
            const img = images[i % n];
            return (
              <article
                key={`${i}-${img}`}
                className="group w-full shrink-0 select-none sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#15110e]">
                  <Image
                    src={img}
                    alt={`${item.name} — ${item.color}`}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 24vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-3 text-[0.65rem] uppercase tracking-wide-sm text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous"
        style={{ top: imgCenter ? `${imgCenter}px` : "40%" }}
        className="absolute left-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-black/65"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Next"
        style={{ top: imgCenter ? `${imgCenter}px` : "40%" }}
        className="absolute right-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-black/65"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
