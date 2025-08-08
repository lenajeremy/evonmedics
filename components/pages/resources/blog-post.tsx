"use client";

import Image from "next/image";
import Link from "next/link";
import { UberMove } from "@/lib/fonts";

interface BlogPostProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
  categories: string[];
}

export default function BlogPost({
  title,
  subtitle,
  author,
  date,
  readTime,
  image,
  content,
  categories,
}: BlogPostProps) {
  return (
    <article className="max-w-[1200px] mx-auto py-16">
      <div className="space-y-10 mb-8">
        <div className="flex flex-wrap gap-8">
          <h1
            className={`text-5xl font-bold leading-tight ${UberMove.className} w-[65%]`}
          >
            {title}
          </h1>
          <div className="flex gap-36">
            <div className="relative h-[400px] w-[500px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex justify-between flex-col py-8">
              <div className="space-y-4">
                <p className="text-2xl text-gray-600 w-[75%] leading-8">
                  Learn how to easily accept online orders to improve margins
                  and build customer loyalty.
                </p>
                <div className="flex gap-6 text-[11px] text-black font-semibold uppercase tracking-widest">
                  <p>BY {author}</p>
                  <p className="uppercase">
                    <span className="text-gray-600">{date}</span>
                    <span> - {readTime} READ</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/resources/${category
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className={`text-sm w-fit font-medium ${
                        UberMove.className
                      } ${
                        index == 0
                          ? "text-white bg-[#5D82E7]"
                          : "bg-[#F1F1F1] text-gray-800"
                      } uppercase px-4 py-1.5 rounded-md`}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mt-4 pt-6">
                  <Link
                    href="#"
                    aria-label="Share on Facebook"
                    className="text-gray-400 hover:text-[#4D7FFF] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    aria-label="Share on Twitter"
                    className="text-gray-400 hover:text-[#4D7FFF] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    aria-label="Copy link"
                    className="text-gray-400 hover:text-[#4D7FFF] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">{content}</div>
    </article>
  );
}
