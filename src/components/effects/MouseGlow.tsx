"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden lg:block"
      animate={{ x: position.x - 200, y: position.y - 200 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <div
        className="h-[400px] w-[400px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
