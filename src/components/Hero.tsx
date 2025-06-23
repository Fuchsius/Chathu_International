
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted Vehicle & Parts Importer in Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Quality-tested automotive parts and vehicles imported from Japan, UK, and Europe. 
            Your trusted partner for reliable automotive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/parts">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Parts for Sale
              </Button>
            </Link>
            <Link to="/vehicles">
              <Button size="lg" variant="outline" className="border-white  hover:bg-slate-200 text-blue-900 px-8 py-3">
                Vehicles for Sale
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
