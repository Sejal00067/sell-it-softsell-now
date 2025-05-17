
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import TrustedPartners from '@/components/TrustedPartners';

const Index: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Check for user's preferred color scheme
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);
  
  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add animation classes when elements are in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <HeroSection />
        <TrustedPartners />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
