
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="border-b border-gold/20 py-4">
      <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
        <h3 className="text-xl font-medium">{question}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        <p className="text-muted-foreground">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I start saving with Carat?",
      answer: "Simply download the Carat app, sign up, and connect your payment method. Then set up your savings schedule (daily, weekly, or monthly) to start investing in digital gold automatically."
    },
    {
      question: "How much do I need to invest?",
      answer: "You can start with as little as £1. Carat allows you to invest small amounts and grow your savings over time."
    },
    {
      question: "How can I convert my digital gold to physical gold?",
      answer: "Once you've accumulated a sufficient amount of digital gold, you can convert it into physical gold coins or jewelry directly through the app."
    },
    {
      question: "How do I track my gold investment?",
      answer: "Carat's Gold Vault gives you real-time updates on gold prices and the value of your investment. You can track your savings anytime, anywhere."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes, Carat uses the latest encryption technology to ensure that your investment is safe and secure."
    },
    {
      question: "How does gold help me build wealth?",
      answer: "Gold is known for its long-term value preservation and appreciation. By investing in gold through Carat, you are benefiting from the historical strength of this asset, growing your wealth over time."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about investing with Carat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
