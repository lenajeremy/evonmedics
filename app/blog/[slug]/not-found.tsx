import Link from "next/link";
import Header from "@/components/pages/global/header";
import CategoryNav from "@/components/pages/blog/category-nav";

export default function NotFound() {
  return (
    <>
      <Header />
      <CategoryNav />
      <div className="min-h-screen pb-20 main-padding">
        <div className="max-w-[800px] mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">
            We couldn't find the blog post you were looking for.
          </p>
          <Link 
            href="/blog" 
            className="inline-block bg-[#4D7FFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}