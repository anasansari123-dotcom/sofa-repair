"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "zoom" | "rotate";
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    const resolvedAnimation =
      isTouchDevice && (animation === "slideLeft" || animation === "slideRight")
        ? "fadeUp"
        : animation;

    const animations = {
      fadeUp: { y: 60, opacity: 0 },
      slideLeft: { x: -80, opacity: 0 },
      slideRight: { x: 80, opacity: 0 },
      zoom: { scale: 0.8, opacity: 0 },
      rotate: { rotation: 5, y: 40, opacity: 0 },
    };

    gsap.fromTo(
      el,
      animations[resolvedAnimation],
      {
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
