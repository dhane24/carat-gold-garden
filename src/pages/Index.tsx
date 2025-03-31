
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WelcomeSection />
        <HomeFeatures />
        <AdditionalFeatures />
        <HowItWorks />
        <GoldRateTracker />
        <AutoSaveSetup />
        <InvestmentSimulator />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
