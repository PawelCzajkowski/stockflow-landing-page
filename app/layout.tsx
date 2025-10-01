import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Navigation from "./components/navigation";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StockFlow",
  description: "Automatyczny generator zamówień do dostawców dla sklepów internetowych.",
  // Dodane pełne Open Graph i Twitter meta — dostosuj `url` i `images[].url` do swojej domeny.
  openGraph: {
    title: "StockFlow",
    description: "Automatyczny generator zamówień do dostawców dla e-commerce.",
    url: "https://stockflow.pl/",
    siteName: "StockFlow",
    images: [
      {
        url: "https://stockflow.pl/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "StockFlow - automatyczny generator zamówień",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StockFlow",
    description: "Automatyczny generator zamówień do dostawców dla e-commerce.",
    images: ["https://stockflow.pl/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <SpeedInsights />
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-card text-foreground px-3 py-2 rounded-md shadow-soft">Skip to content</a>
          <Navigation />
          <main id="main" className="min-h-screen pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
