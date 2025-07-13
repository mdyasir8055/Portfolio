# Setting Up EmailJS for Your Portfolio Contact Form

This guide will help you set up EmailJS to receive contact form submissions directly to your email address (mdyasir3011@gmail.com).

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for a portfolio site

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services" tab
2. Click "Add New Service"
3. Choose an email provider (Gmail is a common choice)
4. Follow the authentication steps to connect your email account
5. Name your service (e.g., "portfolio_contact")
6. Note down the **Service ID** for later use

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email of the person contacting you
   - `{{message}}` - The message content
4. Example template:
   ```
   Subject: New Contact from Portfolio: {{from_name}}

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}
   ```
5. Save the template and note down the **Template ID**

## Step 4: Get Your User ID

1. Go to "Account" > "API Keys"
2. Copy your **Public Key** (this is your User ID)

## Step 5: Update Your Code

1. Open `src/components/sections/contact-section.tsx`
2. Replace the placeholder values with your actual EmailJS credentials:
   - Replace `YOUR_USER_ID` with your Public Key
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID

```typescript
// Initialize EmailJS with your user ID
(window as any).emailjs.init("YOUR_PUBLIC_KEY"); // Line 42

// Send email using EmailJS
const result = await (window as any).emailjs.send(
  "YOUR_SERVICE_ID", // Line 64
  "YOUR_TEMPLATE_ID", // Line 65
  {
    to_email: "mdyasir3011@gmail.com",
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

## Step 6: Test Your Form

1. Run your portfolio site
2. Fill out the contact form and submit
3. Check your email (mdyasir3011@gmail.com) to see if you received the test message

## Troubleshooting

- If emails aren't being received, check the browser console for errors
- Verify that your EmailJS account is active and the service is connected properly
- Make sure your template variables match the data you're sending

## Security Note

The EmailJS public key is designed to be used on the client side, but it's still good practice to be cautious with your credentials. The free tier has rate limiting to prevent abuse.