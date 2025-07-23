"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Fade, { FadeType } from "embla-carousel-fade";

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
    setPlugins([Fade()]);
    return () => {
      setPlugins([]);
    };
  }, []);

  const [index, setIndex] = React.useState(0);

  return (
    <div className="relative h-[85vh] bg-black">
      <Carousel
        opts={{ loop: true }}
        plugins={plugins}
        className="h-full"
        index={index}
        onChangeIndex={setIndex}
      >
        <CarouselContent className="h-[85vh]">
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
                <div className="absolute inset-0 main-padding mx-auto pt-64">
                  <div className="w-[45%] flex flex-col gap-4">
                    <p className="top-heading">{item.title}</p>
                    <p className="w-4/5 subtitle body-font">{item.subtitle}</p>
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
      </Carousel>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 main-padding w-full">
        <div className="flex space-x-8 w-full py-4">
          {Array.from(carouselItems.keys()).map((i) => (
            <CarouselSection active={i === index} key={i} index={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CarouselSection({
  active,
  index,
}: {
  active: boolean;
  index: number;
}) {
  return (
    <button
      role="link"
      className={`flex border-t-3 text-white ${
        active ? "border-blue-500" : "border-[#A1A1A1] opacity-45"
      } py-3 px-3 gap-3`}
    >
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
