import { Metadata } from "next";
import TermsAndConditionsPage from "@/components/pages/terms-and-conditions/main-page";

export const metadata: Metadata = {
  title: "Terms and Conditions - EvonMedics Privacy Policy",
  description: "Learn about EvonMedics' privacy policy, information collection practices, and how we protect your personal information when using our website.",
  openGraph: {
    title: "Terms and Conditions - EvonMedics Privacy Policy",
    description: "Learn about EvonMedics' privacy policy, information collection practices, and how we protect your personal information when using our website.",
    url: "https://evonmedics.com/terms-and-conditions",
    images: [
      {
        url: "/images/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "EvonMedics Terms and Conditions - Privacy Policy",
      },
    ],
  },
  twitter: {
    title: "Terms and Conditions - EvonMedics Privacy Policy",
    description: "Learn about EvonMedics' privacy policy and information collection practices.",
  },
};

export default TermsAndConditionsPage;
