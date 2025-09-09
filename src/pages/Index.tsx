
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsPreviewSection from '@/components/ProjectsPreviewSection';
import MethodologySection from '@/components/MethodologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimationObserver from '@/components/AnimationObserver';

const Index = () => {
  useEffect(() => {
    document.title = 'Branding Singular - Branding Estratégico e IA';
    document.body.classList.add('bg-brand-black');
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <AnimationObserver />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <MethodologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
