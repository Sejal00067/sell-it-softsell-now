
import React from 'react';

const TrustedPartners: React.FC = () => {
  // Using placeholder company names since we don't have actual logos
  const partners = [
    "Microsoft", "Adobe", "Oracle", "SAP", "IBM", "Autodesk", "Salesforce", "VMware"
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out animate-in-view">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Trusted by software vendors worldwide</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="opacity-0 transform translate-y-4 animate-in-view"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 flex items-center justify-center px-6 py-2 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 font-medium">{partner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
