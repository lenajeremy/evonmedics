"use client";
import { Button } from "@/components/ui/button";
import { UberMove } from "@/lib/fonts";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Link from "next/link";

gsap.registerPlugin(SplitText);

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const defaultTextRef = useRef<HTMLSpanElement>(null);
  const hoverTextRef = useRef<HTMLSpanElement>(null);
  const defaultSplitRef = useRef<any>(null);
  const hoverSplitRef = useRef<any>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const animateText = (isHovered: boolean) => {
    if (
      !containerRef.current ||
      !defaultTextRef.current ||
      !hoverTextRef.current
    )
      return;

    // Kill existing timeline if any
    if (timeline.current) {
      timeline.current.kill();
    }

    // Create new splits if they don't exist
    if (!defaultSplitRef.current) {
      defaultSplitRef.current = new SplitText(defaultTextRef.current, {
        type: "chars",
        charsClass: "char relative inline-block",
      });
    }
    if (!hoverSplitRef.current) {
      hoverSplitRef.current = new SplitText(hoverTextRef.current, {
        type: "chars",
        charsClass: "char relative inline-block",
      });
    }

    const defaultChars = defaultSplitRef.current.chars;
    const hoverChars = hoverSplitRef.current.chars;

    timeline.current = gsap
      .timeline()
      .set(defaultChars, { yPercent: 0, opacity: 1 })
      .set(hoverChars, { yPercent: 100, opacity: 0 });

    if (isHovered) {
      timeline.current
        .to(defaultChars, {
          yPercent: -100,
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.inOut",
        })
        .to(
          hoverChars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
          },
          "<0.1"
        ); // Slight overlap for smoother transition
    } else {
      timeline.current
        .to(hoverChars, {
          yPercent: 100,
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.inOut",
        })
        .to(
          defaultChars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
          },
          "<0.1"
        );
    }
  };

  const handleMouseEnter = () => {
    animateText(true);
  };

  const handleMouseLeave = () => {
    animateText(false);
  };

  // Initial setup and cleanup
  useEffect(() => {
    return () => {
      if (defaultSplitRef.current) {
        defaultSplitRef.current.revert();
      }
      if (hoverSplitRef.current) {
        hoverSplitRef.current.revert();
      }
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  return (
    <a
      ref={containerRef}
      href={href}
      className="font-medium relative block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="block overflow-hidden relative">
        <span ref={defaultTextRef} className="block whitespace-nowrap">
          {children}
        </span>
        <span
          ref={hoverTextRef}
          className="block absolute top-0 left-0 whitespace-nowrap"
        >
          {children}
        </span>
      </span>
    </a>
  );
};

type HeaderProps = {
  variant?: "default" | "secondary";
};

function Header({ variant }: HeaderProps) {
  return (
    <header
      className={`main-padding flex items-center justify-between py-4 ${
        UberMove.className
      } ${variant == "default" ? "border-0" : "border-b-[1.5px]"}`}
    >
      <Link href="/">
        <div className="w-48 relative h-14">
          <Image src="/logo.svg" alt="EvonMedics' Official Logo" fill />
        </div>
      </Link>

      <nav>
        <ul
          className={`flex space-x-8 lg:space-x-16 ${
            variant === "default" ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <li>
            <NavLink href="/">About Us</NavLink>
          </li>
          <li>
            <NavLink href="/about">Products</NavLink>
          </li>
          <li>
            <NavLink href="/services">Investors</NavLink>
          </li>
          <li>
            <NavLink href="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Careers</NavLink>
          </li>
        </ul>
      </nav>

      <Button className="bg-blue-500 hover:bg-blue-600">CONTACT US</Button>
    </header>
  );
}

export default Header;
