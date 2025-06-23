
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/f399fbb3-52a7-47d1-a041-6eda5d950dc6.png" 
              alt="Chathu International Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Trusted Vehicle & Parts Importer in Sri Lanka. Quality-tested automotive parts 
              and vehicles imported from Japan, UK, and Europe.
            </p>
            <div className="flex space-x-4">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">+94 77 123 4567</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">info@chathuinternational.lk</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/parts" className="text-gray-300 hover:text-white">Parts for Sale</Link></li>
              <li><Link to="/vehicles" className="text-gray-300 hover:text-white">Vehicles for Sale</Link></li>
              <li><Link to="/import-process" className="text-gray-300 hover:text-white">Import Process</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Vehicle Importing</span></li>
              <li><span className="text-gray-300">Parts Sourcing</span></li>
              <li><span className="text-gray-300">Quality Testing</span></li>
              <li><span className="text-gray-300">Warranty Support</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 <a href='https://fuchsius.com' className='text-fuchsia-400'>Fuchsius</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
