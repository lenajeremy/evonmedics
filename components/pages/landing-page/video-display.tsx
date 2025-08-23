"use client";

import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

interface MarqueeLogoType {
  src: string;
  alt: string;
}

const clientLogos: MarqueeLogoType[] = [
  {
    src: require("@/public/images/clients/image 21.png"),
    alt: "TechSlice",
  },
  {
    src: require("@/public/images/clients/image 22.png"),
    alt: "Howard University",
  },
  {
    src: require("@/public/images/clients/image 23.png"),
    alt: "NIH",
  },
  {
    src: require("@/public/images/clients/image 25.png"),
    alt: "Cortex",
  },
];

function MarqueeLogos() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  return (
    <div ref={marqueeRef} className="w-full mt-16 md:mt-20 lg:mt-24 px-4 md:px-12 lg:px-20 relative">
      <div
        className="mx-auto overflow-hidden relative"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className={clsx(
            "flex gap-8 md:gap-12 lg:gap-16",
            "will-change-transform w-[200%]",
            isVisible ? "animate-marquee" : ""
          )}
          style={{
            animationPlayState: (isVisible && !hover) ? "running" : "paused",
            animationDuration: "40s",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* First set of logos */}
          {clientLogos.map((logo, i) => (
            <div
              key={`original-${logo.alt}-${i}`}
              className="w-40 md:w-60 flex-shrink-0 relative"
              style={{ aspectRatio: "4/1" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                draggable={false}
                style={{ userSelect: "none" }}
              />
            </div>
          ))}
          {clientLogos.map((logo, i) => (
            <div
              key={`duplicate-${logo.alt}-${i}`}
              className="w-40 md:w-60 flex-shrink-0 relative"
              style={{ aspectRatio: "4/1" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                draggable={false}
                style={{ userSelect: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

export default function VideoDisplay() {
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] py-16 md:py-20 lg:py-30 relative overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-medium leading-tight text-[#D1D5DB]">
          Helping <span className="text-[#4D7FFF] font-bold">millions</span> to
          bring impact with
          <br className="hidden sm:block" />
          purpose for the treatment of{" "}
          <span className="text-[#4D7FFF] font-bold">
            chronic
            <br className="hidden sm:block" />
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-9 md:h-9"
            >
              <g clipPath="url(#clip0_149_916)">
                <path
                  d="M21.3337 34.3751L33.8337 25.0001L21.3337 15.6251V34.3751ZM25.5003 4.16675C14.0003 4.16675 4.66699 13.5001 4.66699 25.0001C4.66699 36.5001 14.0003 45.8334 25.5003 45.8334C37.0003 45.8334 46.3337 36.5001 46.3337 25.0001C46.3337 13.5001 37.0003 4.16675 25.5003 4.16675ZM25.5003 41.6667C16.3128 41.6667 8.83366 34.1876 8.83366 25.0001C8.83366 15.8126 16.3128 8.33341 25.5003 8.33341C34.6878 8.33341 42.167 15.8126 42.167 25.0001C42.167 34.1876 34.6878 41.6667 25.5003 41.6667Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_149_916">
                  <rect
                    width="50"
                    height="50"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Watch how
          </button>
        </div>
      </div>
      <MarqueeLogos />
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[90px] md:w-[240px] md:h-[120px] bg-[#4D7FFF] opacity-30 blur-3xl rounded-full z-0 pointer-events-none" />
    </div>
  );
}
