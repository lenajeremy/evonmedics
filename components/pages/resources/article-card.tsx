"use client";

import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

export default function ArticleCard({
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  href,
}: ArticleCardProps) {
  return (
    <Link href={href} className="block group">
      <article className="space-y-4">
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="space-y-4">
          <span className="text-sm font-medium text-[#4D7FFF] bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          <h2 className="text-2xl font-medium leading-tight">{title}</h2>
          <p className="text-gray-600 line-clamp-2 text-sm">{excerpt}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>By {author}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} READ</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
