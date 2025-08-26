"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/pages/global/header";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import SmoothScroll from "@/components/smooth-scroll";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const features = [
    {
        title: "Randomized Navigation Paths",
        description: "No two sessions are the same, ensuring robust memory classification and minimizing bias.",
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.02.38.png",
        accentColor: "green"
    },
    {
        title: "Neuroscience-Backed Metrics",
        description: "Built on spatial memory science, ideal for detecting subtle cognitive changes.",
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.14.12.png",
        accentColor: "blue"
    },
    {
        title: "Game-Based Design",
        description: "Engaging for participants. Low learning curve. High repeatability. Easy to use.",
        imageUrl: "/images/hero1.png",
        accentColor: "blue"
    },
    {
        title: "Actionable Data for Clinicians",
        description: "Comprehensive analytics and reporting for evidence-based decision making.",
        imageUrl: "/images/hero2.jpg",
        accentColor: "green"
    }
];

const trustedLogos = [
    { name: "Johns Hopkins", src: "/images/clients/howard.png" },
    { name: "Mayo Clinic", src: "/images/clients/cortex.png" },
    { name: "Stanford", src: "/images/clients/nih.png" },
    { name: "Harvard", src: "/images/clients/techslice.png" }
];

const faqData = [
    {
        question: "What cognitive functions does DDT measure?",
        answer: "DDT primarily assesses spatial memory, attention span, and problem-solving skills. These cognitive functions are critical in early detection of cognitive decline and are engaged through lifelike navigation tasks that simulate real-world route recall and decision-making."
    },
    {
        question: "How is DDT different from conventional memory tests?",
        answer: "Unlike traditional pen-and-paper tests, DDT uses interactive 3D environments that closely mimic real-world navigation challenges. This provides more ecologically valid assessments and reduces practice effects through randomized pathways."
    },
    {
        question: "Can I integrate DDT into my existing research workflow?",
        answer: "Yes, DDT is designed for seamless integration with existing clinical and research protocols. Our platform supports standard data export formats and can be customized to fit your specific workflow requirements."
    },
    {
        question: "Is participant data secure?",
        answer: "Absolutely. DDT employs enterprise-grade security measures, including end-to-end encryption, HIPAA compliance, and secure cloud storage. All data is anonymized and protected according to the highest industry standards."
    },
    {
        question: "What licensing options are available?",
        answer: "We offer flexible licensing options including institutional licenses, per-study licensing, and volume discounts for large-scale research initiatives. Contact our team for a customized quote based on your specific needs."
    },
    {
        question: "How does DDT ensure unbiased cognitive assessment?",
        answer: "DDT uses randomized navigation paths and adaptive difficulty scaling to minimize learning effects and test bias. The game-based design also reduces anxiety and performance pressure that can affect traditional cognitive assessments."
    }
];

function DDTPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const firstParagraphRef = useRef<HTMLParagraphElement>(null);
    const secondParagraphRef = useRef<HTMLParagraphElement>(null);
    const thirdParagraphRef = useRef<HTMLParagraphElement>(null);

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

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white">
                <Header variant="secondary" />
                <BrainWaveAnimation />

                {/* Hero Section - Bird-style layout */}
                <section className="main-padding py-16 lg:py-24 relative">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="space-y-10 mb-20">
                            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight tracking-tight">
                                DDT: A new frontier in memory classification
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Evon Medics' patented, neuroscience-backed interactive software for unbiased memory classification—purpose-built for clinical and research use.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <Button
                                    size={'lg'}
                                    onClick={openVideoModal}
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                        Watch How It Works
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size={'lg'}
                                    onClick={() => {
                                        window.location.href = "/contact?subject=Request%20DDT%20License";
                                    }}
                                >
                                    Request License
                                </Button>
                            </div>
                        </div>

                        {/* Trusted by logos */}
                        <div className="flex justify-center items-center space-x-8 lg:space-x-26 mb-10">
                            {trustedLogos.map((logo, index) => (
                                <div key={index} className="flex items-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={150}
                                        height={0}
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Dashboard Preview */}
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl max-w-5xl mx-auto">
                            <Image src="/images/screenshots/ddtimage.png" alt="Dashboard Preview" className="object-cover" width={1000} height={1000} />
                        </div>
                    </div>
                </section>

                {/* Features Grid - Bird Style with Dynamic Data */}
                <section className="main-padding py-20 lg:py-32">
                    <div className="max-w-6xl mx-auto">
                        {/* <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Key Features & Capabilities
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Built on cutting-edge neuroscience research, DDT delivers unparalleled insights into cognitive function
                            </p>
                        </div> */}

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
                                const icons = ["🧠", "📊", "🎮", "🔬"];

                                return (
                                    <div key={index} className="space-y-8">
                                        {/* Feature Header */}
                                        <div className="space-y-6">
                                            <div className={`w-12 h-12 ${accentClasses.icon} rounded-xl flex items-center justify-center`}>
                                                <div className="text-2xl">{icons[index]}</div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
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

                                        {/* Feature Image/Demo */}
                                        <div className={`${accentClasses.bg} rounded-2xl p-8`}>
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

                {/* Description Section */}
                <section ref={descriptionRef} className="main-padding py-32 lg:py-40">
                    <div className="max-w-6xl mx-auto">
                        <div className="space-y-12">
                            <p
                                ref={firstParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-5xl"
                            >
                                In a world moving at lightning speed, the answer isn't more tools—but the right one.
                            </p>
                            <p
                                ref={secondParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-6xl"
                            >
                                DDT unifies cognitive assessment, spatial memory evaluation,
                                and research analytics into a single, powerful platform. Automate what
                                slows you down, focus on what moves you
                                forward, and scale without limits.
                            </p>
                            <p
                                ref={thirdParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-4xl"
                            >
                                Welcome to cognitive research reimagined.
                            </p>
                        </div>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="w-full bg-black flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] py-16 md:py-20 lg:py-30 relative overflow-x-hidden">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h1 className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-medium leading-tight text-[#D1D5DB]">
                            Bring the power of <span className="text-[#4D7FFF] font-bold">
                                DDT
                            </span> to your research or practice. Bring the cure to {" "}
                            <span className="text-[#4D7FFF] font-bold">
                                chronic
                                neurodegenerative
                            </span>{" "}
                            diseases.
                        </h1>
                        <div className="mt-8 md:mt-12 flex justify-center">
                            <button
                                className={clsx(
                                    "flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#4D7FFF] to-[#5EA2EF] text-white text-base md:text-lg font-medium shadow-lg",
                                    "hover:scale-105 transition-transform duration-300 relative z-10"
                                )}
                            >
                                Request License
                            </button>
                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
                <section className="main-padding py-20 lg:py-32 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
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
                                title="DDT Demo Video"
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

// Brain Wave Animation Component
const BrainWaveAnimation = () => {
    const waveRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (waveRef.current) {
            const paths = waveRef.current.querySelectorAll('path');

            paths.forEach((path, index) => {
                gsap.fromTo(path,
                    {
                        strokeDasharray: "0,1000",
                        opacity: 0.3
                    },
                    {
                        strokeDasharray: "1000,0",
                        opacity: 0.7,
                        duration: 3 + index * 0.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "power2.inOut",
                        delay: index * 0.3
                    }
                );
            });
        }
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <svg
                ref={waveRef}
                className="absolute top-64 left-0 transform scale-150"
                viewBox="0 0 1200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Brain wave patterns */}
                <path
                    d="M50 200 Q150 150 250 200 T450 180 Q550 160 650 200 T850 190 Q950 170 1050 200"
                    stroke="#2a7fff"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M50 220 Q120 180 220 220 T420 200 Q520 180 620 220 T820 210 Q920 190 1020 220"
                    stroke="#53b949"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M50 240 Q140 200 240 240 T440 220 Q540 200 640 240 T840 230 Q940 210 1040 240"
                    stroke="#2a7fff"
                    strokeWidth="1"
                    fill="none"
                />

                {/* Neural network nodes */}
                <circle cx="200" cy="180" r="3" fill="#4F46E5" className="animate-pulse" />
                <circle cx="400" cy="200" r="2" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="600" cy="190" r="2.5" fill="#06B6D4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="800" cy="210" r="2" fill="#4F46E5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

                {/* Connecting lines */}
                <line x1="200" y1="180" x2="400" y2="200" stroke="#4F46E5" strokeWidth="0.5" opacity="0.3" />
                <line x1="400" y1="200" x2="600" y2="190" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
                <line x1="600" y1="190" x2="800" y2="210" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3" />
            </svg>
        </div>
    );
};

export default DDTPage;
