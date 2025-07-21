"use server";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
];
function Hero() {
  return (
    <div className="relative h-[85vh]">
      <Carousel>
        <CarouselContent className="h-[85vh]">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <Image
                  src={`/images/${item.image}`}
                  alt={`Hero Image ${index + 1}`}
                  quality={100}
                  fill
                  className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white">
        {Array.from({ length: carouselItems.length }).map((_, index) => (
          <CarouselSection key={index} />
        ))}
      </div>
    </div>
  );
}

function CarouselSection({ active }: { active: boolean }) {
  return (
    <div className="flex">
      <p>01</p>
      <p>Innovation beyond understanding everything was possible, clients.</p>
    </div>
  );
}
export default Hero;
