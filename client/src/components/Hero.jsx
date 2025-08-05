// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const Hero = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const featuredWorks = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://readdy.ai/api/search-image?query=modern%20minimalist%20brand%20identity%20design%20showcase%20with%20clean%20geometric%20logo%20and%20business%20cards%20on%20white%20marble%20surface%20with%20soft%20natural%20lighting%20and%20professional%20presentation&width=400&height=300&seq=work1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Website Redesign',
      category: 'Web Design',
      image: 'https://readdy.ai/api/search-image?query=sleek%20modern%20website%20design%20mockup%20displayed%20on%20laptop%20screen%20with%20clean%20interface%20and%20contemporary%20layout%20on%20white%20marble%20surface%20with%20soft%20professional%20lighting&width=400&height=300&seq=work2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: 'https://readdy.ai/api/search-image?query=creative%20marketing%20campaign%20materials%20including%20posters%20and%20digital%20assets%20arranged%20professionally%20on%20white%20marble%20surface%20with%20modern%20design%20elements%20and%20soft%20lighting&width=400&height=300&seq=work3&orientation=landscape'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      text: 'The team delivered exceptional results that exceeded our expectations. Their creative approach transformed our brand identity completely.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20headshot%20with%20confident%20smile%20wearing%20modern%20business%20attire%20against%20clean%20white%20background%20with%20soft%20professional%20lighting&width=80&height=80&seq=avatar1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'StartUp Solutions',
      text: 'Outstanding creativity and professionalism. They understood our vision perfectly and brought it to life with stunning visual design.',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20headshot%20with%20friendly%20smile%20wearing%20contemporary%20business%20attire%20against%20clean%20white%20background%20with%20soft%20professional%20lighting&width=80&height=80&seq=avatar2&orientation=squarish'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-palette text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">CreativeStudio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    activeNav === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 cursor-pointer"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    activeNav === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Page Content */}
      <div className="pt-16">
        {/* hero section */}
        <section 
  className="relative min-h-screen flex items-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20creative%20design%20studio%20workspace%20with%20sleek%20computers%20and%20design%20materials%20arranged%20professionally%20on%20white%20desk%20with%20soft%20natural%20lighting%20and%20contemporary%20office%20environment%20creating%20inspiring%20atmosphere&width=1440&height=900&seq=hero1&orientation=landscape')`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 text-white">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Creative Design
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Solutions
            </span>
          </h1>
          <p className="text-xl max-w-lg text-white/100">
            We transform your vision into stunning visual experiences that captivate audiences and drive results. From branding to digital design, we craft solutions that make an impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="!rounded-button bg-white text-blue-600 px-8 py-4 font-semibold hover:shadow-lg transition-all cursor-pointer">
            View Our Work
          </button>
          <button className="!rounded-button border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="flex items-center space-x-8 pt-8">
          {stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Featured Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our latest projects and see how we bring creative visions to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWorks.map((work) => (
                <div key={work.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium">{work.category}</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.category}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="!rounded-button whitespace-nowrap border-2 border-blue-600 text-blue-600 px-8 py-3 font-semibold hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something amazing together. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="!rounded-button whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold hover:shadow-lg transition-all cursor-pointer">
                Start a Project
              </button>
              <button className="!rounded-button whitespace-nowrap border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-palette text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold text-gray-900">CreativeStudio</span>
              </div>
              <p className="text-gray-400">
                Transforming visions into stunning visual experiences that captivate and inspire.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-gray-400 hover:text-white cursor-pointer transition-colors"></i>
                <i className="fab fa-twitter text-gray-400 hover:text-white cursor-pointer transition-colors"></i>
                <i className="fab fa-instagram text-gray-400 hover:text-white cursor-pointer transition-colors"></i>
                <i className="fab fa-linkedin text-gray-400 hover:text-white cursor-pointer transition-colors"></i>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Brand Identity</li>
                <li className="hover:text-white cursor-pointer transition-colors">Web Design</li>
                <li className="hover:text-white cursor-pointer transition-colors">Digital Marketing</li>
                <li className="hover:text-white cursor-pointer transition-colors">Print Design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our Team</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-sm"></i>
                  <span>hello@creativestudio.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone text-sm"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-sm"></i>
                  <span>123 Design Street, Creative City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CreativeStudio. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
