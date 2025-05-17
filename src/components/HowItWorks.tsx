
import React from 'react';
import { Upload, DollarSign, Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Upload License",
      description: "Securely upload your license details through our encrypted portal. We accept all major software vendors.",
      icon: <Upload className="w-10 h-10 text-white" />,
      iconBg: "bg-softsell-600"
    },
    {
      title: "Get Valuation",
      description: "Our AI-powered system instantly values your license based on current market demand and trends.",
      icon: <DollarSign className="w-10 h-10 text-white" />,
      iconBg: "bg-amber-500"
    },
    {
      title: "Get Paid",
      description: "Accept the offer and receive payment within 24-48 hours via your preferred payment method.",
      icon: <Check className="w-10 h-10 text-white" />,
      iconBg: "bg-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50 dark:bg-gray-900 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out animate-in-view">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selling your software licenses has never been easier. 
            Complete the process in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 transform translate-y-10"
              style={{ animationDelay: `${index * 200}ms`, transitionDelay: `${index * 200}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M20 5L35 20L20 35" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-gray-300 dark:text-gray-600" 
                    />
                  </svg>
                </div>
              )}
              
              <div className={`${step.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-transform duration-500 hover:scale-110`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
              
              <div className="mt-4 text-center">
                <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
