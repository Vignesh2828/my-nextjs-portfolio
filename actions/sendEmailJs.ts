import emailjs from "@emailjs/browser";

export const sendEmail = async (values: {
  senderEmail: string;
  message: string;
}) => {
  const templateParams = {
    from_email: values.senderEmail,
    message: values.message,
  };

  try {
    if (!process.env.EMAIL_SERVICE_ID || !process.env.EMAIL_TEMPLATE_ID || !process.env.EMAIL_PUBLIC_KEY) {
      throw new Error("Missing required environment variables for EmailJS.");
    }

    const result = await emailjs.send(
      'service_z5ugceq',
      'template_z4ca7j2',
      templateParams,
      '5NzJBKx3Oo-zmAq4D'
    );

    return { success: true, result };
  } catch (error) {
    console.error("EmailJS error", error);
    return { success: false, error };
  }
};
