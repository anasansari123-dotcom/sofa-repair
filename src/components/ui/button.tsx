"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-tan text-navy hover:bg-tan-light shadow-md",
        outline:
          "border-2 border-tan text-navy hover:bg-tan hover:text-white",
        ghost: "text-foreground hover:bg-cream-dark hover:text-navy",
        navy: "bg-navy text-white hover:bg-navy-light shadow-lg",
        glass:
          "glass text-foreground hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, magnetic = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const innerRef = React.useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = innerRef.current;
      if (btn) {
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple-effect");
        const existing = btn.querySelector(".ripple-effect");
        if (existing) existing.remove();
        btn.appendChild(circle);
      }
      onClick?.(e);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !innerRef.current) return;
      const btn = innerRef.current;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
      if (!magnetic || !innerRef.current) return;
      innerRef.current.style.transform = "translate(0, 0)";
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={(node: HTMLButtonElement) => {
          (innerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        onClick={handleClick}
        onMouseMove={magnetic ? handleMouseMove : undefined}
        onMouseLeave={magnetic ? handleMouseLeave : undefined}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
