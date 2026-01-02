import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'cb8dOKLoV0W0MA_ZS'; // Replace with your EmailJS public key
const EMAILJS_SERVICE_ID = 'service_33w9dwd'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_qgs6hkv'; // Replace with your EmailJS TEMPLATE ID (not service ID)

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      to_email: 'info.sportseducate@gmail.com', // Your receiving email
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
