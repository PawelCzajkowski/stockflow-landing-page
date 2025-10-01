import Navigation from "@/app/components/navigation";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Footer from "@/app/components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>StockFlow</title>
        <meta name="description" content="Automatyczny generator zamówień do dostawców dla e-commerce." />
      </Head>
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
