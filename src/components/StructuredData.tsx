import Script from 'next/script';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Ali Akbar Jalali",
    "alternateName": "علی اکبر جلالی",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "Ph.D.",
    "jobTitle": "Professor of Electrical Engineering",
    "worksFor": {
      "@type": "Organization",
      "name": "Iran University of Science and Technology",
      "sameAs": "https://www.iust.ac.ir"
    },
    "description": "Distinguished Professor at Iran University of Science and Technology, recognized as the Father of Information Technology in Iran",
    "url": "https://drjalali.com",
    "image": "https://drjalali.com/images/professional/dr-jalali-professional.png",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Ali_Akbar_Jalali",
      "https://scholar.google.com/citations?user=yb5J4skAAAAJ&hl=en",
      "https://www.linkedin.com/in/aliakbar-jalali-4569405/",
      "https://www.youtube.com/@Professor.Aliakbar.Jalali",
      "https://www.instagram.com/drjalali_ict/",
      "https://www.researchgate.net/profile/Ali-Akbar-Jalali-2"
    ],
    "nationality": {
      "@type": "Country",
      "name": "Iran"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Iran University of Science and Technology"
      }
    ],
    "award": [
      "Father of Information Technology in Iran",
      "Distinguished Professor Award"
    ],
    "knowsAbout": [
      "Internet of Things (IoT)",
      "Control Systems",
      "Information Technology",
      "Electrical Engineering",
      "Artificial Intelligence",
      "Smart Systems"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dr. Ali Akbar Jalali - Academic Portfolio",
    "alternateName": "Dr. Jalali Portfolio",
    "url": "https://drjalali.com",
    "description": "Official academic portfolio of Dr. Ali Akbar Jalali, Professor at Iran University of Science and Technology",
    "publisher": {
      "@type": "Person",
      "name": "Dr. Ali Akbar Jalali"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://drjalali.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["en", "fa"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drjalali.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://drjalali.com#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Research",
        "item": "https://drjalali.com#research"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Publications",
        "item": "https://drjalali.com#publications"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Dr. Jalali Research Group",
    "url": "https://drjalali.com",
    "logo": "https://drjalali.com/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Dr. Ali Akbar Jalali"
    },
    "description": "Research group led by Dr. Ali Akbar Jalali focusing on IoT and Control Systems",
    "areaServed": "International",
    "memberOf": {
      "@type": "Organization",
      "name": "Iran University of Science and Technology"
    }
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}