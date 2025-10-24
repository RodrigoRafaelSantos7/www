import { v } from "convex/values";
import { query } from "./_generated/server";

export const listProjects = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("projects"),
      _creationTime: v.number(),
      title: v.string(),
      description: v.string(),
      link: v.optional(v.string()),
      github: v.optional(v.string()),
      technologies: v.array(v.string()),
    })
  ),
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").order("desc").collect();
    return projects;
  },
});
