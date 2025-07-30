"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Tag } from "@/components/pages/global";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ListItem = ({ children, isFirst = false }: { children: React.ReactNode; isFirst?: boolean }) => (
  <div className="relative flex items-center group">
    <div className="w-2 h-2 rounded-full bg-[#4D7FFF] mr-3" />
    <span className={`text-xl ${isFirst ? "text-[#4D7FFF] group-hover:translate-x-2" : ""} transition-transform`}>
      {children}
    </span>
    {isFirst && (
      <svg
        className="ml-2 w-6 h-6 text-[#4D7FFF] group-hover:translate-x-2 transition-transform"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </div>
);

export default function ProductAndServices() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Products section animation
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      // Initial states
      textRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            y: 50,
            filter: "blur(10px) brightness(1.5)",
          });
        }
      });

      imageRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            y: 100,
          });
        }
      });

      // Animate elements
      textRefs.current.forEach((el, index) => {
        if (el) {
          tl1.to(
            el,
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px) brightness(1)",
              duration: 1.2,
              ease: "power3.out",
            },
            index * 0.2
          );
        }
      });

      imageRefs.current.forEach((el, index) => {
        if (el) {
          tl1.to(
            el,
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            },
            0.3
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="main-padding py-32">
      {/* Products Section */}
      <div className="flex flex-col gap-32">
        <div className="flex gap-32">
          <div className="flex-1">
            <Image
              ref={(el: HTMLImageElement | null) => { imageRefs.current[0] = el }}
              src="/images/hero2.jpg"
              alt="Senior patient with chronic pain"
              width={600}
              height={600}
              className="w-full h-[600px] object-cover rounded-3xl"
              priority
            />
          </div>
          <div className="flex flex-col gap-8 flex-[1.2]" ref={(el: HTMLDivElement | null) => { textRefs.current[0] = el }}>
            <Tag text="OUR PRODUCTS" />
            <div className="space-y-6">
              <p className="text-xl">
                Passionate about <span className="text-[#4D7FFF]">innovation</span>, we constantly strive to create new products incorporating{" "}
                <span className="text-[#4D7FFF]">cutting-edge</span> technologies to provide cure for:
              </p>
              <div className="space-y-6">
                <ListItem isFirst>Alzheimers</ListItem>
                <ListItem>Chronic Pain</ListItem>
                <ListItem>Addiction Treatment</ListItem>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex gap-32">
          <div className="flex flex-col gap-8 flex-[1.2]" ref={(el: HTMLDivElement | null) => { textRefs.current[1] = el }}>
            <Tag text="OUR SERVICES" />
            <div className="space-y-6">
              <p className="text-xl">
                Passionate about <span className="text-[#4D7FFF]">innovation</span>, we constantly strive to create new products incorporating{" "}
                <span className="text-[#4D7FFF]">cutting-edge</span> technologies.
              </p>
              <div className="space-y-6">
                <ListItem isFirst>Innovation</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Therapeutics</ListItem>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              ref={(el: HTMLImageElement | null) => { imageRefs.current[1] = el }}
              src="/images/hero3.jpg"
              alt="Baby receiving care"
              width={600}
              height={600}
              className="w-full h-[600px] object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}