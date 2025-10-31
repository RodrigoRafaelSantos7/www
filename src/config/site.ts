import { getUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Rodrigo Santos | Software Engineer",
  url: getUrl(),
  ogImage: "https://www.rodrigosantos.dev/og/home",
  description: "Explore my projects and previous work, or contact me.",
  links: {
    twitter: "https://links.rodrigosantos.dev/rodrigo-x",
    github: "https://links.rodrigosantos.dev/rodrigo-gh",
    linkedin: "https://links.rodrigosantos.dev/rodrigo-li",
    email: "hello@rodrigosantos.dev",
  },
};

export type SiteConfig = typeof siteConfig;
