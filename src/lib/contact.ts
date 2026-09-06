export const WHATSAPP_MESSAGE = "Hello AevyronWeb, I'd like to discuss a project.";

/** The single studio WhatsApp / phone line. */
export const ELLIOT_PHONE = "+91 77060 36226";

/** Official studio email. */
export const EMAIL = "aevyronweb@gmail.com";

export const ELLIOT_EMAIL = "alimhussain12665@gmail.com";
export const VORTEXKAI_EMAIL = "thisisvortexkai@gmail.com";

export const ELLIOT_INSTAGRAM_HANDLE = "_the.real.elliot";
export const VORTEXKAI_INSTAGRAM_HANDLE = "vortexkai_";
export const ELLIOT_INSTAGRAM_URL = `https://instagram.com/${ELLIOT_INSTAGRAM_HANDLE}`;
export const VORTEXKAI_INSTAGRAM_URL = `https://instagram.com/${VORTEXKAI_INSTAGRAM_HANDLE}`;

export const X_URL = "https://x.com/aevyronweb";

const digits = (phone: string) => phone.replace(/\D/g, "");

export const waLink = (phone: string, message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${digits(phone)}?text=${encodeURIComponent(message)}`;

/** The only WhatsApp integration in the project. */
export const WHATSAPP_URL = waLink(ELLIOT_PHONE);

export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("AevyronWeb Project Enquiry")}`;
export const mailtoFor = (address: string) =>
  `mailto:${address}?subject=${encodeURIComponent("AevyronWeb Project Enquiry")}`;

export type Person = {
  name: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  phone?: string;
  whatsapp?: string;
  focus: string[];
};

export const people: Person[] = [
  {
    name: "THEREALELLIOT",
    email: ELLIOT_EMAIL,
    instagramHandle: ELLIOT_INSTAGRAM_HANDLE,
    instagramUrl: ELLIOT_INSTAGRAM_URL,
    phone: ELLIOT_PHONE,
    whatsapp: WHATSAPP_URL,
    focus: [
      "Development",
      "Technical implementation",
      "Project organization",
      "Client communication",
    ],
  },
  {
    name: "VORTEXKAI",
    email: VORTEXKAI_EMAIL,
    instagramHandle: VORTEXKAI_INSTAGRAM_HANDLE,
    instagramUrl: VORTEXKAI_INSTAGRAM_URL,
    focus: ["Development", "Design systems", "Interface engineering", "Project support"],
  },
];
