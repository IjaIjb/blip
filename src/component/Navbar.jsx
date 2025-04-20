import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
           <img src='/assets/logo.svg' alt='' />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 px-3 py-2 font-medium">PORTFOLIO</a>
            <a href="/" className="text-gray-800 px-3 py-2 font-medium">CULTURE</a>
          </nav>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent bg-amber-50/70 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                placeholder="Search"
              />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <a href="#portfolio" className="block px-3 py-2 text-gray-800 font-medium">PORTFOLIO</a>
            <a href="#culture" className="block px-3 py-2 text-gray-800 font-medium">CULTURE</a>
            <div className="mt-3 px-3 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-transparent bg-amber-50/70 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;