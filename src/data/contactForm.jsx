// src/features/contact/sendContactEmail.js
import emailjs from "emailjs-com";

export async function contactForm(formRef) {
  try {
    const result = await emailjs.sendForm(
      "service_k9px82f",
      "template_dq105gm",
      formRef.current,
      "cYD_uSDBPdFvzD32c"        
      
    );
    return { success: true, result };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
