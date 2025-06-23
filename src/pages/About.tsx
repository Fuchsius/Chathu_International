import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Globe, Car } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Chathu International</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Your trusted partner in automotive excellence since 2010
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2010, Chathu International began as a small family business with a 
                simple mission: to provide Sri Lankan automotive enthusiasts with access to 
                high-quality vehicle parts and imported vehicles at competitive prices.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the years, we've built strong relationships with suppliers in Japan, the UK, 
                and Europe, ensuring that every part and vehicle we import meets the highest 
                standards of quality and reliability.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve customers across Sri Lanka, from individual car 
                owners to professional mechanics and automotive businesses.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our warehouse facility"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To provide Sri Lankan customers with access to genuine, high-quality automotive 
                  parts and vehicles through reliable importing services, competitive pricing, 
                  and exceptional customer support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To become Sri Lanka's most trusted automotive importer, known for our 
                  commitment to quality, reliability, and customer satisfaction in every 
                  transaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Experience the Chathu International difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Original Parts Only</h3>
                <p className="text-gray-600">
                  We source only genuine OEM parts directly from authorized dealers and 
                  manufacturers to ensure authenticity and quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Sourcing</h3>
                <p className="text-gray-600">
                  Our experienced team has deep knowledge of international markets and 
                  established relationships with trusted suppliers worldwide.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
                <p className="text-gray-600">
                  Efficient logistics and customs handling ensure your parts and vehicles 
                  arrive on time, every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
