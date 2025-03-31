
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Calendar, PiggyBank, RefreshCw, Shield, TrendingUp, Download, FileText } from "lucide-react";

const HomeContent = () => {
  return (
    <div className="space-y-24">
      {/* Welcome Section */}
      <section className="py-16 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Welcome to Carat – Your Gateway to Digital Gold Investment</h2>
            <p className="text-lg text-muted-foreground">
              At Carat, we believe in making gold investment accessible, automated, and secure. Our innovative app allows you to save money and invest in 24K digital gold seamlessly. Whether you're looking to build wealth or create a savings habit, Carat provides the tools to effortlessly grow your savings with the power of gold.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal">
                Start Your Gold Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Carat Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why Carat?</h2>
            <p className="text-lg text-muted-foreground">
              Gold has been a timeless store of value, but investing in physical gold can be challenging. Carat simplifies this process by letting you invest in digital gold. With Carat, you can:
            </p>
            <ul className="text-lg space-y-2 pt-4">
              <li className="flex items-center justify-center gap-2">
                <Coins className="h-5 w-5 text-gold" />
                <span>Save and invest from as little as £1</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                <span>Automate your savings through flexible payment options</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5 text-gold" />
                <span>Track the value of your investments in real-time</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <RefreshCw className="h-5 w-5 text-gold" />
                <span>Convert digital gold to physical gold (coins or jewelry)</span>
              </li>
            </ul>
            <p className="pt-4 text-lg">
              Start your journey with digital gold today and unlock the power of 24K gold at your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Invest in Digital Gold, Effortlessly</h3>
                <p className="text-muted-foreground">
                  With Carat, you can automatically save and invest your spare change from online transactions. Each time you make a purchase, a portion of it is rounded up and converted into 24K digital gold. Start with as little as £1 and watch your savings grow over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Set Up Auto Pay</h3>
                <p className="text-muted-foreground">
                  Building a savings habit is easy with Carat's Auto Pay feature. Set up automatic deposits on your schedule—whether it's daily, weekly, or monthly. Carat ensures your investments are always working for you, making saving effortless and consistent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Gold Rates</h3>
                <p className="text-muted-foreground">
                  With Carat's Gold Vault, you can track real-time gold rates and monitor the value of your digital gold. Stay informed with instant updates on how the price of gold is changing, so you can make the best decisions for your savings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Convert Digital Gold to Physical Gold</h3>
                <p className="text-muted-foreground">
                  When you're ready, you can convert your digital gold into physical gold in the form of coins or jewelry. Whether you're looking for a keepsake or a way to store your wealth physically, Carat allows you to turn your digital assets into something tangible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Build a Daily Savings Habit</h3>
                <p className="text-muted-foreground">
                  Saving money becomes second nature when you use Carat. The app helps you create a consistent, daily savings routine by automatically saving small amounts toward your gold investment. Before you know it, your digital gold stack will grow as you build your wealth each day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Enjoy Appreciation in Your Savings</h3>
                <p className="text-muted-foreground">
                  Gold is known for its ability to preserve and appreciate in value. As you invest in Carat's digital gold, you benefit from the historical strength of gold's value, allowing your savings to grow with the rising price of gold. Watch your wealth flourish over time!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20 md:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Safe, Secure, and Transparent</h3>
                <p className="text-muted-foreground">
                  Carat takes security seriously. We use state-of-the-art encryption to protect your information and transactions. Your investments are safe, and you can track your savings with transparency every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Sign Up & Connect Your Bank</h3>
                  <p className="text-muted-foreground">
                    Simply sign up with Carat and link your bank or payment method. Once connected, you're ready to start saving automatically.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Set Your Savings Schedule</h3>
                  <p className="text-muted-foreground">
                    Choose how often you'd like to save: daily, weekly, or monthly. The app will automatically round up your purchases or deduct set amounts and invest them in digital gold.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Track Your Growth</h3>
                  <p className="text-muted-foreground">
                    View your gold balance and track real-time market updates through the Gold Vault. Watch your wealth grow as gold prices fluctuate.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Convert to Physical Gold (Optional)</h3>
                  <p className="text-muted-foreground">
                    When you're ready, use your digital gold balance to purchase physical gold coins or jewelry directly from the app.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-gold">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Enjoy the Appreciation</h3>
                  <p className="text-muted-foreground">
                    As the price of gold rises, so does your investment. Benefit from gold's long-term appreciation and build your wealth effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Gold Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Invest in Gold?</h2>
            <p className="text-lg text-muted-foreground">
              Gold has always been a symbol of wealth, security, and preservation of value. As an asset, gold is widely recognized for:
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Long-Term Stability</h3>
                <p className="text-muted-foreground">
                  Gold has historically maintained its value, even during times of economic uncertainty.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">Appreciation Potential</h3>
                <p className="text-muted-foreground">
                  The price of gold tends to appreciate over time, making it a valuable asset to include in your investment portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-gold/20">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="h-12 w-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold">A Hedge Against Inflation</h3>
                <p className="text-muted-foreground">
                  Gold has long been considered a safe haven during periods of inflation, protecting your wealth from the eroding effects of currency devaluation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              With Carat, you can access all the benefits of gold investing without the need for physical storage, high initial investments, or complicated processes. You can invest in gold starting at just £1, and grow your wealth with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Get Started Today</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start saving in gold? Download Carat today and begin building your wealth with the power of 24K gold. Whether you're a seasoned investor or just beginning your savings journey, Carat makes it simple and accessible.
            </p>
            
            <ul className="text-lg space-y-2 pt-4">
              <li className="flex items-center justify-center gap-2">
                <Coins className="h-5 w-5 text-gold" />
                <span>Save from as little as £1</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                <span>Automate your savings effortlessly</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <RefreshCw className="h-5 w-5 text-gold" />
                <span>Convert digital gold to physical gold</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5 text-gold" />
                <span>Track your investment in real-time with the Gold Vault</span>
              </li>
            </ul>
            
            <p className="text-lg pt-4">
              Your journey to building wealth starts here. Invest in gold, invest in your future.
            </p>
            
            <div className="pt-6">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal">
                <Download className="mr-2 h-5 w-5" /> Download Carat Today
              </Button>
              <p className="text-sm text-muted-foreground mt-2">[Available on iOS and Android]</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Q1: How do I start saving with Carat?
              </h3>
              <p className="text-muted-foreground pl-7">
                Simply download the Carat app, sign up, and connect your payment method. Then set up your savings schedule (daily, weekly, or monthly) to start investing in digital gold automatically.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Q2: How much do I need to invest?
              </h3>
              <p className="text-muted-foreground pl-7">
                You can start with as little as £1. Carat allows you to invest small amounts and grow your savings over time.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Q3: How can I convert my digital gold to physical gold?
              </h3>
              <p className="text-muted-foreground pl-7">
                Once you've accumulated a sufficient amount of digital gold, you can convert it into physical gold coins or jewelry directly through the app.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Q4: How do I track my gold investment?
              </h3>
              <p className="text-muted-foreground pl-7">
                Carat's Gold Vault gives you real-time updates on gold prices and the value of your investment. You can track your savings anytime, anywhere.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Q5: Is my investment secure?
              </h3>
              <p className="text-muted-foreground pl-7">
                Yes, Carat uses the latest encryption technology to ensure that your investment is safe and secure.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold" />
                Q6: How does gold help me build wealth?
              </h3>
              <p className="text-muted-foreground pl-7">
                Gold is known for its long-term value preservation and appreciation. By investing in gold through Carat, you are benefiting from the historical strength of this asset, growing your wealth over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              Have any questions or need assistance? We're here to help!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 pt-6">
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:support@caratapp.com" className="text-gold hover:underline">support@caratapp.com</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:+441234567890" className="text-gold hover:underline">+44 (0) 123 456 789</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
