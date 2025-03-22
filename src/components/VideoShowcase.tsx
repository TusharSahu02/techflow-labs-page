
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type Video = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
};

const videos: Record<string, Video[]> = {
  "ai-labs": [
    {
      id: "ai-lab-1",
      title: "Introduction to AI Agents",
      description: "Learn the fundamentals of AI agents and how they can automate complex tasks.",
      embedUrl: "https://www.youtube.com/embed/jQrFbxvYGg0",
    },
    {
      id: "ai-lab-2",
      title: "Building Agentic RAG Systems",
      description: "Discover how to create Retrieval Augmented Generation systems with autonomous agents.",
      embedUrl: "https://www.youtube.com/embed/EYjG6i53-xk",
    },
  ],
  "cloud-labs": [
    {
      id: "cloud-lab-1",
      title: "AWS Cloud Fundamentals",
      description: "Get started with AWS cloud services for AI model deployment and scaling.",
      embedUrl: "https://www.youtube.com/embed/JIbIYCM48to",
    },
    {
      id: "cloud-lab-2",
      title: "Cloud-Native AI Applications",
      description: "Learn to build and deploy AI applications using cloud-native architectures.",
      embedUrl: "https://www.youtube.com/embed/h2jfRyXQojA",
    },
  ],
};

const VideoShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ai-labs");

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Explore Our Video Tutorials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Watch hands-on tutorials and learn practical skills with our expert-guided videos
          </p>
        </div>

        <Tabs defaultValue="ai-labs" className="w-full max-w-4xl mx-auto" onValueChange={setSelectedCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="ai-labs" className="text-base py-3">AI Labs</TabsTrigger>
              <TabsTrigger value="cloud-labs" className="text-base py-3">Cloud Labs</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(videos).map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              {videos[category].map((video) => (
                <Card key={video.id} className="shadow-lg hover-lift overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                        <iframe 
                          src={video.embedUrl} 
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{video.description}</p>
                        <a 
                          href="#" 
                          className="text-primary font-medium flex items-center hover:underline"
                        >
                          Watch Full Tutorial
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 ml-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default VideoShowcase;
