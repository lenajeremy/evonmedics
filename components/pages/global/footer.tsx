"use client";

import { UberMove } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Latest News", href: "/news" },
      { label: "Products", href: "/products" },
      { label: "Blog", href: "/blog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Clinical Trials", href: "/clinical-trials" },
      { label: "Innovation", href: "/innovation" },
      { label: "Research & Development", href: "/research" },
      { label: "Products", href: "/products" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Events", href: "/events" },
      { label: "Press Releases", href: "/press" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  getInTouch: {
    title: "Get In Touch",
    links: [
      { label: "Instagram", href: "https://instagram.com/evonmedics" },
      { label: "LinkedIn", href: "https://linkedin.com/company/evonmedics" },
      { label: "Facebook", href: "https://facebook.com/evonmedics" },
      { label: "Contact Us", href: "/contact" },
    ],
    address:
      "6021 University Blvd., Suites 250-260, Ellicott City, MD 21043, United States",
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };

  return (
    <footer className="bg-black text-gray-300 py-12 md:py-16">
      <div className="main-padding mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <Image
              src="/logo.svg"
              alt="EvonMedics"
              width={160}
              height={36}
              className="brightness-0 invert md:w-[180px] md:h-[40px]"
            />
            <div className="space-y-4">
              <h3 className={"text-xl md:text-2xl text-white " + UberMove.className}>
                Join our newsletter to stay up to date
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 bg-[#4D7FFF] text-white rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs md:text-sm text-gray-400">
                  By subscribing you agree to with our{" "}
                  <Link
                    href="/privacy"
                    className="text-white hover:text-blue-400"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and provide consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="space-y-3 md:space-y-4">
                <h4 className="text-base md:text-lg text-white font-medium">
                  {section.title}
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {key === "getInTouch" && (
                    <li className="text-xs md:text-sm text-gray-400 mt-3 md:mt-4 leading-relaxed">
                      {/* @ts-ignore */}
                      {section.address}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
