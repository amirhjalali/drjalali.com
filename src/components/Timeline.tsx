interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'education' | 'career' | 'achievement'
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1954",
    title: "Born in Shahkooh, Shahroud",
    description: "Born on November 22, 1954, in Shahkooh, Shahroud, Iran",
    type: "achievement"
  },
  {
    year: "1970s",
    title: "Educational Foundation",
    description: "Completed primary and secondary education in Iran, showing early aptitude for mathematics and science",
    type: "education"
  },
  {
    year: "1980s",
    title: "Master's Degree - University of Oklahoma",
    description: "Earned M.Sc. in Electrical Engineering - Control Systems from the University of Oklahoma",
    type: "education"
  },
  {
    year: "1990s",
    title: "Ph.D. - West Virginia University",
    description: "Completed Ph.D. in Electrical Engineering - Control Systems at West Virginia University",
    type: "education"
  },
  {
    year: "1994",
    title: "Professor at IUST",
    description: "Joined Iran University of Science and Technology as Professor in the School of Electrical Engineering",
    type: "career"
  },
  {
    year: "2000s",
    title: "Pioneer of Internet in Rural Iran",
    description: "Led groundbreaking initiatives to expand internet infrastructure to rural areas of Iran",
    type: "achievement"
  },
  {
    year: "2006",
    title: "Published 'Reduced Order Systems'",
    description: "Published reference book on advanced control systems theory with Springer",
    type: "achievement"
  },
  {
    year: "2016",
    title: "Director of Control Group",
    description: "Appointed as Director of Control Group at the College of Electrical Engineering, IUST",
    type: "career"
  },
  {
    year: "2017",
    title: "International Academic Positions",
    description: "Became Adjunct Professor at University of Maryland Baltimore County and West Virginia University",
    type: "career"
  },
  {
    year: "Present",
    title: "Father of Information Technology in Iran",
    description: "Recognized internationally for contributions to IT development in Iran, with 300+ publications and 50+ books",
    type: "achievement"
  }
]

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-neutral-600"></div>
      
      {/* Timeline events */}
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className={`
              absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 ring-4 ring-white dark:ring-neutral-900
              ${event.type === 'education' ? 'bg-blue-500' : 
                event.type === 'career' ? 'bg-green-500' : 
                'bg-primary-500'}
            `}></div>
            
            {/* Content */}
            <div className="ml-16 pb-8">
              <div className="flex items-center mb-2">
                <span className="text-sm font-semibold text-gray-500 dark:text-neutral-400 mr-4">
                  {event.year}
                </span>
                <span className={`
                  px-2 py-1 text-xs font-medium rounded-full
                  ${event.type === 'education' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 
                    event.type === 'career' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 
                    'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'}
                `}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-neutral-100 mb-1">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}