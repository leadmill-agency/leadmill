type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", event, params);
  window.gtag?.("event", event, params);
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

export function persistUtms() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const stored: Record<string, string> = JSON.parse(localStorage.getItem("lm_utms") || "{}");
  let changed = false;
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      stored[key] = value;
      changed = true;
    }
  }
  if (changed) localStorage.setItem("lm_utms", JSON.stringify(stored));
}

export function getUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  return JSON.parse(localStorage.getItem("lm_utms") || "{}");
}
