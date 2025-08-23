"use client";
import { Button } from "@/components/ui/button";
import { UberMove } from "@/lib/fonts";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Header visibility logic - only apply dynamic behavior on home page (default variant)
      if (variant === "default") {
        if (currentScrollY < 50) {
          // Always show header at the top
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          // Scrolling down - hide header
          setIsVisible(false);
          // Close mobile menu if open
          setIsMenuOpen(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      } else {
        // For non-home pages, always keep header visible
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, variant]);

  // Dynamic styling based on variant and scroll position
  const getHeaderStyles = () => {
    if (variant === "secondary") {
      return "bg-white border-b-[1.5px] border-gray-200";
    }
    
    // Default variant (landing page)
    if (isScrolled) {
      return "bg-black/50 backdrop-blur-md shadow-lg";
    }
    
    return "bg-transparent";
  };

  const getTextStyles = () => {
    if (variant === "secondary") {
      return "text-gray-700";
    }
    
    // Default variant
    if (isScrolled) {
      return "text-white";
    }
    
    return "text-gray-200";
  };

  // Get positioning classes based on variant
  const getPositionClasses = () => {
    if (variant === "default") {
      // Home page - fixed with dynamic visibility
      return `fixed top-0 left-0 right-0 z-50 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`;
    } else {
      // Other pages - static positioning
      return "relative";
    }
  };

  return (
    <header
      className={`main-padding flex items-center justify-between py-4 ${
        UberMove.className
      } ${getHeaderStyles()} ${getPositionClasses()} transition-all duration-300 ease-in-out`}
    >
      <Link href="/">
        <div className="w-32 md:w-40 lg:w-48 relative h-10 md:h-12 lg:h-14">
          <Image 
            src="/logo.svg" 
            alt="EvonMedics' Official Logo" 
            fill 
            className={`transition-all duration-300 ${
              variant === "default" && isScrolled ? "brightness-0 invert" : ""
            }`}
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul
          className={`flex space-x-8 lg:space-x-16 ${getTextStyles()} transition-colors duration-300`}
        >
          <li>
            <NavLink href="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink href="/about">Products</NavLink>
          </li>
          <li>
            <NavLink href="/services">Investors</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Careers</NavLink>
          </li>
        </ul>
      </nav>

      {/* Desktop Contact Button */}
      <Button className="hidden lg:block bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
        CONTACT US
      </Button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden p-2 ${getTextStyles()} transition-colors duration-300`}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-full left-0 right-0 shadow-lg border-t lg:hidden z-50 transition-all duration-300 ${
          variant === "default" && isScrolled 
            ? "bg-black/95 backdrop-blur-md border-gray-700" 
            : "bg-white border-gray-200"
        }`}>
          <nav className="main-padding py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about-us"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${
                    variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${
                    variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${
                    variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${
                    variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${
                    variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li className="pt-4">
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT US
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
