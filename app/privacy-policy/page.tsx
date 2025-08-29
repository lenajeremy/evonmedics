import { Metadata } from "next";
import PrivacyPolicyPage from "@/components/pages/privacy-policy/main-page";

export const metadata: Metadata = {
  title: "Privacy Policy - EvON Medics",
  description: "Learn about EvON Medics' privacy policy regarding the collection, use, and disclosure of personal information. Understand how we protect your data and maintain your privacy.",
  openGraph: {
    title: "Privacy Policy - EvON Medics",
    description: "Learn about EvON Medics' privacy policy regarding the collection, use, and disclosure of personal information. Understand how we protect your data and maintain your privacy.",
    url: "https://evonmedics.com/privacy-policy",
    images: [
      {
        url: "/images/hero1.png",
        width: 1200,
        height: 630,
        alt: "EvON Medics Privacy Policy",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy - EvON Medics",
    description: "Learn about EvON Medics' privacy policy regarding the collection, use, and disclosure of personal information.",
  },
};

export default PrivacyPolicyPage;
