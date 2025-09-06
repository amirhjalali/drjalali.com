'use client';

import SkeletonLoader from './SkeletonLoader';

interface LoadingStateProps {
  type?: 'page' | 'section' | 'inline';
  message?: string;
}

export default function LoadingState({ 
  type = 'section',
  message = 'Loading...'
}: LoadingStateProps) {
  if (type === 'page') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-8">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-gray-900 dark:text-neutral-100">{message}</p>
          <p className="text-sm text-gray-600 dark:text-neutral-400">Please wait while we load the content</p>
        </div>
      </div>
    );
  }

  if (type === 'section') {
    return (
      <div className="w-full py-12 space-y-6">
        <div className="max-w-4xl mx-auto px-4">
          <SkeletonLoader variant="text" lines={1} className="max-w-xs mb-4" />
          <SkeletonLoader variant="text" lines={3} className="mb-6" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SkeletonLoader variant="card" className="h-48" />
            <SkeletonLoader variant="card" className="h-48" />
            <SkeletonLoader variant="card" className="h-48" />
          </div>
        </div>
      </div>
    );
  }

  // Inline loading state
  return (
    <div className="inline-flex items-center space-x-2">
      <div className="w-4 h-4 border-2 border-primary-200 dark:border-primary-800 rounded-full animate-pulse"></div>
      <div className="w-4 h-4 border-2 border-transparent border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin"></div>
      <span className="text-sm text-gray-600 dark:text-neutral-400">{message}</span>
    </div>
  );
}