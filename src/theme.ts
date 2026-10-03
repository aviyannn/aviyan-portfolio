export type Theme = "light" | "dark";

const EVENT = "themechange";

// index.html sets data-theme before first paint when a choice is saved;
// otherwise fall back to the system preference.
export const getTheme = (): Theme =>
  (document.documentElement.dataset.theme as Theme | undefined) ??
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

export const setTheme = (next: Theme) => {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage can be unavailable (private mode); the choice still applies for this visit.
  }
  window.dispatchEvent(new CustomEvent<Theme>(EVENT, { detail: next }));
};

export const toggleTheme = () => setTheme(getTheme() === "dark" ? "light" : "dark");

export const onThemeChange = (fn: (t: Theme) => void) => {
  const handler = (e: Event) => fn((e as CustomEvent<Theme>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};
