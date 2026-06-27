"use client";

import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import Reveal from "./components/Reveal";
import Faq from "./components/Faq";
import NewsletterForm from "./components/NewsletterForm";
import CollectionCarousel from "./components/CollectionCarousel";
import { useI18n } from "./i18n";

const collectionImages = [
  "/images/bag-tan-triangle.png",
  "/images/bag-black-cherry.png",
  "/images/bag-red-tophandle.png",
  "/images/bag-black-tophandle.png",
  "/images/bag-black-tote.png",
  "/images/look-red-mini.png",
  "/images/bag-bowler-raffia.png",
  "/images/bag-signature-brown.png",
  "/images/bag-coin-purse.png",
  "/images/bag-nylon-charm.png",
];

const lookbookImages = [
  "/images/look-snakeskin-street.png",
  "/images/look-red-chain.png",
];

const paletteHex = ["#c08a5e", "#8a5a36", "#d9a441", "#9d2b2b", "#1a1614"];

const journey = [
  "/images/journey-shrine.png",
  "/images/look-grey-tophandle.png",
  "/images/bag-snakeskin-flap.png",
  "/images/journey-faith.png",
  "/images/look-snakeskin-street.png",
  "/images/look-red-chain.png",
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`latin-mark ${className}`}>
      N<span className="text-copper">Ō</span>R
    </span>
  );
}

export default function Home() {
  const { t, lang } = useI18n();

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
              <Wordmark />
            </h1>
            <p className="mt-2 font-serif text-2xl italic text-copper-soft md:text-3xl">
              نور
            </p>
            <p className="mt-8 max-w-md text-balance text-sm font-light leading-relaxed tracking-wide-sm text-muted md:text-base">
              {t.hero.tagline}
            </p>
            <a
              href="#collection"
              className="group mt-12 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-wide-sm text-foreground"
            >
              <span className="transition-colors group-hover:text-copper-soft">
                {t.cta.discover}
              </span>
              <span className="block h-px w-10 bg-copper transition-all duration-500 group-hover:w-16" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
            <div className="h-12 w-px animate-pulse bg-gradient-to-b from-copper to-transparent" />
          </div>
        </section>

        {/* ===================== MARQUEE ===================== */}
        <section className="overflow-hidden border-y border-line bg-[#0c0a08] py-5">
          <div className="marquee-mask flex">
            <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="flex items-center">
                  {t.marquee.map((phrase, j) => (
                    <span key={`${i}-${j}`} className="flex items-center">
                      <span className="px-8 font-serif text-lg italic tracking-wide text-copper-soft md:text-xl">
                        {phrase}
                      </span>
                      <span className="text-copper">✦</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== HOUSE OF NOR (STORY) ===================== */}
        <section
          id="house"
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-40"
        >
          <Reveal className="lg:col-span-5">
            <p className="mb-6 text-[0.7rem] uppercase tracking-luxe text-copper">
              {t.house.eyebrow}
            </p>
            <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              {t.house.titleTop}
              <br />
              {lang === "en" ? (
                <Wordmark />
              ) : (
                <span className="text-copper-soft">نور</span>
              )}
            </h2>
            <p className="mt-6 font-serif text-xl italic text-copper-soft">
              {t.house.light}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-balance font-serif text-2xl font-light leading-snug md:text-3xl">
              {t.house.lead}
            </p>
            <p className="mt-8 max-w-xl text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
              {t.house.body}
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {t.house.stats.map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl text-copper-soft md:text-4xl">
                    {s.n}
                  </p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-wide-sm text-muted">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===================== PHILOSOPHY ===================== */}
        <section
          id="philosophy"
          className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-44"
        >
          <Reveal>
            <p className="mb-10 text-[0.7rem] uppercase tracking-luxe text-copper">
              {t.philosophy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-serif text-4xl font-light leading-[1.25] tracking-tight text-balance md:text-6xl">
              {t.philosophy.statement}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-12 max-w-xl text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
              {t.philosophy.body}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-16 font-serif text-3xl italic text-copper-soft md:text-4xl">
              {lang === "en" ? (
                <>
                  less <span className="not-italic text-copper">&gt;</span> more
                </>
              ) : (
                t.motto
              )}
            </p>
          </Reveal>
        </section>

        {/* ===================== COLLECTION ===================== */}
        <section id="collection" className="px-6 pb-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[0.7rem] uppercase tracking-luxe text-copper">
                  {t.collection.eyebrow}
                </p>
                <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
                  {t.collection.title}
                </h2>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-muted">
                {t.collection.note}
              </p>
            </Reveal>

            <Reveal>
              <CollectionCarousel
                items={t.collection.items}
                images={collectionImages}
                viewLabel={t.collection.viewPiece}
              />
            </Reveal>
          </div>
        </section>

        {/* ===================== FEATURED SPOTLIGHT ===================== */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/look-yellow-crossbody.png"
              alt="Editorial — the caramel crossbody, worn"
              fill
              sizes="100vw"
              className="object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807] via-[#0a0807]/55 to-transparent rtl:bg-gradient-to-l" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="mb-5 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.featured.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
                {t.featured.titleA}
                <br />
                {t.featured.titleB}
              </h2>
              <p className="mt-7 max-w-md text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
                {t.featured.body}
              </p>
              <a
                href="#order"
                className="group mt-10 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-wide-sm text-foreground"
              >
                <span className="transition-colors group-hover:text-copper-soft">
                  {t.cta.enquireToAcquire}
                </span>
                <span className="block h-px w-10 bg-copper transition-all duration-500 group-hover:w-16" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ===================== SIGNATURE — A SIGNATURE OF YOUR OWN ===================== */}
        <section id="signature" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 lg:grid-cols-2">
            <Reveal className="order-2 px-6 py-24 lg:order-1 lg:px-16 lg:py-40">
              <p className="mb-6 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.signature.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                {t.signature.titleA}
                <br />
                <span className="italic text-copper-soft">
                  {t.signature.titleB}
                </span>
              </h2>
              <p className="mt-8 max-w-md text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
                {t.signature.body}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-copper" />
                <span className="font-serif text-lg italic text-copper-soft">
                  {t.signature.mark}
                </span>
              </div>
            </Reveal>

            <div className="relative order-1 h-[60vh] w-full lg:order-2 lg:h-[88vh]">
              <Image
                src="/images/bag-black-cherry.png"
                alt="A black NOR mini bag carried by hand"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807] via-transparent to-transparent lg:from-[#0a0807]/80" />
            </div>
          </div>
        </section>

        {/* ===================== MATERIALS & PALETTE ===================== */}
        <section className="border-t border-line px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-5 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.materials.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light tracking-tight md:text-6xl">
                {t.materials.title}
              </h2>
              <p className="mx-auto mt-6 max-w-md text-sm font-light leading-loose tracking-wide-sm text-muted">
                {t.materials.note}
              </p>
            </Reveal>

            <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:gap-x-16">
              {t.materials.swatches.map((name, i) => (
                <Reveal key={paletteHex[i]} delay={i * 80}>
                  <div className="group flex flex-col items-center">
                    <span
                      className="h-24 w-24 rounded-full ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:scale-105 md:h-28 md:w-28"
                      style={{ backgroundColor: paletteHex[i] }}
                    />
                    <span className="mt-5 font-serif text-xl">{name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== MANIFESTO ===================== */}
        <section
          id="manifesto"
          className="relative overflow-hidden border-t border-line px-6 py-32 text-center md:py-44"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-serif text-4xl font-light leading-[1.12] tracking-tight text-balance md:text-6xl">
                {t.manifesto.lineA}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-2 font-serif text-4xl font-light leading-[1.12] tracking-tight text-balance text-copper-soft md:text-6xl">
                {t.manifesto.lineB}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
                {t.manifesto.body}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex flex-col items-center gap-5">
                <span className="h-px w-12 bg-copper" />
                <p className="font-serif text-2xl italic text-foreground md:text-3xl">
                  {t.manifesto.closing}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== LOOKBOOK ===================== */}
        <section className="px-6 py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-14 text-center">
              <p className="mb-4 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.lookbook.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
                {t.lookbook.title}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {t.lookbook.labels.map((label, i) => (
                <Reveal key={lookbookImages[i]} delay={i * 120}>
                  <figure className="group relative aspect-[3/4] overflow-hidden bg-[#15110e]">
                    <Image
                      src={lookbookImages[i]}
                      alt={label}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807]/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-6 start-6 font-serif text-2xl text-foreground md:text-3xl">
                      {label}
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
                {t.atelier.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight md:text-6xl">
                {t.atelier.titleA}
                <br />
                <span className="italic text-copper-soft">
                  {t.atelier.titleB}
                </span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:col-span-7">
              {t.atelier.features.map((f, i) => (
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

        {/* ===================== WORDS / TESTIMONIALS ===================== */}
        <section className="border-t border-line px-6 py-28 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-16 text-center">
              <p className="mb-5 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.words.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light tracking-tight md:text-6xl">
                {t.words.title}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {t.words.items.map((item, i) => (
                <Reveal key={item.quote} delay={i * 110}>
                  <figure className="flex h-full flex-col border-t border-line pt-8">
                    <span className="font-serif text-5xl leading-none text-copper">
                      “
                    </span>
                    <blockquote className="mt-2 flex-1 font-serif text-xl font-light italic leading-relaxed text-foreground md:text-2xl">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-6 text-[0.7rem] uppercase tracking-wide-sm text-muted">
                      {item.by}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== JOURNEY (INSTAGRAM) ===================== */}
        <section id="journal" className="px-6 pb-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="mb-4 text-[0.7rem] uppercase tracking-luxe text-copper">
                  {t.journal.eyebrow}
                </p>
                <h2 className="font-serif text-4xl font-light tracking-tight md:text-6xl">
                  {t.journal.title}
                </h2>
              </div>
              <a
                href="https://instagram.com/houseof.nor"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-wide-sm text-copper-soft"
                dir="ltr"
              >
                <span className="transition-colors group-hover:text-foreground">
                  @houseof.nor
                </span>
                <span className="block h-px w-10 bg-copper transition-all duration-500 group-hover:w-16" />
              </a>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {journey.map((img, i) => (
                <Reveal key={img} delay={(i % 3) * 80}>
                  <a
                    href="https://instagram.com/houseof.nor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-square overflow-hidden bg-[#15110e]"
                  >
                    <Image
                      src={img}
                      alt="House of NOR on Instagram"
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0807]/0 opacity-0 transition-all duration-500 group-hover:bg-[#0a0807]/45 group-hover:opacity-100">
                      <Wordmark className="font-serif text-2xl tracking-[0.3em] text-foreground" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section
          id="faq"
          className="border-t border-line px-6 py-28 lg:px-10 lg:py-36"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-4">
              <p className="mb-5 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.faq.eyebrow}
              </p>
              <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
                {t.faq.titleA}
                <br />
                {t.faq.titleB}
              </h2>
              <p className="mt-6 max-w-xs text-sm font-light leading-loose tracking-wide-sm text-muted">
                {t.faq.note}
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-8">
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* ===================== ORDER / CONTACT ===================== */}
        <section id="order" className="px-6 py-32 text-center lg:py-44">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="mb-8 text-[0.7rem] uppercase tracking-luxe text-copper">
                {t.order.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-balance md:text-7xl">
                {t.order.titleA}
                <br />
                {t.order.titleB}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-8 max-w-md text-sm font-light leading-loose tracking-wide-sm text-muted md:text-base">
                {t.order.body}
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
                {t.cta.orderEitaa}
              </a>
            </Reveal>

            <Reveal delay={400}>
              <a
                href="tel:+989352954353"
                className="mt-10 inline-block font-serif text-2xl tracking-wide text-foreground transition-colors hover:text-copper-soft md:text-3xl"
                dir="ltr"
              >
                {t.order.phone}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ===================== NEWSLETTER ===================== */}
        <section className="border-t border-line bg-[#0c0a08] px-6 py-24 text-center lg:py-32">
          <Reveal className="mx-auto max-w-xl">
            <p className="mb-6 text-[0.7rem] uppercase tracking-luxe text-copper">
              {t.newsletter.eyebrow}
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-balance md:text-5xl">
              {t.newsletter.title}
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-sm font-light leading-loose tracking-wide-sm text-muted">
              {t.newsletter.body}
            </p>
            <NewsletterForm />
          </Reveal>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="border-t border-line px-6 py-14 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-start">
              <a
                href="#top"
                className="flex flex-col items-center font-serif leading-[1.02] md:items-start"
                aria-label="House of NOR home"
              >
                <span className="text-[0.72rem] font-light tracking-[0.18em] text-muted">
                  House of
                </span>
                <Wordmark className="text-2xl tracking-[0.28em]" />
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
                { href: "#house", label: t.nav.house },
                { href: "#collection", label: t.nav.collection },
                { href: "#atelier", label: t.nav.atelier },
                { href: "#journal", label: t.nav.journal },
                { href: "#faq", label: t.nav.faq },
                { href: "#order", label: t.nav.order },
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
              © {new Date().getFullYear()}&nbsp;{t.brand} — {t.motto}
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
