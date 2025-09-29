import { Clock, BarChart3, Settings } from "lucide-react";
import automationIcon from "@/public/automat.jpeg";
import scheduleIcon from "@/public/zegar.jpeg";
import inventoryIcon from "@/public/paczki.jpeg";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      image: inventoryIcon,
      title: "Lista produktów",
      description: "Ustaw listę produktów, które chcesz śledzić - tylko te, które potrzebujesz."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: scheduleIcon,
      title: "Elastyczne planowanie",
      description: "Ustaw niestandardowe harmonogramy, które pasują do Twojego biznesu. Codziennie, co tydzień lub w niestandardowych odstępach - masz kontrolę."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      image: automationIcon,
      title: "Generowanie zamówień w tle",
      description: "Otrzymuj dokładne raporty zamówień bez przerywania pracy - system zapisze na twoim Google Drive."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Potężne Funkcje dla Nowoczesnego E-commerce
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wszystko, czego potrzebujesz, aby utrzymać porządek w swoim magazynie i sprawnie prowadzić biznes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-border/50 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-soft">
                    <Image src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;