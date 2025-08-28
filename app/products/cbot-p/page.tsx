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
        title: "Olfactory Therapy Integration",
        description: "Advanced device that uses olfactory therapy to ease pain and boost well-being through natural brain mechanisms.",
        imageUrl: "/images/hero1.png",
        accentColor: "blue"
    },
    {
        title: "Home-Based Convenience",
        description: "Manage chronic pain at home with our portable, easy-to-use device that brings clinical-grade therapy to your daily routine.",
        imageUrl: "/images/hero2.jpg",
        accentColor: "green"
    },
    {
        title: "Complete Pain Solution",
        description: "Works with your brain's natural mechanisms through the olfactory system to regulate both pain perception and emotional well-being.",
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.02.38.png",
        accentColor: "purple"
    },
    {
        title: "Non-Invasive Treatment",
        description: "Innovative, non-invasive approach that helps people reclaim their lives from chronic pain without medication side effects.",
        imageUrl: "/images/screenshots/Screenshot 2025-08-21 at 15.14.12.png",
        accentColor: "orange"
    }
];

const stats = [
    {
        value: "$3.2",
        label: "million",
        description: "in NIH Funding backed by substantial National Institutes of Health investment for research and development"
    },
    {
        value: "50",
        label: "million",
        description: "Americans affected by chronic back pain, making it the most prevalent chronic pain condition"
    },
    {
        value: "20",
        label: "million",
        description: "Americans experience significant negative emotional states due to chronic pain, impacting their quality of life"
    }
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Chronic Back Pain Patient",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/images/hero3.jpg",
        quote: "CBOT-P has transformed my daily life. I can finally manage my pain without relying on medication."
    },
    {
        name: "Michael Chen",
        role: "Fibromyalgia Sufferer",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/images/hero4.avif",
        quote: "The olfactory therapy approach is revolutionary. I feel more in control of my pain than ever before."
    },
    {
        name: "Emily Rodriguez",
        role: "Chronic Pain Survivor",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "/images/hero5.jpg",
        quote: "After years of struggling, CBOT-P gave me back my quality of life. It's truly life-changing."
    }
];

const faqData = [
    {
        question: "How does CBOT-P work for chronic pain?",
        answer: "CBOT-P uses olfactory therapy to work with your brain's natural mechanisms through the olfactory system. This unique approach helps regulate both pain perception and emotional well-being, offering a more complete solution than traditional pain management."
    },
    {
        question: "Is CBOT-P safe to use at home?",
        answer: "Yes, CBOT-P is designed as a safe, home-based solution. It's non-invasive and uses natural olfactory therapy, making it suitable for daily use without the side effects often associated with medication."
    },
    {
        question: "How long does it take to see results?",
        answer: "Many patients report feeling improvements in pain management and emotional well-being within the first few weeks of using CBOT-P. Results may vary based on individual conditions and consistent use."
    },
    {
        question: "Can I participate in the clinical trial?",
        answer: "We welcome participants for our Phase II clinical trial. Eligibility depends on various factors including your chronic pain condition, medical history, and ability to commit to the study requirements."
    },
    {
        question: "What makes CBOT-P different from other pain treatments?",
        answer: "CBOT-P represents a paradigm shift in chronic pain treatment. Unlike conventional therapies that only target symptoms, our technology works with your brain's natural mechanisms through the olfactory system for a more complete solution."
    }
];

