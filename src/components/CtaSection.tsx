
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const handleWaitlistClick = () => {
    document.dispatchEvent(new CustomEvent('open-waitlist-dialog'));
  };

  return (
    <section className="py-16 bg-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4">
            <Sparkles className="h-12 w-12 text-gold mx-auto animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your journey to building wealth starts here.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Invest in gold, invest in your future.
          </p>
          <Button 
            size="lg"
            className="bg-gold hover:bg-gold-dark text-charcoal animate-bounce"
            onClick={handleWaitlistClick}
          >
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
