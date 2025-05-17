
import React from 'react';
import { 
  PhoneCall, Mail, MapPin, Clock, 
  Facebook, Twitter, Instagram, Linkedin, 
  ChevronRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const companyInfo = {
    name: 'SoftSell',
    address: '210 Tech Park, Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '560066',
    country: 'India',
    phone: '+91 80-4123-5678',
    email: 'contact@softsell.in',
    hours: 'Mon-Fri: 9am - 6pm IST'
  };
  
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' }
  ];
  
  const services = [
    { name: 'Software License Valuation', href: '#' },
    { name: 'Enterprise Solutions', href: '#' },
    { name: 'SaaS Subscriptions', href: '#' },
    { name: 'Compliance Verification', href: '#' },
    { name: 'Legal Documentation', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={18} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 opacity-0 transform translate-y-10 animate-in-view">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="opacity-0 transform translate-y-4 animate-in-view" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">SoftSell</h3>
            <p className="mb-4 text-gray-300">
              India's premier marketplace for buying and selling software licenses. We help businesses recover value from unused software assets.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <MapPin size={16} className="text-amber-400" />
                <span>{companyInfo.address}, {companyInfo.city}, {companyInfo.state}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <PhoneCall size={16} className="text-amber-400" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} className="text-amber-400" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Clock size={16} className="text-amber-400" />
                <span>{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="opacity-0 transform translate-y-4 animate-in-view" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="opacity-0 transform translate-y-4 animate-in-view" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="opacity-0 transform translate-y-4 animate-in-view" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on software licensing trends and market insights.
            </p>
            <form className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="bg-gray-800 hover:bg-amber-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
