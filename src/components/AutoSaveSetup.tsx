
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Calendar, PiggyBank, RefreshCw } from "lucide-react";

const AutoSaveSetup = () => {
  const [amount, setAmount] = useState(5);
  const [frequency, setFrequency] = useState("weekly");

  // Calculate monthly and yearly totals
  const getMonthlyTotal = () => {
    switch (frequency) {
      case "daily":
        return amount * 30;
      case "weekly":
        return amount * 4.33;
      case "monthly":
        return amount;
      default:
        return 0;
    }
  };

  const getYearlyTotal = () => {
    switch (frequency) {
      case "daily":
        return amount * 365;
      case "weekly":
        return amount * 52;
      case "monthly":
        return amount * 12;
      default:
        return 0;
    }
  };

  const formatCurrency = (value: number) => {
    return `£${value.toFixed(2)}`;
  };

  const monthlyTotal = getMonthlyTotal();
  const yearlyTotal = getYearlyTotal();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Auto Save</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Set up automatic savings to build your gold portfolio consistently. Invest on your schedule and watch your wealth grow over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-gold/20">
            <CardHeader>
              <CardTitle>Set Your Auto-Save Plan</CardTitle>
              <CardDescription>Choose how much and how often you want to save</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="weekly" className="w-full" onValueChange={(value) => setFrequency(value)}>
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="daily" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                    <Calendar className="h-4 w-4 mr-2" />
                    Daily
                  </TabsTrigger>
                  <TabsTrigger value="weekly" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Weekly
                  </TabsTrigger>
                  <TabsTrigger value="monthly" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                    <PiggyBank className="h-4 w-4 mr-2" />
                    Monthly
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="daily" className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Daily savings add up quickly and help build a consistent investing habit.
                  </p>
                </TabsContent>
                <TabsContent value="weekly" className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Weekly savings provide a good balance between frequency and meaningful amounts.
                  </p>
                </TabsContent>
                <TabsContent value="monthly" className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Monthly savings allow for larger investments at a lower frequency.
                  </p>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Amount ({formatCurrency(amount)})</span>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setAmount(1)}
                      className="h-8 w-12"
                    >
                      £1
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setAmount(5)}
                      className="h-8 w-12"
                    >
                      £5
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setAmount(10)}
                      className="h-8 w-12"
                    >
                      £10
                    </Button>
                  </div>
                </div>
                <Slider
                  value={[amount]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => setAmount(value[0])}
                  className="py-4"
                />
                <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal">
                  Set Up Auto-Save
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20 bg-gradient-to-br from-charcoal to-charcoal-dark text-white">
            <CardHeader>
              <CardTitle>Your Savings Projection</CardTitle>
              <CardDescription className="text-muted-foreground">See how your regular savings grow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Monthly</div>
                  <div className="text-2xl font-bold text-gold mt-1">{formatCurrency(monthlyTotal)}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {frequency === "daily" ? "30 contributions" : 
                     frequency === "weekly" ? "4-5 contributions" : 
                     "1 contribution"} per month
                  </div>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Yearly</div>
                  <div className="text-2xl font-bold text-gold mt-1">{formatCurrency(yearlyTotal)}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {frequency === "daily" ? "365 contributions" : 
                     frequency === "weekly" ? "52 contributions" : 
                     "12 contributions"} per year
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h4 className="font-medium">Estimated Gold Acquired (Year)</h4>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gold rounded-full mr-4 flex items-center justify-center">
                    <Coins className="h-8 w-8 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{(yearlyTotal / 58.24).toFixed(2)}g</div>
                    <div className="text-sm text-muted-foreground">of 24K gold at current rates</div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 mt-6">
                  <div className="text-sm">Potential 5-Year Value</div>
                  <div className="text-xl font-bold text-gold mt-1">
                    {formatCurrency(yearlyTotal * 5 * 1.25)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Assuming 5% annual gold price appreciation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AutoSaveSetup;
