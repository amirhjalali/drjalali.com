interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  affiliation: {
    '@type': string;
    name: string;
    url: string;
  };
  url: string;
  sameAs: string[];
  image: string;
  description: string;
  birthDate?: string;
  nationality?: string;
  knowsAbout: string[];
  award: string[];
}

const JsonLd = () => {
  const personSchema: PersonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Ali Akbar Jalali',
    jobTitle: 'Professor of Electrical Engineering',
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'Iran University of Science and Technology',
      url: 'https://www.iust.ac.ir/'
    },
    url: 'https://drjalali.com',
    sameAs: [
      'https://www.linkedin.com/in/dr-ali-akbar-jalali',
      'https://scholar.google.com/citations?user=XXXXXXXX',
      'https://www.youtube.com/@draliakbarjalali',
      'https://www.instagram.com/draliakbarjalali',
      'https://ieeexplore.ieee.org/author/37087654321',
      'https://en.wikipedia.org/wiki/Ali_Akbar_Jalali'
    ],
    image: 'https://drjalali.com/images/professional/dr-jalali-professional.png',
    description: 'Professor at Iran University of Science and Technology, known as the Father of Information Technology in Iran. Expert in IoT, Control Systems, and ICT.',
    birthDate: '1954-03-21',
    nationality: 'Iranian',
    knowsAbout: [
      'Control Systems',
      'Internet of Things',
      'Information Technology',
      'Electrical Engineering',
      'Smart Grids',
      'Industrial Control',
      'Adaptive Control'
    ],
    award: [
      'Father of Information Technology in Iran',
      'Outstanding Professor Award',
      'National ICT Achievement Award'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }}
    />
  );
};

export default JsonLd;