"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// biome-ignore lint/style/noMagicNumbers: animation timing and transforms
const EASE_IN_OUT = [0.16, 1, 0.3, 1] as const;

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

type VariantConfig = {
  initial: Record<string, unknown>;
  whileInView: Record<string, unknown>;
};

const variantMap: Record<AnimationVariant, VariantConfig> = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
  reveal: {
    initial: { clipPath: "inset(0 100% 0 0)" },
    whileInView: { clipPath: "inset(0 0 0 0)" },
  },
  none: {
    initial: { opacity: 1 },
    whileInView: { opacity: 1 },
  },
};

export function AnimateIn({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  once = true,
}: AnimateInProps) {
  const variants = variantMap[variant];

  return (
    <motion.div
      className={cn(className)}
      initial={variants.initial as Record<string, number | string>}
      transition={{
        duration: 0.8,
        ease: EASE_IN_OUT as [number, number, number, number],
        delay,
      }}
      viewport={{ once, amount: 0.1 }}
      whileInView={variants.whileInView as Record<string, number | string>}
    >
      {children}
    </motion.div>
  );
}
