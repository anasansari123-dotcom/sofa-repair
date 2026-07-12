"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="Tanseer Sofa Repair"
              width={200}
              height={200}
              className="rounded-full"
              priority
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                borderTopColor: "transparent",
                borderRightColor: "transparent",
              }}
            />
          </motion.div>

          <motion.h2
            className="font-[family-name:var(--font-montserrat)] text-2xl font-bold tracking-widest text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            TANSEER
          </motion.h2>
          <motion.p
            className="mt-2 text-sm tracking-[0.3em] text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            SOFA REPAIR
          </motion.p>

          <motion.div
            className="mt-8 h-0.5 w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
