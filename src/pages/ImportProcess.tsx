
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Globe, Car } from 'lucide-react';

const ImportProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Initial Inquiry",
      description: "Contact us with your specific part or vehicle requirements. We'll provide a detailed quote including all costs."
    },
    {
      step: "2", 
      title: "Order Confirmation",
      description: "Once you approve the quote, we'll confirm your order and begin the sourcing process from our trusted suppliers."
    },
    {
      step: "3",
      title: "Quality Inspection",
      description: "All parts and vehicles undergo rigorous quality checks at the source before shipping to ensure authenticity."
    },
    {
      step: "4",
      title: "Shipping & Customs",
      description: "We handle all shipping logistics and customs clearance procedures to ensure smooth delivery to Sri Lanka."
    },
    {
      step: "5",
      title: "Local Delivery",
      description: "Upon arrival, we coordinate final delivery to your location anywhere in Sri Lanka."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Import Process</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Simple, transparent, and reliable importing process
          </p>
        </div>
      </div>

      {/* Import Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Import Your Parts & Vehicles</h2>
            <p className="text-xl text-gray-600">Follow our proven 5-step process for hassle-free importing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative bg-white shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Warranty Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivery Times</h3>
                <p className="text-gray-600 mb-4">
                  Standard delivery: 2-4 weeks from Japan/UK
                  Express delivery: 1-2 weeks (additional cost)
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  All parts are genuine OEM or high-quality aftermarket
                  Vehicles undergo comprehensive inspection
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Warranty Support</h3>
                <p className="text-gray-600 mb-4">
                  30-day warranty on all parts
                  6-month warranty on imported vehicles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportProcess;
