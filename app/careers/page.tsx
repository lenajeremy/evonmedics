"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Header, Tag, Footer } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const coreValues = [
  {
    title: "We build to benefit all customers",
    description: "(not just one)",
    icon: "🏗️",
    color: "blue"
  },
  {
    title: "We make good decisions",
    description: "and consider the long-term benefits for our customers, EvON and the world at large",
    icon: "💙",
    color: "blue"
  },
  {
    title: "We launch fast",
    description: "and iterate",
    icon: "🚀",
    color: "blue"
  },
  {
    title: "Winning is more important than ego",
    description: "we work as a team - across cultures and time zones",
    icon: "🏆",
    color: "blue"
  },
  {
    title: "We don't hide behind email",
    description: "instead we pick up the phone",
    icon: "📞",
    color: "blue"
  },
  {
    title: "We talk straight",
    description: "without being rude",
    icon: "💬",
    color: "blue"
  }
];

const benefits = [
  {
    category: "The essentials",
    icon: "💼",
    description: "Benefits that make working and living—wherever in the world you are—more harmonious. This includes health insurance, commute allowance, lunch in the office, and benefits mandated by local governments."
  },
  {
    category: "EvON+",
    icon: "➕",
    description: "EvON+ is a significant monthly financial contribution that all employees receive to spend on their own individual needs. This includes childcare, language courses, and working from home setups."
  },
  {
    category: "The way we work",
    icon: "🤝",
    description: "We believe that in-person collaboration is the best route to building genuine connection. We're an office-first company that offers flexibility when needed. We trust our team to act with autonomy and make good choices."
  }
];

const openPositions = [
  {
    title: "Senior Neuroscience Engineer",
    department: "Research & Development",
    location: "Remote / Hybrid",
    type: "Full-time"
  },
  {
    title: "Clinical Research Specialist",
    department: "Clinical Affairs",
    location: "On-site",
    type: "Full-time"
  },
  {
    title: "Medical Device Designer",
    department: "Product Design",
    location: "Remote / Hybrid",
    type: "Full-time"
  },
  {
    title: "Regulatory Affairs Manager",
    department: "Compliance",
    location: "On-site",
    type: "Full-time"
  },
  {
    title: "Software Engineer - Medical Devices",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time"
  },
  {
    title: "Data Scientist - Neurological Analytics",
    department: "Data Science",
    location: "Remote / Hybrid",
    type: "Full-time"
  }
];

const CareersPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Animation refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
  const valuesOriginTitleRef = useRef<HTMLHeadingElement>(null);
  const valuesTitleRef = useRef<HTMLHeadingElement>(null);
  const benefitsTitleRef = useRef<HTMLHeadingElement>(null);
  const positionsTitleRef = useRef<HTMLHeadingElement>(null);
  
  const heroImageRef = useRef<HTMLDivElement>(null);
  const valuesImageRef = useRef<HTMLDivElement>(null);
  const benefitsImageRef = useRef<HTMLDivElement>(null);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    // Animate headings with staggered words
    const animateHeading = (element: HTMLElement, isHero = false) => {
      if (!element) return;
      
      const split = new SplitText(element, {
        type: "words",
        wordsClass: "word-animate"
      });
      
      // Check if this is the hero subtitle with gradient
      const isGradientElement = element.classList.contains('bg-gradient-to-r');
      if (isGradientElement) {
        // Apply gradient classes to each word
        split.words.forEach((word: Element) => {
          word.classList.add('bg-gradient-to-br', 'from-blue-600', 'via-blue-500', 'to-green-500', 'bg-clip-text', 'text-transparent');
        });
      }
      
      if (isHero) {
        // For hero elements, set initial state and animate immediately
        gsap.set(split.words, {
          opacity: 0,
          y: 30
        });
        
        // Animate immediately
        gsap.to(split.words, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        });
      } else {
        // For other elements, use ScrollTrigger
        gsap.set(split.words, {
          opacity: 0,
          y: 30
        });
        
        ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(split.words, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out"
            });
          }
        });
      }
    };
    
    // Animate images
    const animateImage = (element: HTMLElement, isHero = false) => {
      if (!element) return;
      
      if (isHero) {
        // For hero images, set initial state and animate immediately
        gsap.set(element, {
          opacity: 0,
          y: 50
        });
        
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.0
        });
      } else {
        gsap.set(element, {
          opacity: 0,
          y: 50
        });
        
        ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out"
            });
          }
        });
      }
    };

    // Apply animations with timeout to ensure DOM is ready
    setTimeout(() => {
      if (heroTitleRef.current) animateHeading(heroTitleRef.current, true);
      if (heroSubtitleRef.current) animateHeading(heroSubtitleRef.current, true);
      if (valuesOriginTitleRef.current) animateHeading(valuesOriginTitleRef.current);
      if (valuesTitleRef.current) animateHeading(valuesTitleRef.current);
      if (benefitsTitleRef.current) animateHeading(benefitsTitleRef.current);
      if (positionsTitleRef.current) animateHeading(positionsTitleRef.current);
      if (heroImageRef.current) animateImage(heroImageRef.current, true);
      if (valuesImageRef.current) animateImage(valuesImageRef.current);
      if (benefitsImageRef.current) animateImage(benefitsImageRef.current);
    }, 50);

    // Refresh ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-white text-gray-800">
        <Header variant="secondary" />
        <main>
          {/* Hero Section */}
          <section className="main-padding py-12 md:py-16 lg:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl"></div>

            <div className="max-w-7xl mx-auto relative">
              <div className="text-center space-y-8 mb-16">
                <div className="inline-block">
                  <Tag text="CAREERS AT EVONMEDICS" />
                </div>

                <div className="space-y-6">
                  <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900 mb-0">
                    Ambitious?
                  </h1>
                  <h2 ref={heroSubtitleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r leading-tight">
                    So are we.
                  </h2>
                </div>
              </div>

              {/* Video Section */}
              <div ref={heroImageRef} className="relative max-w-5xl mx-auto">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={openVideoModal}>
                  <Image
                    src="/images/hero2.jpg"
                    alt="Team collaboration at EvON Medics"
                    width={1200}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    priority
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="main-padding py-20 lg:py-32">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <h3 ref={valuesOriginTitleRef} className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Infinite ambitions. One medical technology platform.
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      When we launched in 2020, our ambition was simple: help healthcare professionals revolutionize patient care. We started with neurological assessment tools, taking an engineering-first approach to solving some of the most complex challenges in neuroscience.
                    </p>
                    <p>
                      Today, we are the preferred medical technology platform of many of the world's leading healthcare institutions. We did this by working with exceptional talent, prioritizing patient outcomes over ego, and having purpose along the way.
                    </p>
                    <p>
                      To continue driving towards our long-term ambitions, we're looking for innovative problem solvers, strategic thinkers, and colleagues we can count on.
                    </p>
                  </div>
                  <div className="pt-4">
                    <a href="#positions" className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                      More about our open positions →
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div ref={valuesImageRef} className="relative">
                  <div className="bg-blue-50 rounded-2xl p-8">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/hero3.jpg"
                        alt="EvON Medics team collaboration"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The EvON Formula */}
          <section className="main-padding py-20 lg:py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 ref={valuesTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  The EvON Formula
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The way we work is guided by the six principles of the EvON Formula. <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Learn more here.</a>
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                {coreValues.map((value, index) => (
                  <div key={index} className="space-y-4 group">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="main-padding py-20 lg:py-32">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 ref={benefitsTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  Our benefits
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 mb-16">
                {benefits.map((benefit, index) => (
                  <div key={index} className="space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">{benefit.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {benefit.category}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Benefits Image */}
              <div ref={benefitsImageRef} className="relative">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero5.jpg"
                    alt="EvON Medics office environment"
                    width={1200}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="positions" className="main-padding py-20 lg:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 ref={positionsTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  Open Positions
                </h2>
                <p className="text-xl text-gray-600">
                  Join our mission to transform neurological healthcare through innovative technology.
                </p>
              </div>

              <div className="space-y-4">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-200 group">
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium text-black group-hover:text-blue-700 transition-colors duration-200">
                            {position.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{position.department}</span>
                            <span>•</span>
                            <span>{position.location}</span>
                            <span>•</span>
                            <span>{position.type}</span>
                          </div>
                        </div>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-500 text-base mb-6">
                  Can't find your role? <button className="text-blue-600 underline font-medium hover:no-underline transition-all duration-200">Open application</button>
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = "/contact?subject=Career%20Inquiry"}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeVideoModal}
          >
            <div
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="EvON Medics Culture Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </SmoothScroll>
  );
};

export default CareersPage;
