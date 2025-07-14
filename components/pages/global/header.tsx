"use client";
import { Button } from "@/components/ui/button";
import { useLenis } from "lenis/react";
import Image from "next/image";

function Header() {
  const lenis = useLenis();

  return (
    <header className="main-padding flex items-center justify-between py-2">
      <div className="w-48 relative h-18">
        <Image src="/logo.svg" alt="EvonMedics' Official Logo" layout="fill" />
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <Button>Get Started</Button>
    </header>
  );
}

export default Header;
