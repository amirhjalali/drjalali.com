'use client';

import { SiGooglescholar, SiLinkedin, SiIeee, SiYoutube, SiInstagram, SiWikipedia } from 'react-icons/si';

const ContactForm = () => {

  const socialLinks = [
    {
      name: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en',
      icon: <SiGooglescholar className="w-6 h-6" aria-hidden="true" />,
      color: 'hover:text-[#4285F4]'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aliakbar-jalali-4569405/',
      icon: <SiLinkedin className="w-6 h-6" aria-hidden="true" />,
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'IEEE Xplore',
      href: 'https://ieeexplore.ieee.org/author/37300412300',
      icon: <SiIeee className="w-6 h-6" aria-hidden="true" />,
      color: 'hover:text-[#00629B]'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@Professor.Aliakbar.Jalali',
      icon: <SiYoutube className="w-6 h-6" aria-hidden="true" />,
      color: 'hover:text-[#FF0000]'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drjalali_ict/?hl=en',
      icon: <SiInstagram className="w-6 h-6" aria-hidden="true" />,
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'Wikipedia',
      href: 'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali',
      icon: <SiWikipedia className="w-6 h-6" aria-hidden="true" />,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-neutral-100 mb-8">Contact</h2>
        </div>

        {/* Social Links - Single Row */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group p-3 rounded-full
                bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl
                border border-gray-200 dark:border-neutral-700
                text-gray-700 dark:text-neutral-300 ${link.color}
                transition-all duration-300 hover:scale-110 hover:-translate-y-1
              `}
              aria-label={`Visit Dr. Jalali's ${link.name} profile`}
            >
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;