"use client";

import { track } from "@vercel/analytics";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import { ExternalLinkIcon } from "lucide-react";
import type { api } from "@/convex/_generated/api";
import { AnimateIn } from "../animations/animate";
import {
  ANIMATION_STAGGER_INCREMENT,
  ANIMATION_STAGGER_OFFSET,
} from "./constants";

type ProjectListProps = {
  preloadedProjects: Preloaded<typeof api.projects.listProjects>;
};

const ProjectsList = ({ preloadedProjects }: ProjectListProps) => {
  const projects = usePreloadedQuery(preloadedProjects);

  return (
    <AnimateIn delay={0} variant="fadeUp">
      <section className="mb-12">
        <div className="space-y-8">
          <ul className="space-y-8">
            {projects.map((project, index) => {
              const delay =
                ANIMATION_STAGGER_OFFSET + index * ANIMATION_STAGGER_INCREMENT;
              return (
                <AnimateIn delay={delay} key={project._id} variant="fadeLeft">
                  <li className="group transition-all duration-300 ease-out hover:translate-x-1">
                    <div className="mb-1 flex items-baseline justify-between">
                      <h3 className="font-medium text-md">{project.title}</h3>
                      <div className="flex flex-row gap-2">
                        {project.github ? (
                          <a
                            className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            href={project.github}
                            onClick={() =>
                              track(`${project.title}_github_clicked`)
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            GitHub <ExternalLinkIcon className="h-3 w-3" />
                          </a>
                        ) : null}
                        {project.link ? (
                          <a
                            className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            href={project.link}
                            onClick={() => track(`${project.title}_clicked`)}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            View <ExternalLinkIcon className="h-3 w-3" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          className="text-xs text-zinc-400 dark:text-zinc-500"
                          key={tech}
                        >
                          {tech}
                          {techIndex < project.technologies.length - 1
                            ? " /"
                            : ""}
                        </span>
                      ))}
                    </div>
                  </li>
                </AnimateIn>
              );
            })}
          </ul>
        </div>
      </section>
    </AnimateIn>
  );
};

export default ProjectsList;
