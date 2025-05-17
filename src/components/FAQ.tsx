
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What types of software licenses can I sell?",
      answer: "You can sell almost any legitimate software license including enterprise applications, SaaS subscriptions, desktop applications, cloud services, and more. Popular examples include Microsoft 365, Adobe Creative Cloud, AutoCAD, Oracle, SAP, and other premium software licenses."
    },
    {
      question: "How is the valuation of my license determined?",
      answer: "Our AI-powered valuation system considers multiple factors including the software type, remaining subscription period, current market demand, original purchase price, and available features. We analyze real-time market data to ensure you get the most competitive offer available."
    },
    {
      question: "Is selling my unused software licenses legal?",
      answer: "Yes, selling legitimately purchased software licenses is legal in most jurisdictions under the first-sale doctrine. However, certain license agreements may have specific transfer restrictions. Our team reviews each license to ensure compliance with relevant terms and conditions."
    },
    {
      question: "How quickly will I receive payment?",
      answer: "Once your license is verified and the sale is completed, you'll receive payment within 24-48 hours. We offer multiple payment options including direct bank transfer, PayPal, and cryptocurrency for your convenience."
    },
    {
      question: "Are my license details and personal information secure?",
      answer: "Absolutely! We use bank-level encryption and security protocols to protect your information. Your license details are only shared with verified buyers, and all personal data is handled in compliance with global data protection regulations including GDPR."
    }
  ];

  return (
    <section id="faq" className="section bg-white dark:bg-gray-800 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out animate-in-view">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about selling your software licenses through SoftSell.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden bg-gray-50 dark:bg-gray-900 opacity-0 transform translate-y-6 animate-in-view" style={{ animationDelay: `${index * 100}ms` }}>
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center opacity-0 transform translate-y-10 animate-in-view" style={{ animationDelay: '800ms' }}>
            <p className="mb-4 text-gray-600 dark:text-gray-300">Still have questions?</p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
