# Google Forms Contact Setup

The contact form uses Google Forms as a backend. This is 100% free and sends responses to your email.

## Setup Instructions (10 minutes)

### Step 1: Create a Google Form
1. Go to [Google Forms](https://forms.google.com)
2. Click the "+" to create a new form
3. Add these fields in this exact order:
   - **Name** (Short answer)
   - **Email** (Short answer)
   - **Subject** (Short answer)
   - **Message** (Paragraph)

### Step 2: Get Form Response URL
1. Click the "Preview" button (eye icon)
2. Right-click and "Inspect" the form
3. Look for `<form action="...">`
4. Copy the URL from the action attribute
   - It looks like: `https://docs.google.com/forms/d/e/1FAIpQLSe.../formResponse`

### Step 3: Get Field IDs
1. In the preview, right-click on each input field
2. Select "Inspect"
3. Look for `name="entry.12345678"`
4. Note down each entry ID:
   - Name field: `entry.XXXXXXX`
   - Email field: `entry.XXXXXXX`
   - Subject field: `entry.XXXXXXX`
   - Message field: `entry.XXXXXXX`

### Step 4: Update the Code
1. Open `src/components/ContactForm.tsx`
2. Find the `GOOGLE_FORM_URL` constant
3. Replace `YOUR_FORM_ID` with your form's URL
4. Replace each `entry.XXXXXXX` with your actual field IDs

### Step 5: Configure Email Notifications
1. In your Google Form, click the "Responses" tab
2. Click the three dots menu
3. Select "Get email notifications for new responses"
4. Responses will be sent to your Google account email

## Example Code Update
```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeABC123.../formResponse';

const googleFormData = new FormData();
googleFormData.append('entry.1234567890', contactFormData.name);     // Name field
googleFormData.append('entry.0987654321', contactFormData.email);    // Email field
googleFormData.append('entry.1122334455', contactFormData.subject);  // Subject field
googleFormData.append('entry.5544332211', contactFormData.message);  // Message field
```

## Benefits
- Completely free
- No API keys needed
- Automatic email notifications
- Responses saved in Google Sheets
- Works with no-cors (no backend needed)
- Google's reliability

## Testing
1. Fill out the form on your website
2. Submit it
3. Check your Google Form responses
4. You should get an email notification