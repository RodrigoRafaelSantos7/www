import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export const listTools = query({
  args: {},
  returns: v.object({
    frontend: v.array(
      v.object({
        _id: v.id("tools"),
        _creationTime: v.number(),
        title: v.string(),
        category: v.literal("frontend"),
        link: v.string(),
        order: v.number(),
      })
    ),
    backend_and_infrastructure: v.array(
      v.object({
        _id: v.id("tools"),
        _creationTime: v.number(),
        title: v.string(),
        category: v.literal("backend_and_infrastructure"),
        order: v.number(),
        link: v.string(),
      })
    ),
  }),
  handler: async (ctx) => {
    const frontend = (await ctx.db
      .query("tools")
      .withIndex("by_category", (q) => q.eq("category", "frontend"))
      .order("asc")
      .collect()) as Array<{
      _id: Id<"tools">;
      _creationTime: number;
      title: string;
      category: "frontend";
      link: string;
      order: number;
    }>;

    const backend_and_infrastructure = (await ctx.db
      .query("tools")
      .withIndex("by_category", (q) =>
        q.eq("category", "backend_and_infrastructure")
      )
      .order("asc")
      .collect()) as Array<{
      _id: Id<"tools">;
      _creationTime: number;
      title: string;
      category: "backend_and_infrastructure";
      link: string;
      order: number;
    }>;

    return {
      frontend,
      backend_and_infrastructure,
    };
  },
});
