"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Tag } from "../global";

export default function Careers() {
  return (
    <section className="w-full relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="relative order-2 md:order-1 min-h-[300px] md:min-h-[500px] lg:min-h-[600px] flex-[1.25] w-full">
          <Image
            src="/images/join us.png"
            alt="Team working together"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 md:space-y-8 order-1 md:order-2 py-12 md:py-16 lg:py-24 flex-1 main-padding md:pr-20 lg:pr-40">
          <Tag text="JOIN US" />
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900">
            Join a team working hard to innovate in neurological science.
          </h2>
          <Link
            href="/careers"
            className={clsx(
              "inline-block px-6 md:px-8 py-3 md:py-4 rounded-full bg-gray-900 text-white text-base md:text-lg font-medium",
              "hover:scale-105 transition-transform duration-300"
            )}
          >
            Apply Now
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
