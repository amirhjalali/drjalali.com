export default function Research() {
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

  const keyPublications = [
    {
      title: "Reduced Order Systems",
      type: "Book",
      publisher: "Springer",
      year: "2006",
      description: "Reference book on advanced control systems theory, widely cited in the field of control engineering.",
      category: "Control Theory"
    },
    {
      title: "Internet Infrastructure Development in Rural Areas",
      type: "Research Papers",
      year: "2000s-Present",
      description: "Series of papers on expanding internet access to underserved communities in Iran.",
      category: "ICT Development"
    },
    {
      title: "IoT Applications in Industrial Systems",
      type: "Journal Articles",
      year: "2010s-Present",
      description: "Comprehensive research on implementing IoT solutions in industrial environments.",
      category: "Internet of Things"
    }
  ]

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Research & Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering research in control systems, IoT, and information technology with global impact
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{area.icon}</span>
                  <h4 className="text-xl font-bold text-gray-900">{area.title}</h4>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{area.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Publications</h3>
          <div className="space-y-6">
            {keyPublications.map((pub, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{pub.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                        {pub.type}
                      </span>
                      <span>{pub.year}</span>
                      {pub.publisher && <span>{pub.publisher}</span>}
                    </div>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                    {pub.category}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-primary-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
              <p className="text-gray-700">Research Papers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <p className="text-gray-700">Books & Chapters</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-gray-700">Years of Research</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">Pioneer</div>
              <p className="text-gray-700">IT in Iran</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 italic">
              &ldquo;Recognized as the Father of Information Technology in Iran for pioneering work in internet infrastructure and digital transformation.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}