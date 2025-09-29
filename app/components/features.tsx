import { Card, CardContent } from "@mui/material";
import { Clock, BarChart3, Settings } from "lucide-react";
import automationIcon from "@/public/automation-icon.jpg";
import scheduleIcon from "@/public/schedule-icon.jpg";
import inventoryIcon from "@/public/inventory-icon.jpg";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: automationIcon,
      title: "Automated Reports",
      description: "Generate comprehensive stock reports automatically. No manual work, no delays - just accurate data when you need it."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      image: scheduleIcon,
      title: "Smart Scheduling",
      description: "Set custom rules and schedules that work for your business. Daily, weekly, or custom intervals - you're in control."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      image: inventoryIcon,
      title: "Background Processing",
      description: "Our system works silently in the background, monitoring your inventory and generating insights without interrupting your workflow."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern E-commerce
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to keep your inventory organized and your business running smoothly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-smooth border-border/50 bg-card">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-soft">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;