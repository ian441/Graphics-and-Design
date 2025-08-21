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
      image: 'https://reallygooddesigns.com/wp-content/uploads/2023/01/Nextra-Clothing-Brand-Identity.jpg'
        },
    {
      id: 2,
      title: 'Website Redesign',
      category: 'Web Design',
      image: 'https://www.mainteractive.com/wp-content/uploads/2017/08/revealing-our-2020-new-website-design-ma-interactive-blog-post-cover-img2.jpg'
        },
    {
      id: 3,
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: 'https://turtl.co/hs-fs/hubfs/Blog%20imagery/Upwork-Hey-World-1024x640-1-768x480.jpeg?width=768&height=480&name=Upwork-Hey-World-1024x640-1-768x480.jpeg'    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      text: 'The team delivered exceptional results that exceeded our expectations. Their creative approach transformed our brand identity completely.',
      avatar: ''
       },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'StartUp Solutions',
      text: 'Outstanding creativity and professionalism. They understood our vision perfectly and brought it to life with stunning visual design.',
      avatar: ''
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
      <div className="pt-16">
        {/* hero section */}
        <section 
  className="relative min-h-screen flex items-center bg-cover bg-center"
  style={{
    backgroundImage: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdvhTZ913h2wKpT0ywZ1XcR52RNnYbOeMmw&s'),
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
                  <span>Almasi@creativestudio.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone text-sm"></i>
                  <span>+254 (799) 914-446</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-sm"></i>
                  <span>Kimathi Design Street, Nairobi</span>
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
