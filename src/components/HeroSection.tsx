
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import ThreeAnimation from './ThreeAnimation';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonsRef.current) observer.unobserve(buttonsRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-6 py-24 sm:py-32">
      <ThreeAnimation />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-[-5]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Practical AI & Cloud Labs
        </div>
        
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight opacity-0 text-balance"
        >
          <span>Master</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            AI & Cloud
          </span>{' '}
          <span>with Hands-On Labs</span>
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto opacity-0 animation-delay-200 text-balance"
        >
          Learn, Experiment & Build with No-Code, Python, AI Agents, and More
        </p>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 opacity-0 animation-delay-300"
        >
          <Button 
            size="lg" 
            className="font-medium text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Start Learning Today
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-medium text-base px-8 py-6 hover:-translate-y-1 transition-all"
          >
            Explore Courses
          </Button>
        </div>

        <div className="flex justify-center gap-8 mt-16 opacity-0 animate-fade-in animation-delay-400">
          <div className="glass-effect px-4 py-3 rounded-lg flex flex-col items-center">
            <div className="text-2xl font-bold">30+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Interactive Labs</div>
          </div>
          <div className="glass-effect px-4 py-3 rounded-lg flex flex-col items-center">
            <div className="text-2xl font-bold">5K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Learners</div>
          </div>
          <div className="glass-effect px-4 py-3 rounded-lg flex flex-col items-center">
            <div className="text-2xl font-bold">12+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Topics Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
