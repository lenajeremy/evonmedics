import { Metadata } from "next";
import ContactUsPage from "@/components/pages/contact/main-page";

export const metadata: Metadata = {
  title: "Contact Us - EvonMedics Partnership & Collaboration",
  description: "Get in touch with EvonMedics to discuss products, partnerships, or collaboration opportunities. Our team will contact you within 3 business days.",
  openGraph: {
    title: "Contact Us - EvonMedics Partnership & Collaboration",
    description: "Get in touch with EvonMedics to discuss products, partnerships, or collaboration opportunities. Our team will contact you within 3 business days.",
    url: "https://evonmedics.com/contact",
    images: [
      {
        url: "/images/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "EvonMedics Contact - Partnership & Collaboration",
      },
    ],
  },
  twitter: {
    title: "Contact Us - EvonMedics Partnership & Collaboration",
    description: "Get in touch with EvonMedics to discuss products, partnerships, or collaboration opportunities.",
  },
};

export default ContactUsPage;
