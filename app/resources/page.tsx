"use client";

import CategoryNav from "@/components/pages/resources/category-nav";
import FeaturedArticle from "@/components/pages/resources/featured-article";
import ArticleCard from "@/components/pages/resources/article-card";
import TrendingArticles from "@/components/pages/resources/trending-articles";
import Header from "@/components/pages/global/header";

// Mock data - replace with actual data from your API
const featuredArticle = {
  category: "DESIGN AND ENGINEERING",
  title: "EvonMedics Secures over $14 Million in Funding From the NIH",
  excerpt:
    "Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia, which comes...",
  author: "YAMRI REDDY",
  date: "JUN 12, 2025",
  readTime: "5 MIN",
  image: "/images/hero1.png",
  href: "/resources/evonmedics-funding",
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
    image: "/images/hero2.jpg",
    href: "/resources/evonmedics-funding",
  },
  {
    category: "INSIDE EVONMEDICS",
    title: "Curing Alzheimers: Discovering Olfactory Therapy",
    excerpt:
      "Dementia is the deterioration and loss of cognitive function beyond that expected from healthy aging. Around 55 million people worldwide have a form of dementia, which comes...",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero3.jpg",
    href: "/resources/curing-alzheimers",
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
    href: "/resources/alzheimers-therapy",
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
    href: "/resources/nih-funding-1",
  },
  {
    category: "NEWS",
    title: "Evon Medics Secures over $14 Million in NIH Funding",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero2.jpg",
    href: "/resources/nih-funding-2",
  },
  {
    category: "NEWS",
    title: "Evon Medics Secures over $14 Million in NIH Funding",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero3.jpg",
    href: "/resources/nih-funding-3",
  },
  {
    category: "NEWS",
    title: "Evon Medics Secures over $14 Million in NIH Funding",
    author: "YAMRI REDDY",
    date: "JUN 12, 2025",
    readTime: "5 MIN",
    image: "/images/hero4.avif",
    href: "/resources/nih-funding-4",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <CategoryNav />
      <main className="min-h-screen pb-20">
        <div className="main-padding space-y-20 mt-12">
          <FeaturedArticle {...featuredArticle} />

          <section className="space-y-8">
            <h2 className="font-medium text-xl">LATEST STORIES</h2>
            <div className="grid grid-cols-3 gap-8">
              {latestStories.map((story, i) => (
                <ArticleCard key={i} {...story} />
              ))}
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
