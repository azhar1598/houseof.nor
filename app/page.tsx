import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import Reveal from "./components/Reveal";

const collection = [
  {
    name: "The Triangle",
    tagline: "Vegetable-tanned calf",
    color: "Caramel",
    img: "/images/bag-tan-triangle.png",
  },
  {
    name: "Le Petit Cherry",
    tagline: "Mini top-handle",
    color: "Onyx",
    img: "/images/bag-black-cherry.png",
  },
  {
    name: "The Mini Tote",
    tagline: "Structured micro tote",
    color: "Onyx",
    img: "/images/bag-black-tote.png",
  },
  {
    name: "The Pocket",
    tagline: "Micro crossbody",
    color: "Cerise",
    img: "/images/look-red-mini.png",
  },
];

const lookbook = [
  { img: "/images/look-yellow-crossbody.png", label: "Amber on Noir" },
  { img: "/images/look-black-crossbody.png", label: "Shadow Play" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="relative z-[2]">
        {/* ===================== HERO ===================== */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-tan.png"
              alt="A woman in caramel and black holding a NOR leather bag"
              fill
              priority
              sizes="100vw"
              className="animate-slow-zoom object-cover object-[center_28%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0807]/70 via-[#0a0807]/30 to-[#0a0807]" />
            <div className="absolute inset-0 bg-[#0a0807]/25" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <p
              className="mb-8 text-[0.7rem] uppercase tracking-luxe text-copper-soft"
              dir="rtl"
              lang="ar"
            >
              بسم الله النور
            </p>
            <h1 className="font-serif text-[22vw] leading-[0.85] tracking-[0.05em] text-foreground sm:text-[16vw] md:text-[12rem]">
              N<span className="text-copper">Ō</span>R
            </h1>
            <p className="mt-2 font-serif text-2xl italic text-copper-soft md:text-3xl">
              نور
            </p>
            <p className="mt-8 max-w-md text-balance text-sm font-light leading-relaxed tracking-wide-sm text-muted md:text-base">
              Handcrafted leather, distilled to its essence.
            </p>
            <a
              href="#collection"
              className="group mt-12 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-wide-sm text-foreground"
            >
              <span className="transition-colors group-hover:text-copper-soft">
                Discover the collection
              </span>
              <span className="block h-px w-10 bg-copper transition-all duration-500 group-hover:w-16" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
            <div className="h-12 w-px animate-pulse bg-gradient-to-b from-copper to-transparent" />
          </div>
        </section>

        {/* ===================== PHILOSOPHY ===================== */}
        <section
          id="philosophy"
          className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-44"
        >
          <Reveal>
            <p className="mb-10 text-[0.7rem] uppercase tracking-luxe text-copper">
              The Philosophy
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-serif text-4xl font-light leading-[1.25] tracking-tight text-balance md:text-6xl">
              We believe that what you leave out
              <br className="hidden md:block" /> matters as much as what remains.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-12 max-w-xl text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
              Every NŌR piece begins with subtraction — paring away the
              superfluous until only the necessary, and the beautiful, is left.
              Honest leather. Quiet hardware. Forms that age into something more
              personal with every wear.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-16 font-serif text-3xl italic text-copper-soft md:text-4xl">
              less <span className="not-italic text-copper">&gt;</span> more
            </p>
          </Reveal>
        </section>

        {/* ===================== COLLECTION ===================== */}
        <section id="collection" className="px-6 pb-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-16 flex flex-col items-end justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[0.7rem] uppercase tracking-luxe text-copper">
                  The Collection
                </p>
                <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
                  Objects of restraint
                </h2>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-muted">
                A small, considered edit. Made in limited numbers, by hand.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {collection.map((item, i) => (
                <Reveal key={item.name} delay={i * 90}>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#15110e]">
                      <Image
                        src={item.img}
                        alt={`${item.name} — ${item.color}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute bottom-4 left-4 translate-y-3 text-[0.65rem] uppercase tracking-wide-sm text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        View piece →
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SIGNATURE — THE CHERRY ===================== */}
        <section id="signature" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 lg:grid-cols-2">
            <Reveal className="order-2 px-6 py-24 lg:order-1 lg:px-16 lg:py-40">
              <p className="mb-6 text-[0.7rem] uppercase tracking-luxe text-copper">
                The Signature
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                A single cherry,
                <br />
                <span className="italic text-copper-soft">always.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
                Where a house signs its name, we tie a small cherry charm — a
                quiet wink, a reminder that luxury can be playful. It is the one
                detail we never subtract. Look for it on every piece.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-copper" />
                <span className="font-serif text-lg italic text-copper-soft">
                  the mark of NŌR
                </span>
              </div>
            </Reveal>

            <div className="relative order-1 h-[60vh] w-full lg:order-2 lg:h-[88vh]">
              <Image
                src="/images/bag-black-cherry.png"
                alt="A black NOR mini bag with the signature cherry charm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807] via-transparent to-transparent lg:from-[#0a0807]/80" />
            </div>
          </div>
        </section>

        {/* ===================== LOOKBOOK ===================== */}
        <section className="px-6 py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-14 text-center">
              <p className="mb-4 text-[0.7rem] uppercase tracking-luxe text-copper">
                Worn
              </p>
              <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
                In the everyday
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {lookbook.map((look, i) => (
                <Reveal key={look.label} delay={i * 120}>
                  <figure className="group relative aspect-[3/4] overflow-hidden bg-[#15110e]">
                    <Image
                      src={look.img}
                      alt={look.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-6 left-6 font-serif text-2xl text-foreground md:text-3xl">
                      {look.label}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== ATELIER ===================== */}
        <section
          id="atelier"
          className="border-y border-line bg-[#0c0a08] px-6 py-28 lg:px-10 lg:py-40"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="mb-6 text-[0.7rem] uppercase tracking-luxe text-copper">
                The Atelier
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                Made slowly,
                <br />
                <span className="italic text-copper-soft">made well.</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:col-span-7">
              {[
                {
                  t: "Honest leather",
                  d: "Full-grain and vegetable-tanned hides chosen to patina gracefully — each bag becomes singular with time.",
                },
                {
                  t: "Hand-finished",
                  d: "Edges painted and burnished by hand, stitched with waxed thread for seams that endure.",
                },
                {
                  t: "Limited by intent",
                  d: "We produce in small runs. Scarcity here is not a strategy — it is the natural result of care.",
                },
                {
                  t: "Designed to last",
                  d: "Timeless silhouettes, quiet hardware. Pieces meant to outlive trends and seasons.",
                },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 90}>
                  <div className="border-t border-line pt-6">
                    <h3 className="font-serif text-2xl font-normal">{f.t}</h3>
                    <p className="mt-3 text-sm font-light leading-loose tracking-wide-sm text-muted">
                      {f.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== ORDER / CONTACT ===================== */}
        <section id="order" className="px-6 py-32 text-center lg:py-44">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="mb-8 text-[0.7rem] uppercase tracking-luxe text-copper">
                Acquire
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-balance md:text-7xl">
                Begin a quiet
                <br />
                conversation.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-8 max-w-md text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
                Each NŌR piece is made to order. Reach us on Instagram or Eitaa,
                or by phone, and we&apos;ll guide you through the collection.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="https://instagram.com/houseof.nor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-copper px-9 py-4 text-[0.72rem] uppercase tracking-wide-sm text-[#0a0807] transition-all duration-500 hover:bg-copper-soft sm:w-auto"
              >
                @houseof.nor
              </a>
              <a
                href="https://eitaa.com/houseeofnor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-line px-9 py-4 text-[0.72rem] uppercase tracking-wide-sm text-copper-soft transition-all duration-500 hover:border-copper hover:text-foreground sm:w-auto"
              >
                Order on Eitaa
              </a>
            </Reveal>

            <Reveal delay={400}>
              <a
                href="tel:+989352954353"
                className="mt-10 inline-block font-serif text-2xl tracking-wide text-foreground transition-colors hover:text-copper-soft md:text-3xl"
                dir="ltr"
              >
                0935&nbsp;295&nbsp;4353
              </a>
            </Reveal>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="border-t border-line px-6 py-14 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <a
                href="#top"
                className="font-serif text-2xl tracking-[0.3em]"
                aria-label="NOR home"
              >
                N<span className="text-copper">Ō</span>R
              </a>
              <p
                className="mt-3 text-xs font-light tracking-wide-sm text-copper-soft"
                dir="rtl"
                lang="ar"
              >
                بسم الله النور
              </p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                { href: "#collection", label: "Collection" },
                { href: "#philosophy", label: "Philosophy" },
                { href: "#atelier", label: "Atelier" },
                { href: "#order", label: "Order" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[0.7rem] uppercase tracking-wide-sm text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <p className="text-[0.65rem] uppercase tracking-wide-sm text-muted">
              © {new Date().getFullYear()}&nbsp;NŌR — less &gt; more
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
