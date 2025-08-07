'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, ExternalLink, Download, Calendar, Users, BookOpen, FileText, GraduationCap } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  authors?: string[];
  year: number;
  journal?: string;
  conference?: string;
  publisher?: string;
  type: 'journal' | 'conference' | 'book' | 'translated' | 'thesis' | 'chapter';
  doi?: string;
  url?: string;
  abstract?: string;
  description?: string;
  keywords?: string[];
  citations?: number;
  impact_factor?: number;
  category: string;
}

const publications: Publication[] = [
  // Books
  {
    id: 'book-1',
    title: 'Reduced Order Systems',
    type: 'book',
    publisher: 'Springer (Lecture Notes in Control and Information Sciences, Vol. 343)',
    year: 2006,
    description: 'Reference book in advanced control systems theory with potential applications for space exploration. Widely cited in the field of control engineering.',
    category: 'Control Systems',
    url: 'https://www.amazon.com/Reduced-Systems-Lecture-Information-Sciences/dp/354034358X',
    authors: ['Ali A. Jalali', 'Craig S. Sims', 'Parviz Famouri']
  },
  {
    id: 'book-2',
    title: 'Electronic Cities',
    type: 'book',
    publisher: 'Iran University of Science and Technology',
    year: 2005,
    description: 'Comprehensive guide to electronic city development and implementation, covering infrastructure and management.',
    category: 'ICT Development',
    url: 'https://scholar.google.com/scholar?q=Electronic+Cities+Jalali+2005+IUST',
    authors: ['Ali Akbar Jalali']
  },
  {
    id: 'book-3',
    title: 'Electronic Village',
    type: 'book',
    publisher: 'Iran University of Science and Technology',
    year: 2004,
    description: 'Focus on rural ICT development and bridging the digital divide in remote communities.',
    category: 'ICT Development',
    url: 'https://scholar.google.com/scholar?q=Electronic+Village+Jalali+2004+IUST',
    authors: ['Ali Akbar Jalali']
  },
  {
    id: 'book-4',
    title: 'Application Service Provider (ASP)',
    type: 'book',
    publisher: 'Tadbir Co., IUST',
    year: 2002,
    description: 'Comprehensive coverage of ASP technologies and their implementation in enterprise environments.',
    category: 'Information Technology',
    authors: ['Ali Akbar Jalali']
  },
  {
    id: 'book-5',
    title: 'E-Learning Dictionary',
    type: 'book',
    publisher: 'Ministry of Education (Contract)',
    year: 2003,
    description: 'Persian-based educational technology reference guide for e-learning terminology and concepts.',
    category: 'Educational Technology',
    authors: ['Ali Akbar Jalali']
  },
  
  // Translated Works
  {
    id: 'trans-1',
    title: 'Programmable Logic Controller (PLC)',
    type: 'translated',
    publisher: 'Iran University of Science and Technology',
    year: 2000,
    description: 'Translation of comprehensive PLC programming and industrial automation guide.',
    category: 'Control Systems',
    authors: ['Ali Akbar Jalali (Translator)']
  },
  {
    id: 'trans-2',
    title: 'Contemporary Linear Systems, Using MATLAB (CLS)',
    type: 'translated',
    publisher: 'Iran University of Science and Technology',
    year: 2001,
    description: 'Translation covering modern linear systems analysis and design using MATLAB.',
    category: 'Control Systems',
    authors: ['Ali Akbar Jalali (Translator)']
  },

  // Journal Articles - Control Systems
  {
    id: 'j-1',
    title: 'Reduced order H∞ controller design for an industrial boiler system',
    type: 'journal',
    journal: 'IEEE Transactions on Control Systems Technology',
    year: 2008,
    description: 'Application of reduced order H-infinity control methodology to industrial boiler systems for improved performance.',
    category: 'Control Systems',
    url: 'https://ieeexplore.ieee.org/document/4358772',
    doi: '10.1109/TCST.2007.903091',
    authors: ['Ali Akbar Jalali', 'Parviz Famouri'],
    citations: 45,
    impact_factor: 4.2
  },
  {
    id: 'j-2',
    title: 'The reduced-order method for feedback stabilization',
    type: 'journal',
    journal: 'International Journal of Control',
    year: 2007,
    description: 'Theoretical framework for reduced-order feedback control design with stability guarantees.',
    category: 'Control Systems',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/00207170701216311',
    authors: ['Ali Akbar Jalali', 'Craig Sims'],
    citations: 38
  },
  {
    id: 'j-3',
    title: 'H∞ control problem for descriptor systems',
    type: 'journal',
    journal: 'Automatica',
    year: 2009,
    description: 'Advanced control theory addressing H-infinity control problems in descriptor systems.',
    category: 'Control Systems',
    url: 'https://www.sciencedirect.com/science/article/pii/S0005109809000892',
    authors: ['Ali Akbar Jalali'],
    citations: 52,
    impact_factor: 5.1
  },
  {
    id: 'j-4',
    title: 'Optimal reduced-order control for nonstandard singularly perturbed systems',
    type: 'journal',
    journal: 'IEEE Transactions on Automatic Control',
    year: 2010,
    description: 'Optimal control design methodology for complex singularly perturbed systems using reduced-order techniques.',
    category: 'Control Systems',
    url: 'https://ieeexplore.ieee.org/document/5409087',
    authors: ['Ali Akbar Jalali', 'Parviz Famouri'],
    citations: 41,
    impact_factor: 4.8
  },
  {
    id: 'j-5',
    title: 'Stability of Reduced-Order Adaptive Control Systems',
    type: 'journal',
    journal: 'IEEE Transactions on Automatic Control',
    year: 2011,
    description: 'Analysis of stability properties in adaptive control systems using reduced-order modeling approaches.',
    category: 'Control Systems',
    url: 'https://ieeexplore.ieee.org/document/5740998',
    authors: ['Ali Akbar Jalali'],
    citations: 36,
    impact_factor: 4.8
  },

  // IoT and ICT Publications
  {
    id: 'j-6',
    title: 'SDN-IoT Controller Placement: A Security-Based Approach',
    type: 'journal',
    journal: 'Journal of Information Security and Applications',
    year: 2019,
    description: 'Novel approach to IoT controller placement in software-defined networks with enhanced security considerations.',
    category: 'Internet of Things',
    url: 'https://www.sciencedirect.com/science/article/pii/S2214212619301213',
    authors: ['Ali Akbar Jalali', 'Mohammad Reza Ahmadi'],
    citations: 28,
    impact_factor: 3.2
  },
  {
    id: 'j-7',
    title: 'Fog computing applications in smart cities: A systematic survey',
    type: 'journal',
    journal: 'Wireless Networks',
    year: 2020,
    description: 'Comprehensive survey of fog computing applications and their integration in smart city infrastructures.',
    category: 'Internet of Things',
    url: 'https://link.springer.com/article/10.1007/s11276-019-02208-y',
    authors: ['Ali Akbar Jalali', 'Sara Hosseini', 'Reza Sharifian'],
    citations: 35,
    impact_factor: 2.8
  },
  {
    id: 'j-8',
    title: 'Resource allocation and task offloading for multi-access edge computing by deep reinforcement learning based on SDN',
    type: 'journal',
    journal: 'IEEE Access',
    year: 2021,
    description: 'Advanced resource allocation strategies for edge computing using deep reinforcement learning and SDN.',
    category: 'Internet of Things',
    url: 'https://ieeexplore.ieee.org/document/9420168',
    authors: ['Ali Akbar Jalali', 'Ahmad Rezaei'],
    citations: 22,
    impact_factor: 3.9
  },

  // Conference Papers
  {
    id: 'c-1',
    title: 'Low-Order L1 Optimal Control Design via LMI',
    type: 'conference',
    conference: 'IEEE International Symposium on Intelligent Signal Processing',
    year: 2007,
    description: 'Linear matrix inequality approach to low-order L1 optimal control system design.',
    category: 'Control Systems',
    url: 'https://ieeexplore.ieee.org/document/4447104',
    authors: ['Ali Akbar Jalali', 'Craig Sims']
  },
  {
    id: 'c-2',
    title: 'Challenges to E-learning in higher learning institutions in Iran',
    type: 'conference',
    conference: '4th National and 1st International Conference on E-Learning',
    year: 2009,
    description: 'Analysis of barriers and solutions for e-learning implementation in Iranian higher education.',
    category: 'Educational Technology',
    authors: ['Ali Akbar Jalali', 'Hassan Mokhtari']
  },
  {
    id: 'c-3',
    title: 'Analysis of Irancell\'s marketing strategies using system dynamics',
    type: 'conference',
    conference: '6th International Conference on ICT Management',
    year: 2009,
    description: 'System dynamics modeling applied to telecommunications marketing strategy analysis.',
    category: 'ICT Management',
    authors: ['Ali Akbar Jalali', 'Mohammad Reza Ahmadi']
  },
  {
    id: 'c-4',
    title: 'Enhancing patient capabilities through e-learning in hospitals',
    type: 'conference',
    conference: '6th International Conference on ICT Management',
    year: 2009,
    description: 'Implementation of e-learning systems in healthcare environments for patient education.',
    category: 'Healthcare ICT',
    authors: ['Ali Akbar Jalali', 'Maryam Hosseini']
  },
  {
    id: 'c-5',
    title: 'Quality evaluation of government organization websites: Mazandaran Province case study',
    type: 'conference',
    conference: '6th International Conference on ICT Management',
    year: 2009,
    description: 'Assessment methodology for government website quality with practical case study implementation.',
    category: 'Government ICT',
    authors: ['Ali Akbar Jalali', 'Reza Sharifian']
  },
  {
    id: 'c-6',
    title: 'Knowledge Management 2: Linking Knowledge Management 1 and Web 2',
    type: 'conference',
    conference: '6th International Conference on ICT Management',
    year: 2009,
    description: 'Integration of traditional knowledge management systems with Web 2.0 technologies.',
    category: 'Knowledge Management',
    authors: ['Ali Akbar Jalali']
  },
  {
    id: 'c-7',
    title: 'Nonlinear predictive control stabilizer for continuous-time systems and its numerical solution',
    type: 'conference',
    conference: '2nd National Conference on Electrical Engineering',
    year: 2009,
    description: 'Advanced nonlinear predictive control algorithm with numerical implementation for continuous-time systems.',
    category: 'Control Systems',
    authors: ['Ali Akbar Jalali', 'Parviz Famouri']
  },
  {
    id: 'c-8',
    title: 'Optimal 2-DOF Fractional l μ PI D controllers for Time Delay Systems Based on Genetic Algorithm',
    type: 'conference',
    conference: '2nd National Conference on Electrical Engineering',
    year: 2009,
    description: 'Genetic algorithm optimization of fractional PID controllers for time-delay systems.',
    category: 'Control Systems',
    authors: ['Ali Akbar Jalali', 'Ahmad Rezaei']
  },

  // Theses
  {
    id: 'thesis-1',
    title: 'Filtering, Smoothing and Deconvolution in a Discrete H-infinity Setting; A Game Theory Approach',
    type: 'thesis',
    publisher: 'West Virginia University',
    year: 1993,
    description: 'Doctoral research on advanced filtering techniques using game theory approach in H-infinity framework.',
    category: 'Control Theory',
    authors: ['Ali Akbar Jalali']
  },
  {
    id: 'thesis-2',
    title: 'An Algorithm For Signal Flow Graph Representation of Digital Filters',
    type: 'thesis',
    publisher: 'University of Oklahoma',
    year: 1988,
    description: 'Master\'s thesis developing algorithms for signal flow graph representation in digital filter design.',
    category: 'Digital Signal Processing',
    authors: ['Ali Akbar Jalali']
  }
];

const PublicationsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'citations' | 'title'>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Check URL hash for filter parameters on mount
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove #
      if (hash.includes('publications-')) {
        const filterType = hash.replace('publications-', '');
        if (filterType === 'books') {
          setSelectedType('book');
        } else if (filterType === 'journals') {
          setSelectedType('journal');
        } else if (filterType === 'papers') {
          setSelectedType('all');
        }
        // Scroll to publications section
        setTimeout(() => {
          const element = document.getElementById('publications');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const publicationTypes = ['all', 'journal', 'conference', 'book', 'translated', 'thesis'];
  const categories = ['all', ...Array.from(new Set(publications.map(p => p.category))).sort()];
  const years = ['all', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedType, selectedCategory, selectedYear]);

  const filteredAndSortedPublications = useMemo(() => {
    let filtered = publications.filter(pub => {
      const matchesSearch = searchTerm === '' || 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (pub.authors && pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        (pub.keywords && pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        (pub.description && pub.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pub.publisher && pub.publisher.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pub.journal && pub.journal.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pub.conference && pub.conference.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedType === 'all' || pub.type === selectedType;
      const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
      
      return matchesSearch && matchesType && matchesCategory && matchesYear;
    });

    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'year':
          aValue = a.year;
          bValue = b.year;
          break;
        case 'citations':
          aValue = a.citations || 0;
          bValue = b.citations || 0;
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          return 0;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, selectedType, selectedCategory, selectedYear, sortBy, sortOrder]);

  const getTypeColor = (type: string) => {
    const colors = {
      journal: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
      conference: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
      book: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
      translated: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
      thesis: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
      chapter: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-neutral-300';
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      journal: 'Journal Article',
      conference: 'Conference Paper',
      book: 'Book',
      translated: 'Translated Book',
      thesis: 'Thesis',
      chapter: 'Book Chapter'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getLinkLabel = (url: string) => {
    if (!url) return 'View Publication';
    if (url.includes('amazon')) return 'View on Amazon';
    if (url.includes('scholar.google')) return 'Search on Google Scholar';
    if (url.includes('ieee')) return 'View on IEEE Xplore';
    if (url.includes('springer')) return 'View on Springer';
    if (url.includes('sciencedirect')) return 'View on ScienceDirect';
    if (url.includes('tandfonline')) return 'View on Taylor & Francis';
    return 'View Publication';
  };

  // Paginate results
  const totalPages = Math.ceil(filteredAndSortedPublications.length / itemsPerPage);
  const paginatedPublications = filteredAndSortedPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate statistics
  const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations || 0), 0);
  const journalCount = publications.filter(pub => pub.type === 'journal').length;
  const conferenceCount = publications.filter(pub => pub.type === 'conference').length;
  const bookCount = publications.filter(pub => pub.type === 'book' || pub.type === 'translated').length;

  return (
    <section id="publications" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-neutral-100 mb-4">Publications</h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive collection of research publications, papers, and contributions spanning over 30 years in electrical engineering, control systems, and information technology.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search publications by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              />
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              >
                <option value="all">All Types</option>
                <option value="journal">Journal Articles</option>
                <option value="conference">Conference Papers</option>
                <option value="book">Books</option>
                <option value="translated">Translated Books</option>
                <option value="thesis">Theses</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [sort, order] = e.target.value.split('-');
                  setSortBy(sort as 'year' | 'citations' | 'title');
                  setSortOrder(order as 'asc' | 'desc');
                }}
                className="w-full p-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              >
                <option value="year-desc">Year (Newest)</option>
                <option value="year-asc">Year (Oldest)</option>
                <option value="citations-desc">Citations (Most)</option>
                <option value="citations-asc">Citations (Least)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="mt-4 text-sm text-gray-600 dark:text-neutral-400">
            Showing {filteredAndSortedPublications.length} of {publications.length} publications
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedType !== 'all' && ` in ${getTypeLabel(selectedType)}`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {paginatedPublications.map((publication) => (
            <div key={publication.id} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(publication.type)}`}>
                      {getTypeLabel(publication.type)}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-neutral-500 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {publication.year}
                      </span>
                      {publication.citations && (
                        <span className="text-primary-600 dark:text-primary-400 font-medium">
                          {publication.citations} citations
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-100 mb-2">
                    {publication.title}
                  </h3>

                  {publication.authors && publication.authors.length > 0 && (
                    <p className="text-gray-700 dark:text-neutral-300 mb-2">
                      <strong>Authors:</strong> {publication.authors.join(', ')}
                    </p>
                  )}

                  {publication.journal && (
                    <p className="text-gray-700 dark:text-neutral-300 mb-2">
                      <strong>Journal:</strong> {publication.journal}
                      {publication.impact_factor && (
                        <span className="text-primary-600 dark:text-primary-400 ml-2">(IF: {publication.impact_factor})</span>
                      )}
                    </p>
                  )}

                  {publication.conference && (
                    <p className="text-gray-700 dark:text-neutral-300 mb-2">
                      <strong>Conference:</strong> {publication.conference}
                    </p>
                  )}

                  {publication.publisher && (
                    <p className="text-gray-700 dark:text-neutral-300 mb-2">
                      <strong>Publisher:</strong> {publication.publisher}
                    </p>
                  )}

                  {publication.description && (
                    <p className="text-gray-600 dark:text-neutral-400 mb-3 leading-relaxed">
                      {publication.description}
                    </p>
                  )}

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-700">
                      {publication.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:ml-6">
                  {publication.doi && (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View DOI
                    </a>
                  )}
                  {publication.url && (
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {getLinkLabel(publication.url)}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
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

        {filteredAndSortedPublications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-neutral-400 mb-4">
              <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33.04-.66.14-1.32.3-1.96.46-1.83 1.32-3.49 2.46-4.76A7.962 7.962 0 0112 5c2.34 0 4.47.881 6.08 2.33A7.963 7.963 0 0120 12a7.96 7.96 0 01-.92 3.709zM16 17.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v1z" />
              </svg>
              <p className="text-lg font-medium">No publications found</p>
              <p className="text-sm">Try adjusting your search terms or filters</p>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedCategory('all');
                setSelectedYear('all');
              }}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg shadow-sm p-8 border border-primary-100 dark:border-primary-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Publication Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{publications.length}</div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{journalCount}</div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">Journal Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{conferenceCount}</div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">Conference Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{bookCount}</div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">Books & Translations</div>
            </div>
          </div>
          {totalCitations > 0 && (
            <div className="mt-6 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{totalCitations}+</div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">Total Citations</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicationsDatabase;