
import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface LearningPathCardProps {
  title: string;
  description: string;
  imagePath: string;
  index: number;
  isLeftAligned: boolean;
}

const LearningPathCard = ({ title, description, imagePath, index, isLeftAligned }: LearningPathCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0,
          y: 50,
          x: isLeftAligned ? -50 : 50
        },
        { 
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse',
            markers: false,
          },
          delay: 0.2
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLeftAligned]);

  return (
    <div
      ref={cardRef}
      className={`w-full opacity-0 ${isLeftAligned ? 'md:mr-auto' : 'md:ml-auto'}`}
    >
      <Card className={`overflow-hidden border-0 shadow-lg ${isLeftAligned ? 'rounded-r-3xl' : 'rounded-l-3xl'} rounded-tl-3xl rounded-bl-3xl`}>
        <div className="flex flex-col md:flex-row items-center">
          {isLeftAligned && (
            <div className="w-full md:w-1/3 p-6 bg-gradient-to-br from-blue-900 to-indigo-700 flex justify-center items-center">
              <img 
                src={imagePath} 
                alt={title} 
                className="w-32 h-32 object-contain"
              />
            </div>
          )}
          
          <div className={`w-full md:w-2/3 p-6 ${isLeftAligned ? 'bg-gradient-to-r from-purple-100 to-pink-100' : 'bg-gradient-to-l from-purple-100 to-pink-100'}`}>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
          
          {!isLeftAligned && (
            <div className="w-full md:w-1/3 p-6 bg-gradient-to-br from-indigo-700 to-blue-900 flex justify-center items-center">
              <img 
                src={imagePath} 
                alt={title} 
                className="w-32 h-32 object-contain"
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

const LearningPathFlow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const paths = [
    {
      title: "Python",
      description: "Master programming, automation, data analysis, and build scalable applications with expert-led guidance.",
      imagePath: "/lovable-uploads/473311b5-1ab5-4bc0-a742-31fb86165540.png",
      isLeftAligned: true
    },
    {
      title: "Machine Learning",
      description: "Learn to build intelligent models, process data efficiently, and create AI-driven solutions that adapt and excel.",
      imagePath: "/lovable-uploads/473311b5-1ab5-4bc0-a742-31fb86165540.png",
      isLeftAligned: false
    },
    {
      title: "General AI",
      description: "Master model creation, content generation, and AI-driven creativity with expert-led classes.",
      imagePath: "/lovable-uploads/473311b5-1ab5-4bc0-a742-31fb86165540.png",
      isLeftAligned: true
    },
  ];

  useEffect(() => {
    // Animation for section title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Animation for connecting arrows
    arrowRefs.current.forEach((arrow, index) => {
      if (arrow) {
        gsap.fromTo(
          arrow,
          { 
            opacity: 0,
            height: '0%',
          },
          { 
            opacity: 1,
            height: '100%',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: arrow,
              start: 'top bottom',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
              scrub: 0.5,
              markers: false,
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={titleRef}>
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Learning Path
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Your Journey to AI Mastery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Follow our structured curriculum to build your skills from fundamentals to advanced concepts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-24 relative">
            {paths.map((path, index) => (
              <div key={index} className="relative">
                <LearningPathCard
                  title={path.title}
                  description={path.description}
                  imagePath={path.imagePath}
                  index={index}
                  isLeftAligned={path.isLeftAligned}
                />
                
                {index < paths.length - 1 && (
                  <div
                    ref={el => (arrowRefs.current[index] = el)}
                    className="absolute left-1/2 transform -translate-x-1/2 h-24 w-1 opacity-0"
                    style={{ top: '100%' }}
                  >
                    <div className="w-1 bg-gray-300 dark:bg-gray-600 h-full relative">
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                        <ArrowDown className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathFlow;
