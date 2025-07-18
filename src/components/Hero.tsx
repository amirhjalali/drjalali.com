export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dr. Ali Akbar Jalali
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 mt-4 font-medium">
              Father of Information Technology in Iran
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Professor of Electrical Engineering at Iran University of Science and Technology. 
              Pioneer in Internet of Things, Control Systems, and Information Technology with 
              over 30 years of academic excellence and 300+ published papers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#research"
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
              >
                View Research
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
              {/* Placeholder for photo */}
              <div className="text-primary-700 text-6xl font-bold">
                Dr. J
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}