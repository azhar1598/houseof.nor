"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Is every piece made to order?",
    a: "Yes. Each NŌR bag is crafted once you order it, in small numbers, by hand. This keeps our editions limited and our quality uncompromising.",
  },
  {
    q: "How long until my bag arrives?",
    a: "Because pieces are made individually, please allow time for crafting. We share an estimated timeline when you enquire, and keep you updated at every stage.",
  },
  {
    q: "What leather do you use?",
    a: "Full-grain and vegetable-tanned hides, selected to develop a rich patina over the years. Each one is unique — small natural marks are a sign of authenticity.",
  },
  {
    q: "Can I request a custom colour?",
    a: "Often, yes. Beyond our core palette we can explore bespoke tones for select silhouettes. Message us on Instagram or Eitaa to discuss the details.",
  },
  {
    q: "How do I care for my piece?",
    a: "Keep it dry, store it in its dust bag, and condition the leather occasionally. Treated kindly, a NŌR bag is made to last for many years.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-xl font-normal transition-colors group-hover:text-copper-soft md:text-2xl">
                {item.q}
              </span>
              <span
                className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-copper" />
                <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-copper" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen
                  ? "grid-rows-[1fr] pb-7 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm font-light leading-loose tracking-wide-sm text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
