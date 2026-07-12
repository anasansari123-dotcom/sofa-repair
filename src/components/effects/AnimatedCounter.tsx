"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ end, suffix = "", duration = 2.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          animated.current = true;
        },
      },
      onUpdate: () => {
        setValue(Math.round(obj.val));
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
