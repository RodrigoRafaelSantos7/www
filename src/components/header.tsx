import { AnimateIn } from "./animations/animate";
import { HeaderLink } from "./header-link";
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
          <HeaderLink
            href="https://www.upgraide.ai/"
            label="Upgraide.ai"
            trackEvent="upgraide_clicked"
          />
        </p>
      </AnimateIn>

      <AnimateIn delay={0.6} variant="fadeUp">
        <div className="flex items-center gap-5" />
      </AnimateIn>
    </section>
  </AnimateIn>
);

export { Header };
