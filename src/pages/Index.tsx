
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CourseShowcase from '@/components/CourseShowcase';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-codenest-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CourseShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
