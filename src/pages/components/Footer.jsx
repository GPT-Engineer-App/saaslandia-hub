import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 SaaS Company. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;