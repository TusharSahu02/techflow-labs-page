
import React, { useRef, useEffect } from 'react';
import { Code, Cloud, Terminal, Cpu, Box, Layers } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, delay);
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
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-900 subtle-border hover-lift rounded-xl p-6 opacity-0 flex flex-col h-full"
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "No-Code & Low-Code for CXOs",
      description: "Build sophisticated AI solutions without writing a line of code. Perfect for business leaders and decision-makers.",
      icon: <Box className="h-6 w-6" />,
      delay: 0
    },
    {
      title: "Jupyter Labs",
      description: "Hands-on Python & ML model training environments with interactive notebooks and comprehensive tutorials.",
      icon: <Code className="h-6 w-6" />,
      delay: 100
    },
    {
      title: "AWS Labs",
      description: "Learn cloud computing & AI deployments with guided exercises on AWS infrastructure and services.",
      icon: <Cloud className="h-6 w-6" />,
      delay: 200
    },
    {
      title: "Python Labs",
      description: "Master practical coding & automation exercises to build real-world AI and data analysis applications.",
      icon: <Terminal className="h-6 w-6" />,
      delay: 300
    },
    {
      title: "AI Agents & Agentic RAG",
      description: "Explore cutting-edge AI-powered automation and retrieval-augmented generation systems.",
      icon: <Cpu className="h-6 w-6" />,
      delay: 400
    },
    {
      title: "And Many More...",
      description: "Continuously updated curriculum with the latest technologies and methodologies in AI and cloud computing.",
      icon: <Layers className="h-6 w-6" />,
      delay: 500
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            What We Offer
          </div>
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-display font-bold mb-4 opacity-0"
          >
            Cutting-Edge Learning Experiences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive suite of practical labs designed to help you master
            the most in-demand skills in AI and cloud computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
