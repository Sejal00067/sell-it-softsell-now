
import React from 'react';

const TrustedPartners: React.FC = () => {
  // Using placeholder company names since we don't have actual logos
  const partners = [
    {
      name: "Microsoft", 
      type: "Global",
      country: null
    },
    {
      name: "Adobe", 
      type: "Global",
      country: null
    },
    {
      name: "Oracle", 
      type: "Global",
      country: null
    },
    {
      name: "SAP", 
      type: "Global",
      country: null
    },
    {
      name: "IBM", 
      type: "Global",
      country: null
    },
    {
      name: "Tata Consultancy Services", 
      type: "Indian",
      country: "India"
    },
    {
      name: "Infosys", 
      type: "Indian",
      country: "India"
    },
    {
      name: "Wipro", 
      type: "Indian",
      country: "India"
    },
    {
      name: "HCL Technologies", 
      type: "Indian",
      country: "India"
    },
    {
      name: "Tech Mahindra", 
      type: "Indian",
      country: "India"
    }
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out animate-in-view">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Trusted by software vendors worldwide</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Including leading Indian enterprises</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="opacity-0 transform translate-y-4 animate-in-view"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-12 flex items-center justify-center px-6 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border ${
                partner.type === "Indian" 
                  ? "bg-white/90 dark:bg-gray-800/90 border-amber-200 dark:border-amber-900/30" 
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${
                    partner.type === "Indian" 
                      ? "text-amber-600 dark:text-amber-400" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}>{partner.name}</span>
                  
                  {partner.type === "Indian" && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                      🇮🇳
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block px-4 py-2 bg-gradient-to-r from-softsell-100/50 to-amber-100/50 dark:from-softsell-900/30 dark:to-amber-900/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 animate-pulse">
            Join 500+ satisfied companies that have successfully sold their licenses
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
