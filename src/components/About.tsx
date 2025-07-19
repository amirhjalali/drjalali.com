import Timeline from './Timeline'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Jalali
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished academic and technology pioneer who has shaped Iran&apos;s digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Biography
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Born on November 22, 1954, in Shahkooh, Shahroud, Iran, Dr. Ali Akbar Jalali 
                has become one of the most influential figures in Iran&apos;s technological development. 
                Known as the &quot;Father of Information Technology in Iran,&quot; he has dedicated his career 
                to advancing technology and education.
              </p>
              <p>
                Dr. Jalali earned his PhD in Electrical Engineering-Control from West Virginia University 
                and his MSc in Electrical Engineering-Control from the University of Oklahoma. His academic 
                journey has been marked by continuous innovation and groundbreaking research.
              </p>
              <p>
                Since 1994, he has been a professor at Iran University of Science and Technology, 
                where he has shaped the minds of countless students and contributed significantly 
                to the field of electrical engineering and information technology.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Pioneer of internet development in Iranian villages
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Author of 50+ books and 300+ research papers
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Expert in IoT, Control Systems, and ICT
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  30+ years of academic excellence
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Current Positions
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Professor</strong><br />
                  Iran University of Science and Technology
                </li>
                <li>
                  <strong>Adjunct Professor</strong><br />
                  University of Maryland Baltimore County
                </li>
                <li>
                  <strong>Adjunct Professor</strong><br />
                  West Virginia University
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Career Journey</h3>
          <Timeline />
        </div>
      </div>
    </section>
  )
}