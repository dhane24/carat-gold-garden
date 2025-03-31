
import { CreditCard, Calendar, LineChart, Coins, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type StepCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
  delay: number;
}

const StepCard = ({ icon: Icon, title, description, step, delay }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-gold/20 h-full hover:shadow-lg hover:border-gold/50 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative mb-4">
              <div className="bg-gold/10 rounded-full p-4 shrink-0 animate-pulse">
                <Icon className="h-8 w-8 text-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-charcoal rounded-full flex items-center justify-center text-xs font-bold">
                {step}
              </div>
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
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
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with Carat is simple. Follow these steps to begin your gold investment journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
