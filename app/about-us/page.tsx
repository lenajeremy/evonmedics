import { Metadata } from "next";
import AboutUsPage from "@/components/pages/about-us/main-page";

export const metadata: Metadata = {
  title: "About Us - Leading Medical Technology Innovation",
  description: "Learn about EvonMedics' mission to revolutionize healthcare through innovative medical technology. Meet our dedicated team of professionals driving breakthrough solutions for neurological treatment and patient care.",
  openGraph: {
    title: "About EvonMedics - Leading Medical Technology Innovation",
    description: "Learn about EvonMedics' mission to revolutionize healthcare through innovative medical technology. Meet our dedicated team driving breakthrough neurological treatment solutions.",
    url: "https://evonmedics.com/about-us",
    images: [
      {
        url: "/images/hero2.jpg",
        width: 1200,
        height: 630,
        alt: "EvonMedics Team - Medical Technology Innovation",
      },
    ],
  },
  twitter: {
    title: "About EvonMedics - Leading Medical Technology Innovation",
    description: "Learn about EvonMedics' mission to revolutionize healthcare through innovative medical technology and breakthrough neurological treatment solutions.",
  },
};

export default AboutUsPage;
