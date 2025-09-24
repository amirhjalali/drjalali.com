'use client';

import { SlideUp, FadeIn } from './ScrollAnimation';
import { SectionAnchor } from './SectionDivider';
import Button from './Button';

export default function Contact() {
  const contactLinks = [
    {
      title: 'Google Scholar',
      value: 'Research Publications',
      href: 'https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en',
      icon: '📚',
      description: 'Academic publications and citations'
    },
    {
      title: 'LinkedIn',
      value: 'Professional Network',
      href: 'https://www.linkedin.com/in/aliakbar-jalali-4569405/',
      icon: '💼',
      description: 'Professional connections and updates'
    },
    {
      title: 'YouTube',
      value: '@Professor.Aliakbar.Jalali',
      href: 'https://www.youtube.com/@Professor.Aliakbar.Jalali',
      icon: '📺',
      description: 'Educational videos and lectures'
    },
    {
      title: 'Instagram',
      value: '@drjalali_ict',
      href: 'https://www.instagram.com/drjalali_ict/',
      icon: '📸',
      description: 'Professional updates and insights'
    },
    {
      title: 'ResearchGate',
      value: 'Research Network',
      href: 'https://www.researchgate.net/profile/Ali-Akbar-Jalali-2',
      icon: '🔬',
      description: 'Research papers and collaboration'
    },
    {
      title: 'Wikipedia',
      value: 'Biographical Entry',
      href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
      icon: '📖',
      description: 'Public biography and achievements'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-28 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <SectionAnchor
            title="Professional Contact"
            subtitle="Connect with Dr. Jalali for academic collaboration and research opportunities"
          />
        </SlideUp>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <FadeIn key={link.title} delay={index * 100}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-500/30 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                aria-label={`${link.title}: ${link.description}`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {link.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {link.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-neutral-400 mt-2">
                      {link.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 dark:text-neutral-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-gray-100 dark:border-neutral-700 text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">30+</div>
            <p className="text-gray-700 dark:text-neutral-300">Years of Academic Excellence</p>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-gray-100 dark:border-neutral-700 text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">300+</div>
            <p className="text-gray-700 dark:text-neutral-300">Research Publications</p>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-gray-100 dark:border-neutral-700 text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
            <p className="text-gray-700 dark:text-neutral-300">Books & Chapters</p>
          </div>
        </div>

        {/* Research Expertise */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-primary-100 dark:border-primary-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-4 text-center">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700">Internet of Things (IoT)</span>
            <span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700">Control Systems</span>
            <span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700">Information Technology</span>
            <span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700">3D Printing</span>
            <span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700">Academic Leadership</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-neutral-400 mb-6">
            Interested in collaboration or learning more about Dr. Jalali&apos;s work?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="https://www.linkedin.com/in/aliakbar-jalali-4569405/"
              variant="primary"
              size="lg"
              icon="external"
              glow={true}
              aria-label="Connect on LinkedIn"
            >
              Connect on LinkedIn
            </Button>
            <Button
              href="https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en"
              variant="secondary"
              size="lg"
              icon="external"
              aria-label="View research publications"
            >
              View Publications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}