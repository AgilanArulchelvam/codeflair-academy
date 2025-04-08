
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, BookOpen, UserPlus, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-codenest-black/80 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-codenest-cyan" />
              <span className="text-xl font-bold text-white">
                Code<span className="text-gradient">Nest</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-codenest-cyan text-codenest-cyan hover:bg-codenest-cyan/10">
              <LogIn className="mr-2 h-4 w-4" /> Log In
            </Button>
            <Button className="bg-gradient-to-r from-codenest-cyan to-codenest-purple hover:opacity-90">
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-codenest-dark-gray border-b border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">Home</Link>
            <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">Courses</Link>
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">Features</Link>
            <Link to="/community" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">Community</Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10">Pricing</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="flex items-center px-5">
              <Button className="w-full mb-2 bg-gradient-to-r from-codenest-cyan to-codenest-purple hover:opacity-90">
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Button>
            </div>
            <div className="flex items-center px-5">
              <Button variant="outline" className="w-full border-codenest-cyan text-codenest-cyan hover:bg-codenest-cyan/10">
                <LogIn className="mr-2 h-4 w-4" /> Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
