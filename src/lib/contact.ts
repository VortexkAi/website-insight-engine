export const WHATSAPP_MESSAGE = "Hello AevyronWeb, I'd like to discuss a project.";

export const PRINCE_PHONE = "+91 97797 92852";
export const ELLIOT_PHONE = "+91 77060 36226";
export const TRAXX_PHONE = "+91 74839 41088";

export const EMAIL = "aeyronweb@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/aevyronweb";
export const X_URL = "https://x.com/aevyronweb";

const digits = (phone: string) => phone.replace(/\D/g, "");

export const waLink = (phone: string, message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${digits(phone)}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_PRINCE = waLink(PRINCE_PHONE);

export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("AevyronWeb Project Enquiry")}`;
