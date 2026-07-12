"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Hammer,
  Scissors,
  Wrench,
  Layers,
  Sofa,
  Ruler,
  Paintbrush,
} from "lucide-react";

const FLOATING_TOOLS = [
  { Icon: Hammer, x: "6%", y: "12%", delay: 0 },
  { Icon: Scissors, x: "92%", y: "18%", delay: 0.6 },
  { Icon: Wrench, x: "78%", y: "42%", delay: 1.2 },
  { Icon: Layers, x: "14%", y: "55%", delay: 0.3 },
  { Icon: Sofa, x: "88%", y: "68%", delay: 1.8 },
  { Icon: Ruler, x: "22%", y: "78%", delay: 2.1 },
  { Icon: Paintbrush, x: "68%", y: "8%", delay: 0.9 },
  { Icon: Hammer, x: "45%", y: "88%", delay: 1.5 },
  { Icon: Scissors, x: "55%", y: "25%", delay: 2.4 },
  { Icon: Wrench, x: "4%", y: "38%", delay: 0.4 },
  { Icon: Layers, x: "96%", y: "48%", delay: 1.1 },
  { Icon: Paintbrush, x: "35%", y: "15%", delay: 2.7 },
];

const GOLD_PARTICLES = [
  { left: "12%", top: "30%", duration: 3.2, delay: 0 },
  { left: "28%", top: "62%", duration: 4.1, delay: 0.5 },
  { left: "48%", top: "18%", duration: 2.8, delay: 1 },
  { left: "72%", top: "55%", duration: 3.6, delay: 0.3 },
  { left: "85%", top: "32%", duration: 4.5, delay: 1.2 },
  { left: "18%", top: "82%", duration: 3.0, delay: 0.8 },
  { left: "62%", top: "72%", duration: 2.5, delay: 1.5 },
  { left: "38%", top: "45%", duration: 4.0, delay: 0.2 },
  { left: "92%", top: "85%", duration: 3.8, delay: 1.8 },
  { left: "8%", top: "68%", duration: 2.9, delay: 0.6 },
];

export function GlobalFloatingTools() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {FLOATING_TOOLS.map((tool, i) => (
        <motion.div
          key={`tool-${i}`}
          className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-gold/15 bg-white/5 text-gold shadow-lg shadow-gold/5 backdrop-blur-sm md:h-12 md:w-12"
          style={{ left: tool.x, top: tool.y, opacity: 0.55 }}
          animate={{
            y: [0, -18, 8, -12, 0],
            x: [0, 8, -6, 5, 0],
            rotate: [0, 6, -4, 5, 0],
          }}
          transition={{
            duration: 6 + i * 0.8,
            repeat: Infinity,
            delay: tool.delay,
            ease: "easeInOut",
          }}
        >
          <tool.Icon className="h-5 w-5" />
        </motion.div>
      ))}

      {GOLD_PARTICLES.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-gold"
          style={{ left: p.left, top: p.top }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
            scale: [0.6, 1.2, 0.6],
            y: [0, -20, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
