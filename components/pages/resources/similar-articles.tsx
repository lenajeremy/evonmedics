"use client";

import { UberMove } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "NEWS",
    title: "Evon Medics Secures over $14 Million in NIH Funding",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero1.png",
    href: "/blog/nih-funding-1",
  },
  {
    category: "PRODUCT UPDATES",
    title: "Curing Alzheimers with mod Discovering Olfactory Therapy",
    excerpt:
      "Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia, which comes...",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero4.avif",
    href: "/blog/alzheimers-therapy",
  },
  {
    category: "NEWS",
    title: "Evon Medics Secures over $14 Million in NIH Funding",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero3.jpg",
    href: "/blog/nih-funding-3",
  },
  {
    category: "NEWS",
    title: "Evon Medics Secures over $14 Million in NIH Funding",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero4.avif",
    href: "/blog/nih-funding-4",
  },
];

export default function SimilarArticles() {
  return (
    <section className="space-y-8">
      <div className="flex space-x-3 items-center border-t border-gray-200 pt-3">
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <h2 className={`${UberMove.className} font-semibold text-xl`}>
          SIMILAR ARTICLES
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-6 gap-y-12">
        {articles.map((article, i) => (
          <Link key={i} href={article.href} className="group">
            <article className="space-y-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <div className="text-[11px] w-fit font-medium text-white bg-[#5D82E7] uppercase px-2 py-1 rounded-md">
                  {article.category}
                </div>
                <h3 className="font-medium text-lg leading-snug">
                  {article.title}
                </h3>
                <div className="flex flex-col gap-1 text-[11px] text-black font-semibold uppercase tracking-widest">
                  <p>BY {article.author}</p>
                  <p className="uppercase">
                    <span className="text-gray-600">{article.date}</span>
                    <span> - {article.readTime} READ</span>
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
