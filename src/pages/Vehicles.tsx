
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/InquiryForm';

const Vehicles = () => {
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: '',
    transmission: '',
    priceRange: ''
  });

  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const vehicles = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Prius',
      year: 2018,
      transmission: 'Automatic',
      price: 4200000,
      priceDisplay: 'LKR 4,200,000',
      image: 'https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Hybrid', 'Low Mileage', 'GPS Navigation']
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      transmission: 'Manual',
      price: 3800000,
      priceDisplay: 'LKR 3,800,000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Excellent Condition', 'Service Records', 'Low Mileage']
    },
    {
      id: 3,
      make: 'Nissan',
      model: 'X-Trail',
      year: 2017,
      transmission: 'Automatic',
      price: 5500000,
      priceDisplay: 'LKR 5,500,000',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['4WD', 'Sunroof', 'Leather Seats']
    }
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    const filtered = vehicles.filter(vehicle => {
      // Make filter
      if (filters.make && vehicle.make.toLowerCase() !== filters.make.toLowerCase()) {
        return false;
      }
      
      // Model filter
      if (filters.model && vehicle.model.toLowerCase() !== filters.model.toLowerCase()) {
        return false;
      }
      
      // Year filter
      if (filters.year) {
        if (filters.year === '2020' && vehicle.year < 2020) return false;
        if (filters.year === '2018' && (vehicle.year < 2018 || vehicle.year > 2019)) return false;
        if (filters.year === '2015' && (vehicle.year < 2015 || vehicle.year > 2017)) return false;
      }
      
      // Transmission filter
      if (filters.transmission && vehicle.transmission.toLowerCase() !== filters.transmission.toLowerCase()) {
        return false;
      }
      
      // Price range filter
      if (filters.priceRange) {
        if (filters.priceRange === '0-3000000' && vehicle.price >= 3000000) return false;
        if (filters.priceRange === '3000000-5000000' && (vehicle.price < 3000000 || vehicle.price > 5000000)) return false;
        if (filters.priceRange === '5000000+' && vehicle.price <= 5000000) return false;
      }
      
      return true;
    });
    
    setFilteredVehicles(filtered);
    setHasSearched(true);
  };

  const clearFilters = () => {
    setFilters({
      make: '',
      model: '',
      year: '',
      transmission: '',
      priceRange: ''
    });
    setFilteredVehicles([]);
    setHasSearched(false);
  };

  const handleInquiry = (vehicleName?: string) => {
    setSelectedVehicle(vehicleName || '');
    setInquiryOpen(true);
  };

  const displayVehicles = hasSearched ? filteredVehicles : vehicles;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Premium Vehicles for Sale
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Quality imported vehicles from Japan, UK, and Europe with full inspection guarantee
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <Card className="mb-8 shadow-xl border-0 rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Filter Vehicles</h3>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <select 
                  name="make" 
                  value={filters.make} 
                  onChange={handleFilterChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">All Makes</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="nissan">Nissan</option>
                  <option value="mazda">Mazda</option>
                </select>
                
                <select 
                  name="model" 
                  value={filters.model} 
                  onChange={handleFilterChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">All Models</option>
                  <option value="prius">Prius</option>
                  <option value="civic">Civic</option>
                  <option value="x-trail">X-Trail</option>
                </select>
                
                <select 
                  name="year" 
                  value={filters.year} 
                  onChange={handleFilterChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">All Years</option>
                  <option value="2020">2020+</option>
                  <option value="2018">2018-2019</option>
                  <option value="2015">2015-2017</option>
                </select>
                
                <select 
                  name="transmission" 
                  value={filters.transmission} 
                  onChange={handleFilterChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">All Transmissions</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
                
                <select 
                  name="priceRange" 
                  value={filters.priceRange} 
                  onChange={handleFilterChange}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  <option value="">All Prices</option>
                  <option value="0-3000000">Under LKR 3M</option>
                  <option value="3000000-5000000">LKR 3M - 5M</option>
                  <option value="5000000+">Above LKR 5M</option>
                </select>

                <Button 
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200"
                >
                  Search Vehicles
                </Button>
              </div>
              {hasSearched && (
                <div className="mt-6 flex items-center justify-between bg-blue-50 p-4 rounded-xl">
                  <p className="text-blue-800 font-medium">
                    Found {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? 's' : ''} matching your criteria
                  </p>
                  <Button 
                    onClick={clearFilters}
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{vehicle.year}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {vehicle.make} {vehicle.model}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Year: {vehicle.year}
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {vehicle.transmission}
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {vehicle.priceDisplay}
                    </span>
                    <Button 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-all duration-200"
                      onClick={() => handleInquiry(`${vehicle.make} ${vehicle.model} ${vehicle.year}`)}
                    >
                      Inquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {hasSearched && filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-500 mb-4">No vehicles match your search criteria.</p>
                <Button onClick={clearFilters} variant="outline" className="mx-auto">
                  Clear filters and try again
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <InquiryForm 
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        category={selectedVehicle}
      />
    </div>
  );
};

export default Vehicles;
