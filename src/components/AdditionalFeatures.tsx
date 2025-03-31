
import { CalendarDays, TruckIcon, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AdditionalFeatures = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-gold/20 h-full">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4 bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <CalendarDays className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Save Every Day, Withdraw Any Day</h3>
                <p className="text-muted-foreground">
                  At Carat, we believe in making saving and investing as flexible as possible. With our app, you can save every day, at your own pace, and withdraw whenever you need. Whether you're setting aside small amounts daily or making occasional larger deposits, your gold is always ready for you. Want to access your savings at any time? You can withdraw your digital gold or convert it to cash, hassle-free.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20 h-full">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4 bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <TruckIcon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Gold Delivered to Your Doorstep</h3>
                <p className="text-muted-foreground">
                  When you're ready to hold your investment in your hands, Carat makes it easy to get your gold delivered right to your doorstep. You can convert your digital gold into physical coins or jewelry, and we'll make sure it's securely shipped to you. Experience the tangible value of your gold investment in the comfort of your own home.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20 h-full">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4 bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sell Your Gold for Cash</h3>
                <p className="text-muted-foreground">
                  Need to access your funds quickly? Carat allows you to sell your gold for cash anytime. Simply convert your gold back to currency and transfer the cash to your bank account. It's the perfect solution for when you want liquidity but still want the security of gold in your portfolio. With Carat, you have complete control over your investment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
