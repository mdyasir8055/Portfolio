# Alternative: Using Formspree for Your Contact Form

If you find EmailJS setup too complex, Formspree offers a simpler alternative that requires minimal code changes.

## Step 1: Create a Formspree Account

1. Go to [Formspree website](https://formspree.io/) and sign up for a free account
2. The free plan allows 50 submissions per month

## Step 2: Create a Form

1. In your Formspree dashboard, click "New Form"
2. Name your form (e.g., "portfolio-contact")
3. Set your receiving email to mdyasir3011@gmail.com
4. Complete the setup and you'll get a form endpoint URL like: `https://formspree.io/f/xxxxxxxz`

## Step 3: Update Your Contact Form

Replace the current handleSubmit function in your contact-section.tsx with this simpler version:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      toast({
        title: contactData.successMessage.title,
        description: contactData.successMessage.description,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast({
      title: "Error",
      description: "Failed to send your message. Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

Replace `YOUR_FORM_ID` with the unique identifier from your Formspree form URL.

## Step 4: Test Your Form

1. Run your portfolio site
2. Fill out the contact form and submit
3. Check your email (mdyasir3011@gmail.com) to see if you received the test message

## Advantages of Formspree

- No need to load additional JavaScript libraries
- Simpler setup with fewer configuration steps
- Built-in spam filtering
- Email notifications for new submissions

## Limitations

- Free plan limited to 50 submissions per month
- Less customization compared to EmailJS