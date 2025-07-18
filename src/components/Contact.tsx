export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Links
          </h2>
          <p className="text-xl text-gray-600">
            Connect with Dr. Jalali through his professional platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Scholar</h3>
            <p className="text-gray-600">Academic publications and citations</p>
          </a>

          <a
            href="https://www.linkedin.com/in/aliakbar-jalali-4569405/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600">Professional network and experience</p>
          </a>

          <a
            href="https://ieeexplore.ieee.org/author/37300412300"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-700"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">IEEE Xplore</h3>
            <p className="text-gray-600">Technical publications and research</p>
          </a>

          <a
            href="https://www.youtube.com/@Professor.Aliakbar.Jalali"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">YouTube</h3>
            <p className="text-gray-600">Educational content and lectures</p>
          </a>

          <a
            href="https://www.instagram.com/drjalali_ict/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-pink-500"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600">Professional updates and insights</p>
          </a>

          <a
            href="https://en.wikipedia.org/wiki/Ali_Akbar_Jalali"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-gray-600"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Wikipedia</h3>
            <p className="text-gray-600">Biographical information</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Academic Affiliations
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Iran University of Science and Technology</strong><br />
                Professor, School of Electrical Engineering
              </p>
              <p>
                <strong>University of Maryland Baltimore County</strong><br />
                Adjunct Professor, Department of Electrical Engineering and Computer Science
              </p>
              <p>
                <strong>West Virginia University</strong><br />
                Adjunct Professor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}