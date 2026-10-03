const EVENT = "show-toast";

export const showToast = (message: string) =>
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: message }));

export const onToast = (fn: (message: string) => void) => {
  const handler = (e: Event) => fn((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};

export const copyEmail = (email: string) => {
  navigator.clipboard?.writeText(email).then(
    () => showToast("Email copied"),
    () => showToast(email)
  );
};
