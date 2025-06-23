
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Brands />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
