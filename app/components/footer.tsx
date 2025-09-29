import { Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">StockFlow</span>
            </div>
            <p className="text-muted-foreground">
              Zautomatyzuj swoje raporty sprzedaży i utrzymaj porządek w swoim e-commerce.<br />
              Twój magazyn, Twoje zasady.
            </p>
          </div>
          
          {/* Product */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">API</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
            </ul>
          </div> */}
          
          {/* Company */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div> */}
          
          {/* Support */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold text-foreground mb-4">Informacje</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:support@stockflow.pl" className="hover:text-primary transition-smooth">Centrum pomocy</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-smooth">Prywatność</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-smooth">Regulamin</a></li> */}
              {/* <li><a href="#" className="hover:text-primary transition-smooth">Status</a></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 StockFlow. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;