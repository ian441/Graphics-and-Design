// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';

const Services = () => {
  const [selectedTier, setSelectedTier] = useState('professional');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'brand-design',
      icon: 'fas fa-paint-brush',
      title: 'Brand Design',
      description: 'Create a memorable brand identity with custom logos, color palettes, and comprehensive brand guidelines that tell your unique story.',
      image: 'https://fedica.com/blog/wp-content/uploads/2017/08/graphic-designer.jpg'
    },
    {
      id: 'ui-design',
      icon: 'fas fa-desktop',
      title: 'UI/UX Design',
      description: 'Craft intuitive and visually stunning user interfaces that enhance user experience and drive engagement across all digital platforms.',
      image: 'https://www.thegotoguy.co/blog/wp-content/uploads/2024/11/xa.jpg'
    },
    {
      id: 'illustration',
      icon: 'fas fa-pencil-alt',
      title: 'Illustration',
      description: 'Bring your ideas to life with custom illustrations, digital artwork, and creative visuals that capture attention and imagination.',
      image: 'https://design4users.com/wp-content/uploads/2021/08/getting-design-job-tips-blog-article.jpeg'
    },
    {
      id: 'print-design',
      icon: 'fas fa-print',
      title: 'Print Design',
      description: 'Design eye-catching marketing materials, business cards, brochures, and packaging that make a lasting impression.',
      image: 'https://img.freepik.com/premium-photo/fashion-designer-sketch-drawing-costume-concept_53876-46967.jpg'
    },
    {
      id: 'motion-graphics',
      icon: 'fas fa-film',
      title: 'Motion Graphics',
      description: 'Create engaging animations and motion graphics that bring your brand to life and captivate your audience across all platforms.',
      image: 'https://www.andacademy.com/resources/wp-content/uploads/2025/02/image4-9-1024x574.jpg'
    },
    {
      id: 'social-media',
      icon: 'fas fa-camera',
      title: 'Social Media Design',
      description: 'Design scroll-stopping social media content that builds engagement and strengthens your brand presence online.',
      image: 'https://sachsmarketinggroup.com/wp-content/uploads/2025/07/iStock-2163027477-1024x606.jpg'
    },
  ];

  const pricingTiers = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 projects',
        'Basic support',
        'Standard templates',
        'Email integration',
        'Monthly reports'
      ],
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 projects',
        'Priority support',
        'Custom designs',
        'Advanced integrations',
        'Weekly reports',
        'Team collaboration',
        'API access'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited projects',
        '24/7 dedicated support',
        'Fully custom solutions',
        'Enterprise integrations',
        'Real-time analytics',
        'Advanced team features',
        'White-label options',
        'SLA guarantee'
      ],
      recommended: false
    }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? serviceCategories
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Creative Design Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your brand with our professional design services. From stunning visuals to engaging motion graphics,
            we bring your creative vision to life with precision and artistic excellence.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to meet your business needs
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-md transition-all cursor-pointer whitespace-nowrap !rounded-button ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                All Services
              </button>
              
              <button
                onClick={() => setSelectedCategory('brand-design')}
                className={`px-6 py-2 rounded-md transition-all cursor-pointer whitespace-nowrap !rounded-button ${
                  selectedCategory === 'brand-design'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Branding
              </button>
              
              <button
                onClick={() => setSelectedCategory('illustration')}
                className={`px-6 py-2 rounded-md transition-all cursor-pointer whitespace-nowrap !rounded-button ${
                  selectedCategory === 'illustration'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Illustration
              </button>
              
              <button
                onClick={() => setSelectedCategory('motion-graphics')}
                className={`px-6 py-2 rounded-md transition-all cursor-pointer whitespace-nowrap !rounded-button ${
                  selectedCategory === 'motion-graphics'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Motion
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                    Learn More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan that fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  tier.recommended ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                
                {tier.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${tier.recommended ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedTier(tier.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap !rounded-button ${
                      tier.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-rocket text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                    <p className="text-gray-600">Quick turnaround times without compromising on quality</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-shield-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reliable Support</h4>
                    <p className="text-gray-600">24/7 customer support to assist you whenever needed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-star text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h4>
                    <p className="text-gray-600">Industry-leading standards and best practices</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/top-5-high-paying-jobs-in-graphic-design-for-ambitious-minds-25524067-16x9_0.jpeg?VersionId=1tFF.IRHT.3_iZHXa4d0CPcBuHWb4Ifb&size=690:388"
                alt="Professional team working"
                className="w-full h-full object-cover object-top rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business today with our comprehensive service solutions.
            Join thousands of satisfied clients who trust us with their success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              <i className="fas fa-calendar-alt mr-2"></i>
              Book Now
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              <i className="fas fa-phone mr-2"></i>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">ServicePro</div>
              <p className="text-gray-400 mb-4">
                Delivering exceptional digital solutions that drive business growth and success.
              </p>
              
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-gray-400 hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-twitter text-gray-400 hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-linkedin text-gray-400 hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-instagram text-gray-400 hover:text-blue-400 cursor-pointer"></i>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Web Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-400 flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  hello@servicepro.com
                </p>
                <p className="text-gray-400 flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  123 Business St, City, State 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ServicePro. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
