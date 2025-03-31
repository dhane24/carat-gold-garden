
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Calendar, PiggyBank, RefreshCw } from "lucide-react";

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
    <Card className="border-gold/20 h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-gold/10 rounded-full p-3 mb-4">
          <Icon className="h-6 w-6 text-gold" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
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
      icon: PiggyBank,
      title: "Real-time Gold Rates",
      description: "Get real-time updates on gold rates with our Gold Vault feature for informed decisions."
    },
    {
      icon: RefreshCw,
      title: "Physical Conversion",
      description: "Convert your digital gold investments into physical gold coins or jewelry at any time."
    }
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Carat</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Build wealth with digital gold investments while enjoying flexibility, security, and growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
