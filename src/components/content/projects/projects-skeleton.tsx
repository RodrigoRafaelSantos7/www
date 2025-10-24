import { AnimateIn } from "../../animations/animate";
import { Skeleton } from "../../ui/skeleton";

const ANIMATION_STAGGER_OFFSET = 0.1;
const ANIMATION_STAGGER_INCREMENT = 0.1;

// Skeleton data structure
const SKELETON_PROJECTS = [
  { id: "skeleton-project-1", techs: 4 },
  { id: "skeleton-project-2", techs: 4 },
  { id: "skeleton-project-3", techs: 4 },
];

const SKELETON_TECHS = [
  "skeleton-tech-1",
  "skeleton-tech-2",
  "skeleton-tech-3",
  "skeleton-tech-4",
];

const ProjectsSkeleton = () => (
  <AnimateIn delay={0} variant="fadeUp">
    <section className="mb-12">
      <div className="space-y-8">
        <ul className="space-y-8">
          {SKELETON_PROJECTS.map((project, projectIndex) => (
            <AnimateIn
              delay={
                ANIMATION_STAGGER_OFFSET +
                projectIndex * ANIMATION_STAGGER_INCREMENT
              }
              key={project.id}
              variant="fadeLeft"
            >
              <li className="group space-y-3">
                <div className="mb-1 flex items-baseline justify-between gap-4">
                  <Skeleton className="h-6 w-48" />
                  <div className="flex flex-row gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex flex-wrap gap-2 pt-2">
                  {SKELETON_TECHS.map((techId) => (
                    <Skeleton className="h-3 w-16" key={techId} />
                  ))}
                </div>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  </AnimateIn>
);

export default ProjectsSkeleton;
