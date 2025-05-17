
import React from 'react';
import { Shield, Star, Users, Rocket } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Secure Transactions",
      description: "Bank-level encryption for all license transfers and financial transactions. Your data remains protected.",
      icon: <Shield className="w-6 h-6" />,
      color: "text-softsell-600",
      bgColor: "bg-softsell-100 dark:bg-softsell-900/30"
    },
    {
      title: "Best Market Rates",
      description: "Our dynamic pricing algorithm ensures you get the highest possible value for your software licenses.",
      icon: <Star className="w-6 h-6" />,
      color: "text-amber-500",
      bgColor: "bg-amber-100 dark:bg-amber-900/30"
    },
    {
      title: "Verified Buyers",
      description: "We only work with pre-vetted buyers, ensuring legitimate transactions and reducing fraud risk.",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Fast Payouts",
      description: "Receive payment quickly through multiple options including direct deposit, PayPal, and cryptocurrency.",
      icon: <Rocket className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    }
  ];

  return (
    <section id="why-choose-us" className="section bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have successfully sold their unused software licenses through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${reason.bgColor} ${reason.color} w-14 h-14 rounded-lg flex items-center justify-center mb-5`}>
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <span className="flex items-center px-4 py-2 bg-softsell-600 text-white rounded-full text-sm font-medium">
              $10M+
            </span>
            <span className="text-gray-700 dark:text-gray-300 text-lg">
              Worth of licenses successfully sold through our platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
