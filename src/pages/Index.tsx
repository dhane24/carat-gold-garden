
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HomeFeatures from "../components/HomeFeatures";
import WelcomeSection from "../components/WelcomeSection";
import GoldRateTracker from "../components/GoldRateTracker";
import AutoSaveSetup from "../components/AutoSaveSetup";
import InvestmentSimulator from "../components/InvestmentSimulator";
import HowItWorks from "../components/HowItWorks";
import AdditionalFeatures from "../components/AdditionalFeatures";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import HistoricalGoldChart from "../components/HistoricalGoldChart";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WelcomeSection />
        <HomeFeatures />
        <HowItWorks />
        <HistoricalGoldChart />
        <AdditionalFeatures />
        <GoldRateTracker />
        <AutoSaveSetup />
        <InvestmentSimulator />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
