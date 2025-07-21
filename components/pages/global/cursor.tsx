"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    initializeMovement();
  }, []);

  function initializeMovement() {
    console.log("Cursor initialized");
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        ease: "easein",
        duration: 0.5,
      });

      const target = e.target as HTMLElement | null;

      if (!target) {
        return;
      }

      if (target.tagName === "BUTTON" || target.tagName === "A") {
        gsap.to(cursorRef.current, {
          scale: 3,
          opacity: 0.8,
        });

        const targetBoundingRect = target?.getBoundingClientRect();
        const targetCenterX =
          targetBoundingRect.left + targetBoundingRect.width / 2;
        const targetCenterY =
          targetBoundingRect.top + targetBoundingRect.height / 2;

        if (target.tagName === "BUTTON") {
          lastButtonRef.current = target as HTMLButtonElement;
          gsap.to(lastButtonRef.current, {
            x: (e.clientX - targetCenterX) / 3,
            y: (e.clientY - targetCenterY) / 3,
          });
        }
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
        });

        lastButtonRef.current &&
          gsap.to(lastButtonRef.current, {
            x: 0,
            y: 0,
          });

        lastButtonRef.current = null;
      }
    });
  }

  return <div className="cursor" ref={cursorRef} />;
}
