import CategoryNav from "@/components/pages/blog/category-nav";
import FeaturedArticle from "@/components/pages/blog/featured-article";
import ArticleCard from "@/components/pages/blog/article-card";
import TrendingArticles from "@/components/pages/blog/trending-articles";
import Header from "@/components/pages/global/header";
import { UberMove } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Latest Medical Research & Industry News",
  description: "Stay updated with EvonMedics' latest research findings, clinical trial results, and breakthrough developments in neurological treatment technology. Read expert insights on Alzheimer's research, pain management, and addiction therapy.",
  openGraph: {
    title: "EvonMedics Blog - Latest Medical Research & Industry News",
    description: "Stay updated with EvonMedics' latest research findings, clinical trial results, and breakthrough developments in neurological treatment technology.",
    url: "https://evonmedics.com/blog",
    images: [
      {
        url: "/images/aurora.png",
        width: 1200,
        height: 630,
        alt: "EvonMedics Blog - Medical Research and News",
      },
    ],
  },
  twitter: {
    title: "EvonMedics Blog - Latest Medical Research & Industry News",
    description: "Stay updated with EvonMedics' latest research findings, clinical trial results, and breakthrough developments in neurological treatment technology.",
  },
};

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
      <Header variant="secondary" />
      <CategoryNav />
      <main className="min-h-screen pb-12 md:pb-20 main-padding">
        <div className="max-w-[1200px] mx-auto space-y-12 md:space-y-20 mt-8 md:mt-12">
          <FeaturedArticle {...featuredArticle} />

          <section className="space-y-6 md:space-y-8">
            <div className="flex space-x-3 items-center border-t border-gray-200 pt-3">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
              <h2 className={`${UberMove.className} font-semibold text-lg md:text-xl`}>
                LATEST STORIES
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <Link href={latestStories[0].href} className="block group">
                <article className="space-y-4 md:space-y-6">
                  <div className="relative h-[280px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
                    <Image
                      src={latestStories[0].image}
                      alt={latestStories[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-xs md:text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-md">
                    {latestStories[0].category}
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h2 className="text-xl md:text-2xl font-medium leading-tight">
                      {latestStories[0].title}
                    </h2>
                    <div className="flex flex-col gap-1 text-[10px] md:text-[11px] text-black font-semibold uppercase tracking-widest">
                      <p>BY {latestStories[0].author}</p>
                      <p className="uppercase">
                        <span className="text-gray-600">
                          {latestStories[0].date}
                        </span>
                        <span> - {latestStories[0].readTime} READ</span>
                      </p>
                    </div>
                    <p className="text-gray-600 line-clamp-3 md:line-clamp-4 text-base md:text-lg pt-2 md:pt-4">
                      {latestStories[0].excerpt}
                    </p>
                  </div>
                </article>
              </Link>
              <Link href={latestStories[1].href} className="block group">
                <article className="space-y-4 md:space-y-6">
                  <div className="relative h-[280px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
                    <Image
                      src={latestStories[1].image}
                      alt={latestStories[1].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-xs md:text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-md">
                    {latestStories[1].category}
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h2 className="text-xl md:text-2xl font-medium leading-tight">
                      {latestStories[1].title}
                    </h2>
                    <div className="flex flex-col gap-1 text-[10px] md:text-[11px] text-black font-semibold uppercase tracking-widest">
                      <p>BY {latestStories[1].author}</p>
                      <p className="uppercase">
                        <span className="text-gray-600">
                          {latestStories[1].date}
                        </span>
                        <span> - {latestStories[1].readTime} READ</span>
                      </p>
                    </div>
                    <p className="text-gray-600 line-clamp-3 md:line-clamp-4 text-base md:text-lg pt-2 md:pt-4">
                      {latestStories[1].excerpt}
                    </p>
                  </div>
                </article>
              </Link>

              <div className="divide-y divide-gray-200 md:col-span-2 lg:col-span-1">
                <div className="px-2 md:px-4 py-6 md:py-10 gap-2 md:gap-3 flex flex-col pr-4 md:pr-14">
                  <div className="text-xs md:text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-md">
                    {trendingArticles[0].category}
                  </div>
                  <h2 className="text-lg md:text-2xl font-normal leading-tight">
                    {trendingArticles[0].title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[10px] md:text-[11px] text-black font-semibold uppercase tracking-widest">
                    <p>BY {trendingArticles[0].author}</p>
                    <p className="uppercase">
                      <span className="text-gray-600">
                        {trendingArticles[0].date}
                      </span>
                      <span> - {trendingArticles[0].readTime} READ</span>
                    </p>
                  </div>
                </div>
                <div className="px-2 md:px-4 py-6 md:py-10 gap-2 md:gap-3 flex flex-col pr-4 md:pr-14">
                  <div className="text-xs md:text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-md">
                    {trendingArticles[1].category}
                  </div>
                  <h2 className="text-lg md:text-2xl font-normal leading-tight">
                    {trendingArticles[1].title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[10px] md:text-[11px] text-black font-semibold uppercase tracking-widest">
                    <p>BY {trendingArticles[1].author}</p>
                    <p className="uppercase">
                      <span className="text-gray-600">
                        {trendingArticles[1].date}
                      </span>
                      <span> - {trendingArticles[1].readTime} READ</span>
                    </p>
                  </div>
                </div>
                <div className="px-2 md:px-4 py-6 md:py-10 gap-2 md:gap-3 flex flex-col pr-4 md:pr-14">
                  <div className="text-xs md:text-sm w-fit font-medium text-white bg-[#5D82E7] uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-md">
                    {trendingArticles[0].category}
                  </div>
                  <h2 className="text-lg md:text-2xl font-normal leading-tight">
                    {trendingArticles[0].title}
                  </h2>
                  <div className="flex flex-col gap-1 text-[10px] md:text-[11px] text-black font-semibold uppercase tracking-widest">
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
            <button className="px-6 md:px-8 py-2 md:py-3 border border-gray-200 rounded-full text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors">
              LOAD MORE NEWS
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
