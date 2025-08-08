"use client";

import Image from "next/image";
import Link from "next/link";

interface FeaturedArticleProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

export default function FeaturedArticle({
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  href,
}: FeaturedArticleProps) {
  return (
    <article className="grid grid-cols-2 gap-16 items-center group">
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-8">
        <span className="text-sm font-medium text-white bg-blue-400 uppercase px-4 py-1.5 rounded-md">
          {category}
        </span>
        <h1 className="text-[42px] font-bold leading-[1.15] tracking-tight">
          {title}
        </h1>
        <div className="flex items-center space-x-4 text-[15px] text-gray-500">
          <span className="text-black text-sm font-semibold uppercase">
            BY {author.toUpperCase()}
          </span>
          <span className="uppercase">
            <span className="text-gray-600">{date}</span>
            <span> - {readTime} MIN READ</span>
          </span>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
