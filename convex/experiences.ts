import { v } from "convex/values";
import { query } from "./_generated/server";

export const listExperiences = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("experiences"),
      _creationTime: v.number(),
      role: v.string(),
      company: v.string(),
      period: v.string(),
      description: v.string(),
      technologies: v.array(v.string()),
    })
  ),
  handler: async (ctx) => {
    const experiences = await ctx.db
      .query("experiences")
      .order("desc")
      .collect();
    return experiences;
  },
});
