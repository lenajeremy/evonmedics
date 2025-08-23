import type { Metadata } from "next";
import "./globals.css";
import { UberMove, SFPro } from "@/lib/fonts";
import Cursor from "@/components/pages/global/cursor";
import { Footer } from "@/components/pages";

export const metadata: Metadata = {
  title: {
    default: "EvonMedics - Innovative Neurological Treatment Solutions",
    template: "%s | EvonMedics"
  },
  description: "EvonMedics develops cutting-edge medical technology for treating chronic neurodegenerative diseases including Alzheimer's, chronic pain, and addiction. Helping millions with innovative neurological treatment solutions.",
  keywords: ["neurological treatment", "Alzheimer's disease", "chronic pain", "addiction treatment", "medical technology", "neurodegenerative diseases", "healthcare innovation", "medical devices", "clinical trials"],
  authors: [{ name: "EvonMedics" }],
  creator: "EvonMedics",
  publisher: "EvonMedics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evonmedics.com",
    siteName: "EvonMedics",
    title: "EvonMedics - Innovative Neurological Treatment Solutions",
    description: "EvonMedics develops cutting-edge medical technology for treating chronic neurodegenerative diseases including Alzheimer's, chronic pain, and addiction.",
    images: [
      {
        url: "/images/hero1.png",
        width: 1200,
        height: 630,
        alt: "EvonMedics - Medical Technology Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvonMedics - Innovative Neurological Treatment Solutions",
    description: "EvonMedics develops cutting-edge medical technology for treating chronic neurodegenerative diseases including Alzheimer's, chronic pain, and addiction.",
    images: ["/images/hero1.png"],
    creator: "@evonmedics",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Healthcare Technology",
  classification: "Medical Technology Company",
  other: {
    "application-name": "EvonMedics",
    "msapplication-TileColor": "#4D7FFF",
    "theme-color": "#4D7FFF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${UberMove.className} ${SFPro.className} antialiased`}>
        {/* <Cursor /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
