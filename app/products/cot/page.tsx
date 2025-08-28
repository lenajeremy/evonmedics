"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/pages/global/header";
import Footer from "@/components/pages/global/footer";
import { Tag } from "@/components/pages/global";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import SmoothScroll from "@/components/smooth-scroll";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const features = [
    {
        title: "Olfactory Brain Stimulation",
        description: "Targeted essential oil therapy that activates critical brain regions linked to memory formation.",
        imageUrl: "/images/hero1.png",
        accentColor: "green"
    },
    {
        title: "Cognitive Task Integration",
        description: "Specialized brain exercises designed to maintain neural pathway activation during treatment.",
        imageUrl: "/images/hero2.jpg",
        accentColor: "blue"
    },
    {
        title: "Home-Based Convenience",
        description: "Portable, easy-to-use device that brings clinical-grade therapy to your daily routine.",
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.02.38.png",
        accentColor: "purple"
    },
    {
        title: "Early Intervention Focus",
        description: "Proactive treatment approach targeting Alzheimer's before significant memory loss occurs.",
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.14.12.png",
        accentColor: "orange"
    }
];

const trustedLogos = [
    { name: "NIH", src: "/images/clients/nih.png" },
    { name: "FDA", src: "/images/clients/howard.png" },
    { name: "Research Partner", src: "/images/clients/cortex.png" },
    { name: "Clinical Partner", src: "/images/clients/techslice.png" }
];

const faqData = [
    {
        question: "How does COT target Alzheimer's disease?",
        answer: "COT targets the olfactory regions of the brain, which are among the first areas affected by Alzheimer's disease. By stimulating these regions with essential oils combined with cognitive tasks, we help maintain neural pathway activation and potentially slow disease progression."
    },
    {
        question: "Is COT safe for daily use?",
        answer: "Yes, COT uses 100% FDA-approved essential oils with zero reported serious adverse reactions. The device is designed for safe daily use in the comfort of your home, with built-in safety protocols and usage guidelines."
    },
    {
        question: "Who is eligible for COT treatment?",
        answer: "COT is designed for individuals at risk for Alzheimer's disease or those in early stages of cognitive decline. We recommend consulting with a healthcare provider to determine if COT is appropriate for your specific situation."
    },
    {
        question: "How long before I see results?",
        answer: "While individual results vary, clinical studies suggest that consistent use over several months may help maintain cognitive function. COT is designed as a long-term preventive approach rather than a quick fix."
    },
    {
        question: "Can I participate in the clinical research study?",
        answer: "We welcome participants for our ongoing clinical research. Eligibility depends on various factors including age, cognitive status, and medical history. Contact our research team to learn more about participation opportunities."
    },
    {
        question: "What makes COT different from other Alzheimer's treatments?",
        answer: "COT focuses on early intervention through olfactory stimulation, targeting the disease at its starting point rather than treating symptoms after they appear. This proactive approach aims to preserve cognitive function before significant memory loss occurs."
    }
];

const stats = [
    {
        value: "$3.1M",
        label: "in NIH Funding",
        description: "supporting COT's development and clinical research"
    },
    {
        value: "47M",
        label: "Americans",
        description: "worldwide living with dementia, making early intervention crucial"
    },
    {
        value: "100%",
        label: "Safe",
        description: "Using FDA-approved essential oils with zero reported serious adverse reactions"
    }
];

