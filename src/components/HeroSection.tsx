
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, PiggyBank, Wallet, TrendingUp, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Sample data for the gold price chart
const goldPriceData = [
  { date: 'Jan', price: 52.14, change: 0.5 },
  { date: 'Feb', price: 53.25, change: 2.1 },
  { date: 'Mar', price: 54.10, change: 1.6 },
  { date: 'Apr', price: 55.32, change: 2.3 },
  { date: 'May', price: 56.15, change: 1.5 },
  { date: 'Jun', price: 55.80, change: -0.6 },
  { date: 'Jul', price: 56.45, change: 1.2 },
  { date: 'Aug', price: 56.90, change: 0.8 },
  { date: 'Sep', price: 57.35, change: 0.8 },
  { date: 'Oct', price: 57.80, change: 0.8 },
  { date: 'Nov', price: 58.10, change: 0.5 },
  { date: 'Dec', price: 58.24, change: 0.2 },
];

// Gold market insights
const goldMarketInsights = {
  currentPrice: 58.24,
  dailyChange: 0.29,
  weeklyChange: 2.4,
  monthlyChange: 4.8,
  yearlyChange: 12.3,
  lastUpdated: new Date().toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
};

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Here you would typically send the email to your backend
    console.log("Email submitted:", values.email);
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "You've been added to our waitlist.",
    });
  };

  useEffect(() => {
    const handleOpenWaitlistDialog = () => {
      setIsDialogOpen(true);
    };

    document.addEventListener('open-waitlist-dialog', handleOpenWaitlistDialog);

    return () => {
      document.removeEventListener('open-waitlist-dialog', handleOpenWaitlistDialog);
    };
  }, []);

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <motion.span 
              className="gold-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Save in Gold
            </motion.span>
            , Grow Your Wealth
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Invest in digital gold with as little as £1. Build your savings in 24K gold with Carat's secure and flexible platform.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-charcoal transform transition-transform hover:scale-105" 
              onClick={() => setIsDialogOpen(true)}
            >
              Start Investing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <PiggyBank className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Start from £1</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <Wallet className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Auto-Save</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Growth Potential</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
            >
              <Calendar className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Flexible Withdrawals</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute -inset-0.5 rounded-2xl gold-shimmer blur-sm opacity-70"></div>
          <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-card p-1">
            <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-charcoal flex items-center justify-center">
              {/* Real-time gold price chart */}
              <div className="w-full h-full p-4">
                <ChartContainer 
                  className="h-full w-full" 
                  config={{
                    gold: {
                      theme: {
                        light: "#F5C65D",
                        dark: "#F5C65D"
                      }
                    }
                  }}
                >
                  <AreaChart
                    data={goldPriceData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F5C65D" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F5C65D" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="date"
                      stroke="#666"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      domain={['dataMin - 1', 'dataMax + 1']}
                      stroke="#666"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `£${value}`}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          const changeClass = data.change >= 0 ? "text-green-400" : "text-red-400";
                          const changeSymbol = data.change >= 0 ? "+" : "";
                          
                          return (
                            <div className="bg-background border border-gold/30 px-4 py-3 rounded-md shadow-lg">
                              <p className="text-sm font-medium">{data.date}</p>
                              <p className="text-gold font-bold text-lg">£{data.price.toFixed(2)}/g</p>
                              <p className={`text-sm ${changeClass}`}>
                                {changeSymbol}{data.change}% change
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#F5C65D" 
                      fillOpacity={1} 
                      fill="url(#goldGradient)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex flex-col space-y-4">
                  <div>
                    <div className="text-sm text-gold/80">Live Gold Price</div>
                    <div className="text-3xl font-bold text-gold">£{goldMarketInsights.currentPrice.toFixed(2)}/g</div>
                    <div className="text-green-400 flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +{goldMarketInsights.weeklyChange}% this week
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-charcoal-light p-2 rounded">
                      <div className="text-muted-foreground">24h</div>
                      <div className="text-green-400">+{goldMarketInsights.dailyChange}%</div>
                    </div>
                    <div className="bg-charcoal-light p-2 rounded">
                      <div className="text-muted-foreground">30d</div>
                      <div className="text-green-400">+{goldMarketInsights.monthlyChange}%</div>
                    </div>
                    <div className="bg-charcoal-light p-2 rounded">
                      <div className="text-muted-foreground">1y</div>
                      <div className="text-green-400">+{goldMarketInsights.yearlyChange}%</div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Last updated: {goldMarketInsights.lastUpdated}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Join Waitlist Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Join Our Waitlist</DialogTitle>
            <DialogDescription>
              {!isSubmitted ? 
                "Be the first to know when Carat launches. Enter your email below." : 
                "Thank you for joining our waitlist! We'll notify you as soon as Carat launches."
              }
            </DialogDescription>
          </DialogHeader>

          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-charcoal">
                  Join Waitlist
                </Button>
              </form>
            </Form>
          ) : (
            <div className="flex flex-col items-center justify-center py-4">
              <Sparkles className="h-12 w-12 text-gold mb-4 animate-pulse" />
              <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
              <p className="text-center text-muted-foreground">
                We'll send you updates on our progress and notify you when Carat launches.
              </p>
              <Button className="mt-4 bg-gold hover:bg-gold-dark text-charcoal" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default HeroSection;
