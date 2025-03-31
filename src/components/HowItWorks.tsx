
import { CreditCard, Calendar, LineChart, Coins, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type StepCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
}

const StepCard = ({ icon: Icon, title, description, step }: StepCardProps) => {
  return (
    <Card className="border-gold/20 h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="bg-gold/10 rounded-full p-3 shrink-0">
              <Icon className="h-6 w-6 text-gold" />
            </div>
            <div className="absolute -top-2 -left-2 w-5 h-5 bg-gold text-charcoal rounded-full flex items-center justify-center text-xs font-bold">
              {step}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Sign Up & Connect Your Payment Method",
      description: "Simply sign up with Carat and link your bank or payment method. Once connected, you're ready to start saving automatically."
    },
    {
      icon: Calendar,
      title: "Set Your Savings Schedule",
      description: "Choose how often you'd like to save: daily, weekly, or monthly. The app will automatically round up your purchases or deduct set amounts and invest them in digital gold."
    },
    {
      icon: LineChart,
      title: "Track Your Growth",
      description: "View your gold balance and track real-time market updates through the Gold Vault. Watch your wealth grow as gold prices fluctuate."
    },
    {
      icon: Coins,
      title: "Convert to Physical Gold",
      description: "When you're ready, use your digital gold balance to purchase physical gold coins or jewelry directly from the app."
    },
    {
      icon: TrendingUp,
      title: "Enjoy the Appreciation",
      description: "As the price of gold rises, so does your investment. Benefit from gold's long-term appreciation and build your wealth effortlessly."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with Carat is simple. Follow these steps to begin your gold investment journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
