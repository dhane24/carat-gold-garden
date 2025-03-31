
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Coins } from "lucide-react";

const GoldRateTracker = () => {
  // Mock data for gold rates
  const goldData = {
    currentRate: "£58.24",
    change: "+1.2%",
    isPositive: true,
    historyData: [30, 40, 35, 50, 49, 60, 70, 65, 58],
    weeklyChange: "+3.5%",
    monthlyChange: "+7.2%",
    yearlyChange: "+12.8%"
  };

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gold Vault</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get real-time updates on gold rates with our Gold Vault. Monitor the value of your investments and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-gold/20 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-gold" />
                Current Gold Rate
              </CardTitle>
              <CardDescription>Per gram of 24K gold</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold">{goldData.currentRate}</div>
                <div className={`flex items-center ${goldData.isPositive ? 'text-green-500' : 'text-red-500'} text-sm font-medium pb-1`}>
                  {goldData.isPositive ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {goldData.change}
                </div>
              </div>
              <div className="mt-4 h-16 flex items-end">
                {goldData.historyData.map((value, index) => (
                  <div 
                    key={index}
                    className="flex-1 bg-gold"
                    style={{ 
                      height: `${value}%`,
                      margin: '0 1px'
                    }}
                  />
                ))}
              </div>
              <div className="text-xs text-muted-foreground mt-2">Last 30 days</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/20">
            <CardHeader className="pb-2">
              <CardTitle>Performance</CardTitle>
              <CardDescription>Gold price changes over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">This Week</span>
                  <span className="text-green-500 font-medium">{goldData.weeklyChange}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: '60%' }} />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">This Month</span>
                  <span className="text-green-500 font-medium">{goldData.monthlyChange}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: '75%' }} />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">This Year</span>
                  <span className="text-green-500 font-medium">{goldData.yearlyChange}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-charcoal text-white border-gold/20">
            <CardHeader className="pb-2">
              <CardTitle>Gold Forecast</CardTitle>
              <CardDescription className="text-muted-foreground">Expert predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Next Month</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">£61.05</span>
                    <span className="text-green-500 text-sm">+4.8%</span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Next Quarter</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">£63.59</span>
                    <span className="text-green-500 text-sm">+9.2%</span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">End of Year</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">£67.16</span>
                    <span className="text-green-500 text-sm">+15.3%</span>
                  </div>
                </div>
                
                <div className="pt-2 text-sm text-muted-foreground">
                  Forecast based on market trends and expert analysis. Values are estimates and not guaranteed.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoldRateTracker;
