import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Hero() {
  return (
    <Carousel>
      <CarouselContent>
        {["hero1.png", "hero2.jpg", "hero3.jpg", "hero4.avif", "hero5.jpg"].map(
          (src, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="h-screen relative">
                <h5 className="font-9xl">index {index}</h5>
                <Image
                  src={`/images/${src}`}
                  alt={`Hero Image ${index + 1}`}
                //   width={1000}
                //   height={1000}
                  quality={100}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Hero;
