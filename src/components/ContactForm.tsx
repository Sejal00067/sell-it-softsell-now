
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    };
    
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
      isValid = false;
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'License type is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleLicenseTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      licenseType: value
    }));
    
    if (errors.licenseType) {
      setErrors(prev => ({
        ...prev,
        licenseType: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Form Submitted Successfully",
          description: "We've received your inquiry and will contact you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill out the form below for a free license valuation and one of our specialists will get back to you within 24 hours.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleChange}
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="licenseType">License Type</Label>
                  <Select
                    value={formData.licenseType}
                    onValueChange={handleLicenseTypeChange}
                  >
                    <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enterprise">Enterprise Software</SelectItem>
                      <SelectItem value="saas">SaaS Subscription</SelectItem>
                      <SelectItem value="desktop">Desktop Application</SelectItem>
                      <SelectItem value="cloud">Cloud Service</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your software licenses and any questions you have..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We respect your privacy. All information is kept confidential.
                </p>
                <Button 
                  type="submit" 
                  className="cta-button w-full sm:w-auto" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Your Valuation"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
