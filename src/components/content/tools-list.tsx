"use client";

import { track } from "@vercel/analytics";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import Link from "next/link";
import { AnimateIn } from "@/components/animations/animate";
import AWS from "@/components/icons/aws";
import Bun from "@/components/icons/bun";
import Cloudflare from "@/components/icons/cloudflare";
import DrizzleORM from "@/components/icons/drizzle";
import NextJS from "@/components/icons/next";
import NodeJS from "@/components/icons/nodejs";
import PostgreSQL from "@/components/icons/postgre";
import React from "@/components/icons/react";
import ReactRouter from "@/components/icons/react-router";
import TailwindCSS from "@/components/icons/tailwind";
import TRPC from "@/components/icons/tRPC";
import Typescript from "@/components/icons/typescript";
import Vercel from "@/components/icons/vercel";
import type { api } from "@/convex/_generated/api";
import {
  ANIMATION_STAGGER_OFFSET,
  TOOL_ANIMATION_INCREMENT,
  TOOL_GRID_WIDTH_DESKTOP,
  TOOL_GRID_WIDTH_MOBILE,
} from "./constants";

type ToolsListProps = {
  preloadedTools: Preloaded<typeof api.tools.listTools>;
};

const logoMap: Record<
  string,
  (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
> = {
  React: (props) => <React {...props} />,
  NextJS: (props) => <NextJS {...props} />,
  "React Router": (props) => <ReactRouter {...props} />,
  Typescript: (props) => <Typescript {...props} />,
  TailwindCSS: (props) => <TailwindCSS {...props} />,
  TRPC: (props) => <TRPC {...props} />,
  AWS: (props) => <AWS {...props} />,
  Cloudflare: (props) => <Cloudflare {...props} />,
  Vercel: (props) => <Vercel {...props} />,
  DrizzleORM: (props) => <DrizzleORM {...props} />,
  Bun: (props) => <Bun {...props} />,
  NodeJS: (props) => <NodeJS {...props} />,
  PostgreSQL: (props) => <PostgreSQL {...props} />,
};

const ToolsList = ({ preloadedTools }: ToolsListProps) => {
  const tools = usePreloadedQuery(preloadedTools);
  return (
    <>
      <AnimateIn delay={0} variant="fadeUp">
        <h2 className="mb-4 font-medium text-md">Frontend</h2>
        <section className="mb-12">
          <div className="flex flex-wrap justify-start gap-x-4 gap-y-6">
            {tools.frontend.map((tool, index) => {
              const Logo = logoMap[tool.title];
              return (
                <AnimateIn
                  className={`w-[${TOOL_GRID_WIDTH_MOBILE}] sm:w-[${TOOL_GRID_WIDTH_DESKTOP}]`}
                  delay={
                    ANIMATION_STAGGER_OFFSET + index * TOOL_ANIMATION_INCREMENT
                  }
                  key={tool._id}
                  variant="scale"
                >
                  <Link
                    className="group flex flex-col items-center"
                    href={tool.link || ""}
                    onClick={() => track(`${tool.title}_clicked`)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="group-hover:-translate-y-1 relative mb-3 h-7 w-7 transition-all duration-300 ease-out group-hover:scale-110 sm:h-8 sm:w-8">
                      {Logo ? (
                        <Logo className="h-full w-full" />
                      ) : (
                        <div className="h-full w-full rounded bg-gray-300" />
                      )}
                    </div>
                    <span className="whitespace-nowrap text-center text-xs text-zinc-500 dark:text-zinc-400">
                      {tool.title}
                    </span>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </section>
      </AnimateIn>
      <AnimateIn delay={0} variant="fadeUp">
        <h2 className="mb-4 font-medium text-md">Backend and Infrastructure</h2>
        <section className="mb-12">
          <div className="flex flex-wrap justify-start gap-x-4 gap-y-6">
            {tools.backend_and_infrastructure.map((tool, index) => {
              const Logo = logoMap[tool.title];
              return (
                <AnimateIn
                  className={`w-[${TOOL_GRID_WIDTH_MOBILE}] sm:w-[${TOOL_GRID_WIDTH_DESKTOP}]`}
                  delay={
                    ANIMATION_STAGGER_OFFSET + index * TOOL_ANIMATION_INCREMENT
                  }
                  key={tool._id}
                  variant="scale"
                >
                  <div className="group flex flex-col items-center">
                    <div className="group-hover:-translate-y-1 relative mb-3 h-7 w-7 transition-all duration-300 ease-out group-hover:scale-110 sm:h-8 sm:w-8">
                      {Logo ? (
                        <Logo className="h-full w-full" />
                      ) : (
                        <div className="h-full w-full rounded bg-gray-300" />
                      )}
                    </div>
                    <span className="whitespace-nowrap text-center text-xs text-zinc-500 dark:text-zinc-400">
                      {tool.title}
                    </span>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </section>
      </AnimateIn>
    </>
  );
};

export default ToolsList;
