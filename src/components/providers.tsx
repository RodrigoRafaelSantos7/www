import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <Analytics />
  </>
);

export default Providers;
