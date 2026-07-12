"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [animateEntry, setAnimateEntry] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    setAnimateEntry(!isTouchDevice && window.innerWidth >= 1024);
  }, []);

  if (!animateEntry) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
