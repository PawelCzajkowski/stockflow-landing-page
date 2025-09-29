'use client';

import { ArrowRight } from "lucide-react";
import heroImage from "@/public/hero-warehouse.jpg";
import Image from "next/image";
import Button from "@/app/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Automatyzuj swoje
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  raporty sprzedaży
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Stwórz reguły, zaplanuj automatyczne raporty i utrzymaj idealny porządek w swoim e-commerce.
                Nasz system działa w tle, dzięki czemu Ty masz czas na rozwój biznesu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero"
                className="group"
                onClick={() => window.open('https://forms.gle/yRbSpSkDJUPF6gjEA', '_blank')}>
                Dołącz do oczekujących
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                Brak potrzeby konfiguracji
              </div>
              {/* <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                14-dniowy bezpłatny okres próbny
              </div> */}
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                Możliwość anulowania w dowolnym momencie
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <Image
                src={heroImage}
                alt="Modern warehouse automation and inventory management system"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;