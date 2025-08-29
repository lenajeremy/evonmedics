import SmoothScroll from "@/components/smooth-scroll";
import { Header } from "@/components/pages/global";
import {
  Careers,
  Hero,
  Mission,
  ProductsAndServices,
  VideoDisplay,
} from "@/components/pages/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EvonMedics - Innovative Neurological Treatment Solutions",
  description: "EvonMedics develops cutting-edge medical technology for treating chronic neurodegenerative diseases including Alzheimer's, chronic pain, and addiction. Helping millions with innovative neurological treatment solutions.",
  openGraph: {
    title: "EvonMedics - Innovative Neurological Treatment Solutions",
    description: "EvonMedics develops cutting-edge medical technology for treating chronic neurodegenerative diseases including Alzheimer's, chronic pain, and addiction. Helping millions with innovative neurological treatment solutions.",
    url: "https://evonmedics.com",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "EvonMedics Home - Medical Technology Innovation",
      },
    ],
  },
  twitter: {
    title: "EvonMedics - Revolutionary Medical Technology for Neurological Treatment",
    description: "Discover EvonMedics' groundbreaking medical technology solutions for treating Alzheimer's disease, chronic pain, and addiction.",
  },
};

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative">
        <Header variant="default" />
        <Hero />
        <Mission />
        <ProductsAndServices items={[
          { text: "alzheimers", image: "/images/hero5.jpg" },
          { text: "chronicpain", image: "/images/hero2.jpg" },
          { text: "addictiontreatment", image: "/images/hero3.jpg" }]}
          defaultImage={"/images/2.avif"} flip={true} />
        <ProductsAndServices items={[
          { text: "alzheimers", image: "/images/hero5.jpg" },
          { text: "chronicpain", image: "/images/hero2.jpg" },
          { text: "addictiontreatment", image: "/images/hero3.jpg" }]}
          defaultImage={"/images/2.avif"} />
        <VideoDisplay />
        <Careers />
      </div>
    </SmoothScroll>
  );
}
