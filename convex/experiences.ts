import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
      .order("asc")
      .collect();
    return experiences;
  },
});

export const seedExperiences = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const experiences = [
      {
        role: "Software Engineer",
        company: "Upgraide.ai",
        period: "Aug 2025 - Present",
        description:
          "Built an AI-powered fintech collaboration platform enabling real-time investor engagement and deal management for a hedge fund.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Better-auth",
          "Postgres",
          "PrismaORM",
          "Bun",
          "tRPC",
          "Vercel",
        ],
      },
      {
        role: "Founder & CEO",
        company: "Quantum Studio",
        period: "Sep 2024 - Aug 2025",
        description:
          "Built and scaled a creative tech agency shipping full‑stack apps. Hit 7k DAU across 3 apps. Employed 2 part-time developers.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Better-auth",
          "Postgres",
          "PrismaORM",
          "Bun",
          "tRPC",
          "Firebase",
          "Stripe",
          "Cloudflare",
          "Clerk",
          "Vercel",
        ],
      },
    ];

    // Delete existing experiences
    await ctx.db
      .query("experiences")
      .collect()
      .then(async (existingExperiences) => {
        for (const experience of existingExperiences) {
          await ctx.db.delete(experience._id);
        }
      });

    // Insert new experiences
    for (const experience of experiences) {
      await ctx.db.insert("experiences", experience);
    }
    return null;
  },
});
