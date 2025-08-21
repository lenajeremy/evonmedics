"use client";

import { UberMove } from "@/lib/fonts";
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

export default function TrendingArticles({
  articles,
}: {
  articles: TrendingArticleProps[];
}) {
  return (
    <section className="space-y-8">
      <div className="flex space-x-3 items-center border-t border-gray-200 pt-3">
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <h2 className={`${UberMove.className} font-semibold text-xl`}>
          TRENDING
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
                    <span className="text-gray-600">
                      {article.date}
                    </span>
                    <span> - {article.readTime} READ</span>
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
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
                    <span className="text-gray-600">
                      {article.date}
                    </span>
                    <span> - {article.readTime} READ</span>
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
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
