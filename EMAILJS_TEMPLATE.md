# EmailJS Setup Instructions for Sports Educate Foundation

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to Email Services → Add New Service
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account: `info.sportseducate@gmail.com`
4. Note down your **Service ID**

## Step 3: Create Email Template
Create a new template with the following settings:

### Template Details:
- **Template Name**: "Sports Educate Contact Form"
- **Subject**: `New Contact Form Submission from {{from_name}}`

### Email Content (HTML):
```html
<h3>New Contact Form Submission</h3>
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<br>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<br>
<hr>
<p><em>This email was sent from Sports Educate Foundation contact form</em></p>
```

### Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone number
- `{{subject}}` - Subject selection
- `{{message}}` - Message content

## Step 4: Get Your Keys
1. Go to Account → API Keys
2. Note down your **Public Key**
3. Note down your **Service ID** (from Step 2)
4. Note down your **Template ID** (from Step 3)

## Step 5: Update Configuration
Update the following values in `src/services/emailjs.ts`:

```typescript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
```

## Step 6: Test the Contact Form
1. Start your development server
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message

## Important Notes:
- The free EmailJS plan allows 200 emails per month
- Make sure your email provider allows third-party sending
- Test thoroughly before deploying to production
- Keep your API keys secure and never expose them in frontend code

## Troubleshooting:
- If emails don't send, check your EmailJS dashboard for error logs
- Ensure all template variables match exactly
- Verify your email service is properly connected
- Check that your receiving email is correct: `info.sportseducate@gmail.com`
