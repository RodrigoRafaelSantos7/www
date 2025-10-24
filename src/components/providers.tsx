import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
    enableSystem
    storageKey="rodrigosantosdev-theme"
  >
    {children}
    <Analytics />
  </ThemeProvider>
);

export default Providers;
