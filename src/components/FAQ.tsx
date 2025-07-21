'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { SlideUp } from './ScrollAnimation'
import { SectionAnchor } from './SectionDivider'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'academic' | 'research' | 'collaboration' | 'general'
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What are Dr. Jalali&apos;s main research areas?',
    answer: 'Dr. Jalali specializes in four primary research areas: Internet of Things (IoT) applications and smart systems, Control Systems and reduced-order modeling, Information and Communication Technology infrastructure development, and 3D Printing and additive manufacturing technologies. His work bridges theoretical research with practical industrial applications.',
    category: 'research'
  },
  {
    id: '2',
    question: 'How can I collaborate with Dr. Jalali on research projects?',
    answer: 'Research collaboration opportunities are available for graduate students, post-doctoral researchers, and academic institutions. Please use the contact form to describe your research interests, proposed collaboration scope, and timeline. Include your CV and a brief research proposal for consideration.',
    category: 'collaboration'
  },
  {
    id: '3',
    question: 'What academic positions does Dr. Jalali currently hold?',
    answer: 'Dr. Jalali serves as a Professor in the School of Electrical Engineering at Iran University of Science and Technology, Adjunct Professor in the Department of Electrical Engineering and Computer Science at University of Maryland Baltimore County, and Adjunct Professor at West Virginia University.',
    category: 'academic'
  },
  {
    id: '4',
    question: 'What is Dr. Jalali&apos;s contribution to Iran&apos;s IT development?',
    answer: 'Dr. Jalali is recognized as the "Father of Information Technology in Iran" for his pioneering work in developing internet infrastructure, particularly in rural areas. His UNESCO eASIA award-winning project brought internet connectivity to remote Iranian villages, significantly advancing digital inclusion and technological accessibility across the country.',
    category: 'general'
  },
  {
    id: '5',
    question: 'How many publications has Dr. Jalali authored?',
    answer: 'Dr. Jalali has authored over 300 research papers and more than 50 books and book chapters throughout his 30+ year academic career. His publications span control systems theory, IoT applications, and information technology development, with many highly cited works in top-tier journals.',
    category: 'research'
  },
  {
    id: '6',
    question: 'Can students apply for supervision under Dr. Jalali?',
    answer: 'Dr. Jalali accepts qualified graduate students for research supervision in his areas of expertise. Prospective students should have strong backgrounds in electrical engineering, control systems, or information technology. Please submit your application through the contact form with academic transcripts and research interests.',
    category: 'academic'
  },
  {
    id: '7',
    question: 'What awards and recognition has Dr. Jalali received?',
    answer: 'Dr. Jalali has received numerous prestigious awards including the UNESCO eASIA Award for his rural ICT development project, recognition as the Father of Information Technology in Iran, and multiple academic honors for his contributions to control systems and IoT research.',
    category: 'general'
  },
  {
    id: '8',
    question: 'How can I access Dr. Jalali&apos;s published research?',
    answer: 'Dr. Jalali&apos;s research publications are available through multiple academic databases including Google Scholar, IEEE Xplore, and other major scientific publication platforms. Many of his recent works focus on IoT applications, control systems optimization, and ICT infrastructure development.',
    category: 'research'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'academic' | 'research' | 'collaboration' | 'general'>('all')

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const categories = [
    { key: 'all', label: 'All Questions', count: faqData.length },
    { key: 'academic', label: 'Academic', count: faqData.filter(item => item.category === 'academic').length },
    { key: 'research', label: 'Research', count: faqData.filter(item => item.category === 'research').length },
    { key: 'collaboration', label: 'Collaboration', count: faqData.filter(item => item.category === 'collaboration').length },
    { key: 'general', label: 'General', count: faqData.filter(item => item.category === 'general').length }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-neutral-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <SectionAnchor
            number="08"
            title="Frequently Asked Questions"
            subtitle="Common questions about Dr. Jalali's work, research, and collaboration opportunities"
          />
        </SlideUp>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.key
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-neutral-700 text-gray-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-600 border border-gray-200 dark:border-neutral-600'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <SlideUp key={item.id} delay={index * 50}>
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-neutral-700">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-200 rounded-lg"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-neutral-100 pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUpIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-400 dark:text-neutral-500" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 dark:border-neutral-700 pt-4">
                      <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
                        {item.answer}
                      </p>
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          item.category === 'academic' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                          item.category === 'research' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          item.category === 'collaboration' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                          'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                        }`}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 border border-primary-100 dark:border-primary-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 mb-6">
              For specific inquiries about research collaboration, academic consultation, or other professional matters, please don&apos;t hesitate to reach out.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Dr. Jalali
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}