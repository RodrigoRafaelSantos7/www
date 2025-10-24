import { preloadQuery } from "convex/nextjs";
import { AnimateIn } from "@/components/animations/animate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/convex/_generated/api";
import { TAB_INITIAL_DELAY, TAB_TRIGGER_CLASS } from "./constants";
import ExperiencesList from "./experiences-list";
import ProjectsList from "./projects-list";
import ToolsList from "./tools-list";

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
        <ProjectsList preloadedProjects={projects} />
      </TabsContent>

      <TabsContent value="experience">
        <ExperiencesList preloadedExperiences={experiences} />
      </TabsContent>

      <TabsContent value="tools">
        <ToolsList preloadedTools={tools} />
      </TabsContent>
    </Tabs>
  );
};

export { Content };
