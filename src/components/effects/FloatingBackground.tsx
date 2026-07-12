"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FLOATING_ICONS = [
  { type: "sofa", x: "10%", y: "15%", size: 80, delay: 0, opacity: 0.06 },
  { type: "needle", x: "85%", y: "20%", size: 40, delay: 1, opacity: 0.055 },
  { type: "cushion", x: "75%", y: "60%", size: 50, delay: 2, opacity: 0.07 },
  { type: "hammer", x: "15%", y: "70%", size: 45, delay: 0.5, opacity: 0.052 },
  { type: "screwdriver", x: "90%", y: "45%", size: 35, delay: 1.5, opacity: 0.068 },
  { type: "sofa", x: "50%", y: "85%", size: 60, delay: 3, opacity: 0.062 },
  { type: "fabric", x: "25%", y: "40%", size: 55, delay: 2.5, opacity: 0.058 },
  { type: "stapler", x: "60%", y: "10%", size: 40, delay: 1, opacity: 0.065 },
  { type: "foam", x: "40%", y: "55%", size: 45, delay: 0.8, opacity: 0.054 },
  { type: "needle", x: "5%", y: "50%", size: 30, delay: 2, opacity: 0.071 },
  { type: "cushion", x: "70%", y: "80%", size: 40, delay: 1.2, opacity: 0.059 },
  { type: "hammer", x: "35%", y: "25%", size: 35, delay: 3.5, opacity: 0.063 },
];

const PARTICLES = [
  { left: "41.2%", top: "72.8%", duration: 6.4, drift: 3.2 },
  { left: "88.5%", top: "14.3%", duration: 5.1, drift: -4.7 },
  { left: "23.6%", top: "55.9%", duration: 7.8, drift: 6.1 },
  { left: "67.4%", top: "38.2%", duration: 4.9, drift: -2.3 },
  { left: "12.8%", top: "81.5%", duration: 8.2, drift: 8.4 },
  { left: "54.1%", top: "27.6%", duration: 5.6, drift: -6.8 },
  { left: "76.3%", top: "63.7%", duration: 6.9, drift: 4.5 },
  { left: "31.9%", top: "46.4%", duration: 4.3, drift: -1.9 },
  { left: "92.7%", top: "58.1%", duration: 7.1, drift: 7.2 },
  { left: "18.5%", top: "33.8%", duration: 5.4, drift: -5.6 },
  { left: "48.6%", top: "89.2%", duration: 8.7, drift: 2.8 },
  { left: "63.2%", top: "19.7%", duration: 4.6, drift: -7.1 },
  { left: "8.4%", top: "67.3%", duration: 6.2, drift: 5.9 },
  { left: "79.8%", top: "42.6%", duration: 5.8, drift: -3.4 },
  { left: "36.7%", top: "74.1%", duration: 7.4, drift: 6.7 },
  { left: "17.3%", top: "53.5%", duration: 4.6, drift: -4.2 },
  { left: "58.9%", top: "31.4%", duration: 6.8, drift: 3.8 },
  { left: "84.1%", top: "76.9%", duration: 5.2, drift: -8.1 },
  { left: "27.5%", top: "12.6%", duration: 8.1, drift: 1.6 },
  { left: "71.6%", top: "48.3%", duration: 4.8, drift: -6.3 },
  { left: "44.8%", top: "65.7%", duration: 7.6, drift: 4.9 },
  { left: "95.3%", top: "25.1%", duration: 5.9, drift: -2.7 },
  { left: "6.2%", top: "39.8%", duration: 6.5, drift: 7.5 },
  { left: "52.4%", top: "83.6%", duration: 4.4, drift: -5.1 },
  { left: "38.1%", top: "21.9%", duration: 8.4, drift: 2.4 },
  { left: "86.7%", top: "56.2%", duration: 5.7, drift: -7.8 },
  { left: "15.9%", top: "68.4%", duration: 6.1, drift: 5.3 },
  { left: "61.5%", top: "37.7%", duration: 7.3, drift: -3.9 },
  { left: "33.2%", top: "91.8%", duration: 4.7, drift: 8.6 },
  { left: "74.6%", top: "16.5%", duration: 6.6, drift: -1.4 },
];

function SofaIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 28h56v8a4 4 0 01-4 4H8a4 4 0 01-4-4v-8z" />
      <path d="M8 28V20a4 4 0 014-4h40a4 4 0 014 4v8" />
      <path d="M4 32H0M64 32h-4" />
      <line x1="12" y1="20" x2="12" y2="12" />
      <line x1="52" y1="20" x2="52" y2="12" />
    </svg>
  );
}

function NeedleIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="2" x2="12" y2="40" />
      <circle cx="12" cy="44" r="2" fill="currentColor" />
      <path d="M8 6l4-4 4 4" />
    </svg>
  );
}

function CushionIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="8" width="40" height="28" rx="6" />
      <path d="M4 20h40" strokeDasharray="4 4" />
    </svg>
  );
}

function HammerIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="20" height="14" rx="2" />
      <line x1="14" y1="18" x2="40" y2="44" />
    </svg>
  );
}

function ScrewdriverIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="2" width="8" height="16" rx="2" />
      <line x1="12" y1="18" x2="12" y2="46" />
    </svg>
  );
}

function FabricIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="18" />
      <path d="M6 24h36M24 6v36" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="8" strokeDasharray="2 2" />
    </svg>
  );
}

function StaplerIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20h36l4-8H8l-4 8z" />
      <path d="M8 20v8h32v-8" />
    </svg>
  );
}

function FoamIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="32" rx="4" />
      <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="28" cy="20" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="34" cy="32" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.FC<{ size: number }>> = {
  sofa: SofaIcon,
  needle: NeedleIcon,
  cushion: CushionIcon,
  hammer: HammerIcon,
  screwdriver: ScrewdriverIcon,
  fabric: FabricIcon,
  stapler: StaplerIcon,
  foam: FoamIcon,
};

function FloatingIcon({ type, size }: { type: string; size: number }) {
  const Icon = ICON_MAP[type] || SofaIcon;
  return <Icon size={size} />;
}

function Particle({
  left,
  top,
  duration,
  drift,
  index,
}: {
  left: string;
  top: string;
  duration: number;
  drift: number;
  index: number;
}) {
  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-gold"
      style={{ left, top, opacity: 0.06 }}
      animate={{
        y: [0, -30, 0],
        x: [0, drift, 0],
        opacity: [0.04, 0.08, 0.04],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    />
  );
}

export function FloatingBackground({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden />;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div ref={containerRef} className="absolute inset-0">
        {FLOATING_ICONS.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-gold blur-[1px]"
            style={{
              left: icon.x,
              top: icon.y,
              opacity: icon.opacity,
            }}
            animate={{
              y: [0, -20, 10, -15, 0],
              x: [0, 10, -5, 8, 0],
              rotate: [0, 5, -3, 7, 0],
            }}
            transition={{
              duration: 12 + icon.delay * 2,
              repeat: Infinity,
              delay: icon.delay,
              ease: "easeInOut",
            }}
          >
            <FloatingIcon type={icon.type} size={icon.size} />
          </motion.div>
        ))}

        {PARTICLES.map((p, i) => (
          <Particle key={`p-${i}`} index={i} {...p} />
        ))}

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-gold/5"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              borderRadius: i % 2 === 0 ? "50%" : "8px",
              opacity: 0.04,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
