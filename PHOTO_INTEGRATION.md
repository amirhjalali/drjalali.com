# Professional Photo Integration Guide

## Overview
This guide explains how to integrate Dr. Ali Akbar Jalali's professional photo into the website.

## Photo Requirements

### Technical Specifications
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **Resolution**: Minimum 800x800px (square aspect ratio)
- **Recommended**: 1200x1200px for high-quality display
- **File Size**: Maximum 500KB (optimize for web)
- **Background**: Professional background or can be transparent PNG

### Professional Standards
- **Style**: Professional headshot or upper body
- **Attire**: Business/academic professional clothing
- **Background**: Neutral, academic, or office setting
- **Lighting**: Well-lit, professional studio or natural lighting
- **Expression**: Confident, approachable, academic demeanor

## Integration Steps

### Step 1: Prepare the Photo
1. Ensure photo meets technical specifications above
2. Crop to square aspect ratio (1:1)
3. Optimize file size using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Online image compressors

### Step 2: Upload Photo
1. Save the photo as `dr-jalali-professional.jpg` or `dr-jalali-professional.png`
2. Place in `public/images/professional/` directory
3. Ensure filename is exactly: `dr-jalali-professional.jpg`

### Step 3: Update Code
Update the Hero component to use the photo:

```typescript
// In src/components/Hero.tsx, update the ProfessionalPhoto component usage:
<ProfessionalPhoto 
  src="/images/professional/dr-jalali-professional.jpg"
  className="w-full h-full"
  alt="Dr. Ali Akbar Jalali - Professor of Electrical Engineering"
/>
```

### Step 4: Alternative Integration Points
The ProfessionalPhoto component can also be used in:

1. **About Section**: Smaller version in biography
2. **Contact Section**: Professional contact photo  
3. **Academic Career**: Faculty profile image
4. **Media Section**: Press photo

## Fallback Design
The current implementation includes a sophisticated placeholder that:
- Shows professional academic styling
- Includes Dr. Jalali's initials (Dr. A.A.J)
- Features academic icons and patterns
- Maintains professional appearance until photo is added
- Supports both light and dark themes

## Advanced Options

### Multiple Photo Support
To support multiple professional photos:

```typescript
// Example: Different photos for different sections
<ProfessionalPhoto 
  src="/images/professional/dr-jalali-hero.jpg"      // Hero section
  className="w-full h-full"
/>

<ProfessionalPhoto 
  src="/images/professional/dr-jalali-about.jpg"     // About section
  className="w-32 h-32"
/>
```

### Responsive Images
The component automatically handles responsive sizing and optimization using Next.js Image component.

## Testing
After integration:
1. Test on desktop and mobile
2. Verify loading performance
3. Check both light and dark theme compatibility
4. Ensure accessibility (alt text, etc.)

## Future Enhancements
- Photo gallery for multiple professional images
- Automatic image optimization pipeline
- Dynamic photo switching based on page section
- Integration with headless CMS for easy photo management

## Contact
For technical assistance with photo integration, refer to the development team or create an issue in the project repository.