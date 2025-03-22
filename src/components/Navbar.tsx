
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10",
        scrolled ? "py-3 glass-effect" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-display text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            GenAI Labs
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href="#features"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#why-choose-us"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Why Us
          </a>
          <a
            href="#cta"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Get Started
          </a>
          <Button 
            variant="default" 
            size="sm"
            className="ml-4 font-medium shadow-sm hover:shadow-md transition-all"
          >
            Sign In
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100/50 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out glass-effect shadow-lg ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          <a
            href="#features"
            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#why-choose-us"
            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Us
          </a>
          <a
            href="#cta"
            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
          <div className="pt-2">
            <Button
              variant="default"
              size="sm"
              className="w-full justify-center font-medium"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
