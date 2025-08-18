// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const coreValues = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform industries and create meaningful impact for our clients worldwide.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'Our success stems from fostering strong partnerships, encouraging diverse perspectives, and building lasting relationships with clients and team members.'
    },
    {
      icon: 'fas fa-award',
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from project delivery to customer service, ensuring exceptional results every time.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      bio: 'With over 15 years of industry experience, Sarah leads our vision for innovation and growth in the digital transformation space.',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20CEO%20executive%20portrait%20in%20modern%20office%20setting%20with%20clean%20white%20background%20wearing%20elegant%20business%20suit%20confident%20smile&width=300&height=300&seq=team1&orientation=squarish',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      bio: 'Michael brings deep technical expertise and strategic thinking to drive our technology initiatives and product development roadmap.',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20CTO%20technology%20executive%20portrait%20in%20modern%20office%20setting%20with%20clean%20white%20background%20wearing%20business%20attire%20confident%20expression&width=300&height=300&seq=team2&orientation=squarish',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      bio: 'Emily crafts beautiful and intuitive user experiences that bridge the gap between complex functionality and elegant simplicity.',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20design%20director%20portrait%20in%20modern%20office%20setting%20with%20clean%20white%20background%20wearing%20creative%20professional%20attire%20warm%20smile&width=300&height=300&seq=team3&orientation=squarish',
      social: { linkedin: '#', dribbble: '#' }
    },
    {
      name: 'David Thompson',
      position: 'VP of Operations',
      bio: 'David ensures operational excellence and scalable processes that enable our team to deliver exceptional results consistently.',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20operations%20executive%20portrait%20in%20modern%20office%20setting%20with%20clean%20white%20background%20wearing%20business%20suit%20professional%20demeanor&width=300&height=300&seq=team4&orientation=squarish',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize digital experiences' },
    { year: '2020', title: 'Global Expansion', description: 'Opened offices in three major international markets' },
    { year: '2022', title: 'Award Recognition', description: 'Received Industry Excellence Award for Innovation' },
    { year: '2024', title: 'Sustainable Growth', description: 'Achieved carbon-neutral operations and B-Corp certification' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .fade-in {
          opacity: ${isLoaded ? '1' : '0'};
          transform: translateY(${isLoaded ? '0' : '20px'});
          transition: all 0.8s ease-out;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .team-card {
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .social-links {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        
        .team-card:hover .social-links {
          opacity: 1;
          transform: translateY(0);
        }
        
        .milestone-item {
          position: relative;
          padding-left: 2rem;
        }
        
        .milestone-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 50%;
        }
        
        .milestone-item::after {
          content: '';
          position: absolute;
          left: 5px;
          top: 1.25rem;
          width: 2px;
          height: calc(100% + 1rem);
          background: #e5e7eb;
        }
        
        .milestone-item:last-child::after {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-6xl font-bold text-gray-900 mb-6 fade-in`}>
            About Us
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto fade-in`} style={{ transitionDelay: '0.2s' }}>
            We are a forward-thinking company dedicated to creating innovative solutions that drive meaningful change and deliver exceptional value to our clients worldwide.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <i className="fas fa-compass text-4xl text-blue-600 mb-6"></i>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Our mission is to empower businesses through innovative technology solutions that transform challenges into opportunities for sustainable growth.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that every challenge presents an opportunity for innovation. Our dedicated team works tirelessly to understand your unique needs and deliver solutions that not only meet your current requirements but also position you for future success in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg text-center hover-lift cursor-pointer ${
                  hoveredValue === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="mb-6">
                  <i className={`${value.icon} text-4xl text-blue-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience and a passion for innovation to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`team-card bg-white rounded-lg p-6 text-center cursor-pointer ${
                  hoveredTeam === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHoveredTeam(index)}
                onMouseLeave={() => setHoveredTeam(null)}
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="social-links flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <i className={`fab fa-${platform} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018 with a vision to bridge the gap between complex technology and elegant user experiences, InnovateCorp has grown from a small startup to a globally recognized leader in digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began when our founders recognized the need for technology solutions that truly understand and serve human needs. Today, we continue to push boundaries and set new standards for innovation in our industry.
              </p>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="milestone-item">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-16">
                        <span className="text-blue-600 font-bold text-lg">{milestone.year}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{milestone.title}</h4>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=modern%20office%20building%20with%20glass%20facade%20and%20innovative%20architecture%20representing%20growth%20and%20success%20in%20business%20technology%20company%20headquarters%20with%20clean%20contemporary%20design&width=600&height=400&seq=story1&orientation=landscape"
                alt="Company headquarters"
                className="rounded-lg shadow-lg w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-12 text-blue-100">
            Ready to start your next project? We would love to hear from you and discuss how we can help bring your vision to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <i className="fas fa-envelope text-3xl mb-4 text-blue-200"></i>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">hello@innovatecorp.com</p>
            </div>
            <div className="text-center">
              <i className="fas fa-phone text-3xl mb-4 text-blue-200"></i>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <i className="fas fa-map-marker-alt text-3xl mb-4 text-blue-200"></i>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100">123 Innovation Drive<br />San Francisco, CA 94105</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
              <i className="fab fa-dribbble text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
