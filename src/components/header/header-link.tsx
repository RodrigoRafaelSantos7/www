"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

type HeaderLinkProps = {
  href: string;
  trackEvent?: string;
  label: string;
};

const HeaderLink = ({ href, trackEvent, label }: HeaderLinkProps) => (
  <Link
    className="text-primary underline-offset-4 hover:underline"
    href={href}
    onClick={() => {
      if (trackEvent) {
        track(trackEvent);
      }
    }}
    rel="noopener noreferrer"
    target="_blank"
  >
    {label}
  </Link>
);

export { HeaderLink };
