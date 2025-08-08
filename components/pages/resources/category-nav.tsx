"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { label: "ALL", href: "/resources" },
  { label: "PRODUCT UPDATES", href: "/resources/product-updates" },
  { label: "DESIGN & ENGINEERING", href: "/resources/design-engineering" },
  { label: "INSIDE EVONMEDICS", href: "/resources/inside-evonmedics" },
  { label: "HEALTH TIPS", href: "/resources/health-tips" },
  { label: "PARTNER STORIES", href: "/resources/partner-stories" },
];

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#E3E3E3] sticky top-0 bg-white z-10">
      <ul className="flex justify-between main-padding py-6">
        {categories.map((category) => (
          <li key={category.href}>
            <Link
              href={category.href}
              className={`text-sm font-medium transition-colors ${
                pathname === category.href
                  ? "text-[#4D7FFF]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
