"use client";

import React, { useEffect, useRef } from "react";
import { Header, Footer } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";

const PrivacyPolicyPage = () => {
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
                  Privacy Policy
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
                </p>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  We use your Personal Information only for providing and improving the Site. By using our Site you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="main-padding py-16 lg:py-20">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Information Collection And Use */}
              <div 
                ref={(el) => addSectionRef(el, 0)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Information Collection And Use
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While using our Site we may ask you to provide us with certain personally identifiable information which can be used to contact or identify you. Personally identifiable information may include, but is not limited to: your name; Personal Information; Log Data. Like many site operators, we collect information that your browser sends whenever you visit our Site.
                  </p>
                </div>
              </div>

              {/* Log Data */}
              <div 
                ref={(el) => addSectionRef(el, 1)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Log Data
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Log Data may include information such as your computers Internet Protocol & IP address; browser type; browser version; the pages of our Site that you visit; the time and date of your visit; the time spent on those pages and other statistics. In addition we may use third party services such as Google Analytics that collect, monitor and analyze this … The Log Data section is for businesses that use analytics or tracking services in websites or apps, like Google Analytics.
                  </p>
                </div>
              </div>

              {/* Communications */}
              <div 
                ref={(el) => addSectionRef(el, 2)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Communications
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may use your Personal Information to contact you with newsletters; marketing or promotional materials and other information.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div 
                ref={(el) => addSectionRef(el, 3)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Cookies
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computers hard drive. Like many websites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                  </p>
                </div>
              </div>

              {/* Security */}
              <div 
                ref={(el) => addSectionRef(el, 4)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Security
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security due to the nature of the process.
                  </p>
                </div>
              </div>

              {/* Changes To This Privacy Policy */}
              <div 
                ref={(el) => addSectionRef(el, 5)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Changes To This Privacy Policy
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This Privacy Policy is effective as of March 31st, 2016 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our Site.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div 
                ref={(el) => addSectionRef(el, 6)}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us!
                  </p>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </SmoothScroll>
  );
};

export default PrivacyPolicyPage;
