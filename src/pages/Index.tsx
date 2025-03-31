
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GoldRateTracker from "../components/GoldRateTracker";
import HomeFeatures from "../components/HomeFeatures";
import AutoSaveSetup from "../components/AutoSaveSetup";
import InvestmentSimulator from "../components/InvestmentSimulator";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HomeFeatures />
        <GoldRateTracker />
        <AutoSaveSetup />
        <InvestmentSimulator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
