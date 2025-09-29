import { Button } from "@mui/material"
import { Package } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">StockFlow</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
          </div>
          
          {/* CTA Buttons */}
          {/* <div className="flex items-center space-x-4">
            <Button variant="contained" size="small">
              Sign In
            </Button>
            <Button variant="outlined" size="small">
              Get Started
            </Button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;