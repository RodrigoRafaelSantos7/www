"use client";

import { type Preloaded, usePreloadedQuery } from "convex/react";
import type { api } from "../../../../convex/_generated/api";
import { AnimateIn } from "../../animations/animate";
import {
  ANIMATION_STAGGER_INCREMENT,
  ANIMATION_STAGGER_OFFSET,
} from "../constants";

type ExperiencesListProps = {
  preloadedExperiences: Preloaded<typeof api.experiences.listExperiences>;
};

const ExperiencesList = ({ preloadedExperiences }: ExperiencesListProps) => {
  const experiences = usePreloadedQuery(preloadedExperiences);
  return (
    <AnimateIn delay={0} variant="fadeUp">
      <section className="mb-12">
        <div className="space-y-8">
          <ul className="space-y-8">
            {experiences.map((job, index) => {
              const delay =
                ANIMATION_STAGGER_OFFSET + index * ANIMATION_STAGGER_INCREMENT;
              return (
                <AnimateIn delay={delay} key={job._id} variant="fadeLeft">
                  <li className="group transition-all duration-300 ease-out hover:translate-x-1">
                    <div className="mb-1 flex flex-col justify-between sm:flex-row sm:items-baseline">
                      <h3 className="font-medium text-md">
                        {job.role}{" "}
                        {job.role.toLowerCase().includes("freelance")
                          ? ""
                          : "at"}{" "}
                        {job.company}
                      </h3>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {job.period}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          className="text-xs text-zinc-400 dark:text-zinc-500"
                          key={tech}
                        >
                          {tech}
                          {techIndex < job.technologies.length - 1 ? " /" : ""}
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

export default ExperiencesList;
