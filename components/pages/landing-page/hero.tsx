"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Fade, { FadeType } from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  {
    image: "hero1.png",
    title: "Solving the world's toughest medical challenges",
    subtitle:
      "Enhancing everyday experiences to elevate the quality of life and mental wellbeing for individuals.quality of life and mental wellbeing for.",
    buttonLink: "/about",
    buttonText: "Learn More",
  },
  {
    image: "hero2.jpg",
    title: "Innovative solutions for a healthier tomorrow",
    subtitle:
      "Empowering individuals with cutting-edge technology to improve health outcomes and quality of life.",
    buttonLink: "/products",
    buttonText: "Explore Products",
  },
  {
    image: "hero4.avif",
    title: "Your partner in health and wellness",
    subtitle:
      "Committed to providing comprehensive healthcare solutions that meet the needs of our community.",
    buttonLink: "/services",
    buttonText: "Discover Services",
  },
  {
    image: "hero5.jpg",
    title: "Empowering healthcare professionals with advanced tools",
    subtitle:
      "Equipping healthcare providers with innovative solutions to enhance patient care and outcomes.",
    buttonLink: "/investors",
    buttonText: "Join Us",
  },
];

function Hero() {
  const [plugins, setPlugins] = React.useState<FadeType[]>([]);

  React.useEffect(() => {
    setPlugins([Fade(), Autoplay({ playOnInit: true, delay: 7000 })]);
    return () => {
      setPlugins([]);
    };
  }, []);

  const [index, setIndex] = React.useState(0);

  return (
    <div className="relative h-screen bg-black">
      <Carousel
        opts={{ loop: true }}
        plugins={plugins}
        className="h-full"
        index={index}
        onChangeIndex={setIndex}
      >
        <CarouselContent className="h-screen">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <Image
                  src={`/images/${item.image}`}
                  alt={`Hero Image ${index + 1}`}
                  quality={100}
                  fill
                  className="object-cover object-bottom pointer-events-none"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
                <div className="absolute inset-0 main-padding mx-auto pt-[28vh]">
                  <div className="w-[45%] flex flex-col gap-4">
                    <p className="top-heading">{item.title}</p>
                    <p className="w-4/5 subtitle">{item.subtitle}</p>
                    <Button
                      size={"lg"}
                      className="bg-blue-500 hover:bg-blue-600 w-fit"
                    >
                      READ MORE
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 main-padding w-full">
          <div className="flex space-x-8 w-full py-4">
            {Array.from(carouselItems.keys()).map((i) => (
              <CarouselSection
                active={i === index}
                key={i}
                index={i + 1}
                setIndex={setIndex}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-[45%] transform -translate-y-1/2 w-full px-8">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-transparent border-none scale-150 shadow-none"
              onClick={() =>
                setIndex(
                  (prev) =>
                    (prev - 1 + carouselItems.length) % carouselItems.length
                )
              }
            >
              <svg
                width="14"
                height="23"
                viewBox="0 0 14 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 3.41291L11.1812 0.844086L0.25 11.7753L11.1812 22.7064L13.75 20.1376L5.40587 11.7753L13.75 3.41291Z"
                  fill="#A6A6A6"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-transparent border-none scale-150 shadow-none"
              onClick={() =>
                setIndex((prev) => (prev + 1) % carouselItems.length)
              }
            >
              <svg
                width="14"
                height="23"
                viewBox="0 0 14 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 3.41291L2.81883 0.844086L13.75 11.7753L2.81883 22.7064L0.25 20.1376L8.59413 11.7753L0.25 3.41291Z"
                  fill="#A6A6A6"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

function CarouselSection({
  active,
  index,
  setIndex,
}: {
  active: boolean;
  index: number;
  setIndex: (i: number) => void;
}) {
  return (
    <button
      onClick={() => setIndex(index - 1)}
      role="button"
      className={`flex py-3 pt-5 px-3 gap-3 relative text-white ${
        active ? "opacity-100" : "opacity-45"
      }`}
    >
      <div
        className={`h-[3px] absolute top-0 left-0 right-0 bg-[#A1A1A1] carousel-progress ${
          active ? "active" : "inactive"
        }`}
      >
        {active && (
          <div
            className="h-full bg-blue-500 carousel-progress-indicator"
            style={{ animationDuration: "7s" }}
          ></div>
        )}
      </div>

      <p className="font-semibold text-lg">
        {index.toString().padStart(2, "0")}
      </p>
      <p className="pointer-events-none text-left font-[var(--font-nunito-sans)]">
        Enhancing everyday experiences to the quality of life and mental
        wellbeing for individuals.
      </p>
    </button>
  );
}
export default Hero;
