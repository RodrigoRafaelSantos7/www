"use client";

import { track } from "@vercel/analytics";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import Link from "next/link";
import { AnimateIn } from "@/components/animations/animate";
import AWS from "@/components/icons/aws";
import BetterAuth from "@/components/icons/better-auth";
import Bun from "@/components/icons/bun";
import Clerk from "@/components/icons/clerk";
import Cloudflare from "@/components/icons/cloudflare";
import CloudflareWorks from "@/components/icons/cloudflare-works";
import Convex from "@/components/icons/convex";
import DrizzleORM from "@/components/icons/drizzle";
import NextJS from "@/components/icons/next";
import NodeJS from "@/components/icons/nodejs";
import PostgreSQL from "@/components/icons/postgre";
import Prisma from "@/components/icons/prisma";
import React from "@/components/icons/react";
import ReactRouter from "@/components/icons/react-router";
import TailwindCSS from "@/components/icons/tailwind";
import TRPC from "@/components/icons/tRPC";
import Typescript from "@/components/icons/typescript";
import Vercel from "@/components/icons/vercel";
import type { api } from "@/convex/_generated/api";

type ToolsListProps = {
  preloadedTools: Preloaded<typeof api.tools.listTools>;
};

const TOOL_ANIMATION_BASE_DELAY = 0.1;
const TOOL_ANIMATION_INCREMENT = 0.03;

const logoMap: Record<
  string,
  (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
> = {
  React: (props) => <React {...props} />,
  NextJS: (props) => <NextJS {...props} />,
  "React Router": (props) => <ReactRouter {...props} />,
  TypeScript: (props) => <Typescript {...props} />,
  TailwindCSS: (props) => <TailwindCSS {...props} />,
  TRPC: (props) => <TRPC {...props} />,
  AWS: (props) => <AWS {...props} />,
  Cloudflare: (props) => <Cloudflare {...props} />,
  Vercel: (props) => <Vercel {...props} />,
  DrizzleORM: (props) => <DrizzleORM {...props} />,
  Bun: (props) => <Bun {...props} />,
  NodeJS: (props) => <NodeJS {...props} />,
  PostgreSQL: (props) => <PostgreSQL {...props} />,
  Prisma: (props) => <Prisma {...props} />,
  Convex: (props) => <Convex {...props} />,
  Clerk: (props) => <Clerk {...props} />,
  "Better Auth": (props) => <BetterAuth {...props} />,
  "Cloudflare Workers": (props) => <CloudflareWorks {...props} />,
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
                  className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                  delay={
                    TOOL_ANIMATION_BASE_DELAY + index * TOOL_ANIMATION_INCREMENT
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
                  className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                  delay={
                    TOOL_ANIMATION_BASE_DELAY + index * TOOL_ANIMATION_INCREMENT
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
    </>
  );
};

export default ToolsList;