// Olfactory Wave Animation Component (inspired by scent molecules)
const OlfactoryWaveAnimation = () => {
    const waveRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (waveRef.current) {
            const circles = waveRef.current.querySelectorAll('circle');
            const paths = waveRef.current.querySelectorAll('path');

            // Animate scent molecules (circles)
            circles.forEach((circle, index) => {
                gsap.fromTo(circle,
                    {
                        opacity: 0.2,
                        scale: 0.5
                    },
                    {
                        opacity: 0.8,
                        scale: 1.2,
                        duration: 2 + index * 0.3,
                        repeat: -1,
                        yoyo: true,
                        ease: "power2.inOut",
                        delay: index * 0.5
                    }
                );
            });

            // Animate scent flow paths
            paths.forEach((path, index) => {
                gsap.fromTo(path,
                    {
                        strokeDasharray: "0,1000",
                        opacity: 0.2
                    },
                    {
                        strokeDasharray: "1000,0",
                        opacity: 0.6,
                        duration: 4 + index * 0.5,
                        repeat: -1,
                        ease: "power2.inOut",
                        delay: index * 0.4
                    }
                );
            });
        }
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
            <svg
                ref={waveRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
                viewBox="0 0 1200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Scent flow paths */}
                <path
                    d="M50 200 Q200 150 350 200 Q500 250 650 200 Q800 150 950 200 Q1100 250 1150 200"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M50 220 Q180 170 320 220 Q460 270 600 220 Q740 170 880 220 Q1020 270 1150 220"
                    stroke="#059669"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M50 180 Q220 130 380 180 Q540 230 700 180 Q860 130 1020 180 Q1180 230 1150 180"
                    stroke="#34D399"
                    strokeWidth="1"
                    fill="none"
                />

                {/* Scent molecules */}
                <circle cx="200" cy="180" r="4" fill="#10B981" />
                <circle cx="350" cy="200" r="3" fill="#059669" />
                <circle cx="500" cy="160" r="3.5" fill="#34D399" />
                <circle cx="650" cy="190" r="2.5" fill="#10B981" />
                <circle cx="800" cy="170" r="3" fill="#059669" />
                <circle cx="950" cy="210" r="2" fill="#34D399" />

                {/* Brain outline (subtle) */}
                <path
                    d="M400 100 Q500 80 600 100 Q700 120 750 150 Q780 180 750 210 Q700 240 600 250 Q500 260 400 250 Q300 240 250 210 Q220 180 250 150 Q300 120 400 100"
                    stroke="#10B981"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                />
            </svg>
        </div>
    );
};

function CBOTPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const firstParagraphRef = useRef<HTMLParagraphElement>(null);
    const secondParagraphRef = useRef<HTMLParagraphElement>(null);
    const thirdParagraphRef = useRef<HTMLParagraphElement>(null);

    // Animation refs for headings
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const statsTitleRef = useRef<HTMLHeadingElement>(null);
    const featuresTitleRef = useRef<HTMLHeadingElement>(null);
    const protectingTitleRef = useRef<HTMLHeadingElement>(null);
    const featureTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const faqTitleRef = useRef<HTMLHeadingElement>(null);
    const ctaTitleRef = useRef<HTMLHeadingElement>(null);

    // Animation refs for images
    const heroImageRef = useRef<HTMLDivElement>(null);
    const protectingImageRef = useRef<HTMLDivElement>(null);
    const featureImageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    useEffect(() => {
                // Animate headings with staggered words
        const animateHeading = (element: HTMLElement) => {
            if (!element) return;

            const split = new SplitText(element, {
                type: "words",
                wordsClass: "word-animate"
            });

            // Set initial state
            gsap.set(split.words, {
                opacity: 0,
                y: 30
            });

            // Create animation
            ScrollTrigger.create({
                trigger: element,
                start: "top 90%", // More generous trigger point
                once: true, // Only animate once
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
                start: "top 90%", // More generous trigger point
                once: true, // Only animate once
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

        // Apply animations to all heading and image elements
        if (heroTitleRef.current) animateHeading(heroTitleRef.current);
        if (statsTitleRef.current) animateHeading(statsTitleRef.current);
        if (featuresTitleRef.current) animateHeading(featuresTitleRef.current);
        if (protectingTitleRef.current) animateHeading(protectingTitleRef.current);
        if (faqTitleRef.current) animateHeading(faqTitleRef.current);
        if (ctaTitleRef.current) animateHeading(ctaTitleRef.current);
        if (heroImageRef.current) animateImage(heroImageRef.current);
        if (protectingImageRef.current) animateImage(protectingImageRef.current);
        
        // Animate feature titles and images
        featureTitleRefs.current.forEach(ref => {
            if (ref) animateHeading(ref);
        });
        
        featureImageRefs.current.forEach(ref => {
            if (ref) animateImage(ref);
        });
        
        // Description section animation (existing)
        if (firstParagraphRef.current && secondParagraphRef.current && thirdParagraphRef.current) {
            // Split text into words for animation
            const firstSplit = new SplitText(firstParagraphRef.current, {
                type: "words",
                wordsClass: "word-reveal"
            });

            const secondSplit = new SplitText(secondParagraphRef.current, {
                type: "words",
                wordsClass: "word-reveal"
            });

            const thirdSplit = new SplitText(thirdParagraphRef.current, {
                type: "words",
                wordsClass: "word-reveal"
            });

            // Set initial color for all words to gray
            gsap.set([firstSplit.words, secondSplit.words, thirdSplit.words], {
                color: "#d1d5db" // gray-300
            });

            // Sequential animation using the container as trigger
            ScrollTrigger.create({
                trigger: descriptionRef.current,
                start: "top 60%",
                end: "bottom 50%",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalWords = firstSplit.words.length + secondSplit.words.length + thirdSplit.words.length;
                    const wordsToAnimate = Math.floor(progress * totalWords);

                    // Reset all words to gray first
                    gsap.set([firstSplit.words, secondSplit.words, thirdSplit.words], {
                        color: "#d1d5db" // gray-300
                    });

                    let wordCount = 0;

                    // First paragraph animation
                    firstSplit.words.forEach((word: Element, index: number) => {
                        if (wordCount < wordsToAnimate) {
                            gsap.set(word, {
                                color: "#000000" // black
                            });
                        }
                        wordCount++;
                    });

                    // Second paragraph animation (starts after first completes)
                    secondSplit.words.forEach((word: Element, index: number) => {
                        if (wordCount < wordsToAnimate) {
                            gsap.set(word, {
                                color: "#000000" // black
                            });
                        }
                        wordCount++;
                    });

                    // Third paragraph animation (starts after second completes)
                    thirdSplit.words.forEach((word: Element, index: number) => {
                        if (wordCount < wordsToAnimate) {
                            gsap.set(word, {
                                color: "#000000" // black
                            });
                        }
                        wordCount++;
                    });
                }
            });
        }

        // Refresh ScrollTrigger to ensure all triggers are properly calculated
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <Header variant="secondary" />

                {/* Hero Section */}
                <section className="main-padding py-12 md:py-16 lg:py-24 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-emerald-50/50"></div>
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-xl"></div>
                    {/* Olfactory Wave Background Animation */}
                    <OlfactoryWaveAnimation />

                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                            {/* Content Column */}
                            <div className="lg:col-span-6 space-y-6 lg:space-y-8">
                                <div className="inline-block">
                                    <Tag text="COT ALZHEIMER'S TREATMENT" />
                                </div>

                                <div className="space-y-4 lg:space-y-6">
                                    <h1 ref={heroTitleRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 cursor-default">
                                        Stop Alzheimer's Before Memory Loss Begins
                            </h1>

                                    {/* <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent leading-tight">
                                        — targeting the olfactory system
                                    </h2> */}
                                </div>

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl group cursor-default">
                                    <span className="hover:text-green-600 transition-colors duration-300">COT is a groundbreaking treatment program that targets Alzheimer's disease</span>
                                    <span className="hover:text-emerald-600 transition-colors duration-300"> at its starting point – the brain's olfactory regions.</span>
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <Button
                                    size={'lg'}
                                    onClick={openVideoModal}
                                        className="bg-green-600 hover:bg-green-700"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                        Watch How It Works
                                    </span>
                                </Button>
                                    {/* <Button
                                    variant="outline"
                                    size={'lg'}
                                    onClick={() => {
                                            window.location.href = "/contact?subject=Check%20COT%20Eligibility";
                                        }}
                                        className="border-green-600 text-green-600 hover:bg-green-50"
                                    >
                                        Check Your Eligibility
                                    </Button> */}
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="lg:col-span-6">
                                <div ref={heroImageRef} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                                    <Image
                                        src="/images/happy-family.webp"
                                        alt="COT Alzheimer's Treatment Device"
                                        width={800}
                                        height={600}
                                        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Trusted by logos - moved to bottom */}
                        {/* <div className="flex justify-center items-center space-x-8 lg:space-x-16 mt-16 lg:mt-20">
                            {trustedLogos.map((logo, index) => (
                                <div key={index} className="flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={120}
                                        height={0}
                                        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div> */}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="main-padding py-20 lg:py-32 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 ref={statsTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Backed by Science, Proven by Research
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center space-y-4">
                                    <div className="text-5xl lg:text-6xl font-bold text-green-600">
                                        {stat.value}
                                    </div>
                                    <div className="text-xl font-semibold text-black">
                                        {stat.label}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="main-padding py-20 lg:py-32">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 ref={featuresTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Advanced Protection Made Simple
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                COT combines portable convenience with sophisticated neuroscience. Our programmed device delivers precisely timed essential oil stimulation while guiding you through specialized cognitive tasks.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {features.map((feature, index) => {
                                const getAccentClasses = (color: string) => {
                                    const colorMap = {
                                        green: {
                                            bg: "bg-gray-50",
                                            icon: "bg-green-100",
                                            text: "text-green-600"
                                        },
                                        blue: {
                                            bg: "bg-gray-50",
                                            icon: "bg-blue-100",
                                            text: "text-blue-600"
                                        },
                                        purple: {
                                            bg: "bg-gray-50",
                                            icon: "bg-purple-100",
                                            text: "text-purple-600"
                                        },
                                        orange: {
                                            bg: "bg-gray-50",
                                            icon: "bg-orange-100",
                                            text: "text-orange-600"
                                        }
                                    };
                                    return colorMap[color as keyof typeof colorMap] || colorMap.green;
                                };

                                const accentClasses = getAccentClasses(feature.accentColor);
                                const icons = ["🌿", "🧠", "🏠", "⚡"];

                                return (
                                    <div key={index} className="space-y-8">
                                        {/* Feature Header */}
                                        <div className="space-y-6">
                                            <div className={`w-12 h-12 ${accentClasses.icon} rounded-xl flex items-center justify-center`}>
                                                <div className="text-2xl">{icons[index]}</div>
                                            </div>
                                            <div>
                                                <h3 
                                                    ref={(el) => { featureTitleRefs.current[index] = el; }}
                                                    className="text-2xl lg:text-3xl font-bold text-black mb-4"
                                                >
                                                    {feature.title.split(' ').map((word, i) =>
                                                        i === feature.title.split(' ').length - 1 ? (
                                                            <span key={i} className={accentClasses.text}>{word}.</span>
                                                        ) : (
                                                            <span key={i}>{word} </span>
                                                        )
                                                    )}
                                                </h3>
                                                <p className="text-lg text-gray-600 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Feature Image */}
                                        <div 
                                            ref={(el) => { featureImageRefs.current[index] = el; }}
                                            className={`${accentClasses.bg} rounded-2xl p-8`}
                                        >
                                            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                                                <div className="relative h-48 lg:h-48">
                                                    <Image
                                                        src={feature.imageUrl}
                                                        alt={feature.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Protecting Memories Section */}
                <section className="main-padding py-20 lg:py-32 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center space-y-8">
                            <h2 ref={protectingTitleRef} className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                                Protecting Memories.
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Join others who are taking proactive steps to protect their cognitive health with COT's innovative approach
                            </p>
                        </div>
                        
                        <div className="mt-16 lg:mt-20 relative">
                            <div ref={protectingImageRef} className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/happy-family.webp"
                                    alt="Happy family protecting memories together"
                                    width={1200}
                                    height={600}
                                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Description Section with Split Text Animation */}
                <section ref={descriptionRef} className="main-padding py-32 lg:py-40">
                    <div className="max-w-6xl mx-auto">
                        <div className="space-y-12">
                            <p
                                ref={firstParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-5xl"
                            >
                                Take action early, protect your future.
                            </p>
                            <p
                                ref={secondParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-6xl"
                            >
                                Early intervention is crucial in protecting cognitive function. COT offers a proactive approach that can help maintain your independence and mental clarity through scientifically-designed brain stimulation.
                            </p>
                            <p
                                ref={thirdParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-4xl"
                            >
                                Protecting memories.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="main-padding py-20 lg:py-32 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 ref={faqTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-2">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg border border-gray-200">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full p-6 text-left focus:outline-none"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-medium text-black pr-4">
                                                {faq.question}
                                            </h3>
                                            <svg
                                                className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                        {openFaq === index && (
                                            <div className="mt-4 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section>
                    <div className="w-full bg-gradient-to-b from-[#052f16] to-black flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] py-16 md:py-20 lg:py-30 relative overflow-x-hidden">
                        <div className="max-w-4xl mx-auto text-center px-4">
                            <h1 ref={ctaTitleRef} className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-medium leading-tight text-[#D1D5DB]">
                                Be part of the <span className="text-[#10B981] font-bold">
                                    solution
                                </span>. Join our groundbreaking clinical research study to advance the fight against {" "}
                                <span className="text-[#10B981] font-bold">
                                    Alzheimer's disease
                                </span>.
                            </h1>
                            <div className="mt-8 md:mt-12 flex justify-center">
                                <button
                                    className={clsx(
                                        "flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-base md:text-lg font-medium shadow-lg",
                                        "hover:scale-105 transition-transform duration-300 relative z-10"
                                    )}
                                    onClick={() => {
                                        window.location.href = "/contact?subject=Check%20COT%20Eligibility";
                                    }}
                                >
                                    Check Your Eligibility
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

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
                                title="COT Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </SmoothScroll>
    );
}

export default CBOTPage;
