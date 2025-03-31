
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  const handleWaitlistClick = () => {
    document.dispatchEvent(new CustomEvent('open-waitlist-dialog'));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Carat – Your Gateway to Digital Gold Investment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At Carat, we believe in making gold investment accessible, automated, and secure. 
            Our innovative app allows you to save money and invest in 24K digital gold seamlessly. 
            Whether you're looking to build wealth or create a savings habit, Carat provides the 
            tools to effortlessly grow your savings with the power of gold.
          </p>
          <Button 
            className="bg-gold hover:bg-gold-dark text-charcoal"
            onClick={handleWaitlistClick}
          >
            Start Your Gold Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
