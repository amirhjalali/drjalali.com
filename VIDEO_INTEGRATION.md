# Video Integration Guide

## Overview
This guide explains how to add real Dr. Ali Akbar Jalali videos to the Media section of the website.

## Current Status
The MediaSection component now shows professional placeholder content instead of rickroll videos. Each video needs to be replaced with actual YouTube content featuring Dr. Jalali.

## Finding Video IDs

### YouTube Video ID Format
YouTube video IDs are the part after `watch?v=` in the URL:
- Full URL: `https://www.youtube.com/watch?v=ABC123xyz`
- Video ID: `ABC123xyz`

### Where to Find Dr. Jalali's Videos

1. **Official YouTube Channel**: https://www.youtube.com/@Professor.Aliakbar.Jalali
2. **University Channels**: Search Iran University of Science and Technology channels
3. **Conference Videos**: Look for IEEE, UNESCO, or technical conference presentations
4. **Interview Channels**: Persian/English tech interview channels
5. **Educational Platforms**: Academic lecture repositories

### Search Terms to Use
- "Ali Akbar Jalali"
- "Professor Jalali IUST"
- "Dr Jalali IoT"
- "Ali Akbar Jalali Iran University"
- "Jalali Control Systems"
- "Father of IT Iran"

## How to Update Videos

### Step 1: Find Real Videos
Search for videos featuring Dr. Jalali using the methods above.

### Step 2: Extract Video IDs
From each YouTube URL, extract the video ID:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 ↑
                          This is the video ID
```

### Step 3: Update the Code
In `src/components/MediaSection.tsx`, replace the placeholder IDs:

```typescript
// Replace this:
youtubeId: 'ACTUAL_VIDEO_ID_1'

// With real video ID:
youtubeId: 'real_video_id_here'
```

## Current Video Placeholders

| ID | Current Title | Category | Description |
|----|---------------|----------|-------------|
| 1 | Internet of Things: Fundamentals and Applications | lecture | IoT technology and applications |
| 2 | Father of IT in Iran: Digital Transformation | interview | Dr. Jalali's IT infrastructure work |
| 3 | Control Systems and Engineering Excellence | lecture | Advanced control theory research |
| 4 | UNESCO eASIA Award: Rural ICT Centers | documentary | Award-winning rural internet project |
| 5 | Innovation in Academic Research | interview | Research methodology and publishing |
| 6 | 3D Printing and Manufacturing Technology | lecture | Additive manufacturing applications |

## Video Content Guidelines

### Preferred Content Types

1. **Lectures**: Technical presentations on:
   - Internet of Things (IoT)
   - Control Systems
   - Information Technology
   - 3D Printing/Manufacturing
   - Engineering Research

2. **Interviews**: Discussions about:
   - Dr. Jalali's career and achievements
   - IT development in Iran
   - Academic research and innovation
   - Technology policy and infrastructure

3. **Documentaries**: Features on:
   - UNESCO eASIA Award project
   - Rural ICT development
   - Dr. Jalali's impact on Iranian technology

### Quality Requirements
- Good audio quality (clear speech)
- Professional or semi-professional video quality
- Relevant to Dr. Jalali's expertise
- Appropriate length (5-60 minutes)
- English or Persian with subtitles preferred

## Testing After Updates

1. **Build the site**: `npm run build`
2. **Check thumbnails**: Verify YouTube thumbnails load correctly
3. **Test video playback**: Click videos to ensure they play properly
4. **Mobile testing**: Verify videos work on mobile devices
5. **Dark mode**: Check video displays in both light and dark themes

## Fallback Strategy

If specific Dr. Jalali videos cannot be found, consider:

1. **University lectures**: General engineering/technology lectures from IUST
2. **Conference presentations**: IEEE or technical conference videos on relevant topics
3. **Educational content**: High-quality lectures on IoT, control systems, etc.
4. **Interview proxies**: Interviews with similar academic figures in Iranian tech

## Example Video Sources

- **IEEE Conferences**: Search IEEE Xplore for video presentations
- **University Channels**: Iran University of Science and Technology YouTube
- **UNESCO Content**: eASIA Award ceremony or related documentation
- **Persian Tech Channels**: Iranian technology and education channels
- **Academic Repositories**: University lecture databases

## Contact for Updates

When you find appropriate videos:
1. Note the YouTube video ID
2. Update the corresponding entry in `MediaSection.tsx`
3. Test the integration
4. Commit and deploy the changes

The placeholder system will automatically detect real video IDs and display proper thumbnails and embeds.