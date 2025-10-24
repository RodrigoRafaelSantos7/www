import { cn } from "@/lib/utils";

// Animation and delay constants
export const TAB_INITIAL_DELAY = 0.2;

// Tab trigger className
const TAB_TRIGGER_LAYOUT = "bg-transparent! border-none! shadow-none!";
const TAB_TRIGGER_STATE =
  "data-[state=active]:font-bold! data-[state=active]:text-neutral-800!";
const TAB_TRIGGER_COLOR =
  "text-neutral-400! dark:text-neutral-400! dark:data-[state=active]:text-neutral-100!";
const TAB_TRIGGER_TRANSITION = "transition-all duration-300 ease-out";
const TAB_TRIGGER_FONT = "font-light!";

export const TAB_TRIGGER_CLASS = cn(
  TAB_TRIGGER_LAYOUT,
  TAB_TRIGGER_STATE,
  TAB_TRIGGER_COLOR,
  TAB_TRIGGER_FONT,
  TAB_TRIGGER_TRANSITION
);

export const ANIMATION_STAGGER_OFFSET = 0.1;
export const ANIMATION_STAGGER_INCREMENT = 0.1;

export const TOOL_ANIMATION_INCREMENT = 0.03;
export const TOOL_GRID_WIDTH_DESKTOP = "calc(20%-13px)";
export const TOOL_GRID_WIDTH_MOBILE = "calc(25%-12px)";
