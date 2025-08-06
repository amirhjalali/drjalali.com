'use client';

import React, { useState, useMemo } from 'react';
import Card from './Card';
import { CardGrid } from './GridLayout';
import { SlideUp, FadeIn } from './ScrollAnimation';
import { SectionAnchor, FlowIndicator } from './SectionDivider';
import { SectionCTA } from './StickyActions';

interface Publication {
  title: string;
  type: string;
  publisher: string;
  year: string;
  description: string;
  category: string;
  link?: string;
}

export default function Research() {
  const researchAreas = [
    {
      title: "Internet of Things (IoT)",
      description: "Pioneer in IoT research and applications, focusing on smart systems and connected devices for industrial and consumer applications.",
      technologies: ["Smart Sensors", "IoT Protocols", "Edge Computing", "Industrial IoT"],
      icon: "🌐"
    },
    {
      title: "Control Systems",
      description: "Advanced research in control theory and applications, including reduced-order systems and optimal control strategies.",
      technologies: ["Optimal Control", "Reduced-Order Systems", "Adaptive Control", "Robust Control"],
      icon: "⚙️"
    },
    {
      title: "Information & Communication Technology",
      description: "Leading research in ICT development, particularly in expanding internet infrastructure and digital transformation.",
      technologies: ["Network Infrastructure", "Digital Systems", "Communication Protocols", "ICT Policy"],
      icon: "📡"
    },
    {
      title: "3D Printing Technology",
      description: "Research in additive manufacturing technologies and their applications in engineering and industrial processes.",
      technologies: ["Additive Manufacturing", "Materials Science", "Process Optimization", "Industrial Applications"],
      icon: "🖨️"
    }
  ]

  // Search and pagination state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const allPublications = useMemo<Publication[]>(() => [
    // Books
    {
      title: "Reduced Order Systems",
      type: "Book",
      publisher: "Springer (Lecture Notes in Control and Information Sciences, Vol. 343)",
      year: "2006",
      description: "Reference book in advanced control systems theory with potential applications for space exploration. Widely cited in the field of control engineering.",
      category: "Control Systems",
      link: "https://www.amazon.com/Reduced-Systems-Lecture-Information-Sciences/dp/354034358X"
    },
    {
      title: "Electronic Cities",
      type: "Book",
      publisher: "Iran University of Science and Technology",
      year: "2005",
      description: "Comprehensive guide to electronic city development and implementation, covering infrastructure and management.",
      category: "ICT Development",
      link: "https://scholar.google.com/scholar?q=Electronic+Cities+Jalali+2005+IUST"
    },
    {
      title: "Electronic Village",
      type: "Book",
      publisher: "Iran University of Science and Technology",
      year: "2004",
      description: "Focus on rural ICT development and bridging the digital divide in remote communities.",
      category: "ICT Development",
      link: "https://scholar.google.com/scholar?q=Electronic+Village+Jalali+2004+IUST"
    },
    {
      title: "Application Service Provider (ASP)",
      type: "Book",
      publisher: "Tadbir Co., IUST",
      year: "2002",
      description: "Comprehensive coverage of ASP technologies and their implementation in enterprise environments.",
      category: "Information Technology"
    },
    {
      title: "E-Learning Dictionary",
      type: "Book",
      publisher: "Ministry of Education (Contract)",
      year: "2003",
      description: "Persian-based educational technology reference guide for e-learning terminology and concepts.",
      category: "Educational Technology"
    },
    
    // Translated Works
    {
      title: "Programmable Logic Controller (PLC)",
      type: "Translated Book",
      publisher: "Iran University of Science and Technology",
      year: "2000",
      description: "Translation of comprehensive PLC programming and industrial automation guide.",
      category: "Control Systems"
    },
    {
      title: "Contemporary Linear Systems, Using MATLAB (CLS)",
      type: "Translated Book",
      publisher: "Iran University of Science and Technology",
      year: "2001",
      description: "Translation covering modern linear systems analysis and design using MATLAB.",
      category: "Control Systems"
    },

    // Journal Articles - Control Systems
    {
      title: "Reduced order H∞ controller design for an industrial boiler system",
      type: "Journal Article",
      publisher: "IEEE Transactions on Control Systems Technology",
      year: "2008",
      description: "Application of reduced order H-infinity control methodology to industrial boiler systems for improved performance.",
      category: "Control Systems",
      link: "https://ieeexplore.ieee.org/document/4358772"
    },
    {
      title: "The reduced-order method for feedback stabilization",
      type: "Journal Article",
      publisher: "International Journal of Control",
      year: "2007",
      description: "Theoretical framework for reduced-order feedback control design with stability guarantees.",
      category: "Control Systems",
      link: "https://www.tandfonline.com/doi/abs/10.1080/00207170701216311"
    },
    {
      title: "H∞ control problem for descriptor systems",
      type: "Journal Article",
      publisher: "Automatica",
      year: "2009",
      description: "Advanced control theory addressing H-infinity control problems in descriptor systems.",
      category: "Control Systems",
      link: "https://www.sciencedirect.com/science/article/pii/S0005109809000892"
    },
    {
      title: "Optimal reduced-order control for nonstandard singularly perturbed systems",
      type: "Journal Article",
      publisher: "IEEE Transactions on Automatic Control",
      year: "2010",
      description: "Optimal control design methodology for complex singularly perturbed systems using reduced-order techniques.",
      category: "Control Systems",
      link: "https://ieeexplore.ieee.org/document/5409087"
    },
    {
      title: "Stability of Reduced-Order Adaptive Control Systems",
      type: "Journal Article",
      publisher: "IEEE Transactions on Automatic Control",
      year: "2011",
      description: "Analysis of stability properties in adaptive control systems using reduced-order modeling approaches.",
      category: "Control Systems",
      link: "https://ieeexplore.ieee.org/document/5740998"
    },

    // IoT and ICT Publications
    {
      title: "SDN-IoT Controller Placement: A Security-Based Approach",
      type: "Journal Article",
      publisher: "Journal of Information Security and Applications",
      year: "2019",
      description: "Novel approach to IoT controller placement in software-defined networks with enhanced security considerations.",
      category: "Internet of Things",
      link: "https://www.sciencedirect.com/science/article/pii/S2214212619301213"
    },
    {
      title: "Fog computing applications in smart cities: A systematic survey",
      type: "Journal Article",
      publisher: "Wireless Networks",
      year: "2020",
      description: "Comprehensive survey of fog computing applications and their integration in smart city infrastructures.",
      category: "Internet of Things",
      link: "https://link.springer.com/article/10.1007/s11276-019-02208-y"
    },
    {
      title: "Resource allocation and task offloading for multi-access edge computing by deep reinforcement learning based on SDN",
      type: "Journal Article",
      publisher: "IEEE Access",
      year: "2021",
      description: "Advanced resource allocation strategies for edge computing using deep reinforcement learning and SDN.",
      category: "Internet of Things",
      link: "https://ieeexplore.ieee.org/document/9420168"
    },

    // Conference Papers
    {
      title: "Low-Order L1 Optimal Control Design via LMI",
      type: "Conference Paper",
      publisher: "IEEE International Symposium on Intelligent Signal Processing",
      year: "2007",
      description: "Linear matrix inequality approach to low-order L1 optimal control system design.",
      category: "Control Systems",
      link: "https://ieeexplore.ieee.org/document/4447104"
    },
    {
      title: "Challenges to E-learning in higher learning institutions in Iran",
      type: "Conference Paper",
      publisher: "4th National and 1st International Conference on E-Learning",
      year: "2009",
      description: "Analysis of barriers and solutions for e-learning implementation in Iranian higher education.",
      category: "Educational Technology"
    },
    {
      title: "Analysis of Irancell's marketing strategies using system dynamics",
      type: "Conference Paper",
      publisher: "6th International Conference on ICT Management",
      year: "2009",
      description: "System dynamics modeling applied to telecommunications marketing strategy analysis.",
      category: "ICT Management"
    },
    {
      title: "Enhancing patient capabilities through e-learning in hospitals",
      type: "Conference Paper",
      publisher: "6th International Conference on ICT Management",
      year: "2009",
      description: "Implementation of e-learning systems in healthcare environments for patient education.",
      category: "Healthcare ICT"
    },
    {
      title: "Quality evaluation of government organization websites: Mazandaran Province case study",
      type: "Conference Paper",
      publisher: "6th International Conference on ICT Management",
      year: "2009",
      description: "Assessment methodology for government website quality with practical case study implementation.",
      category: "Government ICT"
    },
    {
      title: "Knowledge Management 2: Linking Knowledge Management 1 and Web 2",
      type: "Conference Paper",
      publisher: "6th International Conference on ICT Management",
      year: "2009",
      description: "Integration of traditional knowledge management systems with Web 2.0 technologies.",
      category: "Knowledge Management"
    },
    {
      title: "Nonlinear predictive control stabilizer for continuous-time systems and its numerical solution",
      type: "Conference Paper",
      publisher: "2nd National Conference on Electrical Engineering",
      year: "2009",
      description: "Advanced nonlinear predictive control algorithm with numerical implementation for continuous-time systems.",
      category: "Control Systems"
    },
    {
      title: "Optimal 2-DOF Fractional l μ PI D controllers for Time Delay Systems Based on Genetic Algorithm",
      type: "Conference Paper",
      publisher: "2nd National Conference on Electrical Engineering",
      year: "2009",
      description: "Genetic algorithm optimization of fractional PID controllers for time-delay systems.",
      category: "Control Systems"
    },

    // Theses
    {
      title: "Filtering, Smoothing and Deconvolution in a Discrete H-infinity Setting; A Game Theory Approach",
      type: "PhD Dissertation",
      publisher: "West Virginia University",
      year: "1993",
      description: "Doctoral research on advanced filtering techniques using game theory approach in H-infinity framework.",
      category: "Control Theory"
    },
    {
      title: "An Algorithm For Signal Flow Graph Representation of Digital Filters",
      type: "MS Thesis",
      publisher: "University of Oklahoma",
      year: "1988",
      description: "Master's thesis developing algorithms for signal flow graph representation in digital filter design.",
      category: "Digital Signal Processing"
    }
  ], []);

  // Get unique categories for filter
  const categories = ['', ...new Set(allPublications.map(pub => pub.category))].sort();

  // Filter and search publications
  const filteredPublications = useMemo(() => {
    return allPublications.filter(pub => {
      const matchesSearch = searchTerm === '' || 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || pub.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [allPublications, searchTerm, selectedCategory]);

  // Paginate results
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const paginatedPublications = filteredPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <section id="research" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <SectionAnchor
            title="Research & Publications"
            subtitle="Pioneering research in control systems, IoT, and information technology with global impact"
          />
        </SlideUp>

        {/* Research Areas */}
        <div className="mb-20">
          <SlideUp>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Research Areas</h2>
          </SlideUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {researchAreas.map((area, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card 
                  variant="glass" 
                  hover="lift" 
                  interactive={true}
                  className="group"
                >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">{area.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{area.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-neutral-300 mb-4 leading-relaxed">{area.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200 mb-2">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-16" id="publications">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Publications ({allPublications.length} total)</h3>
          
          {/* Search and Filter Controls */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search publications by title, description, or publisher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                />
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Results Info */}
            <div className="text-sm text-gray-600 dark:text-neutral-400 text-center">
              Showing {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''}
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory && ` in ${selectedCategory}`}
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6 mb-8">
            {paginatedPublications.map((pub, index) => (
              <Card 
                key={`${pub.title}-${index}`} 
                variant="elevated" 
                hover="lift" 
                interactive={true}
                className="group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-neutral-100 mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{pub.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-neutral-400 mb-2">
                      <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs border border-primary-200 dark:border-primary-700">
                        {pub.type}
                      </span>
                      <span className="bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs border border-gray-200 dark:border-neutral-600">
                        {pub.year}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-neutral-500">{pub.publisher}</span>
                    </div>
                  </div>
                  <span className="mt-2 lg:mt-0 flex-shrink-0 inline-block bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded text-sm border border-secondary-200 dark:border-secondary-700">
                    {pub.category}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">{pub.description}</p>
                {pub.link && (
                  <div className="mt-3">
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                    >
                      <span>
                        {pub.link.includes('amazon') ? 'View on Amazon' : 
                         pub.link.includes('scholar.google') ? 'Search on Google Scholar' :
                         pub.link.includes('ieee') ? 'View on IEEE Xplore' :
                         pub.link.includes('springer') ? 'View on Springer' :
                         pub.link.includes('sciencedirect') ? 'View on ScienceDirect' :
                         pub.link.includes('tandfonline') ? 'View on Taylor & Francis' :
                         'View Publication'}
                      </span>
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 rounded-lg text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                        currentPage === pageNum
                          ? 'bg-primary-600 text-white'
                          : 'bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 rounded-lg text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-neutral-400 mb-4">
                <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33.04-.66.14-1.32.3-1.96.46-1.83 1.32-3.49 2.46-4.76A7.962 7.962 0 0112 5c2.34 0 4.47.881 6.08 2.33A7.963 7.963 0 0120 12a7.96 7.96 0 01-.92 3.709zM16 17.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v1z" />
                </svg>
                <p className="text-lg font-medium">No publications found</p>
                <p className="text-sm">Try adjusting your search terms or category filter</p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Research Impact */}
        <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-lg border border-primary-100 dark:border-primary-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Research Impact & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => {
                const element = document.getElementById('publications');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">300+</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Research Papers</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('publications');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Books & Chapters</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('academic');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Years of Research</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">Pioneer</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">IT in Iran</p>
            </button>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">🌐</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">IoT Expert</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Control Systems</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">📡</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">ICT Development</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">🖨️</div>
              <p className="text-gray-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">3D Printing</p>
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-neutral-300 italic">
              &ldquo;Recognized as the Father of Information Technology in Iran for pioneering work in internet infrastructure and digital transformation.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}