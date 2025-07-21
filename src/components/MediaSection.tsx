'use client'

import { useState } from 'react'

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  category: 'interview' | 'lecture' | 'documentary'
}

// To add real videos from Dr. Jalali's YouTube channel:
// 1. Go to https://www.youtube.com/@Professor.Aliakbar.Jalali
// 2. Find the video you want to include
// 3. Extract the video ID from the URL (e.g., from https://www.youtube.com/watch?v=ABC123, the ID is ABC123)
// 4. Replace PLACEHOLDER_VIDEO_X with the actual video ID

const videos: Video[] = [
  {
    id: '1',
    title: 'Internet of Things: Fundamentals and Applications',
    description: 'Dr. Jalali discusses IoT technology, smart systems, and their real-world applications in industry and daily life',
    youtubeId: 'PLACEHOLDER_VIDEO_1', // Replace with actual YouTube video ID
    category: 'lecture'
  },
  {
    id: '2',
    title: 'Father of IT in Iran: A Journey Through Digital Transformation',
    description: 'An in-depth interview with Dr. Jalali about his pioneering work in establishing Iran\'s information technology infrastructure',
    youtubeId: 'PLACEHOLDER_VIDEO_2', // Replace with actual YouTube video ID
    category: 'interview'
  },
  {
    id: '3',
    title: 'Control Systems and Engineering Excellence',
    description: 'Exploring Dr. Jalali\'s contributions to advanced control theory and his published research on reduced-order systems',
    youtubeId: 'PLACEHOLDER_VIDEO_3', // Replace with actual YouTube video ID
    category: 'lecture'
  }
]

export default function MediaSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'interview' | 'lecture' | 'documentary'>('all')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Media & Presentations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch Dr. Jalali&apos;s lectures, interviews, and documentaries on technology and innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              All Videos
            </button>
            <button
              onClick={() => setSelectedCategory('lecture')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'lecture'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Lectures
            </button>
            <button
              onClick={() => setSelectedCategory('interview')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'interview'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Interviews
            </button>
            <button
              onClick={() => setSelectedCategory('documentary')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'documentary'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Documentaries
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-neutral-700 dark:to-neutral-800">
                {video.youtubeId.startsWith('PLACEHOLDER_VIDEO') ? (
                  // Placeholder for actual videos
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-primary-600 dark:bg-primary-500 rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-primary-700 dark:text-primary-300 font-medium text-sm">
                        Video Coming Soon
                      </p>
                    </div>
                  </div>
                ) : (
                  // Real video thumbnail
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-60 rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <span className={`
                  inline-block px-2 py-1 text-xs font-medium rounded-full mb-3
                  ${video.category === 'lecture' ? 'bg-blue-100 text-blue-700' : 
                    video.category === 'interview' ? 'bg-green-100 text-green-700' : 
                    'bg-purple-100 text-purple-700'}
                `}>
                  {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-white dark:bg-neutral-800 rounded-lg max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                {selectedVideo.youtubeId.startsWith('PLACEHOLDER_VIDEO') ? (
                  // Placeholder content
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-primary-600 dark:bg-primary-500 rounded-full p-8 mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-2">
                        Video Coming Soon
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400">
                        This video will be available once Dr. Jalali&apos;s content is uploaded
                      </p>
                    </div>
                  </div>
                ) : (
                  // Real video iframe
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-600 dark:text-neutral-300">
                  {selectedVideo.description}
                </p>
                {selectedVideo.youtubeId.startsWith('PLACEHOLDER_VIDEO') && (
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      📝 <strong>Note:</strong> To display this video, replace &quot;{selectedVideo.youtubeId}&quot; with the actual YouTube video ID from Dr. Jalali&apos;s channel.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* YouTube Channel Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@Professor.Aliakbar.Jalali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}