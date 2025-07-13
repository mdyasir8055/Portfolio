# Setting Up Formspree for Your Portfolio Contact Form

This guide will help you set up Formspree to receive contact form submissions directly to your email address (mdyasir3011@gmail.com).

## Step 1: Create a Formspree Account

1. Go to [Formspree website](https://formspree.io/) and sign up for a free account
2. The free plan allows 50 submissions per month, which should be sufficient for a portfolio site

## Step 2: Create a Form

1. In your Formspree dashboard, click "New Form"
2. Name your form (e.g., "portfolio-contact")
3. Set your receiving email to mdyasir3011@gmail.com
4. Complete the setup and you'll get a form endpoint URL like: `https://formspree.io/f/xxxxxxxz`
   - The last part of this URL is your Formspree ID (e.g., `xxxxxxxz`)

## Step 3: Update Your Code

1. Open `src/components/sections/contact-section.tsx`
2. Find line 37 with: `const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {`
3. Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID

Example:
```typescript
const response = await fetch('https://formspree.io/f/xnqkgvdp', {
```

## Step 4: Deploy Your Portfolio to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy your project

## Step 5: Test Your Form

1. Visit your deployed portfolio site
2. Fill out the contact form and submit
3. Check your email (mdyasir3011@gmail.com) to see if you received the test message

## Troubleshooting

- If you don't receive emails, check your spam folder
- Verify that your Formspree account is active
- Check the browser console for any errors during form submission
- Make sure your Formspree form ID is correct

## Benefits of Using Formspree

- No server-side code required
- Works seamlessly with static sites
- Free tier includes 50 submissions per month
- Built-in spam filtering
- Email notifications for new submissions
- Compatible with Vercel hosting

## Security and Privacy

- Formspree handles the email sending process securely
- Your email address is not exposed in the client-side code
- Formspree provides GDPR-compliant forms
- You can add reCAPTCHA to prevent spam (in the Formspree dashboard)

## Additional Features

If you need more advanced features, Formspree offers:

- Custom email templates
- File uploads
- Webhooks
- Form analytics
- Custom success/error pages

These are available on paid plans if you need them in the future.