import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
});

export const locales = routing.locales;
export type Locale = "es" | "en";