'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, ExternalLink, Download, Calendar, Users } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  conference?: string;
  type: 'journal' | 'conference' | 'book' | 'chapter' | 'patent' | 'thesis';
  doi?: string;
  url?: string;
  abstract: string;
  keywords: string[];
  citations?: number;
  impact_factor?: number;
}

const publications: Publication[] = [
  {
    id: '1',
    title: 'Adaptive Control Systems for IoT Applications',
    authors: ['Ali Akbar Jalali', 'Mohammad Reza Ahmadi', 'Sara Hosseini'],
    year: 2023,
    journal: 'IEEE Transactions on Control Systems Technology',
    type: 'journal',
    doi: '10.1109/TCST.2023.1234567',
    abstract: 'This paper presents a novel approach to adaptive control systems specifically designed for Internet of Things (IoT) applications. The proposed method addresses the challenges of distributed control in resource-constrained environments.',
    keywords: ['IoT', 'Adaptive Control', 'Distributed Systems', 'Control Theory'],
    citations: 45,
    impact_factor: 4.2
  },
  {
    id: '2',
    title: 'Information Technology Infrastructure Development in Iran',
    authors: ['Ali Akbar Jalali', 'Hassan Mokhtari'],
    year: 2022,
    conference: 'International Conference on Information Technology',
    type: 'conference',
    abstract: 'An analysis of the development of information technology infrastructure in Iran from 1990 to 2022, highlighting key milestones and challenges.',
    keywords: ['Information Technology', 'Infrastructure', 'Iran', 'Digital Transformation']
  },
  {
    id: '3',
    title: 'Fundamentals of Control Systems Engineering',
    authors: ['Ali Akbar Jalali'],
    year: 2021,
    type: 'book',
    abstract: 'A comprehensive textbook covering the fundamentals of control systems engineering with practical applications and examples.',
    keywords: ['Control Systems', 'Engineering Education', 'Textbook']
  },
  {
    id: '4',
    title: 'Smart Grid Control Mechanisms',
    authors: ['Ali Akbar Jalali', 'Reza Sharifian', 'Maryam Hosseini'],
    year: 2023,
    journal: 'IEEE Transactions on Smart Grid',
    type: 'journal',
    doi: '10.1109/TSG.2023.7654321',
    abstract: 'This work proposes advanced control mechanisms for smart grid systems, focusing on stability and efficiency optimization.',
    keywords: ['Smart Grid', 'Control Systems', 'Power Systems', 'Energy Management'],
    citations: 32,
    impact_factor: 5.1
  },
  {
    id: '5',
    title: 'Machine Learning Applications in Industrial Control',
    authors: ['Ali Akbar Jalali', 'Ahmad Rezaei', 'Fateme Karimi'],
    year: 2022,
    conference: 'IEEE Conference on Industrial Electronics',
    type: 'conference',
    abstract: 'Exploring the integration of machine learning techniques in industrial control systems for improved performance and predictive maintenance.',
    keywords: ['Machine Learning', 'Industrial Control', 'Predictive Maintenance', 'AI']
  }
];

const PublicationsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'citations' | 'title'>('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const publicationTypes = ['all', 'journal', 'conference', 'book', 'chapter', 'patent', 'thesis'];
  const years = ['all', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];

  const filteredAndSortedPublications = useMemo(() => {
    let filtered = publications.filter(pub => {
      const matchesSearch = searchTerm === '' || 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || pub.type === selectedType;
      const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
      
      return matchesSearch && matchesType && matchesYear;
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
  }, [searchTerm, selectedType, selectedYear, sortBy, sortOrder]);

  const getTypeColor = (type: string) => {
    const colors = {
      journal: 'bg-blue-100 text-blue-800',
      conference: 'bg-green-100 text-green-800',
      book: 'bg-purple-100 text-purple-800',
      chapter: 'bg-orange-100 text-orange-800',
      patent: 'bg-red-100 text-red-800',
      thesis: 'bg-gray-100 text-gray-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of research publications, papers, and contributions to the field of electrical engineering and information technology.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {publicationTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
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
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedPublications.length} of {publications.length} publications
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredAndSortedPublications.map((publication) => (
            <div key={publication.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(publication.type)}`}>
                      {publication.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {publication.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {publication.authors.length} author{publication.authors.length > 1 ? 's' : ''}
                      </span>
                      {publication.citations && (
                        <span className="text-blue-600 font-medium">
                          {publication.citations} citations
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {publication.title}
                  </h3>

                  <p className="text-gray-700 mb-2">
                    <strong>Authors:</strong> {publication.authors.join(', ')}
                  </p>

                  {publication.journal && (
                    <p className="text-gray-700 mb-2">
                      <strong>Journal:</strong> {publication.journal}
                      {publication.impact_factor && (
                        <span className="text-blue-600 ml-2">(IF: {publication.impact_factor})</span>
                      )}
                    </p>
                  )}

                  {publication.conference && (
                    <p className="text-gray-700 mb-2">
                      <strong>Conference:</strong> {publication.conference}
                    </p>
                  )}

                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {publication.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:ml-6">
                  {publication.doi && (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
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
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Full Text
                    </a>
                  )}
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No publications found matching your criteria.</p>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Publication Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{publications.length}</div>
              <div className="text-sm text-gray-600">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {publications.reduce((sum, pub) => sum + (pub.citations || 0), 0)}
              </div>
              <div className="text-sm text-gray-600">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {publications.filter(pub => pub.type === 'journal').length}
              </div>
              <div className="text-sm text-gray-600">Journal Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {publications.filter(pub => pub.type === 'conference').length}
              </div>
              <div className="text-sm text-gray-600">Conference Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsDatabase;