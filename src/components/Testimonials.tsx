
import React, { useState, useEffect } from 'react';
import { BadgeIndianRupee, User, Users, Globe } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Asset Manager",
    company: "TechGlobal Inc.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    testimonial: "SoftSell made it incredibly easy to recover value from our unused enterprise licenses after a company downsizing. The valuation was fair, and the payment was processed within 24 hours. I'd highly recommend their service to any IT manager looking to optimize software costs.",
    country: "USA"
  },
  {
    name: "Michael Chen",
    role: "Finance Director",
    company: "Innovate Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "As a finance director, I'm always looking for ways to recover costs. SoftSell provided a seamless experience from valuation to payment. Their platform helped us recoup over $50,000 from unused licenses that would have otherwise gone to waste.",
    country: "Singapore"
  },
  {
    name: "Rajiv Sharma",
    role: "CTO",
    company: "IndiaTech Solutions",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    testimonial: "SoftSell transformed how we manage our software assets. Their platform helped us recover significant value from our unused licenses. The process was quick, transparent, and the team was incredibly responsive throughout. Highly recommended for Indian tech companies looking to optimize their software investments.",
    country: "India"
  },
  {
    name: "Priya Patel",
    role: "IT Procurement Manager",
    company: "Bangalore Systems",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    testimonial: "As an IT procurement manager for a growing tech company in Bangalore, I was skeptical about selling our unused licenses. SoftSell's valuation was 30% higher than competitors, and the entire process was completed within 48 hours. Their understanding of the Indian software market is impressive.",
    country: "India"
  },
  {
    name: "Vikram Malhotra",
    role: "Finance Head",
    company: "Delhi Digital Enterprises",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    testimonial: "SoftSell helped our organization recover over ₹45 lakhs from unused enterprise software licenses. Their team understood our compliance concerns and provided excellent documentation for our auditors. The best software license marketplace for Indian businesses!",
    country: "India"
  },
  {
    name: "Ananya Krishnan",
    role: "Operations Director",
    company: "Chennai Tech Innovators",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    testimonial: "We had hundreds of unused Microsoft licenses after restructuring our IT department. SoftSell's platform gave us the best valuation in the market and handled all the transfer paperwork. The funds were transferred to our account promptly. A game-changer for Indian enterprises managing large software portfolios!",
    country: "India"
  }
];

const Testimonials: React.FC = () => {
  // Filter to keep Indian testimonials and 2 international ones
  const displayedTestimonials = testimonials.filter(t => t.country === "India" || ["USA", "Singapore"].includes(t.country));
  
  return (
    <section id="testimonials" className="section gradient-bg text-white opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out animate-in-view">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">What Our Clients Say</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Don't take our word for it. Here's what customers have to say about their experience with SoftSell.
          </p>
          
          <div className="flex justify-center items-center gap-2 mt-4">
            <Globe className="text-amber-400 animate-bounce" size={20} />
            <span className="text-amber-400 font-medium">Trusted by companies worldwide, including Indian enterprises</span>
          </div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {displayedTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300 flex flex-col h-full m-2 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="relative mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/30 hover:border-amber-400 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-white/80">{testimonial.role} at {testimonial.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {testimonial.country === "India" ? (
                          <>
                            <BadgeIndianRupee size={16} className="text-amber-400" />
                            <span className="text-xs text-amber-400">Indian Enterprise</span>
                          </>
                        ) : (
                          <>
                            <Globe size={16} className="text-white/60" />
                            <span className="text-xs text-white/60">{testimonial.country}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.82222 11.0556C10.8111 11.0556 11.6889 11.4167 12.4556 12.1389C13.1778 12.8611 13.5389 13.7389 13.5389 14.7722C13.5389 16.0278 13.0667 17.0611 12.1222 17.8722C11.1778 18.6833 10.0333 19.0889 8.68889 19.0889C6.6 19.0889 4.9 18.3222 3.58889 16.7889C2.27778 15.2556 1.62222 13.1778 1.62222 10.5556C1.62222 8.2 2.16111 6.01111 3.23889 3.98889C4.27222 1.96667 5.86111 0.455556 8 -0.544444C8.58333 -0.816667 9.3 -0.727778 9.8 -0.272222C10.3 0.183333 10.5222 0.827778 10.3889 1.45556L9.86667 3.63333C9.73333 4.25 9.23333 4.68889 8.61111 4.73333C7.75556 4.8 7.03333 5.32222 6.54444 6.18333C6.05556 7.04444 5.81111 8.12222 5.81111 9.41111C5.81111 9.81111 5.85556 10.1667 5.94444 10.4778C6.03333 10.7889 6.2 11.0556 6.45556 11.2667C6.75556 10.7889 7.12222 10.4778 7.55556 10.3C8.03333 10.0778 8.78333 10.0556 9.82222 11.0556ZM25.2 11.0556C26.1889 11.0556 27.0667 11.4167 27.8333 12.1389C28.5556 12.8611 28.9167 13.7389 28.9167 14.7722C28.9167 16.0278 28.4444 17.0611 27.5 17.8722C26.5556 18.6833 25.4111 19.0889 24.0667 19.0889C21.9778 19.0889 20.2778 18.3222 18.9667 16.7889C17.6556 15.2556 17 13.1778 17 10.5556C17 8.2 17.5389 6.01111 18.6167 3.98889C19.65 1.96667 21.2389 0.455556 23.3778 -0.544444C23.9611 -0.816667 24.6778 -0.727778 25.1778 -0.272222C25.6778 0.183333 25.9 0.827778 25.7667 1.45556L25.2444 3.63333C25.1111 4.25 24.6111 4.68889 23.9889 4.73333C23.1333 4.8 22.4111 5.32222 21.9222 6.18333C21.4333 7.04444 21.1889 8.12222 21.1889 9.41111C21.1889 9.81111 21.2333 10.1667 21.3222 10.4778C21.4111 10.7889 21.5778 11.0556 21.8333 11.2667C22.1333 10.7889 22.5 10.4778 22.9333 10.3C23.4111 10.0778 24.1611 10.0556 25.2 11.0556Z" fill="white" fillOpacity="0.2"/>
                    </svg>
                  </div>
                  
                  <p className="mb-6 text-white/90 flex-grow">{testimonial.testimonial}</p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-white/80">5.0</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
