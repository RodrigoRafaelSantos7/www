"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import type { SVGProps } from "react";
import Email from "./icons/email";
import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";
import X from "./icons/x";

type IconName = "Twitter" | "GitHub" | "LinkedIn" | "Email";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const iconMap: Record<
  IconName,
  React.ComponentType<SVGProps<SVGSVGElement>>
> = {
  Twitter: X,
  Email,
  GitHub: Github,
  LinkedIn,
};

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

type SocialIconProps = {
  name: IconName;
  url: string;
};

const SocialIcon = ({ name, url }: SocialIconProps) => (
  <Link
    className="inline-flex text-zinc-900/60 transition-colors hover:text-zinc-900 dark:text-zinc-100/60 dark:hover:text-zinc-100"
    href={url}
    onClick={() => track(`${name}_link_clicked`)}
    rel="noopener"
    target="_blank"
  >
    <p className="sr-only">{name}</p>
    <Icon className="h-5 w-5" name={name} />
  </Link>
);

export { SocialIcon };
