
import React from 'react';

const Brands = () => {
  const brands = [
    "Toyota", "Honda", "Nissan", "Mazda", "Mitsubishi", 
    "Suzuki", "Subaru", "BMW", "Mercedes-Benz", "Audi"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Brands We Work With</h2>
          <p className="text-xl text-gray-600">Genuine parts and vehicles from trusted manufacturers</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-lg font-semibold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
