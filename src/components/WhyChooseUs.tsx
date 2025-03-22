
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsItem = ({ text, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="flex items-start gap-3 opacity-0"
    >
      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    "Interactive hands-on labs with real-time feedback and guidance",
    "Beginner-friendly curriculums that progress to expert-level content",
    "Real-world AI & Cloud projects that build practical, applicable skills",
    "No-code solutions designed specifically for business leaders and decision-makers",
    "Regular updates with the latest industry advancements and technologies",
    "24/7 access to learning materials and resources from any device"
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (headingRef.current) observer.observe(headingRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="why-choose-us" className="py-24 px-6 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Why Choose Us?
            </div>
            <h2 
              ref={headingRef}
              className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0"
            >
              The GenAI Labs Difference
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We've designed our learning experience to help you master complex technologies
              through practical application and guided exploration.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <WhyChooseUsItem key={index} text={benefit} index={index} />
              ))}
            </div>
          </div>

          <div 
            ref={imageRef}
            className="opacity-0 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform translate-x-5 translate-y-5 relative z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                {/* Visual elements suggesting code and AI */}
                <div className="absolute inset-0 flex items-center justify-center text-white/90 font-mono text-sm opacity-30 whitespace-pre overflow-hidden">
                  {Array(20).fill(0).map((_, i) => (
                    <div key={i} className="truncate">
                      {`import tensorflow as tf\nfrom transformers import GPT2Tokenizer\n# AI model training\nmodel = tf.keras.Sequential([\n  tf.keras.layers.Dense(128, activation='relu'),\n  tf.keras.layers.Dense(64, activation='relu'),\n  tf.keras.layers.Dense(10, activation='softmax')\n])`}
                    </div>
                  ))}
                </div>
                
                {/* Foreground content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Learning That Works</h3>
                  <p className="mb-6">Practical, hands-on experience with real-world applications</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
                    {["Python", "AWS", "TensorFlow", "PyTorch", "No-Code", "RAG"].map((tech, i) => (
                      <div key={i} className="glass-effect px-3 py-2 rounded-md text-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-2xl -z-0"></div>
            <div className="absolute top-10 -left-6 w-12 h-12 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
