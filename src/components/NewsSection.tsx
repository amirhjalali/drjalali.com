interface NewsItem {
  id: string
  title: string
  excerpt: string
  date: string
  category: 'award' | 'conference' | 'publication' | 'announcement'
  link?: string
  image?: string
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Dr. Jalali Recognized as Pioneer in IoT Research',
    excerpt: 'International recognition for groundbreaking work in Internet of Things applications for smart cities and industrial automation.',
    date: '2024-12-15',
    category: 'award'
  },
  {
    id: '2',
    title: 'Keynote Speaker at International Control Systems Conference',
    excerpt: 'Dr. Jalali delivered a keynote address on "Reduced Order Systems in Modern Control Theory" at the prestigious ICSC 2024.',
    date: '2024-11-20',
    category: 'conference'
  },
  {
    id: '3',
    title: 'New Research Paper Published in IEEE Transactions',
    excerpt: 'Latest research on adaptive control systems for IoT networks published in IEEE Transactions on Automatic Control.',
    date: '2024-10-05',
    category: 'publication'
  },
  {
    id: '4',
    title: 'Collaboration with University of Maryland Extended',
    excerpt: 'Adjunct professorship at UMBC extended for another term, continuing international academic collaboration.',
    date: '2024-09-01',
    category: 'announcement'
  },
  {
    id: '5',
    title: 'Student Success: PhD Defense Under Dr. Jalali\'s Supervision',
    excerpt: 'Another successful PhD defense in the area of IoT security and control systems, marking the 50th doctoral student.',
    date: '2024-08-15',
    category: 'announcement'
  },
  {
    id: '6',
    title: 'Book Chapter on IoT Innovation Published',
    excerpt: 'Contributing author to "Advances in Internet of Things: Theory and Applications" published by Springer.',
    date: '2024-07-10',
    category: 'publication'
  }
]

export default function NewsSection() {
  const getCategoryColor = (category: NewsItem['category']) => {
    switch (category) {
      case 'award':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'conference':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'publication':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'announcement':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryIcon = (category: NewsItem['category']) => {
    switch (category) {
      case 'award':
        return '🏆'
      case 'conference':
        return '🎤'
      case 'publication':
        return '📚'
      case 'announcement':
        return '📢'
      default:
        return '📰'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest achievements, publications, and announcements from Dr. Jalali&apos;s academic journey
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Category Header */}
              <div className={`px-6 py-3 border-b ${getCategoryColor(item.category)}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium flex items-center">
                    <span className="mr-2 text-lg">{getCategoryIcon(item.category)}</span>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  <time className="text-xs">
                    {formatDate(item.date)}
                  </time>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* RSS and Archive Links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.429 5.1v1.4c7.242 0 13.114 5.872 13.114 13.114h1.4C17.943 11.624 11.419 5.1 3.429 5.1zm0 2.8v1.4a6.914 6.914 0 016.914 6.914h1.4c0-4.59-3.724-8.314-8.314-8.314zM6.229 14.214a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
            </svg>
            Subscribe to RSS Feed
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Archive
          </button>
        </div>
      </div>
    </section>
  )
}