
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InquiryForm from '@/components/InquiryForm';

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const categories = [
    {
      name: "Engine Parts",
      items: ["Pistons", "Cylinder Heads", "Crankshafts", "Camshafts", "Engine Blocks"],
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      brand: "Toyota"
    },
    {
      name: "Suspension",
      items: ["Shock Absorbers", "Struts", "Springs", "Control Arms", "Sway Bars"],
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      brand: "Honda"
    },
    {
      name: "Electronics",
      items: ["ECU Units", "Sensors", "Wiring Harness", "Alternators", "Starters"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      brand: "Nissan"
    },
    {
      name: "Body Parts",
      items: ["Bumpers", "Fenders", "Doors", "Hoods", "Mirrors"],
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      brand: "Mazda"
    },
    {
      name: "Transmission",
      items: ["Gearboxes", "Clutch Kits", "CVT Units", "Differential", "Drive Shafts"],
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      brand: "Toyota"
    },
    {
      name: "Braking System",
      items: ["Brake Pads", "Brake Discs", "Calipers", "Master Cylinder", "ABS Units"],
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      brand: "Honda"
    }
  ];

  const brands = ["Toyota", "Honda", "Nissan", "Mazda", "Mitsubishi", "Suzuki", "BMW", "Mercedes-Benz"];

  const handleSearch = () => {
    const filtered = categories.filter(category => {
      // Search term filter
      if (searchTerm && !category.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !category.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }

      // Brand filter
      if (selectedBrand && category.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      return true;
    });

    setFilteredCategories(filtered);
    setHasSearched(true);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedCondition('');
    setFilteredCategories([]);
    setHasSearched(false);
  };

  const handleInquiry = (categoryName?: string) => {
    setSelectedCategory(categoryName || '');
    setInquiryOpen(true);
  };

  const displayCategories = hasSearched ? filteredCategories : categories;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Premium Automotive Parts
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Genuine automotive parts imported from Japan, UK, and Europe with quality guarantee
          </p>
        </div>
      </div>

      <section className="py-8 shadow-lg border-b">
        <div className="max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8 rounded-lg">
          <div className="flex flex-col gap-4 md:flex-row md:gap-4 justify-center items-center w-full">
            <div className="w-full md:w-1/4 min-w-[180px]">
              <Label htmlFor="search" className="text-sm font-semibold text-gray-700">Search Parts</Label>
              <Input
                id="search"
                placeholder="Enter part name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-1/4 min-w-[150px]">
              <Label htmlFor="brand" className="text-sm font-semibold text-gray-700">Brand</Label>
              <select
                id="brand"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/4 min-w-[150px]">
              <Label htmlFor="condition" className="text-sm font-semibold text-gray-700">Condition</Label>
              <select
                id="condition"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
              >
                <option value="">All Conditions</option>
                <option value="new">New</option>
                <option value="reconditioned">Reconditioned</option>
              </select>
            </div>
            <div className="flex items-end mt-7">
              <Button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-200"
              >
                Search Parts
              </Button>
            </div>
            {hasSearched && (
              <div className="flex items-end">
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {hasSearched && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-lg">
                Found {filteredCategories.length} categor{filteredCategories.length !== 1 ? 'ies' : 'y'} matching your criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parts Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Browse our extensive inventory of genuine automotive parts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCategories.map((category, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-center text-sm">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200"
                    onClick={() => handleInquiry(category.name)}
                  >
                    Inquire About Parts
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {hasSearched && filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.071-2.33"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No parts found</h3>
                <p className="text-gray-500 mb-4">No categories match your search criteria.</p>
                <Button onClick={clearFilters} variant="outline" className="mx-auto">
                  Clear filters and try again
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us with your specific requirements and we'll source it for you within 48 hours!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-200"
              onClick={() => handleInquiry()}
            >
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-blue-900 hover:bg-blue-100 hover:text-blue-900 font-semibold py-4 px-8 rounded-xl transition-all duration-200"
            >
              WhatsApp: +94 77 123 4567
            </Button>
          </div>
        </div>
      </section>

      <InquiryForm
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        category={selectedCategory}
      />
    </div>
  );
};

export default Parts;
