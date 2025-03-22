
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'GenAI Practical Labs - Master AI & Cloud with Hands-On Labs';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
