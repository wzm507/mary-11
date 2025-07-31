import React from 'react';
import Banner from '@/components/Banner';
import AboutMe from '@/components/AboutMe';
import CareerAchievements from '@/components/CareerAchievements';
import FeaturedListings from '@/components/FeaturedListings';
import PropertyDevelopers from '@/components/PropertyDevelopers';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white">
      <Banner />
      <AboutMe />
      <CareerAchievements />
      <FeaturedListings />
      <PropertyDevelopers />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
