// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

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
              <a 
                href="https://readdy.ai/home/6cca85bc-28d3-4309-9c2b-5cc6aa025a46/91c23562-f883-4364-8fab-84c9baca2feb" 
                data-readdy="true"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Home
              </a>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                About
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Services
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Portfolio
              </button>
              <button className="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Contact
              </button>
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
              <a 
                href="https://readdy.ai/home/6cca85bc-28d3-4309-9c2b-5cc6aa025a46/91c23562-f883-4364-8fab-84c9baca2feb" 
                data-readdy="true"
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Home
              </a>
              <button className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </button>
              <button className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Services
              </button>
              <button className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Portfolio
              </button>
              <button className="block w-full text-left px-3 py-2 text-sm font-medium text-blue-600 transition-colors cursor-pointer">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20creative%20office%20workspace%20with%20clean%20white%20walls%20and%20blue%20purple%20gradient%20lighting%20effects%20professional%20business%20environment%20with%20minimalist%20design%20elements%20and%20contemporary%20furniture%20perfect%20for%20creative%20studio%20contact%20page&width=1440&height=600&seq=contact-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your creative vision to life? We would love to hear about your project and discuss how we can help you achieve your goals.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are here to help you transform your creative ideas into reality. Reach out to us through any of the channels below, and our team will get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@creativestudio.com</p>
                    <p className="text-sm text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">123 Design Street<br />Creative City, NY 10001</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <i className="fab fa-facebook"></i>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <i className="fab fa-behance"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours</h2>
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <i className="fas fa-info-circle mr-2"></i>
                      Emergency support available 24/7 for ongoing projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="relative overflow-hidden rounded-2xl h-64 bg-gray-100">
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20office%20building%20location%20map%20view%20with%20clean%20streets%20and%20urban%20environment%20professional%20business%20district%20with%20contemporary%20architecture%20and%20clear%20signage%20aerial%20perspective&width=500&height=300&seq=office-map&orientation=landscape"
                    alt="Office Location"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">CreativeStudio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we will get back to you with a detailed proposal within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <div>
                    <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-sm">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select project type</option>
                      <option value="branding">Brand Identity & Logo Design</option>
                      <option value="web-design">Website Design & Development</option>
                      <option value="digital-marketing">Digital Marketing Campaign</option>
                      <option value="print-design">Print Design & Materials</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Let\'s Discuss</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm resize-vertical"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="!rounded-button whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </button>
                <a
                  href="https://readdy.ai/home/6cca85bc-28d3-4309-9c2b-5cc6aa025a46/91c23562-f883-4364-8fab-84c9baca2feb"
                  data-readdy="true"
                  className="!rounded-button whitespace-nowrap border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer text-center flex items-center justify-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to Home
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your Creative Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join over 100+ satisfied clients who have transformed their brands with our creative expertise. Let\'s discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="!rounded-button whitespace-nowrap bg-white text-blue-600 px-8 py-4 font-semibold hover:bg-gray-100 transition-all cursor-pointer">
                <i className="fas fa-calendar-alt mr-2"></i>
                Schedule a Call
              </button>
              <button className="!rounded-button whitespace-nowrap border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
                <i className="fas fa-download mr-2"></i>
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-palette text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold">CreativeStudio</span>
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

export default Contact;
