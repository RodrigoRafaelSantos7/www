"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useObserverAnimation } from "./hooks/use-observer-animation";

const MS_PER_SECOND = 1000;

type AnimationVariant =
  | "fadeUp"
  | "fadeLeft"
  | "fadeRight"
  | "reveal"
  | "scale"
  | "none";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
  once?: boolean;
};

function getVariantTransform(
  variant: AnimationVariant,
  isVisible: boolean
): Record<string, string> {
  if (isVisible && variant === "reveal") {
    return { clipPath: "inset(0 0 0 0)" };
  }

  if (!isVisible) {
    switch (variant) {
      case "fadeUp":
        return { transform: "translateY(20px)" };
      case "fadeLeft":
        return { transform: "translateX(-20px)" };
      case "fadeRight":
        return { transform: "translateX(20px)" };
      case "scale":
        return { transform: "scale(0.95)" };
      case "reveal":
        return { clipPath: "inset(0 100% 0 0)", transform: "none" };
      case "none":
        return { opacity: "1" };
      default:
        return {};
    }
  }

  return {};
}

export function AnimateIn({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  once = true,
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      if (once) {
        setHasAnimated(true);
      }
    }, delay * MS_PER_SECOND);

    return () => clearTimeout(timeout);
  }, [delay, once]);

  const shouldObserve =
    !once && typeof window !== "undefined" && "IntersectionObserver" in window;

  useObserverAnimation(ref, {
    shouldObserve,
    hasAnimated,
    once,
    onVisibilityChange: setIsVisible,
  });

  const shouldSkipAnimation = hasAnimated && once;

  const animationStyles = shouldSkipAnimation
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: "none",
        transition:
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}s`,
        ...getVariantTransform(variant, isVisible),
      };

  return (
    <div className={cn(className)} ref={ref} style={animationStyles}>
      {children}
    </div>
  );
}
