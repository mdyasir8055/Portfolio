# Setting Up Email Functionality with Vercel

This guide will help you set up your contact form to send emails to mdyasir3011@gmail.com using Vercel's serverless functions.

## Step 1: Create a Gmail App Password

Since you'll be using Gmail to send emails, you need to create an app password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification" (enable it if not already enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" as the app and "Other" as the device (name it "Portfolio Contact Form")
6. Click "Generate" and copy the 16-character password that appears

## Step 2: Set Up Environment Variables in Vercel

When you deploy your portfolio to Vercel, you'll need to set up environment variables:

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add the following environment variables:
   - `EMAIL_USER`: Your Gmail address (mdyasir3011@gmail.com)
   - `EMAIL_PASS`: The app password you generated in Step 1

## Step 3: Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy your project

## Testing Your Contact Form

After deployment:
1. Visit your portfolio site
2. Fill out the contact form and submit
3. Check your email (mdyasir3011@gmail.com) to see if you received the test message

## Troubleshooting

If emails aren't being sent:

1. Check the Vercel function logs in your Vercel dashboard
2. Verify that your environment variables are set correctly
3. Make sure your Gmail account allows less secure apps or that you're using an app password
4. Check if there are any CORS issues (the API endpoint should be on the same domain)

## Security Notes

- Never commit your email password or app password to your repository
- Always use environment variables for sensitive information
- The app password gives access only to the specific application you created it for
- Consider implementing rate limiting to prevent abuse of your contact form