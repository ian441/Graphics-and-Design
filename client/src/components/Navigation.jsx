import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'contact', label: 'Contact', path: '/contact' },
    { id: 'login', label: 'Login', path: '/signin' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br rounded-full flex items-center justify-center">
              <img src="/images/IMG-20250903-WA0000.jpg" alt="Logo" className="w-12 h-12 rounded-full object-cover object-center" />
            </div>
            <span className={`text-2xl font-medium ${scrolled ? 'text-gray-900' : 'text-white'}`}>Artika</span>
          </Link>
          <div className="flex flex-col items-end space-y-3">
            {/* Social icons */}
            <div className="hidden md:flex space-x-5 pt-4">
              <a href="#" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}><i className="fab fa-facebook"></i></a>
              <a href="#" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}><i className="fab fa-twitter"></i></a>
              <a href="#" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}><i className="fab fa-instagram"></i></a>
              <a href="#" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}><i className="fab fa-linkedin"></i></a>
            </div>
            {/* Nav items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 text-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-gray-200'
                  }`}
                >
                   {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 cursor-pointer transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <div className="fixed inset-0 z-50 md:hidden">
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}></div>
          <div className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mb-4 text-gray-700 hover:text-gray-900"
              >
                <i className="fas fa-times"></i>
              </button>
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive(item.path) ? 'text-blue-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
  