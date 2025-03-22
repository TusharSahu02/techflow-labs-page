
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface LearningPathCardProps {
  title: string;
  description: string;
  index: number;
  color: string;
}

const LearningPathCard = ({ title, description, index, color }: LearningPathCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.2
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`rounded-xl p-6 shadow-lg ${color} transform transition-all duration-500 hover:translate-y-[-5px]`}
    >
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
    </div>
  );
};

const LearningPathFlow = () => {
  const pathRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    // Animation for section title
    if (pathRef.current) {
      gsap.fromTo(
        pathRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: pathRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Animation for connecting line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { width: '0%' },
        { 
          width: '100%', 
          duration: 1.5, 
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Animation for arrows
    arrowRefs.current.forEach((arrow, index) => {
      if (arrow) {
        gsap.fromTo(
          arrow,
          { 
            opacity: 0,
            scale: 0.5,
            rotation: -45
          },
          { 
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            delay: 0.7 + (index * 0.2),
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: arrow,
              start: 'top bottom-=50',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={pathRef}>
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Your Learning Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Follow Your Path to AI Mastery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Progress through our structured learning path to build your skills from the ground up
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Path line */}
          <div 
            ref={lineRef}
            className="absolute top-1/2 left-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"
          ></div>
          
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
                  <div 
                    ref={el => (arrowRefs.current[index] = el)}
                    className="absolute hidden md:block" 
                    style={{ 
                      left: `${(index + 0.85) * (100/3)}%`, 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      zIndex: 20
                    }}
                  >
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
