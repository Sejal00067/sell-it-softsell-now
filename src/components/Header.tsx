
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b">
      <div className="container-custom flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-softsell-600 rounded-md flex items-center justify-center text-white font-bold">S</div>
            <span className="hidden sm:block text-xl font-bold text-softsell-800 dark:text-white">SoftSell</span>
          </a>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-softsell-600 dark:text-gray-300 dark:hover:text-softsell-400">How It Works</a>
          <a href="#why-choose-us" className="text-gray-600 hover:text-softsell-600 dark:text-gray-300 dark:hover:text-softsell-400">Why Choose Us</a>
          <a href="#testimonials" className="text-gray-600 hover:text-softsell-600 dark:text-gray-300 dark:hover:text-softsell-400">Testimonials</a>
          <a href="#contact" className="cta-button">Get Started</a>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleDarkMode} 
            className="ml-2"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-300"
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-300"
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-300"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-4 mt-2 rounded-md bg-amber-500 text-white font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
