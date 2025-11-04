import React from 'react';
import Banner from '@/components/Banner';
import AboutMe from '@/components/AboutMe';
import CareerAchievements from '@/components/CareerAchievements';
import FeaturedListings from '@/components/FeaturedListings';
import PropertyDevelopers from '@/components/PropertyDevelopers';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const Index = () => {
  return (
    <div className="bg-white">
      <ScrollAnimation type="fade-in" duration={1000} offset={50}>
        <Banner />
      </ScrollAnimation>
      
      <ScrollAnimation type="fade-up" duration={800} delay={100} offset={100}>
        <AboutMe />
      </ScrollAnimation>
      
      <ScrollAnimation type="slide-up" duration={900} delay={200} offset={100}>
        <CareerAchievements />
      </ScrollAnimation>
      
      <ScrollAnimation type="fade-up" duration={1000} delay={300} offset={100}>
        <FeaturedListings />
      </ScrollAnimation>
      
      <ScrollAnimation type="slide-up" duration={900} delay={400} offset={100}>
        <PropertyDevelopers />
      </ScrollAnimation>
      
      <ScrollAnimation type="fade-up" duration={800} delay={500} offset={100}>
        <ContactSection />
      </ScrollAnimation>
      
      <ScrollAnimation type="fade-in" duration={700} delay={600} offset={100}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
};

export default Index;
