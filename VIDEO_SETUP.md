# Video Setup Instructions

## How to Replace Video Placeholder IDs

To display actual videos from Dr. Jalali's YouTube channel in the Media section:

### Step 1: Find Video IDs
1. Go to [Dr. Jalali's YouTube Channel](https://www.youtube.com/@Professor.Aliakbar.Jalali)
2. Select the videos you want to feature (recommend 3 most popular or recent)
3. For each video, extract the video ID from the URL:
   - Example: `https://www.youtube.com/watch?v=ABC123DEF456`
   - Video ID is: `ABC123DEF456`

### Step 2: Update the MediaSection Component
Edit `/src/components/MediaSection.tsx` and replace the placeholder video IDs:

```typescript
const videos: Video[] = [
  {
    id: '1',
    title: 'Internet of Things: Fundamentals and Applications',
    description: 'Dr. Jalali discusses IoT technology, smart systems, and their real-world applications in industry and daily life',
    youtubeId: 'REPLACE_WITH_ACTUAL_VIDEO_ID', // Replace this
    category: 'lecture'
  },
  {
    id: '2', 
    title: 'Father of IT in Iran: A Journey Through Digital Transformation',
    description: 'An in-depth interview with Dr. Jalali about his pioneering work in establishing Iran\'s information technology infrastructure',
    youtubeId: 'REPLACE_WITH_ACTUAL_VIDEO_ID', // Replace this
    category: 'interview'
  },
  {
    id: '3',
    title: 'Control Systems and Engineering Excellence', 
    description: 'Exploring Dr. Jalali\'s contributions to advanced control theory and his published research on reduced-order systems',
    youtubeId: 'REPLACE_WITH_ACTUAL_VIDEO_ID', // Replace this
    category: 'lecture'
  }
]
```

### Step 3: Update Video Metadata (Optional)
You may also want to update the titles and descriptions to match the actual video content.

### Step 4: Test and Deploy
1. Run `npm run build` to ensure everything compiles correctly
2. Test the video playback functionality
3. Commit and push changes to deploy

## Current Status
- **Placeholder System**: ✅ Implemented and working
- **Video Infrastructure**: ✅ Ready for real video IDs
- **Video IDs**: ⏳ Waiting for manual replacement with actual Dr. Jalali videos

## Notes
- Videos will display as "Video Coming Soon" placeholders until real IDs are added
- The modal video player is fully functional and ready for real content
- YouTube integration is properly configured for iframe embedding