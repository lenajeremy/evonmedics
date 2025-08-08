"use client";

import Image from "next/image";
import Link from "next/link";

interface TrendingArticleProps {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

export default function TrendingArticles({ articles }: { articles: TrendingArticleProps[] }) {
  return (
    <section className="space-y-8">
      <h2 className="font-medium text-xl">TRENDING</h2>
      <div className="grid grid-cols-4 gap-6">
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
              <div className="space-y-2">
                <span className="text-xs font-medium text-[#4D7FFF] bg-blue-50 px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
                <h3 className="text-sm font-medium leading-snug">{article.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>By {article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} READ</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
