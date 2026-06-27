import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Vazirmatn } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./i18n";

const GA_MEASUREMENT_ID = "G-H94NBKMH9R";
const CLARITY_PROJECT_ID = "xd6qn3wbqp";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NŌR — نور | Quiet Luxury Leather",
  description:
    "NŌR (نور) — handcrafted leather handbags built on a single belief: less > more. Discover the collection.",
  keywords: [
    "NOR",
    "House of Nor",
    "نور",
    "leather handbags",
    "quiet luxury",
    "minimalist bags",
  ],
  openGraph: {
    title: "NŌR — نور | Quiet Luxury Leather",
    description: "Handcrafted leather, distilled to its essence. less > more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${jost.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
