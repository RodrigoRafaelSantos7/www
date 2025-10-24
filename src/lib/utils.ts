import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrl() {
  return env.NODE_ENV !== "production"
    ? `http://${env.VERCEL_URL}`
    : `https://${env.VERCEL_URL}`;
}
