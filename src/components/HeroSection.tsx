
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, PiggyBank, Wallet } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

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

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="gold-gradient">Save in Gold</span>, Grow Your Wealth
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Invest in digital gold with as little as £1. Build your savings in 24K gold with Carat's secure and flexible platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal" onClick={() => setIsDialogOpen(true)}>
              Start Investing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <PiggyBank className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Start from £1</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Auto-Save</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">Growth Potential</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-0.5 rounded-2xl gold-shimmer blur-sm opacity-70"></div>
          <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-card p-1">
            <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-charcoal flex items-center justify-center">
              {/* Real-time gold price chart */}
              <img 
                src="https://images.unsplash.com/photo-1642543348590-c51eadfad491?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Gold price chart" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-semibold">Current Gold Price</div>
                <div className="text-3xl font-bold text-gold">£58.24/g</div>
                <div className="text-green-400 flex items-center text-sm">
                  +2.4% this week
                </div>
              </div>
            </div>
          </div>
        </div>
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
              <Sparkles className="h-12 w-12 text-gold mb-4" />
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
    </div>
  );
};

export default HeroSection;
