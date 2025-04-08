
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Access to 300+ premium coding courses",
    "Real-time collaboration tools",
    "AI-powered code suggestions",
    "Virtual classroom environment",
    "Certificate of completion",
    "24/7 community support"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-codenest-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-codenest-purple/30 to-codenest-cyan/30 opacity-30"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Start Your Coding Journey <span className="text-gradient">Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Join thousands of students already learning on CodeNest Academy
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 animate-fade-in" 
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-codenest-cyan flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-codenest-cyan to-codenest-purple hover:opacity-90 px-8 py-6 animate-fade-in"
              style={{ animationDelay: '900ms' }}
            >
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8 py-6 animate-fade-in"
              style={{ animationDelay: '1000ms' }}
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
