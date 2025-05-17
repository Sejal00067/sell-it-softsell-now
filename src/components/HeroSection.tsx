
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-softsell-100 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-softsell-100 rounded-full opacity-70 dark:bg-softsell-900 dark:opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-100 rounded-full opacity-70 dark:bg-amber-900 dark:opacity-20 animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>
      
      <div className="container-custom flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <span className="gradient-text">Unlock the Value</span> <br />
            of Your Software Licenses
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-down" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            Turn unused software licenses into cash, quickly and securely. 
            Our marketplace connects sellers with verified buyers for the best rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
            <a href="#contact" className="cta-button flex items-center justify-center gap-2 group">
              Get a Quote
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-800 dark:text-white">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="w-full lg:w-1/2 animate-fade-in-right opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          <div className="relative mx-auto max-w-md">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex justify-between mb-6 items-center">
                <div className="bg-softsell-100 dark:bg-softsell-900/40 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-softsell-600 animate-bounce">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                    <path d="M12 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                    <path d="M12 11.5V19"></path>
                    <path d="M9 19h6"></path>
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 dark:text-gray-400">Estimated Value</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">$1,243.00</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex justify-between items-center transform transition-transform duration-300 hover:scale-105">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Adobe Creative Cloud</p>
                    <p className="font-medium">Enterprise License (3 years)</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium dark:bg-green-900/30 dark:text-green-400">
                    High Demand
                  </span>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex justify-between items-center transform transition-transform duration-300 hover:scale-105" style={{ transitionDelay: '100ms' }}>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Microsoft 365</p>
                    <p className="font-medium">Business Premium (25 seats)</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400">
                    Verified
                  </span>
                </div>
                
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex justify-between items-center transform transition-transform duration-300 hover:scale-105" style={{ transitionDelay: '200ms' }}>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Autodesk AutoCAD</p>
                    <p className="font-medium">Commercial License (2 years)</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium dark:bg-amber-900/30 dark:text-amber-400">
                    Pending
                  </span>
                </div>
              </div>
              
              <button className="mt-6 w-full py-3 px-4 bg-softsell-600 hover:bg-softsell-700 text-white rounded-lg transition-colors transform hover:scale-105 transition-transform duration-300">
                Complete Valuation
              </button>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-full opacity-20 z-[-1] animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-softsell-500 rounded-full opacity-20 z-[-1] animate-pulse" style={{ animationDuration: '5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
