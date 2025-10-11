import { useEffect, useRef } from "react";

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const elements = section.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const animationClass = el.getAttribute("data-animate");
            const delay = el.getAttribute("data-delay");

            // Apply animation delay if specified
            if (delay) {
              el.style.animationDelay = delay;
            }

            if (animationClass) el.classList.add(animationClass);
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
