
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Bell, Coins, CreditCard, Settings, ShoppingBag, TrendingUp, Wallet } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const userData = {
    name: "Alex Johnson",
    balance: 1250.75,
    goldGrams: 21.48,
    goldValue: 1250.75,
    profitLoss: 127.35,
    profitLossPercentage: 11.3,
    transactions: [
      { id: 1, type: "Auto Save", amount: 25, date: "2023-06-01", goldAmount: 0.43 },
      { id: 2, type: "Deposit", amount: 100, date: "2023-05-28", goldAmount: 1.72 },
      { id: 3, type: "Auto Save", amount: 25, date: "2023-05-25", goldAmount: 0.43 },
      { id: 4, type: "Auto Save", amount: 25, date: "2023-05-18", goldAmount: 0.43 },
      { id: 5, type: "Deposit", amount: 500, date: "2023-05-14", goldAmount: 8.59 }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-muted pb-12">
        <div className="bg-gold/10 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Gold Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage your digital gold portfolio</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-gold" />
                  Gold Balance
                </CardTitle>
                <CardDescription>Current holdings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">{userData.goldGrams.toFixed(2)}g</div>
                  <div className="text-sm text-muted-foreground pb-1">of 24K gold</div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-lg font-medium">£{userData.goldValue.toFixed(2)}</div>
                  <div className="text-green-500 text-sm flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {userData.profitLossPercentage}%
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-charcoal to-charcoal-dark text-white border-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-gold" />
                  Performance
                </CardTitle>
                <CardDescription className="text-muted-foreground">Since you started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold text-gold">+£{userData.profitLoss.toFixed(2)}</div>
                </div>
                <div className="h-2 w-full bg-black/30 rounded-full overflow-hidden mt-3">
                  <div className="h-full bg-gold rounded-full" style={{ width: `${userData.profitLossPercentage * 5}%` }} />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Initial Investment</span>
                  <span>Current Value</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-gold" />
                  Quick Actions
                </CardTitle>
                <CardDescription>Manage your gold</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-3">
                    <Wallet className="h-4 w-4" />
                    <span>Deposit</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-3">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Convert</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-3">
                    <Coins className="h-4 w-4" />
                    <span>Invest</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-3">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 md:w-auto">
                <TabsTrigger value="overview" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="transactions" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Transactions
                </TabsTrigger>
                <TabsTrigger value="convert" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Convert
                </TabsTrigger>
                <TabsTrigger value="autosave" className="data-[state=active]:bg-gold data-[state=active]:text-charcoal">
                  Auto Save
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="md:col-span-2">
                    <Card className="border-gold/20">
                      <CardHeader>
                        <CardTitle>Portfolio Summary</CardTitle>
                        <CardDescription>Your gold investment over time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                          <p className="text-muted-foreground">Portfolio chart will appear here</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="border-gold/20">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your latest transactions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {userData.transactions.slice(0, 3).map((transaction) => (
                            <div key={transaction.id} className="flex justify-between items-center">
                              <div>
                                <div className="font-medium">{transaction.type}</div>
                                <div className="text-sm text-muted-foreground">{transaction.date}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">£{transaction.amount.toFixed(2)}</div>
                                <div className="text-sm text-gold">{transaction.goldAmount.toFixed(2)}g</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Button variant="outline" className="w-full mt-4">
                          View All Transactions
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Card className="border-gold/20 mt-6">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Stay updated about your gold</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                        <Bell className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Gold price alert</h4>
                          <p className="text-sm text-muted-foreground">
                            Gold prices have increased by 2.3% in the last 24 hours. Consider adding to your portfolio.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                        <Bell className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Auto-save successful</h4>
                          <p className="text-sm text-muted-foreground">
                            Your weekly auto-save of £25 was successfully processed. You acquired 0.43g of gold.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transactions">
                <Card className="border-gold/20 mt-6">
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>All your gold transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {userData.transactions.map((transaction) => (
                        <div key={transaction.id} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                          <div>
                            <div className="font-medium">{transaction.type}</div>
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">£{transaction.amount.toFixed(2)}</div>
                            <div className="text-sm text-gold">{transaction.goldAmount.toFixed(2)}g</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="convert">
                <Card className="border-gold/20 mt-6">
                  <CardHeader>
                    <CardTitle>Convert Digital Gold</CardTitle>
                    <CardDescription>Turn your digital gold into physical gold products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-4">
                          <div className="aspect-square rounded-md overflow-hidden bg-muted mb-4">
                            <img 
                              src="https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                              alt="Gold Coin" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-medium mb-1">Gold Coin (1oz)</h3>
                          <p className="text-sm text-muted-foreground mb-3">24K Gold Bullion Coin</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-medium">31.1g</span>
                            <span className="text-gold">£1,811.26</span>
                          </div>
                          <Button variant="outline" className="w-full">Select</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="aspect-square rounded-md overflow-hidden bg-muted mb-4">
                            <img 
                              src="https://images.unsplash.com/photo-1610375461249-bcd87a3ae845?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                              alt="Gold Bar" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-medium mb-1">Gold Bar (10g)</h3>
                          <p className="text-sm text-muted-foreground mb-3">24K Gold Bullion Bar</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-medium">10g</span>
                            <span className="text-gold">£582.40</span>
                          </div>
                          <Button variant="outline" className="w-full">Select</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-4">
                          <div className="aspect-square rounded-md overflow-hidden bg-muted mb-4">
                            <img 
                              src="https://images.unsplash.com/photo-1611235115922-72bd53d21d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                              alt="Gold Jewelry" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-medium mb-1">Gold Bracelet</h3>
                          <p className="text-sm text-muted-foreground mb-3">24K Gold Jewelry</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-medium">15g</span>
                            <span className="text-gold">£873.60</span>
                          </div>
                          <Button variant="outline" className="w-full">Select</Button>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="mt-6 bg-muted p-4 rounded-md text-sm text-muted-foreground">
                      <p>
                        Converting digital gold to physical products includes additional manufacturing and delivery fees.
                        All physical gold products are shipped fully insured and with tracking.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="autosave">
                <Card className="border-gold/20 mt-6">
                  <CardHeader>
                    <CardTitle>Auto-Save Settings</CardTitle>
                    <CardDescription>Configure your automatic gold purchases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-medium text-lg mb-4">Current Auto-Save Plan</h3>
                        <Card className="bg-muted">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-4">
                              <div className="font-medium">Weekly Savings</div>
                              <div className="text-gold font-bold">£25.00</div>
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex justify-between">
                                <span>Frequency:</span>
                                <span>Every Monday</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Next payment:</span>
                                <span>June 12, 2023</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Payment method:</span>
                                <span>Visa ending in 4242</span>
                              </div>
                            </div>
                            <div className="flex space-x-3 mt-6">
                              <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                              <Button variant="outline" size="sm" className="flex-1">Pause</Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-4">Auto-Save Statistics</h3>
                        <div className="space-y-4">
                          <div className="bg-muted p-4 rounded-lg">
                            <div className="text-sm text-muted-foreground">Total Auto-Saved</div>
                            <div className="text-2xl font-bold mt-1">£325.00</div>
                            <div className="text-sm text-gold mt-1">5.58g of gold</div>
                          </div>
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <div className="text-sm text-muted-foreground">Auto-Save Growth</div>
                            <div className="text-2xl font-bold mt-1">+£32.15</div>
                            <div className="text-sm text-green-500 flex items-center mt-1">
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                              9.8% increase
                            </div>
                          </div>
                          
                          <div className="bg-muted p-4 rounded-lg">
                            <div className="text-sm text-muted-foreground">Projected Yearly Savings</div>
                            <div className="text-2xl font-bold mt-1">£1,300.00</div>
                            <div className="text-sm text-gold mt-1">~22.32g of gold</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
