
import React, { useEffect } from 'react';
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
  
  useEffect(() => {
    const cards = document.querySelectorAll('.how-it-works-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in-view');
          }, idx * 200);
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="section bg-gray-50 dark:bg-gray-900 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out animate-in-view">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-down">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-down" style={{ animationDelay: '200ms' }}>
            Selling your software licenses has never been easier. 
            Complete the process in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 transform translate-y-10 how-it-works-card"
              style={{ animationDelay: `${index * 200}ms`, transitionDelay: `${index * 200}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 dark:text-gray-600 animate-pulse">
                    <path 
                      d="M20 5L35 20L20 35" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
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
        
        <div className="mt-16 text-center opacity-0 transform translate-y-10 animate-in-view" style={{ animationDelay: '800ms' }}>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-softsell-600 hover:bg-softsell-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Start Selling Your Licenses
            <svg className="ml-2 w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
