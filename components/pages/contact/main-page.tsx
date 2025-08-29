"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Header, Tag, Footer } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";
import { Button } from "@/components/ui/button";
import { SFPro, UberMove } from "@/lib/fonts";

const ContactUsPage = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addTimelineRef = (el: HTMLDivElement | null, index: number) => {
    timelineRefs.current[index] = el;
  };

  return (
    <SmoothScroll>
      <div className="bg-white text-gray-800">
        <Header variant="secondary" />
        <main>
          {/* Hero Section */}
          <section className="main-padding py-12 md:py-16 lg:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-xl"></div>

            <div className="max-w-7xl mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Content Column */}
                <div className="lg:col-span-6 space-y-6 lg:space-y-8">
                  <div className="inline-block">
                    <Tag text="CONTACT US" />
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 cursor-default">
                      Want to Talk About a Product or Partnership?
                    </h1>
                  </div>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl group cursor-default">
                    <span className="hover:text-blue-600 transition-colors duration-300">Evon Medics leadership found that we deliver the greatest value to society</span>
                    <span className="hover:text-purple-600 transition-colors duration-300"> when we establish ongoing relationships with compassionate partners</span>
                    <span className="hover:text-green-600 transition-colors duration-300"> that allow us to materially contribute to their long‑term success.</span>
                  </p>
                </div>

                {/* Image Column */}
                <div className="lg:col-span-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                    <Image
                      src="/images/hero2.jpg"
                      alt="Healthcare professionals collaborating on innovative medical solutions"
                      width={800}
                      height={600}
                      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Where We Work Section */}
          <section className="main-padding py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ${SFPro.className}`}>
                  Where We Work
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Evon Medics R&D facility, Clinical Trials Administrative Office and Clinical Trial Sites are primarily located in Maryland and Washington DC.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Offices */}
                <div 
                  ref={(el) => addTimelineRef(el, 0)}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 translate-y-8"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${SFPro.className}`}>
                      Offices
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className={`text-lg font-semibold text-gray-800 mb-2 ${SFPro.className}`}>
                        Clinical Trials
                      </h4>
                      <p className="text-gray-600 mb-1">R&D office</p>
                      <p className="text-gray-800 font-medium">6021 University Blvd, Ste 260</p>
                      <p className="text-gray-800 font-medium">Ellicott City, MD, USA, 21043</p>
                      <p className="text-blue-600 font-semibold mt-2">+1 (410) 891-4007</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div 
                  ref={(el) => addTimelineRef(el, 1)}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 translate-y-8"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${SFPro.className}`}>
                      Want to Work With Us?
                    </h3>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600 mb-6">
                      EvON Medics team will contact you within 3 business days after receiving an inquiry.
                    </p>
                    
                    <div className="space-y-4">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                        Get In Touch
                      </Button>
                      
                      <p className="text-sm text-gray-500">
                        Or email us directly at{" "}
                        <a href="mailto:info@evonmedics.com" className="text-blue-600 hover:text-blue-700 font-medium">
                          info@evonmedics.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Info Section */}
          <section className="main-padding py-16 lg:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div 
                  ref={(el) => addTimelineRef(el, 2)}
                  className="text-center opacity-0 translate-y-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${SFPro.className}`}>
                    Fast Response
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 3 business days
                  </p>
                </div>

                <div 
                  ref={(el) => addTimelineRef(el, 3)}
                  className="text-center opacity-0 translate-y-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${SFPro.className}`}>
                    Partnership Focus
                  </h3>
                  <p className="text-gray-600">
                    Building long-term relationships for mutual success
                  </p>
                </div>

                <div 
                  ref={(el) => addTimelineRef(el, 4)}
                  className="text-center opacity-0 translate-y-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${SFPro.className}`}>
                    Innovation Driven
                  </h3>
                  <p className="text-gray-600">
                    Cutting-edge medical technology solutions
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default ContactUsPage;
