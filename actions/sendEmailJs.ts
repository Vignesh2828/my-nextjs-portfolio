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
