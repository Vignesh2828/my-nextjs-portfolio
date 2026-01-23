"use server";

type SendEmailInput = {
  senderEmail: string;
  message: string;
};

export async function sendEmail({
  senderEmail,
  message,
}: SendEmailInput) {
  if (!senderEmail || !message) {
    return { error: "Missing required fields" };
  }

  if (senderEmail.length > 320 || message.length > 5000) {
    return { error: "Input too long" };
  }

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PRIVATE_KEY, // PRIVATE KEY (not public)
        template_params: {
          from_email: senderEmail,
          message: `${message}\n\nFrom: ${senderEmail}`,
        },
      }),
    });

    if (!res.ok) {
      throw new Error("EmailJS API failed");
    }

    return { success: true };
  } catch (err) {
    console.error("Email send failed:", err);
    return { error: "Failed to send email" };
  }
}
