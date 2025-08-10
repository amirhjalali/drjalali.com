'use client';

import { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { SiGooglescholar, SiLinkedin, SiIeee, SiYoutube, SiInstagram, SiWikipedia } from 'react-icons/si';

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Google Forms integration
      // Replace with your actual Google Form URL and field IDs
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
      
      // These entry IDs come from your Google Form - see setup instructions
      const googleFormData = new FormData();
      googleFormData.append('entry.XXXXXXX', contactFormData.name);     // Name field
      googleFormData.append('entry.XXXXXXX', contactFormData.email);    // Email field
      googleFormData.append('entry.XXXXXXX', contactFormData.subject || 'Contact from Website'); // Subject field
      googleFormData.append('entry.XXXXXXX', contactFormData.message);  // Message field
      
      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: googleFormData
      });
      
      // Since no-cors doesn't return a response, we assume success
      alert('Thank you for your message! Dr. Jalali will get back to you soon.');
      setContactFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact via social media.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en',
      icon: <SiGooglescholar className="w-5 h-5" aria-hidden="true" />,
      color: 'hover:text-[#4285F4]'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aliakbar-jalali-4569405/',
      icon: <SiLinkedin className="w-5 h-5" aria-hidden="true" />,
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'IEEE Xplore',
      href: 'https://ieeexplore.ieee.org/author/37300412300',
      icon: <SiIeee className="w-5 h-5" aria-hidden="true" />,
      color: 'hover:text-[#00629B]'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@Professor.Aliakbar.Jalali',
      icon: <SiYoutube className="w-5 h-5" aria-hidden="true" />,
      color: 'hover:text-[#FF0000]'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drjalali_ict/?hl=en',
      icon: <SiInstagram className="w-5 h-5" aria-hidden="true" />,
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'Wikipedia',
      href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
      icon: <SiWikipedia className="w-5 h-5" aria-hidden="true" />,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-neutral-100 mb-4">Contact</h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Connect with Dr. Jalali for research collaborations and academic inquiries
          </p>
        </div>

        {/* Social Links - Centered */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center gap-3 px-5 py-3 rounded-full
                  bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl
                  border border-gray-200 dark:border-neutral-700
                  text-gray-700 dark:text-neutral-300 ${link.color}
                  transition-all duration-300 hover:scale-105 hover:-translate-y-1
                `}
                aria-label={`Visit Dr. Jalali's ${link.name} profile`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form - Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-2xl p-8 border border-gray-200 dark:border-neutral-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-100 mb-6 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                    <textarea
                      id="message"
                      name="message"
                      value={contactFormData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;