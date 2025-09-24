'use client';

import { useState } from 'react';
import { SlideUp, FadeIn } from './ScrollAnimation';
import { SectionAnchor } from './SectionDivider';
import Button from './Button';

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample publications data - in a real app, this would come from a database
  const publications = [
    {
      type: 'journal',
      title: 'Advanced Control Systems for Internet of Things Applications',
      authors: 'Jalali, A.A., et al.',
      journal: 'IEEE Internet of Things Journal',
      year: 2023,
      citations: 45,
      link: '#'
    },
    {
      type: 'journal',
      title: 'Optimal Control Strategies for Smart Grid Systems',
      authors: 'Jalali, A.A., Smith, J.',
      journal: 'IEEE Transactions on Control Systems',
      year: 2023,
      citations: 32,
      link: '#'
    },
    {
      type: 'book',
      title: 'Internet of Things: Fundamentals and Applications',
      authors: 'Jalali, A.A.',
      publisher: 'Academic Press',
      year: 2022,
      isbn: '978-0-12-345678-9',
      link: '#'
    },
    {
      type: 'conference',
      title: 'Machine Learning Approaches in Control Systems Design',
      authors: 'Jalali, A.A., Johnson, K., Lee, M.',
      conference: 'International Conference on Control Systems',
      year: 2023,
      citations: 18,
      link: '#'
    },
    {
      type: 'book',
      title: 'Control Systems Engineering: A Modern Approach',
      authors: 'Jalali, A.A.',
      publisher: 'Springer',
      year: 2021,
      isbn: '978-3-030-12345-6',
      link: '#'
    },
    {
      type: 'journal',
      title: 'Reduced-Order Modeling for Complex Industrial Systems',
      authors: 'Jalali, A.A., Brown, R.',
      journal: 'Control Engineering Practice',
      year: 2022,
      citations: 28,
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Publications', icon: '📚' },
    { id: 'journal', label: 'Journal Articles', icon: '📄' },
    { id: 'book', label: 'Books', icon: '📖' },
    { id: 'conference', label: 'Conference Papers', icon: '🎤' }
  ];

  const filteredPublications = activeFilter === 'all'
    ? publications
    : publications.filter(pub => pub.type === activeFilter);

  const stats = {
    total: 300,
    journals: 150,
    books: 50,
    conferences: 100,
    citations: 5000
  };

  return (
    <section id="publications" className="py-24 md:py-28 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <SectionAnchor
            title="Publications & Research Output"
            subtitle="Over 300 peer-reviewed publications in leading journals and conferences"
          />
        </SlideUp>

        {/* Publication Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stats.total}+</div>
            <div className="text-sm text-gray-600 dark:text-neutral-400">Total Publications</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.journals}+</div>
            <div className="text-sm text-gray-600 dark:text-neutral-400">Journal Articles</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.books}+</div>
            <div className="text-sm text-gray-600 dark:text-neutral-400">Books</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.conferences}+</div>
            <div className="text-sm text-gray-600 dark:text-neutral-400">Conference Papers</div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.citations}+</div>
            <div className="text-sm text-gray-600 dark:text-neutral-400">Citations</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-primary-500/30 focus:ring-offset-2 dark:focus:ring-offset-neutral-900
                ${activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600'
                  : 'bg-white dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 border-2 border-gray-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600'
                }
              `}
              aria-label={`Filter by ${filter.label}`}
              aria-pressed={activeFilter === filter.id}
            >
              <span className="mr-2" aria-hidden="true">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="grid gap-6">
          {filteredPublications.map((pub, index) => (
            <FadeIn key={index} delay={index * 50}>
              <article className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`
                        px-3 py-1 text-xs font-medium rounded-full
                        ${pub.type === 'journal' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                        ${pub.type === 'book' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                        ${pub.type === 'conference' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : ''}
                      `}>
                        {pub.type === 'journal' ? 'Journal Article' : pub.type === 'book' ? 'Book' : 'Conference Paper'}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-neutral-500">{pub.year}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100 mb-2">
                      {pub.title}
                    </h3>

                    <p className="text-gray-600 dark:text-neutral-400 mb-2">
                      {pub.authors}
                    </p>

                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      {pub.journal || pub.publisher || pub.conference}
                      {pub.isbn && <span className="ml-2 text-gray-500 dark:text-neutral-500">ISBN: {pub.isbn}</span>}
                    </p>

                    {pub.citations && (
                      <p className="text-sm text-gray-500 dark:text-neutral-500 mt-2">
                        Citations: {pub.citations}
                      </p>
                    )}
                  </div>

                  <Button
                    href={pub.link}
                    variant="outline"
                    size="sm"
                    icon="external"
                    className="ml-4 flex-shrink-0"
                    aria-label={`View publication: ${pub.title}`}
                  >
                    View
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Load More / External Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-neutral-400 mb-6">
            This is a selection of recent publications. For a complete list, visit:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en"
              variant="primary"
              size="lg"
              icon="external"
              aria-label="View all publications on Google Scholar"
            >
              Google Scholar Profile
            </Button>
            <Button
              href="http://webpages.iust.ac.ir/jalali/"
              variant="secondary"
              size="lg"
              icon="external"
              aria-label="View publications on university profile"
            >
              University Publications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}