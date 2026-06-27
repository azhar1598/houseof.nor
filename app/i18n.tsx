"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Lang = "en" | "fa";

const en = {
  brand: "NŌR",
  langName: "EN",
  otherLangName: "فارسی",
  nav: {
    house: "House",
    collection: "Collection",
    signature: "Signature",
    atelier: "Atelier",
    journal: "Journal",
    order: "Order",
    faq: "FAQ",
  },
  cta: {
    enquire: "Enquire",
    discover: "Discover the collection",
    enquireToAcquire: "Enquire to acquire",
    orderEitaa: "Order on Eitaa",
  },
  hero: {
    tagline: "Handcrafted leather, distilled to its essence.",
  },
  marquee: [
    "Made to order",
    "Handcrafted leather",
    "Created with value",
    "less > more",
    "In its right moment",
    "A signature of your own",
    "Quiet luxury",
  ],
  house: {
    eyebrow: "The House",
    titleTop: "House of",
    light: "نور — light",
    lead: "NŌR means light. We named the house for the way good leather catches it — and for the clarity of a wardrobe pared back to what you truly love.",
    body: "House of NŌR began as a small atelier with an obsession for proportion and patina. The story behind every bag is a feeling — and a value we want to give to you. We bring together modern, distinctive design, the finest genuine leather, and careful hand-stitching. We make few things, slowly, for people who would rather own one considered piece than many forgettable ones.",
    stats: [
      { n: "100%", l: "Handcrafted" },
      { n: "Made", l: "To order" },
      { n: "1", l: "Of its kind" },
    ],
  },
  philosophy: {
    eyebrow: "The Philosophy",
    statement:
      "We believe that what you leave out matters as much as what remains.",
    body: "Every NŌR piece begins with subtraction — paring away the superfluous until only the necessary, and the beautiful, is left. Our belief has never changed: to create value, and to leave a signature on the way you carry yourself. Honest leather. Quiet hardware. Forms that age into something more personal with every wear — pieces made to be lived with, meaningfully.",
  },
  motto: "less > more",
  manifesto: {
    lineA: "She doesn't follow trends.",
    lineB: "She creates her own rhythm.",
    body: "Every detail she chooses — every piece she wears — tells a story only a powerful woman can carry.",
    closing: "For the woman who thinks differently.",
  },
  collection: {
    eyebrow: "The Collection",
    title: "Objects of restraint",
    note: "A small, considered edit. Made in limited numbers, by hand.",
    viewPiece: "View piece →",
    items: [
      {
        name: "The Triangle",
        tagline: "Vegetable-tanned calf",
        color: "Caramel",
      },
      { name: "Le Petit NŌR", tagline: "Mini top-handle", color: "Onyx" },
      { name: "Le Petit Rouge", tagline: "Hand-held mini", color: "Bordeaux" },
      {
        name: "The Top Handle",
        tagline: "Structured top-handle",
        color: "Onyx",
      },
      {
        name: "The Mini Tote",
        tagline: "Structured micro tote",
        color: "Onyx",
      },
      { name: "The Pocket", tagline: "Micro crossbody", color: "Cerise" },
      { name: "The Bowler", tagline: "Raffia & calf", color: "Natural" },
      { name: "The Monogram", tagline: "Coated canvas", color: "Chestnut" },
      { name: "The Coin Purse", tagline: "Zip pouch", color: "Onyx" },
      { name: "The Featherweight", tagline: "Nylon mini tote", color: "Black" },
    ],
  },
  featured: {
    eyebrow: "Featured · 01",
    titleA: "Amber catches",
    titleB: "the light.",
    body: "Our caramel crossbody in vegetable-tanned calf — compact, warm, and made to be lived in. The piece that taught us how little a bag really needs.",
  },
  signature: {
    eyebrow: "The Signature",
    titleA: "A signature",
    titleB: "of your own.",
    body: "My belief in choosing these forms has always been the same — to create value, and to leave a signature on the way you carry yourself. The story behind every bag is a feeling, and a value I want to give to you.",
    mark: "live with value",
  },
  materials: {
    eyebrow: "Materials",
    title: "The palette",
    note: "A tight range of natural leather tones, each chosen to deepen and soften with time. No two pieces age quite alike.",
    swatches: ["Caramel", "Cognac", "Amber", "Cerise", "Onyx"],
  },
  lookbook: {
    eyebrow: "Worn",
    title: "In the everyday",
    labels: ["NŌR, in motion", "A note of cerise"],
  },
  atelier: {
    eyebrow: "The Atelier",
    titleA: "Made slowly,",
    titleB: "made well.",
    features: [
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
    ],
  },
  words: {
    eyebrow: "Words",
    title: "Words we live by",
    items: [
      {
        quote:
          "My belief has always been to create value — and to leave a signature on your style.",
        by: "Our belief",
      },
      {
        quote:
          "The story behind every bag is a feeling — and a value I want to give to you.",
        by: "The story",
      },
      {
        quote:
          "Everything happens at the right moment. Sometimes you simply wait, and trust in God's timing.",
        by: "On timing",
      },
    ],
  },
  journal: {
    eyebrow: "The Journal",
    title: "Follow the journey",
  },
  faq: {
    eyebrow: "Enquiries",
    titleA: "Good to",
    titleB: "know",
    note: "Anything else? We're a message away on Instagram or Eitaa.",
    items: [
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
    ],
  },
  order: {
    eyebrow: "Acquire",
    titleA: "Begin a quiet",
    titleB: "conversation.",
    body: "Each NŌR piece is made to order. Reach us on Instagram or Eitaa, or by phone, and we'll guide you through the collection.",
    phone: "0935\u00A0295\u00A04353",
  },
  newsletter: {
    eyebrow: "Stay close",
    title: "Join the list",
    body: "New pieces, in small numbers, told first to those on our list. No noise — only NŌR.",
    placeholder: "Your email",
    join: "Join",
    thanks: "Thank you — you're on the list.",
  },
};

export type Dict = typeof en;

const fa: Dict = {
  brand: "نور",
  langName: "فارسی",
  otherLangName: "EN",
  nav: {
    house: "خانه",
    collection: "مجموعه",
    signature: "امضا",
    atelier: "آتلیه",
    journal: "ژورنال",
    order: "سفارش",
    faq: "پرسش‌ها",
  },
  cta: {
    enquire: "تماس",
    discover: "مشاهدهٔ مجموعه",
    enquireToAcquire: "برای سفارش تماس بگیرید",
    orderEitaa: "سفارش در ایتا",
  },
  hero: {
    tagline: "چرمِ دست‌دوز، رسیده به جوهرهٔ خویش.",
  },
  marquee: [
    "ساخت سفارشی",
    "چرم دست‌دوز",
    "ساخته‌شده با ارزش",
    "کمتر، بیشتر",
    "در زمانِ درست",
    "امضایی از آنِ خودت",
    "لوکسِ آرام",
  ],
  house: {
    eyebrow: "خانه",
    titleTop: "خانهٔ",
    light: "نور — روشنایی",
    lead: "نور یعنی روشنایی. این خانه را به‌نامِ شیوه‌ای نامیدیم که چرمِ خوب نور را در خود می‌گیرد؛ و به‌نامِ صفای کمدی که تنها به آنچه به‌راستی دوستش داری خلاصه شده است.",
    body: "خانهٔ نور به‌عنوان آتلیه‌ای کوچک آغاز شد؛ با وسواسی برای تناسب و کهنگیِ اصیلِ چرم. پشتِ هر کیف، حسی نهفته است — و ارزشی که می‌خواهیم به تو بدهیم. ما طراحیِ مدرن و متمایز را با بهترین چرمِ طبیعی و دوختِ دستیِ دقیق در هم می‌آمیزیم. چیزهای کمی می‌سازیم، به‌آهستگی، برای کسانی که یک قطعهٔ سنجیده را به چندین قطعهٔ فراموش‌شدنی ترجیح می‌دهند.",
    stats: [
      { n: "۱۰۰٪", l: "دست‌دوز" },
      { n: "ساخت", l: "سفارشی" },
      { n: "۱", l: "یگانه" },
    ],
  },
  philosophy: {
    eyebrow: "فلسفه",
    statement:
      "ما باور داریم آنچه حذف می‌کنی، به‌اندازهٔ آنچه می‌مانَد اهمیت دارد.",
    body: "هر قطعهٔ نور با کاستن آغاز می‌شود؛ پیراستنِ زوائد تا جایی که تنها امرِ ضروری و زیبا باقی بماند. باورِ ما هرگز تغییر نکرده: آفریدنِ ارزش، و گذاشتنِ امضایی بر شیوه‌ای که خود را با آن حمل می‌کنی. چرمِ صادق. یراقِ آرام. فرم‌هایی که با هر بار استفاده شخصی‌تر می‌شوند — قطعاتی برای زیستن، با ارزش.",
  },
  motto: "کمتر، بیشتر",
  manifesto: {
    lineA: "او از مدها پیروی نمی‌کند.",
    lineB: "او ریتمِ خود را می‌سازد.",
    body: "هر جزئی که برمی‌گزیند — هر قطعه‌ای که می‌پوشد — داستانی را روایت می‌کند که تنها یک زنِ قدرتمند می‌تواند با خود حمل کند.",
    closing: "برای زنی که متفاوت می‌اندیشد.",
  },
  collection: {
    eyebrow: "مجموعه",
    title: "اشیائی از جنسِ خویشتن‌داری",
    note: "گزیده‌ای کوچک و سنجیده. ساخته‌شده در شمارگانِ محدود، با دست.",
    viewPiece: "→ مشاهدهٔ قطعه",
    items: [
      { name: "مثلث", tagline: "چرمِ گیاهی‌دباغی", color: "کاراملی" },
      { name: "نوآرِ کوچک", tagline: "دسته‌کوتاهِ مینی", color: "مشکی" },
      { name: "سرخِ کوچک", tagline: "مینیِ دستی", color: "زرشکی" },
      { name: "دسته‌بالا", tagline: "دسته‌کوتاهِ ساختاردار", color: "مشکی" },
      { name: "توتِ مینی", tagline: "توتِ کوچکِ ساختار‌دار", color: "مشکی" },
      { name: "جیبی", tagline: "دوشیِ میکرو", color: "گیلاسی" },
      { name: "بولر", tagline: "حصیر و چرمِ گوساله", color: "طبیعی" },
      { name: "مونوگرام", tagline: "کنفِ روکش‌دار", color: "بلوطی" },
      { name: "کیفِ سکه", tagline: "پوچِ زیپ‌دار", color: "مشکی" },
      { name: "پَرسبک", tagline: "توتِ مینیِ نایلونی", color: "مشکی" },
    ],
  },
  featured: {
    eyebrow: "ویژه · ۰۱",
    titleA: "کهربا،",
    titleB: "نور را می‌گیرد.",
    body: "دوشیِ کاراملیِ ما از چرمِ گیاهی‌دباغی — جمع‌وجور، گرم و ساخته‌شده برای زندگیِ روزمره. قطعه‌ای که به ما آموخت یک کیف چه اندک چیزی نیاز دارد.",
  },
  signature: {
    eyebrow: "امضا",
    titleA: "امضایی",
    titleB: "از آنِ خودت.",
    body: "باورم در انتخابِ این فرم‌ها همیشه یکی بوده — آفریدنِ ارزش، و گذاشتنِ امضایی بر شیوه‌ای که خود را با آن حمل می‌کنی. داستانِ پشتِ هر کیف، همان حس و ارزشی است که می‌خواهم به تو بدهم.",
    mark: "با ارزش زندگی کن",
  },
  materials: {
    eyebrow: "متریال",
    title: "پالت",
    note: "گستره‌ای محدود از رنگ‌های طبیعیِ چرم، هرکدام برگزیده تا با گذرِ زمان عمیق‌تر و نرم‌تر شوند. هیچ دو قطعه‌ای یکسان کهنه نمی‌شوند.",
    swatches: ["کاراملی", "کنیاکی", "کهربایی", "گیلاسی", "مشکی"],
  },
  lookbook: {
    eyebrow: "بر تن",
    title: "در روزمرگی",
    labels: ["نور، در حرکت", "نتی از گیلاسی"],
  },
  atelier: {
    eyebrow: "آتلیه",
    titleA: "به‌آهستگی ساخته‌شده،",
    titleB: "خوب ساخته‌شده.",
    features: [
      {
        t: "چرمِ صادق",
        d: "چرم‌های دانه‌کاملِ گیاهی‌دباغی، برگزیده تا به‌زیبایی کهنه شوند — هر کیف با گذرِ زمان یگانه می‌شود.",
      },
      {
        t: "پرداختِ دستی",
        d: "لبه‌ها با دست رنگ و پرداخت می‌شوند و با نخِ مومی دوخته می‌شوند؛ درزهایی که ماندگارند.",
      },
      {
        t: "محدود به‌عمد",
        d: "ما در شمارگانِ کم تولید می‌کنیم. کمیابی این‌جا یک ترفند نیست — نتیجهٔ طبیعیِ مراقبت است.",
      },
      {
        t: "ساخته‌شده برای ماندن",
        d: "خطوطی بی‌زمان، یراقی آرام. قطعاتی که برای دوام، فراتر از مدها و فصل‌ها ساخته شده‌اند.",
      },
    ],
  },
  words: {
    eyebrow: "سخن‌ها",
    title: "سخنانی که با آن‌ها زندگی می‌کنیم",
    items: [
      {
        quote:
          "باورم همیشه این بوده که ارزش بیافرینم — و امضایی بر سبکِ تو بگذارم.",
        by: "باورِ ما",
      },
      {
        quote: "پشتِ هر کیف حسی نهفته است — و ارزشی که می‌خواهم به تو بدهم.",
        by: "داستان",
      },
      {
        quote:
          "هر چیز در زمانِ درستش رخ می‌دهد. گاهی فقط باید صبر کنی و به زمان‌بندیِ خدا اعتماد کنی.",
        by: "دربارهٔ زمان",
      },
    ],
  },
  journal: {
    eyebrow: "ژورنال",
    title: "همراهِ این سفر باشید",
  },
  faq: {
    eyebrow: "پرسش‌ها",
    titleA: "خوب است",
    titleB: "بدانید",
    note: "چیز دیگری هست؟ ما در اینستاگرام یا ایتا یک پیام با شما فاصله داریم.",
    items: [
      {
        q: "آیا هر قطعه سفارشی ساخته می‌شود؟",
        a: "بله. هر کیفِ نور پس از ثبتِ سفارش، در شمارگانِ کم و با دست ساخته می‌شود. این کار نسخه‌های ما را محدود و کیفیت را بی‌مصالحه نگه می‌دارد.",
      },
      {
        q: "چه مدت تا رسیدنِ کیفم زمان می‌برد؟",
        a: "چون هر قطعه جداگانه ساخته می‌شود، لطفاً برای ساخت زمان در نظر بگیرید. هنگام تماس، زمان‌بندیِ تخمینی را می‌گوییم و در هر مرحله شما را در جریان می‌گذاریم.",
      },
      {
        q: "از چه چرمی استفاده می‌کنید؟",
        a: "چرم‌های دانه‌کامل و گیاهی‌دباغی، برگزیده تا در طولِ سال‌ها کهنگیِ غنی بگیرند. هر کدام یگانه‌اند — نشانه‌های طبیعیِ کوچک، گواهِ اصالت‌اند.",
      },
      {
        q: "می‌توانم رنگِ سفارشی بخواهم؟",
        a: "اغلب، بله. فراتر از پالتِ اصلی می‌توانیم برای برخی مدل‌ها رنگ‌های سفارشی را بررسی کنیم. برای جزئیات در اینستاگرام یا ایتا پیام دهید.",
      },
      {
        q: "چطور از قطعه‌ام مراقبت کنم؟",
        a: "خشک نگهش دار، در کیسهٔ پارچه‌ای‌اش بگذار و گاهی چرم را تغذیه کن. با مراقبتِ مهربانانه، کیفِ نور سال‌ها ماندگار است.",
      },
    ],
  },
  order: {
    eyebrow: "خرید",
    titleA: "گفت‌وگویی آرام را",
    titleB: "آغاز کنید.",
    body: "هر قطعهٔ نور سفارشی ساخته می‌شود. از طریقِ اینستاگرام یا ایتا، یا تلفنی با ما در تماس باشید تا شما را در مجموعه راهنمایی کنیم.",
    phone: "۰۹۳۵\u00A0۲۹۵\u00A0۴۳۵۳",
  },
  newsletter: {
    eyebrow: "همراه بمانید",
    title: "به جمعِ ما بپیوندید",
    body: "قطعاتِ تازه، در شمارگانِ کم، نخست به کسانی که در فهرستِ ما هستند گفته می‌شود. بی‌هیاهو — تنها نور.",
    placeholder: "ایمیلِ شما",
    join: "عضویت",
    thanks: "سپاس — شما به فهرست افزوده شدید.",
  },
};

const dictionaries: Record<Lang, Dict> = { en, fa };

type I18nContextValue = {
  lang: Lang;
  otherLang: Lang;
  dir: "ltr" | "rtl";
  t: Dict;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "nor-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with "en" so server and first client render match (no hydration mismatch).
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "fa") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    const dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle("lang-fa", lang === "fa");
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "fa" : "en";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      otherLang: lang === "en" ? "fa" : "en",
      dir: lang === "fa" ? "rtl" : "ltr",
      t: dictionaries[lang],
      setLang,
      toggle,
    }),
    [lang, setLang, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}
