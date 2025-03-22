
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface LearningPathCardProps {
  title: string;
  description: string;
  index: number;
  color: string;
}

const LearningPathCard = ({ title, description, index, color }: LearningPathCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.add('animate-scale-in');
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`rounded-xl p-6 shadow-lg opacity-0 ${color} transform transition-all duration-500 hover:translate-y-[-5px]`}
    >
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
    </div>
  );
};

const LearningPathFlow = () => {
  const pathRef = useRef<HTMLDivElement>(null);

  const paths = [
    {
      title: "Python",
      description: "Master the fundamentals of Python programming to build a strong foundation.",
      color: "bg-blue-600",
    },
    {
      title: "Machine Learning",
      description: "Dive into ML algorithms, data analysis, and model training techniques.",
      color: "bg-purple-600",
    },
    {
      title: "Generative AI",
      description: "Explore cutting-edge generative models, LLMs, and AI applications.",
      color: "bg-indigo-600",
    },
  ];

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

    if (pathRef.current) {
      observer.observe(pathRef.current);
    }

    return () => {
      if (pathRef.current) {
        observer.unobserve(pathRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={pathRef}>
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Your Learning Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text opacity-0">
            Follow Your Path to AI Mastery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Progress through our structured learning path to build your skills from the ground up
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Path line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {paths.map((path, index) => (
              <React.Fragment key={index}>
                <LearningPathCard
                  title={path.title}
                  description={path.description}
                  index={index}
                  color={path.color}
                />
                {index < paths.length - 1 && (
                  <div className="absolute hidden md:block" style={{ 
                    left: `${(index + 0.85) * (100/3)}%`, 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    zIndex: 20
                  }}>
                    <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathFlow;
