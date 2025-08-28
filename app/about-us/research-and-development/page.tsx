"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Header, Tag, Footer } from "@/components/pages/global";
import SmoothScroll from "@/components/smooth-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const researchAreas = [
    {
        title: "Real-Time Physiological Monitors",
        description: "The spectrum of physiological monitors, both stand-alone and integrated sub-assemblies, developed at EvON Medics enhanced our patented Olfactory Treatment Delivery System.",
        features: [
            "Real-time objective diagnosis and subjective monitoring",
            "Complement the concurrent needs of new-age diseases and neurodegenerative comorbid health conditions"
        ],
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.02.38.png",
        accentColor: "blue",
        icon: "📊"
    },
    {
        title: "Disease Modifying Therapeutics",
        description: "EvON Medics R&D efforts into Computerized Olfactory Training Devices are inclined to ideate, design, develop and clinically validate smart medical devices.",
        features: [
            "Address acute and chronic mental health conditions",
            "Capabilities for Alzheimer's Diseases, Chronic Pain, Cognition Impairment",
            "Huge pipeline of DMTs to serve the world population"
        ],
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.14.12.png",
        accentColor: "green",
        icon: "🧬"
    },
    {
        title: "Diagnostic Medical Devices",
        description: "The diagnostic medical devices programmed and developed at EvON Medics can deliberately bridge the gaps in neuroscience clinical research and patient needs.",
        features: [
            "Rapid assessment of physiological health statuses",
            "Multiple diagnostic metrics for accurate diagnosis",
            "Comprehensive diagnostic portable and wearable devices",
            "At-home diagnosis of various clinical measurements"
        ],
        imageUrl: "/images/hero1.png",
        accentColor: "purple",
        icon: "🔬"
    }
];

const rdLifecycle = [
    {
        phase: "Ideation",
        description: "Identifying unmet medical needs and conceptualizing innovative solutions",
        icon: "💡"
    },
    {
        phase: "Design",
        description: "Engineering state-of-the-art medical devices with extraordinary healthcare technologies",
        icon: "📐"
    },
    {
        phase: "Development",
        description: "Building prototypes and iterating on device functionality and user experience",
        icon: "⚙️"
    },
    {
        phase: "Clinical Validation",
        description: "Rigorous testing and validation to ensure safety, efficacy, and regulatory compliance",
        icon: "🏥"
    }
];

