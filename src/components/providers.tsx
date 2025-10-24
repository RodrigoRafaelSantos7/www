import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
    enableSystem
    storageKey="rodrigosantosdev-theme"
  >
    <ConvexClientProvider>
      {children}
      <Analytics />
    </ConvexClientProvider>
  </ThemeProvider>
);

export default Providers;
