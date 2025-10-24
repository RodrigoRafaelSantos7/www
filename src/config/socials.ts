import { siteConfig } from "./site";

export const socials = [
  {
    name: "Twitter" as const,
    url: siteConfig.links.twitter,
  },
  {
    name: "GitHub" as const,
    url: siteConfig.links.github,
  },
  {
    name: "LinkedIn" as const,
    url: siteConfig.links.linkedin,
  },
  {
    name: "Email" as const,
    url: `mailto:${siteConfig.links.email}`,
  },
] as const;
