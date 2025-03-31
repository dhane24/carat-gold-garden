
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Calculator, PiggyBank, RefreshCw } from "lucide-react";

const InvestmentSimulator = () => {
  const [initialInvestment, setInitialInvestment] = useState(100);
  const [monthlyContribution, setMonthlyContribution] = useState(50);
  const [timeframe, setTimeframe] = useState(5); // years

  // Estimated gold price increase per year (percentage)
  const annualGoldAppreciation = 5;
  
  // Current gold price per gram
  const currentGoldPrice = 58.24;

  const calculateInvestmentGrowth = () => {
    let totalValue = initialInvestment;
    let totalInvested = initialInvestment;
    let goldGrams = initialInvestment / currentGoldPrice;
    
    for (let year = 1; year <= timeframe; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvested += monthlyContribution;
        const goldBoughtThisMonth = monthlyContribution / (currentGoldPrice * Math.pow(1 + annualGoldAppreciation / 100, (year - 1) + (month / 12)));
        goldGrams += goldBoughtThisMonth;
      }
    }
    
    // Calculate final value based on appreciated gold price
    const finalGoldPrice = currentGoldPrice * Math.pow(1 + annualGoldAppreciation / 100, timeframe);
    totalValue = goldGrams * finalGoldPrice;
    
    return {
      totalValue,
      totalInvested,
      goldGrams,
      appreciation: totalValue - totalInvested,
      appreciationPercentage: ((totalValue - totalInvested) / totalInvested) * 100
    };
  };

  const results = calculateInvestmentGrowth();

  const formatCurrency = (value: number) => {
    return `£${value.toFixed(2)}`;
  };

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Simulator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            See how your gold investments can grow over time. Adjust your contribution amounts and timeframe to plan your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Card className="border-gold/20 md:col-span-5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-gold" />
                Adjust Your Parameters
              </CardTitle>
              <CardDescription>Set your investment strategy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="font-medium">Initial Investment</label>
                  <div className="flex items-center gap-3 mt-2">
                    <Input
                      type="number"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(Number(e.target.value))}
                      min={0}
                      className="text-right"
                    />
                    <span className="text-sm font-medium">GBP</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <label className="font-medium">Monthly Contribution: {formatCurrency(monthlyContribution)}</label>
                  </div>
                  <Slider
                    value={[monthlyContribution]}
                    min={0}
                    max={500}
                    step={10}
                    onValueChange={(value) => setMonthlyContribution(value[0])}
                    className="py-4"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <label className="font-medium">Investment Timeframe: {timeframe} years</label>
                  </div>
                  <Slider
                    value={[timeframe]}
                    min={1}
                    max={20}
                    step={1}
                    onValueChange={(value) => setTimeframe(value[0])}
                    className="py-4"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    className="w-full bg-gold hover:bg-gold-dark text-charcoal" 
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Recalculate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20 md:col-span-7">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-gold" />
                Projected Results
              </CardTitle>
              <CardDescription>After {timeframe} years of investing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Total Invested</div>
                  <div className="text-2xl font-bold mt-1">{formatCurrency(results.totalInvested)}</div>
                </div>
                <div className="bg-gold/10 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Projected Value</div>
                  <div className="text-2xl font-bold text-gold mt-1">{formatCurrency(results.totalValue)}</div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Appreciation</span>
                  <span className="text-sm font-medium text-green-500 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {results.appreciationPercentage.toFixed(2)}%
                  </span>
                </div>
                <div className="h-4 w-full bg-background rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold rounded-full" 
                    style={{ width: `${Math.min(100, results.appreciationPercentage)}%` }} 
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Investment: {formatCurrency(results.totalInvested)}</span>
                  <span>Growth: {formatCurrency(results.appreciation)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Gold Accumulated</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold">{results.goldGrams.toFixed(2)}</span>
                    <span className="text-sm">grams</span>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground">Estimated Gold Price</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold">
                      {formatCurrency(currentGoldPrice * Math.pow(1 + annualGoldAppreciation / 100, timeframe))}
                    </span>
                    <span className="text-sm">/g</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground mt-6">
                Projections based on an estimated {annualGoldAppreciation}% annual growth in gold prices. Actual results may vary depending on market conditions.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSimulator;
