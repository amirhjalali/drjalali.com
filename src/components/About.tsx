import Timeline from './Timeline'
import { SlideUp, FadeIn } from './ScrollAnimation'
import ProfessionalPhoto from './ProfessionalPhoto'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-neutral-100 mb-4">
              About Dr. Jalali
            </h2>
          </SlideUp>
          <FadeIn delay={200}>
            <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
              A distinguished academic and technology pioneer who has shaped Iran&apos;s digital landscape
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideUp delay={100}>
            <div>
              {/* Academic Profile Photo */}
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg ring-4 ring-primary-100 dark:ring-primary-800">
                    <ProfessionalPhoto 
                      src="/images/professional/dr-jalali-professional.jpg"
                      className="w-full h-full"
                      alt="Dr. Ali Akbar Jalali - Academic Profile"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-2">
                    Biography
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Professor of Electrical Engineering
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-neutral-300 leading-relaxed">
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
          </SlideUp>

          <SlideUp delay={200}>
            <div className="space-y-8">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border border-primary-100 dark:border-primary-800">
              <h4 className="text-lg font-semibold text-primary-800 dark:text-primary-300 mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Pioneer of internet development in Iranian villages
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Author of 50+ books and 300+ research papers
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Expert in IoT, Control Systems, and ICT
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  30+ years of academic excellence
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-3">
                Current Positions
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-neutral-300">
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
          </SlideUp>
        </div>

        {/* Career Timeline */}
        <div className="mt-20">
          <SlideUp>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-10 text-center">Career Journey</h3>
          </SlideUp>
          <FadeIn delay={300}>
            <Timeline />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}