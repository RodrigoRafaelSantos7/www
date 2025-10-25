import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
    technologies: v.array(v.string()),
  }),
  experiences: defineTable({
    role: v.string(),
    company: v.string(),
    period: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
  }),
  tools: defineTable({
    title: v.string(),
    category: v.union(
      v.literal("frontend"),
      v.literal("backend_and_infrastructure")
    ),
    link: v.string(),
    order: v.number(),
  }).index("by_category", ["category", "order"]),
});
