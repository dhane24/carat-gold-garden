
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, onToggle, index }: FaqItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Collapsible open={isOpen} onOpenChange={onToggle} className="border-b border-gold/20 py-4">
        <CollapsibleTrigger className="flex justify-between items-center w-full text-left hover:text-gold transition-colors">
          <h3 className="text-xl font-medium">{question}</h3>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 animation-expand">
          <p className="text-muted-foreground">{answer}</p>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "About Carat",
      items: [
        {
          question: "What is Carat?",
          answer: "Carat is a digital gold investment app that allows you to save and invest in 24K gold in small, regular amounts. Our platform makes gold investment accessible to everyone, regardless of your budget or investment experience."
        },
        {
          question: "How is Carat different from other investment apps?",
          answer: "Carat specializes exclusively in gold investment, offering specialized features like auto-saving in gold, real-time gold price tracking, and the ability to convert digital gold to physical gold products. We focus on making gold investment simple, secure, and affordable."
        },
        {
          question: "Is Carat available in my country?",
          answer: "Currently, Carat is available in the United Kingdom, with plans to expand to more European countries and North America in the near future. Join our waitlist to be notified when we launch in your region."
        }
      ]
    },
    {
      title: "Getting Started",
      items: [
        {
          question: "How do I start saving with Carat?",
          answer: "Simply download the Carat app, sign up, and connect your payment method. Then set up your savings schedule (daily, weekly, or monthly) to start investing in digital gold automatically."
        },
        {
          question: "How much do I need to invest?",
          answer: "You can start with as little as £1. Carat allows you to invest small amounts and grow your savings over time."
        },
        {
          question: "What documents do I need to sign up?",
          answer: "To comply with regulatory requirements, we'll need to verify your identity. This typically requires a valid government-issued ID (passport, driver's license) and proof of address (utility bill, bank statement)."
        }
      ]
    },
    {
      title: "Investing & Saving",
      items: [
        {
          question: "How does auto-saving work?",
          answer: "Our auto-save feature allows you to automatically invest in gold on a schedule you choose—daily, weekly, or monthly. You can also enable round-ups, where purchases are rounded up to the nearest pound and the difference is invested in gold."
        },
        {
          question: "Can I change my savings amount or schedule?",
          answer: "Yes, you can adjust your savings amount or schedule at any time through the app. Changes will be applied to your next scheduled investment."
        },
        {
          question: "How do I track my gold investment?",
          answer: "Carat's Gold Vault gives you real-time updates on gold prices and the value of your investment. You can track your savings anytime, anywhere."
        }
      ]
    },
    {
      title: "Physical Gold & Withdrawals",
      items: [
        {
          question: "How can I convert my digital gold to physical gold?",
          answer: "Once you've accumulated a sufficient amount of digital gold, you can convert it into physical gold coins or jewelry directly through the app."
        },
        {
          question: "What types of physical gold can I get?",
          answer: "We offer a range of options including investment-grade gold coins, bars in various sizes, and select jewelry pieces. All physical gold products are 24K and certified for purity."
        },
        {
          question: "How do I withdraw my funds?",
          answer: "You can sell your digital gold and withdraw the funds to your linked bank account at any time. The process typically takes 1-3 business days for the funds to appear in your account."
        }
      ]
    },
    {
      title: "Security & Trust",
      items: [
        {
          question: "Is my investment secure?",
          answer: "Yes, Carat uses the latest encryption technology to ensure that your investment is safe and secure. Additionally, all digital gold is backed 100% by physical gold stored in secure vaults."
        },
        {
          question: "Is Carat regulated?",
          answer: "Yes, Carat operates in compliance with all relevant financial regulations and is registered with appropriate financial authorities in the jurisdictions where we operate."
        },
        {
          question: "What happens if Carat goes out of business?",
          answer: "Your investment is secure because all digital gold is backed by physical gold held in segregated accounts. In the unlikely event of insolvency, your gold holdings remain your property and are not considered part of the company's assets."
        }
      ]
    }
  ];

  // Flatten all FAQs for search
  const allFaqs = faqCategories.flatMap(category => category.items);

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery.trim() === "" 
    ? allFaqs 
    : allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <motion.section 
          className="py-16 bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to the most common questions about investing with Carat.
              </p>
            </motion.div>
            
            <motion.div 
              className="max-w-xl mx-auto mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="search"
                  placeholder="Search frequently asked questions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>

            {searchQuery.trim() !== "" ? (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Search Results ({filteredFaqs.length})</h2>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onToggle={() => handleToggle(index)}
                      index={index}
                    />
                  ))
                ) : (
                  <p className="text-center py-8 text-muted-foreground">No results found. Try a different search term.</p>
                )}
              </div>
            ) : (
              faqCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  className="max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold mb-6 gold-gradient">{category.title}</h2>
                  {category.items.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Create a unique index
                    return (
                      <FaqItem
                        key={globalIndex}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => handleToggle(globalIndex)}
                        index={faqIndex}
                      />
                    );
                  })}
                </motion.div>
              ))
            )}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
