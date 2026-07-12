"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LuxuryCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    document.body.classList.add("luxury-cursor-active");
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("luxury-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden lg:block"
        animate={{
          x: position.x - (isHovering ? 20 : 8),
          y: position.y - (isHovering ? 20 : 8),
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`rounded-full border-2 border-gold transition-all duration-300 ${
            isHovering ? "h-10 w-10 bg-gold/20" : "h-4 w-4"
          }`}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden lg:block"
        animate={{ x: position.x - 2, y: position.y - 2 }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      >
        <div className="h-1 w-1 rounded-full bg-gold" />
      </motion.div>
    </>
  );
}
