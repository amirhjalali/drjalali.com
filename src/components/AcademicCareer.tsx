export default function AcademicCareer() {
  const positions = [
    {
      title: "Adjunct Professor",
      institution: "University of Maryland Baltimore County",
      period: "2017 - Present",
      location: "Maryland, United States",
      description: "Teaching Internet of Things and Basic Computer Networking in the Department of Electrical Engineering and Computer Science.",
      achievements: [
        "Developed IoT curriculum for graduate students",
        "Enhanced international academic collaboration"
      ]
    },
    {
      title: "Adjunct Professor",
      institution: "West Virginia University",
      period: "2017 - Present",
      location: "West Virginia, United States",
      description: "Contributing to advanced research and teaching in electrical engineering and control systems.",
      achievements: [
        "International research collaboration",
        "Cross-cultural academic exchange"
      ]
    },
    {
      title: "Visiting Professor",
      institution: "University of Maryland College Park",
      period: "2017 - 2020",
      location: "Maryland, United States",
      description: "Collaborative research and academic exchange in advanced control systems and information technology.",
      achievements: [
        "International research collaboration",
        "Knowledge transfer in cutting-edge technologies"
      ]
    },
    {
      title: "Professor",
      institution: "Iran University of Science and Technology (IUST)",
      period: "1994 - Present",
      location: "Tehran, Iran",
      description: "Professor at the School of Electrical Engineering, specializing in Control Systems, Internet of Things, and Information Technology. Director of Control Group at the College of Electrical Engineering since 2016.",
      achievements: [
        "Led research teams in ICT, IoT, 3D Printers and Control Systems",
        "Supervised numerous Ph.D., M.S. and B.S. students",
        "Published 300+ journal papers and conference papers",
        "Authored 50+ books and book chapters"
      ]
    }
  ]

  const education = [
    {
      degree: "Ph.D. in Electrical Engineering - Control",
      institution: "West Virginia University",
      year: "Completed",
      location: "West Virginia, United States"
    },
    {
      degree: "M.Sc. in Electrical Engineering - Control",
      institution: "University of Oklahoma",
      year: "Completed",
      location: "Oklahoma, United States"
    }
  ]

  return (
    <section id="academic" className="py-24 md:py-28 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-neutral-100 mb-4 font-display">
            Academic Career
          </h2>
          <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-prose mx-auto">
            Over 30 years of distinguished academic service and research excellence
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md border-l-4 border-primary-500 dark:border-primary-400">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-neutral-100 mb-2">{edu.degree}</h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-600 dark:text-neutral-400 text-sm">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Positions */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 text-center">Academic Positions</h3>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-neutral-800">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-1">{position.title}</h4>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">{position.institution}</p>
                    </div>
                    <div className="mt-2 lg:mt-0 text-right">
                      <p className="text-gray-700 dark:text-neutral-300 font-medium">{position.period}</p>
                      <p className="text-gray-500 dark:text-neutral-500 text-sm">{position.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-neutral-200 mb-4 leading-relaxed max-w-prose">{position.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-neutral-100 mb-2 uppercase tracking-wide">
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {position.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-600 dark:text-neutral-300 max-w-prose">
                          <span className="text-primary-500 mr-2 text-sm">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Recognition */}
        <div className="mt-16 bg-primary-50 dark:bg-primary-900/30 p-8 rounded-lg border border-primary-100 dark:border-primary-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-6 text-center">Academic Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">30+</div>
              <p className="text-gray-700 dark:text-neutral-200">Years of Academic Service</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">300+</div>
              <p className="text-gray-700 dark:text-neutral-200">Published Papers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
              <p className="text-gray-700 dark:text-neutral-200">Books & Chapters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}