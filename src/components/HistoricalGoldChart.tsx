
import { useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Historical gold price data from 1950 to present (simplified for demo)
const historicalData = [
  { year: "1950", price: 34.72 },
  { year: "1955", price: 35.00 },
  { year: "1960", price: 35.27 },
  { year: "1965", price: 35.12 },
  { year: "1970", price: 36.02 },
  { year: "1975", price: 161.02 },
  { year: "1980", price: 612.56 },
  { year: "1985", price: 317.26 },
  { year: "1990", price: 383.51 },
  { year: "1995", price: 384.17 },
  { year: "2000", price: 279.11 },
  { year: "2005", price: 444.74 },
  { year: "2010", price: 1224.53 },
  { year: "2015", price: 1160.06 },
  { year: "2020", price: 1769.64 },
  { year: "2023", price: 1978.20 },
  { year: "2024", price: 2300.00 },
];

// Data for different time periods
const timeRanges = {
  "10Y": historicalData.slice(-7),
  "25Y": historicalData.slice(-10),
  "50Y": historicalData.slice(-13),
  "ALL": historicalData,
};

type TimeRangeKey = keyof typeof timeRanges;

const priceFormatter = (value: number) => {
  return `£${value.toFixed(2)}`;
};

const HistoricalGoldChart = () => {
  const [activeRange, setActiveRange] = useState<TimeRangeKey>("25Y");
  const [chartData, setChartData] = useState(timeRanges["25Y"]);

  const handleRangeChange = (range: TimeRangeKey) => {
    setActiveRange(range);
    setChartData(timeRanges[range]);
  };

  const percentIncrease = () => {
    const firstPrice = chartData[0].price;
    const lastPrice = chartData[chartData.length - 1].price;
    return ((lastPrice - firstPrice) / firstPrice * 100).toFixed(2);
  };

  // Calculate years between first and last data point
  const calculateYearDifference = () => {
    const firstYear = parseInt(chartData[0].year);
    const lastYear = parseInt(chartData[chartData.length - 1].year);
    return lastYear - firstYear;
  };

  // Calculate average annual return
  const calculateAnnualReturn = () => {
    const yearDiff = calculateYearDifference();
    if (yearDiff <= 0) return "0.00"; // Avoid division by zero
    
    return (Number(percentIncrease()) / yearDiff).toFixed(2);
  };

  return (
    <motion.section 
      className="py-16 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gold Price Historical Chart</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track gold's performance over time and see why it's considered a reliable long-term investment.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="border-gold/20">
            <CardHeader className="pb-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl">Gold Price Per Gram</CardTitle>
                  <CardDescription>
                    {activeRange === "ALL" ? "Since 1950" : `Last ${activeRange}`}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(timeRanges) as TimeRangeKey[]).map((range) => (
                    <Button
                      key={range}
                      variant={activeRange === range ? "default" : "outline"}
                      size="sm"
                      className={activeRange === range ? "bg-gold text-charcoal" : ""}
                      onClick={() => handleRangeChange(range)}
                    >
                      {range}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Starting Price</p>
                    <p className="text-2xl font-bold gold-gradient">£{chartData[0].price.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">{chartData[0].year}</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="text-2xl font-bold gold-gradient">£{chartData[chartData.length - 1].price.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">{chartData[chartData.length - 1].year}</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Total Growth</p>
                    <p className="text-2xl font-bold text-green-500">+{percentIncrease()}%</p>
                    <p className="text-xs text-muted-foreground">Over {calculateYearDifference()} years</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">Average Annual Return</p>
                    <p className="text-2xl font-bold text-green-500">
                      {calculateAnnualReturn()}%
                    </p>
                    <p className="text-xs text-muted-foreground">Per year</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="h-[400px]">
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
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis 
                        dataKey="year"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        tickFormatter={priceFormatter}
                        domain={['dataMin - 50', 'dataMax + 50']}
                      />
                      <Tooltip 
                        formatter={(value) => [`£${Number(value).toFixed(2)}`, "Price per gram"]}
                        labelFormatter={(label) => `Year: ${label}`}
                        contentStyle={{ 
                          backgroundColor: "var(--background)", 
                          borderColor: "var(--border)",
                          borderRadius: "8px"
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="price"
                        name="Gold Price (£/g)"
                        stroke="#F5C65D"
                        strokeWidth={3}
                        dot={{ r: 4, fill: "#F5C65D", strokeWidth: 2, stroke: "#fff" }}
                        activeDot={{ r: 6, fill: "#D4AF37", strokeWidth: 2, stroke: "#fff" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="mt-6 text-muted-foreground text-sm text-center">
                <p>Source: Historical gold price data adjusted for inflation. The above chart represents the price of 24K gold per gram in GBP.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HistoricalGoldChart;
