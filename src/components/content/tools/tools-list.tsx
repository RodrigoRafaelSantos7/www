"use client";

import { type Preloaded, usePreloadedQuery } from "convex/react";
import { AnimateIn } from "@/components/animations/animate";
import type { api } from "../../../../convex/_generated/api";
import AmazonWebServicesLogo from "../../icons/aws";
import BunLogo from "../../icons/bun";
import CloudflareLogo from "../../icons/cloudflare";
import DrizzleORM from "../../icons/drizzle";
import NextjsLogo from "../../icons/next";
import Nodejs from "../../icons/nodejs";
import PostgreSQL from "../../icons/postgre";
import ReactLogo from "../../icons/react";
import ReactRouterLogo from "../../icons/react-router";
import TailwindCSS from "../../icons/tailwind";
import TrpcLogo from "../../icons/tRPC";
import TypeScript from "../../icons/typescript";
import VercelLogo from "../../icons/vercel";
import { ANIMATION_STAGGER_OFFSET } from "../constants";

const TOOL_ANIMATION_INCREMENT = 0.03;
const TOOL_GRID_WIDTH_DESKTOP = "calc(20%-13px)";
const TOOL_GRID_WIDTH_MOBILE = "calc(25%-12px)";

// Logo mapping - tool titles to their components
const logoMap: Record<
  string,
  (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
> = {
  React: (props) => <ReactLogo {...props} />,
  NextJS: (props) => <NextjsLogo {...props} />,
  "React Router": (props) => <ReactRouterLogo {...props} />,
  Typescript: (props) => <TypeScript {...props} />,
  TailwindCSS: (props) => <TailwindCSS {...props} />,
  TRPC: (props) => <TrpcLogo {...props} />,
  AWS: (props) => <AmazonWebServicesLogo {...props} />,
  Cloudflare: (props) => <CloudflareLogo {...props} />,
  Vercel: (props) => (
    <VercelLogo className="fill-black dark:fill-white" {...props} />
  ),
  DrizzleORM: (props) => <DrizzleORM {...props} />,
  Bun: (props) => <BunLogo {...props} />,
  NodeJS: (props) => <Nodejs {...props} />,
  PostgreSQL: (props) => <PostgreSQL {...props} />,
};

type ToolsListProps = {
  preloadedTools: Preloaded<typeof api.tools.listTools>;
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
