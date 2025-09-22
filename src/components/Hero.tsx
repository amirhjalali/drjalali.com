'use client';

import { useEffect, useState, memo } from 'react';
import ProfessionalPhoto from './ProfessionalPhoto';
import Button from './Button';

// Memoized achievement badge component
const AchievementBadge = memo(({
  href,
  value,
  label,
  className = '',
  style = {}
}: {
  href: string;
  value: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <a
    href={href}
    className={`absolute bg-white dark:bg-neutral-800 rounded-lg lg:rounded-xl px-3 py-2 lg:px-5 lg:py-4 shadow-xl border border-gray-100 dark:border-neutral-700 hover:rotate-0 motion-safe:transition-all motion-safe:duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
    style={style}
    aria-label={`${value} ${label} - view details`}
  >
    <div className="text-center">
      <div className="text-primary-600 dark:text-primary-400 text-lg lg:text-xl font-bold" aria-hidden="true">
        {value}
      </div>
      <div className="text-xs lg:text-sm font-medium text-gray-600 dark:text-neutral-200" aria-hidden="true">
        {label}
      </div>
    </div>
  </a>
));

AchievementBadge.displayName = 'AchievementBadge';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tags = [
    { text: 'IoT Expert', scrollTo: 'research' },
    { text: 'Control Systems', scrollTo: 'research' },
    { text: '300+ Publications', scrollTo: 'publications' },
    { text: '30+ Years Experience', scrollTo: 'academic' }
  ];

  return (
    <section
      id="hero"
      className="relative pt-16 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden transition-colors duration-300"
      aria-label="Hero section introducing Dr. Ali Akbar Jalali"
    >
      {/* Background Pattern - Optimized */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 motion-safe:animate-pulse" />
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-60 motion-safe:animate-pulse motion-safe:delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 pb-24 sm:pb-32 lg:pb-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Content - Unified for mobile and desktop */}
          <div className={`order-2 lg:order-1 text-center lg:text-left transform motion-safe:transition-all motion-safe:duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="font-display text-fluid-5xl">
                <span className="block">
                  <span className="font-extrabold text-gray-900 dark:text-neutral-100">Dr.</span>{' '}
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                    Ali Akbar
                  </span>
                </span>
                <span className="block font-extrabold text-gray-900 dark:text-neutral-100 lg:ml-8">
                  Jalali
                </span>
              </h1>

              <div className="relative flex justify-center lg:justify-start">
                <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 rounded-full" />
                <p className="text-fluid-2xl text-primary-600 dark:text-primary-400 font-medium">
                  Father of Information Technology in Iran
                </p>
              </div>

              <p className="body-large text-fluid-lg lg:text-fluid-xl text-gray-700 dark:text-neutral-200 max-w-[60ch] mx-auto lg:mx-0">
                Professor of Electrical Engineering at Iran University of Science and Technology.
                Pioneer in Internet of Things, Control Systems, and Information Technology with
                over 30 years of academic excellence and 300+ published papers.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                {tags.map((tag, index) => (
                  <a
                    key={tag.text}
                    href={`#${tag.scrollTo}`}
                    className={`inline-flex items-center px-3 lg:px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700 transform motion-safe:transition-all motion-safe:duration-500 hover:bg-primary-200 dark:hover:bg-primary-800/50 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    {tag.text}
                  </a>
                ))}
              </div>

              {/* Buttons - Responsive layout */}
              <div className={`pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform motion-safe:transition-all motion-safe:duration-700 motion-safe:delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Button
                  href="#about"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  glow={true}
                  className="text-lg w-full sm:w-auto"
                  aria-label="Learn more about Dr. Jalali's background and achievements"
                >
                  Learn More
                </Button>
                <Button
                  href="#research"
                  variant="secondary"
                  size="lg"
                  icon="external"
                  className="text-lg w-full sm:w-auto"
                  aria-label="View Dr. Jalali's research and publications"
                >
                  View Research
                </Button>
                <Button
                  href="https://en.wikipedia.org/wiki/Ali_Akbar_Jalali"
                  variant="outline"
                  size="lg"
                  icon="external"
                  className="text-lg w-full sm:w-auto"
                  aria-label="View Dr. Jalali's Wikipedia page (opens in new tab)"
                >
                  Wikipedia
                </Button>
              </div>
            </div>
          </div>

          {/* Professional Photo - Unified for mobile and desktop */}
          <div className={`order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0 transform motion-safe:transition-all motion-safe:duration-1000 motion-safe:delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative group">
              {/* Enhanced Decorative Elements - Responsive */}
              <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-r from-primary-400 to-blue-500 dark:from-primary-600 dark:to-blue-700 rounded-full opacity-25 dark:opacity-35 group-hover:opacity-35 dark:group-hover:opacity-45 transition-opacity duration-500 blur-3xl" />
              <div className="absolute -top-8 -right-8 lg:-top-12 lg:-right-12 w-24 lg:w-32 h-24 lg:h-32 bg-gradient-to-br from-primary-300 dark:from-primary-500 to-transparent rounded-full opacity-40 dark:opacity-50" />
              <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-32 lg:w-40 h-32 lg:h-40 bg-gradient-to-tr from-blue-300 dark:from-blue-500 to-transparent rounded-full opacity-30 dark:opacity-40" />

              {/* Photo Container - Responsive sizing */}
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] shadow-2xl ring-4 ring-white dark:ring-neutral-700 ring-opacity-60 dark:ring-opacity-70 group-hover:ring-opacity-80 dark:group-hover:ring-opacity-90 motion-safe:transition-all motion-safe:duration-500 transform group-hover:scale-105 rounded-full overflow-hidden">
                <ProfessionalPhoto
                  src="/images/professional/dr-jalali-professional.png"
                  className="w-full h-full"
                  alt="Portrait of Dr. Ali Akbar Jalali, Distinguished Professor of Electrical Engineering at Iran University of Science and Technology"
                />
              </div>

              {/* Floating Achievement Badges - Responsive positioning */}
              <AchievementBadge
                href="#academic"
                value="30+"
                label="Years"
                className="transform rotate-2 -top-6 left-2 lg:-top-8 lg:left-4"
              />

              <AchievementBadge
                href="#research"
                value="300+"
                label="Papers"
                className="transform -rotate-2 -bottom-4 -right-6 lg:-bottom-6 lg:-right-8"
              />

              <AchievementBadge
                href="#research"
                value="50+"
                label="Books"
                className="transform rotate-3 top-16 -left-8 lg:top-24 lg:-left-12"
              />

              <a
                href="#about"
                className="absolute bottom-14 right-2 lg:bottom-20 lg:right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg lg:rounded-xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl transform -rotate-1 hover:rotate-0 motion-safe:transition-all motion-safe:duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="IT Pioneer - learn about Dr. Jalali's contributions"
              >
                <div className="text-xs lg:text-sm font-semibold" aria-hidden="true">
                  IT Pioneer
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="currentColor"
            className="text-white dark:text-neutral-900"
            d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,37.3C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}