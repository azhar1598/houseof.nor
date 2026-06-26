"use client";

import { useState } from "react";
import { useI18n } from "../i18n";

export default function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {t.faq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-start"
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
