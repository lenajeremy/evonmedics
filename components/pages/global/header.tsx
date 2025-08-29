"use client";
import { Button } from "@/components/ui/button";
import { SFPro, UberMove } from "@/lib/fonts";
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

// Products Dropdown Component
const ProductsDropdown = ({ isVisible, onMouseLeave }: { isVisible: boolean; onMouseLeave: () => void }) => {
  return (
    <div
      className={`absolute w-[400px] overflow-hidden rounded-xl -translate-x-1/2 left-1/2  top-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <div className="divide-y py-1">
          <div className={`group cursor-pointer px-6 py-6 hover:bg-gray-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
              transition: 'all 500ms ease-out'
            }}>
            <a href="/products/cot" className="flex items-start space-x-4">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-400 to-blue-500 rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold text-gray-900 text-lg ${SFPro.className}`}>
                  COT
                </h4>
                <p className={`${SFPro.className} font-normal text-gray-600 mt-0.5 leading-relaxed text-base`}>
                  Computerized Chemosensory-Based Orbitofrontal Networks Training for Treatment of Pain
                </p>
              </div>
            </a>
          </div>

          <div className={`group cursor-pointer px-6 py-6 hover:bg-gray-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
              transition: 'all 500ms ease-out'
            }}>
            <a href="/products/ddt" className="flex items-start space-x-4">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-teal-500 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-gray-900 text-lg ${SFPro.className}`}>
                    DDT (Direction Driven Training)
                  </h4>
                  <p className={`${SFPro.className} font-normal text-gray-600 mt-0.5 leading-relaxed text-base`}>
                    Cutting-edge brain-computer interface technology for neurological treatments
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* CBOT-P */}
          <div className={`group cursor-pointer px-6 py-6 hover:bg-gray-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{
              transitionDelay: isVisible ? '200ms' : '0ms',
              transition: 'all 500ms ease-out'
            }}>
            <a href="/products/cbot-p" className="flex items-start space-x-4">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-purple-500 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-gray-900 text-lg ${SFPro.className}`}>
                    CBOT-P
                  </h4>
                  <p className={`${SFPro.className} font-normal text-gray-600 mt-0.5 leading-relaxed text-base`}>
                    Machine learning algorithms for treatment optimization and patient care
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Clinical Trials */}
          <div className={`group cursor-pointer px-6 py-6 hover:bg-gray-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{
              transitionDelay: isVisible ? '300ms' : '0ms',
              transition: 'all 500ms ease-out'
            }}>
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-red-500 rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold text-gray-900 text-lg ${SFPro.className}`}>
                  Clinical Trials
                </h4>
                <p className={`${SFPro.className} font-normal text-gray-600 mt-0.5 leading-relaxed text-base`}>
                  FDA-approved research studies and patient trials for breakthrough treatments
                </p>
              </div>
            </div>
          </div>

          {/* Research and Development */}
          <div className={`group cursor-pointer px-6 py-6 hover:bg-gray-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{
              transitionDelay: isVisible ? '400ms' : '0ms',
              transition: 'all 500ms ease-out'
            }}>
            <a href="/about-us/research-and-development" className="flex items-start space-x-4">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Scientist icon: lab flask and glasses */}
                    <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth={2} />
                    <rect x="9" y="13" width="6" height="6" rx="3" stroke="currentColor" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15v-2a4 4 0 1 1 8 0v2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10" />
                    {/* Flask */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4.5l3.5 7.5a2 2 0 0 1-1.8 2.8H7.3a2 2 0 0 1-1.8-2.8L9 7.5V3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-gray-900 text-lg ${SFPro.className}`}>
                    Research and Development
                  </h4>
                  <p className={`${SFPro.className} font-normal text-gray-600 mt-0.5 leading-relaxed text-base`}>
                    Research and development of our products and services
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

type HeaderProps = {
  variant?: "default" | "secondary";
  className?: string;
};

function Header({ variant, className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (variant === "default") {
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, variant]);

  const getHeaderStyles = () => {
    if (variant === "secondary") {
      return "bg-white border-b-[1.5px] border-gray-200";
    }

    if (isScrolled) {
      return "bg-black/50 backdrop-blur-md shadow-lg";
    }

    return "bg-transparent";
  };

  const getTextStyles = () => {
    if (variant === "secondary") {
      return "text-gray-700";
    }

    if (isScrolled) {
      return "text-white";
    }

    return "text-gray-200";
  };

  const getPositionClasses = () => {
    if (variant === "default") {
      return `fixed top-0 left-0 right-0 z-50 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`;
    } else {
      return "relative";
    }
  };

  return (
    <header
      className={`main-padding ${getHeaderStyles()} ${getPositionClasses()} transition-all duration-300 ease-in-out ${className}`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between py-4 ${UberMove.className}`}>
        <a href="/">
          <div className="w-32 md:w-40 lg:w-54 relative h-10 md:h-12 lg:h-14">
            <Image
              src="/logo.svg"
              alt="EvonMedics' Official Logo"
              fill
              className={`transition-all duration-300 ${variant === "default" && isScrolled ? "brightness-0 invert" : ""
                }`}
            />
          </div>
        </a>

        <nav className="hidden lg:block">
          <ul
            className={`items-center flex space-x-8 lg:space-x-16 ${getTextStyles()} transition-colors duration-300`}
          >
            <li>
              <NavLink href="/about-us">About Us</NavLink>
            </li>
            <li className="relative">
              <div
                className="font-medium cursor-pointer flex items-center space-x-1 p-4"
                onMouseEnter={() => setIsProductsDropdownVisible(true)}
              >
                <span>Products</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <ProductsDropdown
                isVisible={isProductsDropdownVisible}
                onMouseLeave={() => setIsProductsDropdownVisible(false)}
              />
            </li>
            {/* <li>
              <NavLink href="/services">Investors</NavLink>
            </li> */}
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/careers">Careers</NavLink>
            </li>
            
          </ul>
        </nav>

        <a href="/contact">
          <Button className="hidden lg:block bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
            CONTACT US
          </Button>
        </a>

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
            strokeWidth={2}
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
      </div>

      {isMenuOpen && (
        <div className={`absolute top-full left-0 right-0 shadow-lg border-t lg:hidden z-50 transition-all duration-300 ${variant === "default" && isScrolled
          ? "bg-black/95 backdrop-blur-md border-gray-700"
          : "bg-white border-gray-200"
          }`}>
          <nav className="main-padding py-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="/about-us"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </a>
              </li>
              {/* <li>
                <a
                  href="/services"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investors
                </a>
              </li> */}
              <li>
                <a
                  href="/blog"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 ${variant === "default" && isScrolled ? "text-white" : "text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className="pt-4">
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href="/contact" className="text-white">CONTACT US</a>
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
