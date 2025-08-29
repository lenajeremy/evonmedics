"use client";

import React, { useEffect, useRef } from "react";
import { Header, Footer } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";

const TermsAndConditionsPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
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

            <div className="max-w-6xl mx-auto relative text-center">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                  Terms and Conditions
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Please read these terms and conditions carefully before using our website and services.
                </p>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="main-padding py-16 lg:py-20">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Acceptance of Terms */}
              <div 
                ref={(el) => addSectionRef(el, 0)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>

              {/* Use License */}
              <div 
                ref={(el) => addSectionRef(el, 1)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Use License
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials (information or software) on EvON Medics' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <div 
                ref={(el) => addSectionRef(el, 2)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Disclaimer
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The materials on EvON Medics' website are provided on an 'as is' basis. EvON Medics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>
              </div>

              {/* Limitations */}
              <div 
                ref={(el) => addSectionRef(el, 3)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Limitations
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In no event shall EvON Medics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EvON Medics' website, even if EvON Medics or a EvON Medics authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>
              </div>

              {/* Accuracy of Materials */}
              <div 
                ref={(el) => addSectionRef(el, 4)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Accuracy of Materials
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The materials appearing on EvON Medics' website could include technical, typographical, or photographic errors. EvON Medics does not warrant that any of the materials on its website are accurate, complete or current. EvON Medics may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>
              </div>

              {/* Links */}
              <div 
                ref={(el) => addSectionRef(el, 5)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Links
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    EvON Medics has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EvON Medics of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>
              </div>

              {/* Modifications */}
              <div 
                ref={(el) => addSectionRef(el, 6)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Modifications
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    EvON Medics may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div 
                ref={(el) => addSectionRef(el, 7)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Governing Law
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div 
                ref={(el) => addSectionRef(el, 8)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have any questions about these Terms and Conditions, please contact us!
                  </p>
                  <div className="mt-6">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                      Contact Us
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
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

export default TermsAndConditionsPage;
