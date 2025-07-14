"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Header() {
  return (
    <header className="main-padding flex items-center justify-between py-2">
      <div className="w-48 relative h-18">
        <Image src="/logo.svg" alt="EvonMedics' Official Logo" layout="fill" />
      </div>

      <nav>
        <ul className="flex space-x-8 lg:space-x-16">
          <li>
            <a href="/" className="font-medium">
              About Us
            </a>
          </li>
          <li>
            <a href="/about" className="font-medium">
              Products
            </a>
          </li>
          <li>
            <a href="/services" className="font-medium">
              Investors
            </a>
          </li>
          <li>
            <a href="/contact" className="font-medium">
              Resources
            </a>
          </li>
          <li>
            <a href="/contact" className="font-medium">
              Careers
            </a>
          </li>
        </ul>
      </nav>

      <Button>CONTACT US</Button>
    </header>
  );
}

export default Header;
