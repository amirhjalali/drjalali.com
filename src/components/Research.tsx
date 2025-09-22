'use client';

import React, { memo, useCallback } from 'react';
import Card from './Card';
import { SlideUp, FadeIn } from './ScrollAnimation';
import { SectionAnchor } from './SectionDivider';

// Memoized research area component
const ResearchArea = memo(({ area, index }: { area: any; index: number }) => (
  <FadeIn key={index} delay={index * 100}>
    <Card
      variant="glass"
      hover="lift"
      interactive={true}
      className="group"
    >
      <div className="flex items-start mb-4">
        <span className="text-3xl mr-4 transform group-hover:scale-110 transition-transform duration-300">{area.icon}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{area.title}</h3>
      </div>
      <p className="text-gray-700 dark:text-neutral-200 mb-4 leading-relaxed max-w-prose">{area.description}</p>
      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200 mb-2">Key Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {area.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  </FadeIn>
));

ResearchArea.displayName = 'ResearchArea';

const Research = () => {
  const researchAreas = [
    {
      title: "Internet of Things (IoT)",
      description: "Pioneer in IoT research and applications, focusing on smart systems and connected devices for industrial and consumer applications.",
      technologies: ["Smart Sensors", "IoT Protocols", "Edge Computing", "Industrial IoT"],
      icon: "🌐"
    },
    {
      title: "Control Systems",
      description: "Advanced research in control theory and applications, including reduced-order systems and optimal control strategies.",
      technologies: ["Optimal Control", "Reduced-Order Systems", "Adaptive Control", "Robust Control"],
      icon: "⚙️"
    },
    {
      title: "Information & Communication Technology",
      description: "Leading research in ICT development, particularly in expanding internet infrastructure and digital transformation.",
      technologies: ["Network Infrastructure", "Digital Systems", "Communication Protocols", "ICT Policy"],
      icon: "📡"
    },
    {
      title: "3D Printing Technology",
      description: "Research in additive manufacturing technologies and their applications in engineering and industrial processes.",
      technologies: ["Additive Manufacturing", "Materials Science", "Process Optimization", "Industrial Applications"],
      icon: "🖨️"
    }
  ]

  return (
    <section id="research" className="py-24 md:py-28 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <SectionAnchor
            title="Research & Innovation"
            subtitle="Pioneering research in control systems, IoT, and information technology with global impact"
          />
        </SlideUp>

        {/* Research Areas */}
        <div className="mb-20">
          <SlideUp>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center font-display">Research Areas</h2>
          </SlideUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {researchAreas.map((area, index) => (
              <ResearchArea key={area.title} area={area} index={index} />
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-lg border border-primary-100 dark:border-primary-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Research Impact & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => {
                // Set hash to trigger journal filter
                window.location.hash = 'publications-journals';
                const element = document.getElementById('publications');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">300+</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Research Papers</p>
            </button>
            <button
              onClick={() => {
                // Set hash to trigger book filter
                window.location.hash = 'publications-books';
                const element = document.getElementById('publications');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Books & Chapters</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('academic');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Years of Research</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">Pioneer</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">IT in Iran</p>
            </button>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">🌐</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">IoT Expert</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Control Systems</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">📡</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">ICT Development</p>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('research');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-neutral-700 block w-full text-center"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300">🖨️</div>
              <p className="text-gray-700 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">3D Printing</p>
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-neutral-200 italic max-w-prose mx-auto">
              &ldquo;Recognized as the Father of Information Technology in Iran for pioneering work in internet infrastructure and digital transformation.&rdquo;
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                const element = document.getElementById('publications');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              View All Publications
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default memo(Research);