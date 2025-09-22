'use client';

import { SlideUp, FadeIn } from './ScrollAnimation';
import { SectionAnchor } from './SectionDivider';
import Button from './Button';

export default function Contact() {
  const contactLinks = [
    {
      title: 'Google Scholar',
      value: 'Research Publications',
      href: 'https://scholar.google.com/citations?user=RJaAli8AAAAJ&hl=en',
      icon: '📚',
      description: 'Academic publications and citations'
    },
    {
      title: 'LinkedIn',
      value: 'Professional Network',
      href: 'https://www.linkedin.com/in/ali-akbar-jalali/',
      icon: '💼',
      description: 'Professional connections and updates'
    },
    {
      title: 'YouTube',
      value: '@drjalali',
      href: 'https://www.youtube.com/@drjalali',
      icon: '📺',
      description: 'Educational videos and lectures'
    },
    {
      title: 'Instagram',
      value: '@dr.aliakbarjalali',
      href: 'https://www.instagram.com/dr.aliakbarjalali/',
      icon: '📸',
      description: 'Professional updates and insights'
    },
    {
      title: 'Wikipedia',
      value: 'Biographical Entry',
      href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
      icon: '📖',
      description: 'Public biography and achievements'
    },
    {
      title: 'ResearchGate',
      value: 'Research Network',
      href: 'https://www.researchgate.net/profile/Ali-Jalali-2',
      icon: '🔬',
      description: 'Research papers and collaboration'
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

        {/* Professional Affiliations */}
        <div className="mt-16 bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-neutral-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-6">Professional Affiliations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-neutral-100 mb-2">Academic Positions</h4>
              <ul className="text-gray-700 dark:text-neutral-300 space-y-2">
                <li>• Professor at Iran University of Science and Technology</li>
                <li>• Adjunct Professor at University of Maryland Baltimore County</li>
                <li>• Adjunct Professor at West Virginia University</li>
                <li>• Director of Control Group, IUST</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-neutral-100 mb-2">Research Interests</h4>
              <ul className="text-gray-700 dark:text-neutral-300 space-y-2">
                <li>• Internet of Things (IoT)</li>
                <li>• Control Systems Engineering</li>
                <li>• Information & Communication Technology</li>
                <li>• 3D Printing and Additive Manufacturing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Social Media */}
        <div className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 border border-primary-100 dark:border-primary-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-6 text-center">Stay Connected</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="https://www.youtube.com/@drjalali"
              variant="outline"
              size="md"
              icon="external"
              aria-label="Visit YouTube channel"
            >
              YouTube
            </Button>
            <Button
              href="https://www.instagram.com/dr.aliakbarjalali/"
              variant="outline"
              size="md"
              icon="external"
              aria-label="Visit Instagram profile"
            >
              Instagram
            </Button>
            <Button
              href="https://www.linkedin.com/in/ali-akbar-jalali/"
              variant="outline"
              size="md"
              icon="external"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </Button>
            <Button
              href="https://scholar.google.com/citations?user=RJaAli8AAAAJ&hl=en"
              variant="outline"
              size="md"
              icon="external"
              aria-label="View Google Scholar profile"
            >
              Google Scholar
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-neutral-400 mb-6">
            Interested in collaboration or learning more about Dr. Jalali's work?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="https://www.linkedin.com/in/ali-akbar-jalali/"
              variant="primary"
              size="lg"
              icon="external"
              glow={true}
              aria-label="Connect on LinkedIn"
            >
              Connect on LinkedIn
            </Button>
            <Button
              href="https://scholar.google.com/citations?user=RJaAli8AAAAJ&hl=en"
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