'use client';

import { useState } from 'react';
import { Send, User, Mail, MessageSquare, ExternalLink } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree for form handling (alternative to EmailJS)
      // Replace 'YOUR_FORM_ID' with actual Formspree form ID
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
        </svg>
      ),
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aliakbar-jalali-4569405/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-600'
    },
    {
      name: 'IEEE Xplore',
      href: 'https://ieeexplore.ieee.org/author/37300412300',
      icon: (
        <img 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABfElEQVR4AW2SA48kYRiE63wXnX0XnW3btm3bXNu2bdu2rXh/yG5l3k0amU7NNJ+uers+4JsjDjlggwUW/MakL8A74DlwB7gEHAV2AKuA+cA0yIazLgTGbbYcv9wUs7+rmYkTLxtjLroRwC5rrDYKnAT2KABF4OCfxCW3/bY8DnnwJ/XRt+Sdhz23bnd+8CD00aPAnTv/bNv68cEDy4cP/+3dewUCFHUP37DJ9M1qGzFsAVEN1NhxQAklx3FxOcAMBYiu6HvllCfT51cNvXmXJMHy87uePfc0TMJs64FrrgSuueQQoBhv9XU/AjS5dCts9SqrtLR2mpw/Z7N370diGkCsmU2JF1RHyTFJmihATO3Ax7AKJmQzvMJ48qEZifGUcnQAT9mMACxHPY8wRiLxQImU3EKpIhF47HvQMX3pt0j+04Hi3BRfQROWQ7Ec6cfQ6YsAMiK6iSQYh5FFoKwaioBGT0kqPL8BSQ2me1qkAMKcdFIWqBpQML2PwowCRiAwMkIg+QYAAAAASUVORK5CYII=" 
          alt="IEEE Xplore" 
          className="w-6 h-6"
        />
      ),
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@Professor.Aliakbar.Jalali',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'hover:text-red-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drjalali_ict/?hl=en',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:text-pink-500'
    },
    {
      name: 'Wikipedia',
      href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.8 16.8c-.3-.1-.5-.3-.7-.6l-1.2-2.4c-.1-.2-.3-.3-.5-.3h-.6c-.2 0-.4-.2-.4-.4v-.4c0-.2.2-.4.4-.4h2.4c.2 0 .4.2.4.4v.4c0 .2-.2.4-.4.4h-.4c-.1 0-.1 0-.1.1l.8 1.6.8-1.6c0-.1 0-.1-.1-.1h-.4c-.2 0-.4-.2-.4-.4v-.4c0-.2.2-.4.4-.4h2.4c.2 0 .4.2.4.4v.4c0 .2-.2.4-.4.4h-.6c-.2 0-.4.1-.5.3l-1.2 2.4c-.2.3-.4.5-.7.6zm3.6-5.6c-.1.2-.3.3-.5.3h-.6c-.2 0-.4-.2-.4-.4v-.4c0-.2.2-.4.4-.4h.4c.1 0 .1 0 .1-.1l-.8-1.6-.8 1.6c0 .1 0 .1.1.1h.4c.2 0 .4.2.4.4v.4c0 .2-.2.4-.4.4h-2.4c-.2 0-.4-.2-.4-.4v-.4c0-.2.2-.4.4-.4h.6c.2 0 .4-.1.5-.3l1.2-2.4c.2-.3.4-.5.7-.6s.6-.1.9.1c.3.2.5.5.6.8l1.2 2.4z" fill="currentColor"/>
        </svg>
      ),
      color: 'hover:text-gray-600'
    }
  ];

  const subjectOptions = [
    'General Inquiry',
    'Research Collaboration',
    'Academic Consultation',
    'Media Interview',
    'Speaking Engagement',
    'Student Supervision',
    'Technical Consultation',
    'Other'
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch for research collaborations, academic consultations, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Social Links */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-100 mb-3">Connect with Dr. Jalali</h3>
                <p className="text-gray-600 dark:text-neutral-400 text-sm">
                  Follow research updates and professional activities
                </p>
              </div>
              
              {/* Clean Icon Grid */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {socialLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center w-14 h-14 rounded-full
                        bg-white dark:bg-neutral-700 shadow-md hover:shadow-lg
                        border-2 border-gray-200 dark:border-neutral-600
                        text-gray-500 dark:text-neutral-400 ${link.color}
                        transition-all duration-300 hover:scale-110 hover:-translate-y-1
                        group-hover:shadow-xl
                      `}
                      aria-label={`Visit Dr. Jalali's ${link.name} profile`}
                    >
                      {link.icon}
                    </a>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-gray-900 dark:bg-neutral-700 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
                        {link.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-neutral-700"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-6 border-t border-gray-200 dark:border-neutral-600">
                <p className="text-xs text-gray-500 dark:text-neutral-500">
                  For direct inquiries, please use the contact form
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Dr. Jalali form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                      aria-describedby="name-required"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                      aria-describedby="email-required"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Please describe your inquiry or message..."
                  />
                </div>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Message sent successfully!
                      </h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Thank you for your message. Dr. Jalali will get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Error sending message
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>There was an error sending your message. Please try again or contact directly via email.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;