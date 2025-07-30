"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Tag } from "@/components/pages/global";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { UberMove } from "@/lib/fonts";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ListItem = ({
  isLast = false,
  index,
  text,
}: {
  isLast?: boolean;
  index: number;
  text: string;
}) => (
  <Link
    href="/"
    className={`relative group flex w-full items-center group py-6 px-4 border-t-[1.5]  border-t-[#E3E3E3] ${
      isLast && "border-t-0"
    }`}
  >
    <span className={`${UberMove.className} font-bold`}>
      {index.toString().padStart(2, "0")}
    </span>
    <span className={`flex-1 text-3xl font-normal tracking-tight`}>{text}</span>
    <svg
      width="64"
      height="65"
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  return (
    <section className="main-padding flex flex-col gap-16">
      <div className="flex flex-col gap-32">
        <div className="flex gap-32 items-center">
          <div className="flex-1">
            <Image
              src={"/images/granny.png"}
              alt="White Grandma"
              width={700}
              height={700}
              className="h-[700px] w-[600px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-8 flex-[1.2] items-start">
            <Tag text="OUR PRODUCTS" />
            <div className="space-y-16 pr-16">
              <p className="text-4xl font-medium leading-12 tracking-tight">
                Passionate about{" "}
                <span className="text-[#4D7FFF]">innovation</span>, we
                constantly strive to create new products incorporating{" "}
                <span className="text-[#4D7FFF]">cutting-edge</span>{" "}
                technologies to provide cure for:
              </p>
              <div>
                <ListItem index={1} text="Alzheimers" />
                <ListItem index={2} text="Chronic Pain" />
                <ListItem index={3} isLast text="Addiction Treatment" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-32">
        <div className="flex gap-32 items-center flex-row-reverse">
          <div className="flex-1">
            <Image
              src={"/images/granny.png"}
              alt="White Grandma"
              width={700}
              height={700}
              className="h-[700px] w-[600px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-8 flex-[1.2] items-start">
            <Tag text="OUR PRODUCTS" />
            <div className="space-y-16 pr-16">
              <p className="text-4xl font-medium leading-12 tracking-tight">
                Passionate about{" "}
                <span className="text-[#4D7FFF]">innovation</span>, we
                constantly strive to create new products incorporating{" "}
                <span className="text-[#4D7FFF]">cutting-edge</span>{" "}
                technologies to provide cure for:
              </p>
              <div>
                <ListItem index={1} text="Alzheimers" />
                <ListItem index={2} text="Chronic Pain" />
                <ListItem index={3} isLast text="Addiction Treatment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
