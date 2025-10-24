import { useEffect } from "react";

export function useObserverAnimation(
  ref: React.RefObject<HTMLDivElement | null>,
  config: {
    shouldObserve: boolean;
    hasAnimated: boolean;
    once: boolean;
    onVisibilityChange: (visible: boolean) => void;
  }
) {
  useEffect(() => {
    if (!config.shouldObserve) {
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (config.hasAnimated && config.once) {
          continue;
        }

        const hasEnteredViewport = entry.isIntersecting;
        const shouldRespondToExit = !config.once;

        if (hasEnteredViewport || shouldRespondToExit) {
          config.onVisibilityChange(entry.isIntersecting);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [config, ref]);
}
