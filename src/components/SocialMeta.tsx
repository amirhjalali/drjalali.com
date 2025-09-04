export default function SocialMeta() {
  return (
    <>
      {/* Facebook Open Graph */}
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_APP_ID} />
      <meta property="og:locale:alternate" content="fa_IR" />
      <meta property="og:locale:alternate" content="ar_AE" />
      
      {/* Twitter Card Additional Tags */}
      <meta name="twitter:app:name:iphone" content="Dr. Jalali Portfolio" />
      <meta name="twitter:app:name:ipad" content="Dr. Jalali Portfolio" />
      <meta name="twitter:app:name:googleplay" content="Dr. Jalali Portfolio" />
      
      {/* LinkedIn */}
      <meta property="article:author" content="https://www.linkedin.com/in/drjalali" />
      
      {/* Schema.org for Google+ */}
      <meta itemProp="name" content="Dr. Ali Akbar Jalali" />
      <meta itemProp="description" content="Professor and Father of Information Technology in Iran" />
      <meta itemProp="image" content="https://drjalali.com/images/professional/dr-jalali-professional.png" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dr. Jalali" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IR" />
      <meta name="geo.placename" content="Tehran" />
      <meta name="geo.position" content="35.6892;51.3890" />
      <meta name="ICBM" content="35.6892, 51.3890" />
      
      {/* Dublin Core Metadata */}
      <meta name="DC.Title" content="Dr. Ali Akbar Jalali - Academic Portfolio" />
      <meta name="DC.Creator" content="Dr. Ali Akbar Jalali" />
      <meta name="DC.Subject" content="Information Technology, IoT, Control Systems" />
      <meta name="DC.Description" content="Academic portfolio of Dr. Ali Akbar Jalali" />
      <meta name="DC.Publisher" content="Dr. Ali Akbar Jalali" />
      <meta name="DC.Type" content="Interactive Resource" />
      <meta name="DC.Format" content="text/html" />
      <meta name="DC.Language" content="en" />
      <meta name="DC.Coverage" content="Iran" />
      <meta name="DC.Rights" content="Copyright © Dr. Ali Akbar Jalali" />
    </>
  );
}