"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Tag } from "@/components/pages/global";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SFPro } from "@/lib/fonts";

gsap.registerPlugin(ScrollTrigger);

function Mission() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  // Setup arrow hover animation
  useEffect(() => {
    if (!buttonRef.current || !arrowRef.current) return;

    const button = buttonRef.current;
    const arrow = arrowRef.current;

    gsap.set(arrow, { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 });

    // Create hover animation
    const flyAwayAnimation = gsap.timeline({ paused: true }).to(arrow, {
      x: 60,
      y: -10,
      scale: 3,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    const returnAnimation = gsap
      .timeline({ paused: true })
      .set(arrow, {
        x: -140,
        y: -30,
        scale: 6,
        rotate: -15,
        opacity: 0,
      })
      .to(arrow, {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

    const handleEnter = () => {
      returnAnimation.pause();
      flyAwayAnimation.restart();
    };

    const handleLeave = () => {
      if (flyAwayAnimation.progress() === 1) {
        // Only return if fly away is complete
        returnAnimation.restart();
      }
    };

    // Add event listeners
    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    if (!headingRef.current || !imageRef.current || !containerRef.current)
      return;

    const heading = headingRef.current;
    const words = Array.from(
      heading.querySelectorAll("span:not([class*='text-[#4D7FFF]'])")
    );
    const blueWords = Array.from(
      heading.querySelectorAll("span[class*='text-[#4D7FFF]']")
    );
    const image = imageRef.current;
    const container = containerRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      // Initial state
      gsap.set([...words, ...blueWords], {
        opacity: 0,
        y: 150,
        filter: "blur(5px) brightness(2)",
      });
      gsap.set(image, { opacity: 0, y: 100 });
      gsap.set(buttonWrapperRef.current, {
        opacity: 0,
      });

      // Start image animation immediately
      tl.to(
        image,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      // Randomize words for more organic animation
      const allWords = [...words, ...blueWords].sort(() => Math.random() - 0.5);

      // Animate all words
      allWords.forEach((word, index) => {
        const isBlueWord = word.classList.contains("text-[#4D7FFF]");

        tl.to(
          word,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px) brightness(1)",
            duration: 1.2,
            ease: "power3.out",
            scale: isBlueWord ? 1.02 : 1, // Subtle scale for blue words
          },
          index * 0.06 // Shorter delay for more concurrent animations
        );
      });

      // Animate button after text animations
      tl.to(
        buttonWrapperRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        ">-0.6" // Start slightly before the last word animation finishes
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="main-padding py-16 relative">
      <div className="absolute left-24 top-12 z-[-1] opacity-40">
        <Image
          src={"/images/image 28.png"}
          alt="background"
          width={600}
          height={600}
        />
      </div>
      <div className="flex gap-24 items-center">
        <div className="flex flex-col gap-12 flex-[1.2] items-start">
          <Tag text="MISSION" />
          <h1
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className={`text-[3.5rem] tracking-tight leading-[1.3] font-semibold pr-10 ${SFPro.className}`}
          >
            <span>Helping</span>{" "}
            <span className="text-[#4D7FFF]">millions</span> <span>to</span>{" "}
            <span>bring</span> <span>impact</span> <span>with</span>{" "}
            <span>purpose</span> <span>for</span> <span>the</span>{" "}
            <span>treatment</span> <span>of</span>{" "}
            <span className="text-[#4D7FFF]">chronic neurodegenerative</span>{" "}
            <span>diseases.</span>
          </h1>
          <div ref={buttonWrapperRef}>
            <Button
              ref={buttonRef}
              variant="default"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-medium relative overflow-hidden"
            >
              <span className="mr-2">Read More</span>
              <span className="inline-block">
                <svg
                  ref={arrowRef}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            ref={imageRef}
            src={"/images/hero2.jpg"}
            alt="hellooooo"
            width={700}
            height={700}
            className="h-[700px] w-[600px] object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
