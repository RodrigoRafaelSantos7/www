"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { AnimateIn } from "./animations/animate";
import { ThemeToggle } from "./theme-toggle";

const Header = () => (
  <AnimateIn variant="fadeUp">
    <section className="mb-6">
      <AnimateIn delay={0.2} variant="fadeUp">
        <h1 className="mb-4 flex items-baseline justify-between font-medium text-xl tracking-tight">
          <span>Hey, I&apos;m Rodrigo</span>
          <ThemeToggle />
        </h1>
      </AnimateIn>
      <AnimateIn delay={0.4} variant="fadeUp">
        <p className="mb-8 max-w-xl items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          Software Engineer from Lisbon. Contact me below. Currently @{" "}
          <Link
            className="text-primary underline-offset-4 hover:underline"
            href="https://www.upgraide.ai/"
            onClick={() => track("upgraide_clicked")}
            rel="noopener noreferrer"
            target="_blank"
          >
            Upgraide.ai
          </Link>{" "}
          .
        </p>
      </AnimateIn>

      <AnimateIn delay={0.6} variant="fadeUp">
        <div className="flex items-center gap-5" />
      </AnimateIn>
    </section>
  </AnimateIn>
);

export { Header };
