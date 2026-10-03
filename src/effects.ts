import { useEffect } from "react";

// Fade sections up as they scroll into view. CSS skips the motion for reduced-motion users.
export const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((s) => {
      s.classList.add("reveal");
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);
};

// A soft glow that follows the pointer across cards.
export const useCardSpotlight = () => {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
};
