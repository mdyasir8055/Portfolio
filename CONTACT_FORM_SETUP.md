# Setting Up Your Portfolio Contact Form

This guide will help you set up your contact form to receive messages at mdyasir3011@gmail.com.

## Formspree Setup (Recommended)

1. Go to [Formspree website](https://formspree.io/) and sign up for a free account
2. Create a new form and set your receiving email to mdyasir3011@gmail.com
3. After creating the form, you'll get a form endpoint URL like: `https://formspree.io/f/xxxxxxxz`
4. Open `src/components/sections/contact-section.tsx`
5. Find line 37 with: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
6. Replace `YOUR_FORM_ID` with the unique identifier from your Formspree form URL

Example:
```typescript
const response = await fetch('https://formspree.io/f/xnqkgvdp', {
```

## Testing Your Form

1. Run your portfolio site
2. Fill out the contact form and submit
3. Check your email (mdyasir3011@gmail.com) to see if you received the test message

## Troubleshooting

- If you don't receive emails, check your spam folder
- Verify that your Formspree account is active
- Check the browser console for any errors during form submission

## Alternative Options

If you prefer not to use Formspree, check these alternative setup guides:

1. [EmailJS Setup](./EMAILJS_SETUP.md) - More customizable but requires more setup
2. [Netlify Forms](./NETLIFY_FORMS_OPTION.md) - Great if you're hosting on Netlify

## Benefits of Using Formspree

- Simple setup with minimal code changes
- Free tier includes 50 submissions per month
- Built-in spam filtering
- No server-side code required
- Email notifications for new submissions