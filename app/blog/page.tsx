"use client";

import CategoryNav from "@/components/pages/blog/category-nav";
import FeaturedArticle from "@/components/pages/blog/featured-article";
import ArticleCard from "@/components/pages/blog/article-card";
import TrendingArticles from "@/components/pages/blog/trending-articles";
import Header from "@/components/pages/global/header";
import { UberMove } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";

const featuredArticle = {
  category: "DESIGN AND ENGINEERING",
  title: "EvonMedics Secures over $14 Million in Funding From the NIH",
  excerpt:
    "Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia. Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia, which comes...",
  author: "YAMRI REDDY",
  date: "JUN 12, 2025",
  readTime: "5 MIN",
  image: "/images/1.avif",
  href: "/blog/evonmedics-funding",
};

const latestStories = [
  {
    category: "DESIGN AND ENGINEERING",
    title: "EvonMedics Secures over $14 Million in Funding From the NIH",
    excerpt:
      "Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia, which comes...",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/aurora.png",
    href: "/blog/evonmedics-funding",
  },
  {
    category: "INSIDE EVONMEDICS",
    title: "Curing Alzheimers: Discovering Olfactory Therapy",
    excerpt:
      "Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia, which comes...",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/coffee.avif",
    href: "/blog/curing-alzheimers",
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
];

const trendingArticles = [
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

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <CategoryNav />
      <main className="min-h-screen pb-20 main-padding">
        <div className="max-w-[1200px] mx-auto space-y-20 mt-12">
          <FeaturedArticle {...featuredArticle} />

          <section className="space-y-8">
            <div className="flex space-x-3 items-center border-t border-gray-200 pt-3">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <h2 className={`${UberMove.className} font-semibold text-xl`}>
                LATEST STORIES
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-10">
              <Link href={latestStories[0].href} className="block group">
                <article className="space-y-6">
                  <div className="relative h-[380px] rounded-xl overflow-hidden">
                    <Image
                      src={latestStories[0].image}
                      alt={latestStories[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-4 py-1.5 rounded-md">
                    {latestStories[0].category}
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-medium leading-tight">
                      {latestStories[0].title}
                    </h2>
                    <div className="flex flex-col gap-1 text-[11px] text-black font-semibold uppercase tracking-widest">
                      <p>BY {latestStories[0].author}</p>
                      <p className="uppercase">
                        <span className="text-gray-600">
                          {latestStories[0].date}
                        </span>
                        <span> - {latestStories[0].readTime} READ</span>
                      </p>
                    </div>
                    <p className="text-gray-600 line-clamp-4 text-lg pt-4">
                      {latestStories[0].excerpt}
                    </p>
                  </div>
                </article>
              </Link>
              <Link href={latestStories[1].href} className="block group">
                <article className="space-y-6">
                  <div className="relative h-[380px] rounded-xl overflow-hidden">
                    <Image
                      src={latestStories[1].image}
                      alt={latestStories[1].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-4 py-1.5 rounded-md">
                    {latestStories[1].category}
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-medium leading-tight">
                      {latestStories[1].title}
                    </h2>
                    <div className="flex flex-col gap-1 text-[11px] text-black font-semibold uppercase tracking-widest">
                      <p>BY {latestStories[1].author}</p>
                      <p className="uppercase">
                        <span className="text-gray-600">
                          {latestStories[1].date}
                        </span>
                        <span> - {latestStories[1].readTime} READ</span>
                      </p>
                    </div>
                    <p className="text-gray-600 line-clamp-4 text-lg pt-4">
                      {latestStories[1].excerpt}
                    </p>
                  </div>
                </article>
              </Link>

              <div className="divide-y divide-gray-200">
                <div className="px-4 py-10 gap-3 flex flex-col pr-14">
                  <div className="text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-4 py-1.5 rounded-md">
                    {trendingArticles[0].category}
                  </div>
                  <h2 className="text-2xl font-normal leading-tight">
                    {trendingArticles[0].title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[11px] text-black font-semibold uppercase tracking-widest">
                    <p>BY {trendingArticles[0].author}</p>
                    <p className="uppercase">
                      <span className="text-gray-600">
                        {trendingArticles[0].date}
                      </span>
                      <span> - {trendingArticles[0].readTime} READ</span>
                    </p>
                  </div>
                </div>
                <div className="px-4 py-10 gap-3 flex flex-col pr-14">
                  <div className="text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-4 py-1.5 rounded-md">
                    {trendingArticles[1].category}
                  </div>
                  <h2 className="text-2xl font-normal leading-tight">
                    {trendingArticles[1].title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[11px] text-black font-semibold uppercase tracking-widest">
                    <p>BY {trendingArticles[1].author}</p>
                    <p className="uppercase">
                      <span className="text-gray-600">
                        {trendingArticles[1].date}
                      </span>
                      <span> - {trendingArticles[1].readTime} READ</span>
                    </p>
                  </div>
                </div>
                <div className="px-4 py-10 gap-3 flex flex-col pr-14">
                  <div className="text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-4 py-1.5 rounded-md">
                    {trendingArticles[0].category}
                  </div>
                  <h2 className="text-2xl font-normal leading-tight">
                    {trendingArticles[0].title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[11px] text-black font-semibold uppercase tracking-widest">
                    <p>BY {trendingArticles[0].author}</p>
                    <p className="uppercase">
                      <span className="text-gray-600">
                        {trendingArticles[0].date}
                      </span>
                      <span> - {trendingArticles[0].readTime} READ</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TrendingArticles articles={trendingArticles} />

          <div className="flex justify-center">
            <button className="px-8 py-3 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              LOAD MORE NEWS
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
