'use client'

import { useState } from 'react'

interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  category: 'interview' | 'lecture' | 'documentary'
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Internet of Things',
    description: 'Dr. Jalali explains the fundamentals of IoT and its impact on modern technology',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    category: 'lecture'
  },
  {
    id: '2',
    title: 'The Future of Information Technology in Iran',
    description: 'An interview discussing the development of IT infrastructure in Iran',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    category: 'interview'
  },
  {
    id: '3',
    title: 'Control Systems Innovation',
    description: 'Documentary on Dr. Jalali\'s contributions to control systems engineering',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    category: 'documentary'
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
              <div className="relative aspect-video bg-gray-200">
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
              className="bg-white rounded-lg max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-600">
                  {selectedVideo.description}
                </p>
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