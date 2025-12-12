import { ChevronDown, ChevronUp } from "lucide-react";
import { Accordion, AccordionItem } from "./UI/accordion";

export const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,"
    },
    {
      id: 2,
      question: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,"
    },
    {
      id: 3,
      question: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,"
    },
    {
      id: 4,
      question: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900 font-semibold">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" defaultOpen={0} className="space-y-6">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={index}
              className="rounded-xl overflow-hidden"
            >
              <Header question={faq.question} />

              <Content answer={faq.answer} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const Header = ({ isOpen, value, toggleItem, question }) => (
  <button
    onClick={() => toggleItem(value)}
    className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-300
      ${isOpen ? "bg-[#0b6fb0] text-white shadow rounded-t-xl" : "bg-gray-100 text-gray-800 rounded-xl"}
    `}
  >
    <span className="font-medium text-lg">{question}</span>

    {isOpen ? (
      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white bg-opacity-0">
        <ChevronUp className="w-5 h-5 text-white" />
      </span>
    ) : (
      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white">
        <ChevronDown className="w-4 h-4 text-[#0b6fb0]" />
      </span>
    )}
  </button>
);


const Content = ({ isOpen, answer }) => (
  <div
    className={`transition-all duration-300 ease-in-out bg-white overflow-hidden 
      ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
    `}
  >
    <div className="px-6 pb-6 pt-4">
      <p className="text-gray-700 leading-relaxed text-sm">{answer}</p>
    </div>
  </div>
);

export default FAQSection;
