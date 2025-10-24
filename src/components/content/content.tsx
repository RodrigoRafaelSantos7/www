import { preloadQuery } from "convex/nextjs";
import { AnimateIn } from "@/components/animations/animate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { api } from "../../../convex/_generated/api";
import ExperiencesList from "./experiences/experiences-list";
import ProjectsList from "./projects/projects-list";
import ProjectsSkeleton from "./projects/projects-skeleton";
import ToolsList from "./tools/tools-list";

// Animation and delay constants
const TAB_INITIAL_DELAY = 0.2;

// Tab trigger className
const TAB_TRIGGER_LAYOUT = "bg-transparent! border-none! shadow-none!";
const TAB_TRIGGER_STATE =
  "data-[state=active]:font-bold! data-[state=active]:text-neutral-800!";
const TAB_TRIGGER_COLOR =
  "text-neutral-400! dark:text-neutral-400! dark:data-[state=active]:text-neutral-100!";
const TAB_TRIGGER_TRANSITION = "transition-all duration-300 ease-out";
const TAB_TRIGGER_FONT = "font-light!";

const TAB_TRIGGER_CLASS = cn(
  TAB_TRIGGER_LAYOUT,
  TAB_TRIGGER_STATE,
  TAB_TRIGGER_COLOR,
  TAB_TRIGGER_FONT,
  TAB_TRIGGER_TRANSITION
);

const Content = async () => {
  const projects = await preloadQuery(api.projects.listProjects);
  const experiences = await preloadQuery(api.experiences.listExperiences);
  const tools = await preloadQuery(api.tools.listTools);

  return (
    <Tabs defaultValue="projects">
      <AnimateIn delay={TAB_INITIAL_DELAY} variant="fadeUp">
        <TabsList className="-ml-[8px] mb-4 border-none bg-transparent p-0">
          <TabsTrigger className={TAB_TRIGGER_CLASS} value="projects">
            Projects
          </TabsTrigger>
          <TabsTrigger className={TAB_TRIGGER_CLASS} value="experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className={TAB_TRIGGER_CLASS} value="tools">
            Tools
          </TabsTrigger>
        </TabsList>
      </AnimateIn>

      <TabsContent value="projects">
        {projects ? (
          <ProjectsList preloadedProjects={projects} />
        ) : (
          <ProjectsSkeleton />
        )}
      </TabsContent>

      <TabsContent value="experience">
        {experiences ? (
          <ExperiencesList preloadedExperiences={experiences} />
        ) : (
          <div>Loading...</div>
        )}
      </TabsContent>

      <TabsContent value="tools">
        {tools ? <ToolsList preloadedTools={tools} /> : <div>Loading...</div>}
      </TabsContent>
    </Tabs>
  );
};

export { Content };
