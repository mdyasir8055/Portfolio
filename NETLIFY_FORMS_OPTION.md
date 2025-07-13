# Using Netlify Forms for Your Contact Form

If you're hosting your portfolio on Netlify, you can use Netlify Forms which is included with your hosting.

## Step 1: Prepare Your Form

Update your form in contact-section.tsx to include the Netlify form attributes:

```jsx
<form 
  onSubmit={handleSubmit} 
  className="space-y-6"
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <div hidden>
    <input name="bot-field" />
  </div>
  
  {/* Rest of your form fields */}
</form>
```

## Step 2: Update Your handleSubmit Function

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Create FormData object
    const formDataObj = new FormData();
    formDataObj.append('form-name', 'contact');
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('message', formData.message);

    // Submit the form
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as any).toString(),
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

## Step 3: Configure Form Notifications

1. After deploying to Netlify, go to your Netlify dashboard
2. Navigate to Site settings > Forms > Form notifications
3. Click "Add notification" and select "Email notification"
4. Set up the notification to send to mdyasir3011@gmail.com

## Advantages of Netlify Forms

- No third-party service needed
- Built-in spam filtering
- 100 submissions per month on the free plan
- No additional JavaScript required
- Seamless integration with Netlify hosting

## Limitations

- Only works if you're hosting on Netlify
- Limited customization of email templates on the free plan