const ResearchAndDevelopmentPage = () => {
    // Animation refs
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
    const lifecycleTitleRef = useRef<HTMLHeadingElement>(null);
    const researchTitleRef = useRef<HTMLHeadingElement>(null);
    const researchAreaTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

    const heroImageRef = useRef<HTMLDivElement>(null);
    const lifecycleRef = useRef<HTMLDivElement>(null);
    const researchAreaImageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animate headings with staggered words
        const animateHeading = (element: HTMLElement) => {
            if (!element) return;

            const split = new SplitText(element, {
                type: "words",
                wordsClass: "word-animate"
            });

            // Check if this is a gradient element
            const isGradientElement = element.classList.contains('bg-gradient-to-r');
            if (isGradientElement) {
                // Apply gradient classes to each word
                split.words.forEach((word: Element) => {
                    word.classList.add('bg-gradient-to-r', 'from-indigo-600', 'to-cyan-500', 'bg-clip-text', 'text-transparent');
                });
            }

            // Set initial state
            gsap.set(split.words, {
                opacity: 0,
                y: 30
            });

            // Create animation
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
        };

        // Animate images
        const animateImage = (element: HTMLElement) => {
            if (!element) return;

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
        };

        // Apply animations
        if (heroTitleRef.current) animateHeading(heroTitleRef.current);
        if (heroSubtitleRef.current) animateHeading(heroSubtitleRef.current);
        if (lifecycleTitleRef.current) animateHeading(lifecycleTitleRef.current);
        if (researchTitleRef.current) animateHeading(researchTitleRef.current);
        if (heroImageRef.current) animateImage(heroImageRef.current);
        if (lifecycleRef.current) animateImage(lifecycleRef.current);

        researchAreaTitleRefs.current.forEach(ref => {
            if (ref) animateHeading(ref);
        });

        researchAreaImageRefs.current.forEach(ref => {
            if (ref) animateImage(ref);
        });

        // Refresh ScrollTrigger
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

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
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-cyan-50/50"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 rounded-full blur-xl"></div>

                        <div className="max-w-7xl mx-auto relative">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                {/* Content Column */}
                                <div className="lg:col-span-6 space-y-6 lg:space-y-8">
                                    <div className="inline-block">
                                        <Tag text="RESEARCH & DEVELOPMENT" />
                                    </div>

                                    <div className="space-y-4 lg:space-y-6">
                                        <h1 ref={heroTitleRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 cursor-default">
                                            Engineering Tomorrow's Medical Breakthroughs
                                        </h1>

                                        <h2 ref={heroSubtitleRef} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal bg-gradient-to-r leading-tight">
                                            — defeating devastating neurological diseases
                                        </h2>
                                    </div>

                                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl group cursor-default">
                                        <span className="hover:text-indigo-600 transition-colors duration-300">At EvON Medics, we aim to defeat devastating neurological diseases by engineering</span>
                                        <span className="hover:text-cyan-600 transition-colors duration-300"> state-of-the-art medical devices equipped with extraordinary healthcare technologies.</span>
                                        <span className="hover:text-purple-600 transition-colors duration-300"> Our motto is clear - to enrich the quality of everyone's lives through their mental well-being.</span>
                                    </p>
                                </div>

                                {/* Image Column */}
                                <div className="lg:col-span-6">
                                    <div ref={heroImageRef} className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                                        <Image
                                            src="/images/research.jpeg"
                                            alt="Research and Development at EvON Medics"
                                            width={800}
                                            height={600}
                                            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* R&D Lifecycle Section */}
                    <section className="main-padding py-20 lg:py-32 bg-gray-50">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 ref={lifecycleTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                    R&D Lifecycle
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Our comprehensive approach to research and development ensures every innovation meets the highest standards of safety, efficacy, and clinical excellence.
                                </p>
                            </div>

                            <div ref={lifecycleRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {rdLifecycle.map((phase, index) => (
                                    <div key={index} className="text-center space-y-4 group">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl">{phase.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                                        <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Research Areas Section */}
                    <section className="main-padding py-20 lg:py-32">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 ref={researchTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                    Our Research Focus Areas
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Three core pillars of innovation driving our mission to transform neurological healthcare through cutting-edge technology and compassionate care.
                                </p>
                            </div>

                            <div className="space-y-16 lg:space-y-24">
                                {researchAreas.map((area, index) => {
                                    const getAccentClasses = (color: string) => {
                                        const colorMap = {
                                            blue: {
                                                bg: "bg-blue-50",
                                                icon: "bg-blue-100",
                                                text: "text-blue-600",
                                                gradient: "from-blue-500 to-indigo-500"
                                            },
                                            green: {
                                                bg: "bg-green-50",
                                                icon: "bg-green-100",
                                                text: "text-green-600",
                                                gradient: "from-green-500 to-emerald-500"
                                            },
                                            purple: {
                                                bg: "bg-purple-50",
                                                icon: "bg-purple-100",
                                                text: "text-purple-600",
                                                gradient: "from-purple-500 to-indigo-500"
                                            }
                                        };
                                        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
                                    };

                                    const accentClasses = getAccentClasses(area.accentColor);
                                    const isEven = index % 2 === 0;

                                    return (
                                        <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                                            {/* Content */}
                                            <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                                                <div className="space-y-4">
                                                    <div className={`w-16 h-16 ${accentClasses.icon} rounded-xl flex items-center justify-center`}>
                                                        <span className="text-3xl">{area.icon}</span>
                                                    </div>
                                                    <h3
                                                        ref={(el) => { researchAreaTitleRefs.current[index] = el; }}
                                                        className="text-2xl lg:text-3xl font-bold text-black"
                                                    >
                                                        {area.title.split(' ').map((word, i) =>
                                                            i === area.title.split(' ').length - 1 ? (
                                                                <span key={i} className={accentClasses.text}>{word}.</span>
                                                            ) : (
                                                                <span key={i}>{word} </span>
                                                            )
                                                        )}
                                                    </h3>
                                                    <p className="text-lg text-gray-600 leading-relaxed">
                                                        {area.description}
                                                    </p>
                                                </div>

                                                <div className="space-y-3">
                                                    {area.features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="flex items-start space-x-3">
                                                            <div className={`w-2 h-2 ${accentClasses.text.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                                                            <p className="text-gray-700">{feature}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Image */}
                                            <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                                <div
                                                    ref={(el) => { researchAreaImageRefs.current[index] = el; }}
                                                    className={`relative group ${accentClasses.bg} rounded-2xl p-8`}
                                                >
                                                    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                                                        <div className="relative h-64 lg:h-80">
                                                            <Image
                                                                src={area.imageUrl}
                                                                alt={area.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            <div className={`absolute inset-0 bg-gradient-to-br ${accentClasses.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Impact Statement Section */}
                    <section className="main-padding py-20 lg:py-32 bg-black text-white">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                Compassionately serving the world population with innovative
                                <span className="bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent"> medical solutions</span>
                            </h2>
                            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                Our flagship comprehensive diagnostic portable and wearable devices will change the common perspective of at-home diagnosis of various clinical measurements, bringing hope and healing to millions.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </SmoothScroll>
    );
};

export default ResearchAndDevelopmentPage;
