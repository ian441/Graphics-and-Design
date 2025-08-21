import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'branding', label: 'Branding' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'print-design', label: 'Print Design' }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'Luxury Fashion Brand Identity',
      category: 'branding',
      categoryLabel: 'Branding',
      client: 'Elegance Boutique',
      duration: '3 months',
      image: 'https://www.halo-media.com/wp-content/uploads/2023/09/luxury-branding-fashion-design-empiro2.jpg',
      description: 'Complete brand identity redesign for a luxury fashion boutique, including logo design, brand guidelines, and marketing materials.',
      challenge: 'The client needed a sophisticated brand identity that would appeal to high-end customers while maintaining accessibility.',
      solution: 'We created an elegant, minimalist design system with premium typography and a refined color palette that reflects luxury and sophistication.',
      results: 'Brand recognition increased by 85% and customer engagement improved by 120% within the first quarter after launch.',
      process: [
        'Brand research and competitor analysis',
        'Concept development and sketching',
        'Digital design and refinement',
        'Brand guidelines creation',
        'Implementation across all touchpoints'
      ]
    },
    {
      id: 2,
      title: 'Tech Startup Website Design',
      category: 'web-design',
      categoryLabel: 'Web Design',
      client: 'InnovateTech Solutions',
      duration: '6 weeks',
      image: 'https://www.digitalsilk.com/wp-content/uploads/2022/09/best-tech-websites-hero-image.jpg',
      description: 'Responsive website design and development for a technology startup focusing on user experience and conversion optimization.',
      challenge: 'Creating a website that effectively communicates complex technical concepts while maintaining user engagement.',
      solution: 'We designed an intuitive interface with clear navigation, interactive elements, and compelling visual storytelling.',
      results: 'Website conversion rate increased by 65% and bounce rate decreased by 40% compared to the previous site.',
      process: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Development and testing',
        'Launch and optimization'
      ]
    },
    {
      id: 3,
      title: 'Social Media Campaign Design',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing',
      client: 'FitLife Wellness',
      duration: '2 months',
      image: 'https://www.the-escape.co.uk/application/files/cache/thumbnails/2075c3994bf8d2bf04debb980bd4caad.jpg',
      description: 'Comprehensive social media campaign design for a wellness brand, including content strategy and visual assets.',
      challenge: 'Standing out in the crowded wellness market while building authentic community engagement.',
      solution: 'We developed a vibrant, motivational visual language with consistent branding across all social platforms.',
      results: 'Social media following grew by 300% and engagement rates increased by 150% during the campaign period.',
      process: [
        'Audience analysis and strategy',
        'Content planning and calendar',
        'Visual asset creation',
        'Campaign execution',
        'Performance monitoring and optimization'
      ]
    },
    {
      id: 4,
      title: 'Corporate Annual Report',
      category: 'print-design',
      categoryLabel: 'Print Design',
      client: 'Global Finance Corp',
      duration: '4 weeks',
      image: 'https://elements-resized.envatousercontent.com/elements-cover-images/acc9b3e7-ddeb-4de4-8dd9-06bd8e7094aa?w=433&cf_fit=scale-down&q=85&format=auto&s=e26e77812a1bd983359b13959c0c3c9915c52317d99790e13c3d7f5dd3056598',
      description: 'Design and layout of a comprehensive annual report for a major financial corporation.',
      challenge: 'Presenting complex financial data in an engaging and accessible format for stakeholders.',
      solution: 'We created a clean, professional design with clear data visualization and strategic use of white space.',
      results: 'The report received industry recognition and improved stakeholder satisfaction scores by 45%.',
      process: [
        'Content analysis and structure',
        'Information design and hierarchy',
        'Visual design and layout',
        'Print production management',
        'Quality assurance and delivery'
      ]
    },
    {
      id: 5,
      title: 'Restaurant Brand Redesign',
      category: 'branding',
      categoryLabel: 'Branding',
      client: 'Artisan Kitchen',
      duration: '8 weeks',
      image: 'https://nice-branding.com/wp-content/uploads/2022/06/restaurant-branding-agency-nashville.jpg',
      description: 'Complete brand overhaul for an upscale restaurant, including logo, menu design, and interior branding elements.',
      challenge: 'Creating a brand that reflects the restaurant\'s artisanal approach while appealing to a broad customer base.',
      solution: 'We developed a warm, inviting brand identity with hand-crafted elements and earthy color palette.',
      results: 'Customer satisfaction increased by 55% and the restaurant saw a 40% increase in repeat customers.',
      process: [
        'Brand audit and positioning',
        'Creative concept development',
        'Logo and identity design',
        'Menu and collateral design',
        'Environmental branding implementation'
      ]
    },
    {
      id: 6,
      title: 'E-commerce Platform Design',
      category: 'web-design',
      categoryLabel: 'Web Design',
      client: 'StyleHub Online',
      duration: '10 weeks',
      image: 'https://www.figma.com/community/resource/cd5d69fb-1006-48cf-8f6c-d5855e851d46/thumbnail',
      description: 'User-centered design for a fashion e-commerce platform with focus on conversion optimization and mobile experience.',
      challenge: 'Creating an intuitive shopping experience that works seamlessly across all devices and drives sales.',
      solution: 'We designed a streamlined checkout process with enhanced product visualization and personalized recommendations.',
      results: 'Online sales increased by 180% and mobile conversion rates improved by 95% after the redesign.',
      process: [
        'User journey mapping',
        'Competitive analysis',
        'UX/UI design and prototyping',
        'A/B testing and optimization',
        'Development collaboration'
      ]
    },
    {
      id: 7,
      title: 'Digital Marketing Campaign',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing',
      client: 'EcoGreen Products',
      duration: '3 months',
      image: 'https://cdn.prod.website-files.com/64ae459829d7e0cb535bc24c/677c9d04367b4e10c2176bce_opalstone_card-marketingdesign.jpg',
      description: 'Integrated digital marketing campaign for an eco-friendly product line, spanning multiple channels and platforms.',
      challenge: 'Communicating sustainability values while driving product awareness and sales in a competitive market.',
      solution: 'We created an authentic, nature-inspired campaign that highlighted environmental benefits and brand values.',
      results: 'Brand awareness increased by 220% and product sales grew by 160% during the campaign period.',
      process: [
        'Market research and positioning',
        'Multi-channel strategy development',
        'Creative asset production',
        'Campaign launch and management',
        'Performance analysis and optimization'
      ]
    },
    {
      id: 8,
      title: 'Magazine Layout Design',
      category: 'print-design',
      categoryLabel: 'Print Design',
      client: 'Modern Architecture Quarterly',
      duration: '6 weeks',
      image: 'https://www.unsell.design/wp-content/uploads/2021/08/9fdd3fcb-featured-image.jpg',
      description: 'Editorial design for a quarterly architecture magazine, focusing on typography and visual storytelling.',
      challenge: 'Balancing stunning architectural photography with readable text layouts and consistent design system.',
      solution: 'We developed a flexible grid system that showcases photography while maintaining excellent readability.',
      results: 'Magazine subscription rates increased by 75% and won two design awards for editorial excellence.',
      process: [
        'Editorial style guide development',
        'Grid system and layout templates',
        'Typography and color system',
        'Production workflow optimization',
        'Print quality management'
      ]
    },
    {
      id: 9,
      title: 'Healthcare App Interface',
      category: 'web-design',
      categoryLabel: 'Web Design',
      client: 'MedConnect Solutions',
      duration: '12 weeks',
      image: 'https://cdn.dribbble.com/userupload/11712101/file/original-8325640f824b29ea86b0529dea15ae0d.jpg?resize=400x0',
      description: 'Mobile app interface design for a healthcare management platform, prioritizing accessibility and user safety.',
      challenge: 'Creating an interface that healthcare professionals can use efficiently while maintaining patient data security.',
      solution: 'We designed an intuitive, accessible interface with clear information hierarchy and safety-first interactions.',
      results: 'User satisfaction scores reached 94% and task completion rates improved by 85% compared to the previous version.',
      process: [
        'Healthcare workflow analysis',
        'Accessibility compliance research',
        'Prototyping and user testing',
        'Interface design and refinement',
        'Development support and QA'
      ]
    },
    {
      id: 10,
      title: 'Startup Brand Launch',
      category: 'branding',
      categoryLabel: 'Branding',
      client: 'NextGen Robotics',
      duration: '5 months',
      image: 'https://img.freepik.com/premium-vector/startup-abstract-arrow-technology-innovation-data-up-icon-logo-design-with-business-card-template_216988-538.jpg', 
      description: 'Complete brand development for a robotics startup, from naming to full visual identity and market positioning.',
      challenge: 'Establishing credibility in the competitive robotics industry while appealing to both B2B and consumer markets.',
      solution: 'We created a forward-thinking brand identity that balances technical expertise with approachable design.',
      results: 'Successfully secured Series A funding and achieved 95% brand recognition among target investors.',
      process: [
        'Brand strategy and positioning',
        'Name development and trademark',
        'Visual identity creation',
        'Brand guidelines and system',
        'Launch campaign execution'
      ]
    },
    {
      id: 11,
      title: 'Event Marketing Materials',
      category: 'print-design',
      categoryLabel: 'Print Design',
      client: 'Innovation Summit 2024',
      duration: '4 weeks',
      image: 'https://stocklayouts.com/images/blog/dj-brochures-flyers-posters-marketing-disc-jockeys.jpg',
      description: 'Comprehensive print marketing campaign for a major technology conference, including signage and promotional materials.',
      challenge: 'Creating cohesive materials that work across various formats while maintaining brand consistency and impact.',
      solution: 'We developed a modular design system that adapts seamlessly from business cards to large-format banners.',
      results: 'Conference attendance increased by 45% compared to the previous year, with 90% of attendees recognizing the brand.',
      process: [
        'Event branding strategy',
        'Design system development',
        'Multi-format adaptation',
        'Print production coordination',
        'On-site implementation support'
      ]
    },
    {
      id: 12,
      title: 'Influencer Campaign Design',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing',
      client: 'Beauty Essentials Co.',
      duration: '6 weeks',
      image: 'https://media.bazaarvoice.com/Shutterstock_2310810379.png', 
      description: 'Influencer marketing campaign design for a beauty brand, including content templates and brand partnership materials.',
      challenge: 'Creating flexible design assets that maintain brand consistency across different influencer styles and platforms.',
      solution: 'We developed a comprehensive toolkit with customizable templates that preserve brand identity while allowing creative freedom.',
      results: 'Campaign reached 2.5 million people with 8.5% engagement rate and generated 40% increase in product sales.',
      process: [
        'Influencer research and selection',
        'Brand guideline adaptation',
        'Content template creation',
        'Campaign asset production',
        'Performance tracking and optimization'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const relatedProjects = portfolioProjects
    .filter(p => p.id !== selectedProject?.id && p.category === selectedProject?.category)
    .slice(0, 3);

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Portfolio Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of creative projects that showcase our expertise in branding, web design, digital marketing, and print design. Each project tells a unique story of collaboration and innovation.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveFilter(category.id);
                  setVisibleProjects(9);
                }}
                className={`rounded-lg whitespace-nowrap px-6 py-3 text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="!rounded-button whitespace-nowrap bg-white text-gray-900 px-6 py-3 font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="!rounded-button whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold hover:shadow-lg transition-all cursor-pointer"
              >
                Load More Projects
              </button>
              <p className="text-gray-500 text-sm mt-4">
                Showing {displayedProjects.length} of {filteredProjects.length} projects
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover object-top rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              >
                <i className="fas fa-times text-gray-700"></i>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.categoryLabel}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Client</h4>
                    <p className="text-gray-600">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Category</h4>
                    <p className="text-gray-600">{selectedProject.categoryLabel}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results Achieved</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProject.results}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.process.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {relatedProjects.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Projects</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedProjects.map((project) => (
                      <div 
                        key={project.id} 
                        className="cursor-pointer group"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-32 object-cover object-top rounded-lg mb-2 group-hover:opacity-80 transition-opacity"
                        />
                        <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg whitespace-nowrap border-2 border-gray-300 text-gray-700 px-6 py-3 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  <span>+254 (555) 123-4567</span>
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

export default Portfolio;
