
import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Wallet, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Wealth with <span className="gold-gradient">Digital Gold</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Save money from your online transactions and invest in 24K digital gold automatically.
            Start with as little as £1 and watch your wealth grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal">
              Start Investing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Real 24K Gold</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Auto-Save</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Growth Potential</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-0.5 rounded-2xl gold-shimmer blur-sm opacity-70"></div>
          <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-card p-1">
            <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-charcoal flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Gold bars and coins" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-semibold">Current Gold Price</div>
                <div className="text-3xl font-bold text-gold">£58.24/g</div>
                <div className="text-green-400 flex items-center text-sm">
                  +2.4% this week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