// Pain Relief Animation Component
const PainReliefAnimation = () => {
    const animationRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (animationRef.current) {
            const paths = animationRef.current.querySelectorAll('path');
            const circles = animationRef.current.querySelectorAll('circle');

            // Animate pain relief paths
            paths.forEach((path, index) => {
                gsap.fromTo(path,
                    {
                        strokeDasharray: "0,1000",
                        opacity: 0.2
                    },
                    {
                        strokeDasharray: "1000,0",
                        opacity: 1,
                        duration: 2,
                        delay: index * 0.3,
                        ease: "power2.out",
                        repeat: -1,
                        yoyo: true
                    }
                );
            });

            // Animate relief molecules
            circles.forEach((circle, index) => {
                gsap.fromTo(circle,
                    {
                        opacity: 0.2,
                        scale: 0.5
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1.5,
                        delay: index * 0.2,
                        ease: "power2.out",
                        repeat: -1,
                        yoyo: true
                    }
                );
            });
        }
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
            <svg
                ref={animationRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
                viewBox="0 0 1000 600"
                fill="none"
            >
                {/* Pain relief pathways */}
                <path
                    d="M100 300 Q300 200 500 300 T900 300"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M100 400 Q300 350 500 400 T900 400"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M100 200 Q300 250 500 200 T900 200"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                />

                {/* Relief molecules */}
                <circle cx="200" cy="300" r="4" fill="#3B82F6" />
                <circle cx="400" cy="200" r="3" fill="#8B5CF6" />
                <circle cx="600" cy="400" r="4" fill="#10B981" />
                <circle cx="800" cy="300" r="3" fill="#3B82F6" />
                <circle cx="300" cy="400" r="3" fill="#8B5CF6" />
                <circle cx="700" cy="200" r="4" fill="#10B981" />

                {/* Brain outline (subtle) */}
                <path
                    d="M400 100 Q500 80 600 100 Q700 120 750 150 Q780 180 750 210 Q700 240 600 250 Q500 260 400 250 Q300 240 250 210 Q220 180 250 150 Q300 120 400 100"
                    stroke="#3B82F6"
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
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string>("");

    const descriptionRef = useRef<HTMLDivElement>(null);
    const firstParagraphRef = useRef<HTMLParagraphElement>(null);
    const secondParagraphRef = useRef<HTMLParagraphElement>(null);
    const thirdParagraphRef = useRef<HTMLParagraphElement>(null);

    // Animation refs for headings
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const statsTitleRef = useRef<HTMLHeadingElement>(null);
    const featuresTitleRef = useRef<HTMLHeadingElement>(null);
    const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
    const featureTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const faqTitleRef = useRef<HTMLHeadingElement>(null);
    const ctaTitleRef = useRef<HTMLHeadingElement>(null);

    // Animation refs for images
    const heroImageRef = useRef<HTMLDivElement>(null);
    const testimonialsImageRef = useRef<HTMLDivElement>(null);
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

    const openTestimonialVideo = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
        setIsVideoModalOpen(true);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        // Animate headings with staggered words
        const animateHeading = (element: HTMLElement, isHero = false) => {
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
                    word.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-purple-500', 'bg-clip-text', 'text-transparent');
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
            if (statsTitleRef.current) animateHeading(statsTitleRef.current);
            if (featuresTitleRef.current) animateHeading(featuresTitleRef.current);
            if (testimonialsTitleRef.current) animateHeading(testimonialsTitleRef.current);
            if (faqTitleRef.current) animateHeading(faqTitleRef.current);
            if (ctaTitleRef.current) animateHeading(ctaTitleRef.current);
            if (heroImageRef.current) animateImage(heroImageRef.current, true);
            if (testimonialsImageRef.current) animateImage(testimonialsImageRef.current);

            featureTitleRefs.current.forEach(ref => {
                if (ref) animateHeading(ref);
            });

            featureImageRefs.current.forEach(ref => {
                if (ref) animateImage(ref);
            });
        }, 50);

        // Refresh ScrollTrigger
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Description section animation (existing)
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

                {/* Hero Section */}
                <section className="main-padding py-12 md:py-16 lg:py-24 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl"></div>
                    {/* Pain Relief Background Animation */}
                    <PainReliefAnimation />

                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                            {/* Content Column */}
                            <div className="lg:col-span-6 space-y-6 lg:space-y-8">
                                <div className="inline-block">
                                    <Tag text="CBOT-P CHRONIC PAIN TREATMENT" />
                                </div>

                                <div className="space-y-4 lg:space-y-6">
                                    <h1 ref={heroTitleRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 cursor-default">
                                        Home-Based Solution for Lasting Pain Relief
                                    </h1>

                                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal bg-gradient-to-r leading-tight">
                                        — manage chronic pain at home
                                    </h2>
                                </div>

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl group cursor-default">
                                    <span className="hover:text-blue-600 transition-colors duration-300">Manage chronic pain at home with CBOT-P, an advanced device that uses</span>
                                    <span className="hover:text-purple-600 transition-colors duration-300"> olfactory therapy to ease pain and boost well-being. Stay in control</span>
                                    <span className="hover:text-cyan-600 transition-colors duration-300"> and improve your quality of life effortlessly.</span>
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <Button
                                        size={'lg'}
                                        onClick={openVideoModal}
                                        className="bg-blue-600 hover:bg-blue-700"
                                    >
                                        <span className="flex items-center justify-center gap-3">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Play Video
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="lg:col-span-6">
                                <div ref={heroImageRef} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                                    <Image
                                        src="/images/hero1.png"
                                        alt="CBOT-P Chronic Pain Treatment Device"
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
                                    <div className="text-5xl lg:text-6xl font-bold text-blue-600">
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

                {/* Description Section with Split Text Animation */}
                <section ref={descriptionRef} className="main-padding py-32 lg:py-40">
                    <div className="max-w-6xl mx-auto">
                        <div className="space-y-12">
                            <p
                                ref={firstParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-5xl"
                            >
                                Beyond Traditional Pain Management
                            </p>
                            <p
                                ref={secondParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-6xl"
                            >
                                CBOT-P represents a paradigm shift in chronic pain treatment. Unlike conventional therapies that only target symptoms, our groundbreaking technology works with your brain's natural mechanisms through the olfactory system.
                            </p>
                            <p
                                ref={thirdParagraphRef}
                                className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-4xl"
                            >
                                This unique approach helps regulate both pain perception and emotional well-being, offering a more complete solution for chronic pain sufferers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="main-padding py-20 lg:py-32">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 ref={featuresTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Revolutionary Pain Relief Technology
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                CBOT-P combines cutting-edge olfactory therapy with advanced technology to deliver lasting pain relief and improved quality of life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {features.map((feature, index) => {
                                const getAccentClasses = (color: string) => {
                                    const colorMap = {
                                        blue: {
                                            bg: "bg-gray-50",
                                            icon: "bg-blue-100",
                                            text: "text-blue-600"
                                        },
                                        green: {
                                            bg: "bg-gray-50",
                                            icon: "bg-green-100",
                                            text: "text-green-600"
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
                                    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
                                };

                                const accentClasses = getAccentClasses(feature.accentColor);
                                const icons = ["🌿", "🏠", "🧠", "💊"];

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

                {/* Testimonials Section */}
                <section className="main-padding py-20 lg:py-32 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 ref={testimonialsTitleRef} className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Real Stories. Real Relief.
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover how CBOT-P is helping people reclaim their lives from chronic pain through innovative, non-invasive treatment.
                            </p>
                        </div>

                        <div ref={testimonialsImageRef} className="relative">
                            {/* Testimonial Carousel */}
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                                    <Image
                                        src={testimonials[currentTestimonial].thumbnail}
                                        alt={`${testimonials[currentTestimonial].name} testimonial`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Testimonial Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <div className="max-w-3xl">
                                            <blockquote className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                                                "{testimonials[currentTestimonial].quote}"
                                            </blockquote>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                                                <div className="space-y-1">
                                                    <p className="font-semibold text-lg text-white">
                                                        {testimonials[currentTestimonial].name}
                                                    </p>
                                                    <p className="text-gray-200 text-sm">
                                                        {testimonials[currentTestimonial].role}
                                                    </p>
                                                </div>
                                                <Button
                                                    onClick={() => openTestimonialVideo(testimonials[currentTestimonial].videoUrl)}
                                                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:bg-white/25"
                                                >
                                                    <div className="flex flex-row items-center gap-2">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>
                                                            Watch Story
                                                        </span>
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Carousel Navigation */}
                            <div className="flex justify-center items-center mt-8 space-x-6">
                                <button
                                    onClick={prevTestimonial}
                                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 hover:scale-105"
                                    aria-label="Previous testimonial"
                                >
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Carousel Indicators */}
                                <div className="flex space-x-3">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${index === currentTestimonial
                                                ? 'bg-blue-600 scale-110'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 hover:scale-105"
                                    aria-label="Next testimonial"
                                >
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
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
                    <div className="w-full bg-gradient-to-b from-[#05152f] to-black flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] py-16 md:py-20 lg:py-30 relative overflow-x-hidden">
                        <div className="max-w-4xl mx-auto text-center px-4">
                            <h1 ref={ctaTitleRef} className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-medium leading-tight text-[#D1D5DB]">
                                Be part of the <span className="text-blue-500 font-bold">
                                    solution
                                </span>. Join our groundbreaking clinical research study to advance the fight against {" "}
                                <span className="text-blue-500 font-bold">
                                    Alzheimer's disease
                                </span>.
                            </h1>
                            <div className="mt-8 md:mt-12 flex justify-center">
                                <button
                                    className={clsx(
                                        "flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base md:text-lg font-medium shadow-lg",
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
            {
                isVideoModalOpen && (
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
                )
            }
        </SmoothScroll >
    );
};

export default CBOTPage;