import Image from "next/image";
import Navigation from "@/app/components/navigation";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
