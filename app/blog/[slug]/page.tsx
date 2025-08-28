"use client";

import Header from "@/components/pages/global/header";
import BlogPost from "@/components/pages/blog/blog-post";
import { notFound } from "next/navigation";
import Image from "next/image";
import SimilarArticles from "@/components/pages/blog/similar-articles";

interface BlogPostParams {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  // This would typically come from a CMS or API
  // For now, we'll hardcode a sample post based on the design
  const post = {
    title: "EvonMedics Secures over $14 Million in Funding From the NIH",
    subtitle:
      "Learn how to easily accept online orders to improve margins and build customer loyalty.",
    author: "YAMRI REDDY",
    date: "JUN 12, 2023",
    readTime: "5 MIN",
    image: "/images/1.avif",
    categories: [
      "DESIGN AND ENGINEERING",
      "INSIDE EVONMEDICS",
      "HEALTHCARE",
      "NEUROLOGICAL SCIENCE",
      "PRODUCT UPDATES",
    ],
    content: (
      <div className="grid grid-cols-[300px_1fr_100px] gap-16 py-12 mt-12 text-lg border-t border-gray-200">
        <aside className="sticky top-0">
          <h2 className="text-2xl font-bold">Table of Content</h2>
          <ul className="list-none space-y-2 mb-8 text-gray-700">
            <li>Step 1: Announce your content online</li>
            <li>Step 2: Sell something very interesting</li>
            <li>Step 3: Something fancy</li>
            <li>Step 4: Something fancy 3</li>
          </ul>
        </aside>

        <div>
          <p className="text-gray-700">
            Directly accepting online food and beverage orders for pickup and
            delivery instead of relying on third-party apps and marketplaces can
            help you improve your restaurant's profit margins. How? First, you
            avoid high marketplace commissions. And when you make it easy for
            your customers to order from your restaurant website, you help build
            strong relationships with customers who are more likely to return.
          </p>

          <p className="mb-6 text-gray-700">
            Wondering how to increase online orders? The first step is choosing
            your restaurant website provider. With Square Online, you can easily
            set up an{" "}
            <a href="#" className="text-[#4D7FFF] hover:underline">
              online ordering page
            </a>{" "}
            to take orders and keep an eye on how your restaurant is running in
            your Square account.
          </p>

          <p className="mb-6 text-gray-700">
            Once your ordering page is live, making sure your customers (and
            future customers) know about it is essential to growing your
            business through online ordering.
          </p>

          <p className="mb-6 text-gray-700">
            Here are a few key strategies and tips for increasing online orders
            directly from your online ordering page.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">
            Step 1: Announce your online ordering page
          </h2>

          <p className="mb-6 text-gray-700">
            If you've just launched your new online ordering page, the first
            step is to make sure existing and new customers know about it, as
            they may be used to navigating directly to a third-party marketplace
            app. Here's how to drive awareness of your direct ordering link.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">
            Link to your ordering page from your business site.
          </h3>

          <p className="mb-6 text-gray-700">
            If you have a separate website for your business, link to your
            ordering page from that site so visitors can easily discover it. Use
            prominent messaging, like an Order Online button in your site's top
            navigation menu, to make your preferred ordering link as visible as
            possible.
          </p>

          <div className="relative h-[300px] rounded-lg overflow-hidden my-8 shadow-md">
            <Image
              src="/images/coffee.avif"
              alt="Restaurant storefront"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">
            Link to your ordering page from your business site.
          </h3>

          <p className="mb-6 text-gray-700">
            If you have a separate website for your business, link to your
            ordering page from that site so visitors can easily discover it. Use
            prominent messaging, like an Order Online button in your site's top
            navigation menu, to make your preferred ordering link as visible as
            possible.
          </p>
        </div>
      </div>
    ),
  };

  if (slug !== "evonmedics-funding") {
    notFound();
  }

  return (
    <>
      <Header variant="secondary" />
      <main className="min-h-screen pb-20 main-padding">
        <BlogPost
          title={post.title}
          subtitle={post.subtitle}
          author={post.author}
          date={post.date}
          readTime={post.readTime}
          image={post.image}
          content={post.content}
          categories={post.categories}
        />
        <SimilarArticles />
      </main>
    </>
  );
}
