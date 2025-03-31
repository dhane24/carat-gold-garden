
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Calendar, PiggyBank, RefreshCw, LineChart, ShieldCheck } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border-gold/20 h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-gold/10 rounded-full p-3 shrink-0">
            <Icon className="h-6 w-6 text-gold" />
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

const HomeFeatures = () => {
  const features = [
    {
      icon: Coins,
      title: "Digital Gold Investment",
      description: "Invest in 24K digital gold with as little as £1 and watch your wealth grow over time."
    },
    {
      icon: Calendar,
      title: "Auto Saving",
      description: "Set up automatic savings daily, weekly, or monthly to build a consistent investment habit."
    },
    {
      icon: LineChart,
      title: "Real-time Gold Rates",
      description: "Get real-time updates on gold rates with our Gold Vault feature for informed decisions."
    },
    {
      icon: RefreshCw,
      title: "Physical Conversion",
      description: "Convert your digital gold investments into physical gold coins or jewelry at any time."
    },
    {
      icon: PiggyBank,
      title: "Build a Daily Savings Habit",
      description: "Create a consistent savings routine by automatically investing small amounts in gold."
    },
    {
      icon: ShieldCheck,
      title: "Safe, Secure, and Transparent",
      description: "Your investments are protected with state-of-the-art encryption and full transparency."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carat makes investing in gold simple, secure, and accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
