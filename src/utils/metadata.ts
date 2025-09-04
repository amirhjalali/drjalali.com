import { Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
}

export function generateMetadata({
  title = 'Dr. Ali Akbar Jalali',
  description = 'Distinguished Professor at Iran University of Science and Technology',
  keywords = [],
  ogImage = '/images/professional/dr-jalali-professional.png',
  ogType = 'website',
  author = 'Dr. Ali Akbar Jalali',
  publishedTime,
  modifiedTime,
  canonicalUrl = 'https://drjalali.com'
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title.includes('Dr. Ali Akbar Jalali') 
    ? title 
    : `${title} | Dr. Ali Akbar Jalali`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'Dr. Ali Akbar Jalali',
      'Professor',
      'Electrical Engineering',
      'IoT',
      'Information Technology',
      'Iran University of Science and Technology',
      ...keywords
    ].join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    metadataBase: new URL('https://drjalali.com'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Dr. Ali Akbar Jalali',
      locale: 'en_US',
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Dr. Ali Akbar Jalali`,
          type: 'image/png',
        },
        {
          url: ogImage,
          width: 1200,
          height: 1200,
          alt: `${title} - Dr. Ali Akbar Jalali`,
          type: 'image/png',
        }
      ],
      ...(ogType === 'article' && {
        publishedTime,
        modifiedTime,
        authors: [author],
        tags: keywords,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@drjalali',
      site: '@drjalali',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
      bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    },
    category: 'education',
    classification: 'Academic Profile',
  };
}