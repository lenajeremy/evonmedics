"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tag } from "@/components/pages/global";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { UberMove } from "@/lib/fonts";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// AnimatedText component that handles word-by-word animation
const AnimatedText = ({ 
  text, 
  highlights = [], 
  className = "",
  key: animationKey 
}: { 
  text: string; 
  highlights?: string[]; 
  className?: string;
  key?: string | number;
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = wordsRef.current.filter(Boolean);
    
    // Set initial state
    gsap.set(words, {
      y: -20,
      opacity: 0,
    });

    // Animate words in
    gsap.to(words, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
      stagger: {
        amount: 0.4,
        from: "start",
      },
    });
  }, [animationKey, text]);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,:]$/g, "");
        const isHighlighted = highlights.includes(cleanWord);
        
        return (
          <React.Fragment key={index}>
            <span
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className={isHighlighted ? "text-[#4D7FFF]" : ""}
              style={{ display: "inline-block" }}
            >
              {word}
            </span>
            {index < words.length - 1 ? " " : ""}
          </React.Fragment>
        );
      })}
    </p>
  );
};

const ListItem = ({
  isLast = false,
  index,
  text,
  onHover,
  onLeave,
}: {
  isLast?: boolean;
  index: number;
  text: string;
  onHover?: () => void;
  onLeave?: () => void;
}) => (
  <Link
    href="/"
    className={`relative group flex w-full items-center group py-4 md:py-6 px-2 md:px-4 border-t-[1.5] border-t-[#E3E3E3] ${
      isLast && "border-t-0"
    }`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <span className={`${UberMove.className} font-bold text-sm md:text-base mr-3 md:mr-4`}>
      {index.toString().padStart(2, "0")}
    </span>
    <span className={`flex-1 text-xl md:text-2xl lg:text-3xl font-normal tracking-tight`}>{text}</span>
    <svg
      width="48"
      height="49"
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
    >
      <rect
        width="64"
        height="64"
        transform="translate(0 0.452393)"
        fill="#507FFF"
      />
      <path
        d="M17.9393 44.4393C17.3536 45.0251 17.3536 45.9749 17.9393 46.5607C18.5251 47.1464 19.4749 47.1464 20.0607 46.5607L17.9393 44.4393ZM46.5 19.5C46.5 18.6716 45.8284 18 45 18L31.5 18C30.6716 18 30 18.6716 30 19.5C30 20.3284 30.6716 21 31.5 21H43.5V33C43.5 33.8284 44.1716 34.5 45 34.5C45.8284 34.5 46.5 33.8284 46.5 33L46.5 19.5ZM20.0607 46.5607L46.0607 20.5607L43.9393 18.4393L17.9393 44.4393L20.0607 46.5607Z"
        fill="white"
      />
    </svg>
  </Link>
);

export default function ProductAndServices() {
  const [currentText, setCurrentText] = useState("default");
  const [currentText2, setCurrentText2] = useState("default");
  const [animationKey, setAnimationKey] = useState(0);
  const [animationKey2, setAnimationKey2] = useState(0);

  const textVariants = {
    default: {
      text: "Passionate about innovation, we constantly strive to create new products incorporating cutting-edge technologies to provide cure for:",
      highlights: ["innovation", "cutting-edge"],
    },
    alzheimers: {
      text: "Our innovative neurotechnology targets early-stage Alzheimer's, utilizing cutting-edge brain stimulation to enhance cognitive function.",
      highlights: ["innovative", "cutting-edge"],
    },
    chronicpain: {
      text: "Advanced pain management solutions combining innovative nerve therapy with cutting-edge sensor technology for precise treatment.",
      highlights: ["innovative", "cutting-edge"],
    },
    addictiontreatment: {
      text: "Revolutionary addiction treatment using innovative neurofeedback and cutting-edge behavioral modification technologies.",
      highlights: ["innovative", "cutting-edge"],
    },
  };

  // Handle hover events
  const handleHover = (text: string) => {
    setCurrentText(text);
    setAnimationKey(prev => prev + 1);
  };

  // Handle hover leave
  const handleLeave = () => {
    setCurrentText("default");
    setAnimationKey(prev => prev + 1);
  };

  // Handle hover events for second section
  const handleHover2 = (text: string) => {
    setCurrentText2(text);
    setAnimationKey2(prev => prev + 1);
  };

  // Handle hover leave for second section
  const handleLeave2 = () => {
    setCurrentText2("default");
    setAnimationKey2(prev => prev + 1);
  };

  return (
    <section className="main-padding flex flex-col gap-8 md:gap-12 lg:gap-16 pb-8 md:pb-12 lg:pb-16">
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <Image
              src={"/images/granny.png"}
              alt="White Grandma"
              width={700}
              height={700}
              className="h-[400px] md:h-[500px] lg:h-[700px] w-full lg:w-[600px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 flex-1 lg:flex-[1.2] items-start order-1 lg:order-2">
            <Tag text="OUR PRODUCTS" />
            <div className="space-y-8 md:space-y-12 lg:space-y-16 pr-0 lg:pr-16">
              <AnimatedText
                key={animationKey}
                text={textVariants[currentText as keyof typeof textVariants].text}
                highlights={textVariants[currentText as keyof typeof textVariants].highlights}
                className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed lg:leading-12 tracking-tight"
              />
              <div>
                <ListItem
                  index={1}
                  text="Alzheimers"
                  onHover={() => handleHover("alzheimers")}
                  onLeave={handleLeave}
                />
                <ListItem
                  index={2}
                  text="Chronic Pain"
                  onHover={() => handleHover("chronicpain")}
                  onLeave={handleLeave}
                />
                <ListItem
                  index={3}
                  isLast
                  text="Addiction Treatment"
                  onHover={() => handleHover("addictiontreatment")}
                  onLeave={handleLeave}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-32 items-center">
          <div className="flex-1 order-2 lg:order-2">
            <Image
              src={"/images/granny.png"}
              alt="White Grandma"
              width={700}
              height={700}
              className="h-[400px] md:h-[500px] lg:h-[700px] w-full lg:w-[600px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 flex-1 lg:flex-[1.2] items-start order-1 lg:order-1">
            <Tag text="OUR SERVICES" />
            <div className="space-y-8 md:space-y-12 lg:space-y-16 pr-0 lg:pr-16">
              <AnimatedText
                key={animationKey2}
                text={textVariants[currentText2 as keyof typeof textVariants].text}
                highlights={textVariants[currentText2 as keyof typeof textVariants].highlights}
                className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed lg:leading-12 tracking-tight"
              />
              <div>
                <ListItem
                  index={1}
                  text="Alzheimers"
                  onHover={() => handleHover2("alzheimers")}
                  onLeave={handleLeave2}
                />
                <ListItem
                  index={2}
                  text="Chronic Pain"
                  onHover={() => handleHover2("chronicpain")}
                  onLeave={handleLeave2}
                />
                <ListItem
                  index={3}
                  isLast
                  text="Addiction Treatment"
                  onHover={() => handleHover2("addictiontreatment")}
                  onLeave={handleLeave2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
