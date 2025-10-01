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
  // Dodane pełne Open Graph i Twitter meta — użyj finalnego URL (www) żeby uniknąć redirectów
  openGraph: {
    title: "StockFlow",
    description: "Automatyczny generator zamówień do dostawców dla e-commerce.",
    url: "https://www.stockflow.pl/",
    siteName: "StockFlow",
    images: [
      {
        url: "https://www.stockflow.pl/stockflow-og.png",
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
    images: ["https://www.stockflow.pl/stockflow-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Jawne meta Open Graph i Twitter — używaj finalnego URL (www) aby uniknąć redirectów */}
        <link rel="canonical" href="https://www.stockflow.pl/" />
        <meta property="og:title" content="StockFlow" />
        <meta property="og:description" content="Automatyczny generator zamówień do dostawców dla e-commerce." />
        <meta property="og:url" content="https://www.stockflow.pl/" />
        <meta property="og:site_name" content="StockFlow" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.stockflow.pl/stockflow-og.png" />
        <meta property="og:image:secure_url" content="https://www.stockflow.pl/stockflow-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="StockFlow - automatyczny generator zamówień" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StockFlow" />
        <meta name="twitter:description" content="Automatyczny generator zamówień do dostawców dla e-commerce." />
        <meta name="twitter:image" content="https://www.stockflow.pl/stockflow-og.png" />
        <link rel="image_src" href="https://www.stockflow.pl/stockflow-og.png" />
      </head>
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
