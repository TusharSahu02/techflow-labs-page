
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section id="cta" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto relative">
        <div 
          ref={cardRef}
          className="relative z-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 md:p-12 shadow-xl opacity-0"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-10 top-10 w-40 h-40 rounded-full border border-white/20"></div>
            <div className="absolute left-10 bottom-10 w-20 h-20 rounded-full border border-white/20"></div>
            <div className="absolute right-40 bottom-20 w-60 h-60 rounded-full border border-white/10"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your AI & Cloud Skills?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our practical labs and start building real-world 
              projects today. Try our platform with a free preview of premium content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-base font-medium px-8"
              >
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 text-base font-medium px-8"
              >
                View Demo
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              No credit card required • Free 7-day trial • Cancel anytime
            </p>
          </div>
        </div>
        
        {/* Decorative blurs */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
