import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
