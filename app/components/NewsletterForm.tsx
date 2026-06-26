"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-10 font-serif text-2xl italic text-copper-soft">
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-4 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Your email"
        className="w-full flex-1 border-b border-line bg-transparent px-1 py-3 text-center text-sm tracking-wide-sm text-foreground placeholder:text-muted focus:border-copper focus:outline-none sm:text-left"
      />
      <button
        type="submit"
        className="w-full whitespace-nowrap rounded-full bg-copper px-8 py-3.5 text-[0.72rem] uppercase tracking-wide-sm text-[#0a0807] transition-all duration-500 hover:bg-copper-soft sm:w-auto"
      >
        Join
      </button>
    </form>
  );
}
