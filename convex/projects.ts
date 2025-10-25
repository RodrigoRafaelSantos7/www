import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
    const projects = await ctx.db.query("projects").order("asc").collect();
    return projects;
  },
});

export const seedProjects = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const projects = [
      {
        title: "Blueprint Academy",
        description:
          "E-learning platform powering Portugal’s largest e-commerce community with 5k+ daily active users",
        link: "https://blueprintacademy.com",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Better-auth",
          "Stripe",
          "Postgres",
          "PrismaORM",
          "Bun",
          "tRPC",
          "Vercel",
        ],
      },
      {
        title: "Coral Infantil de Setúbal",
        description:
          "A modern web platform for managing and promoting the children's choir in the Setúbal region, Portugal. Pro-bono project.",
        github: "https://github.com/RodrigoRafaelSantos7/cis001",
        link: "https://www.coralinfantilsetubal.com/",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Convex",
          "Pnpm",
          "Vercel",
        ],
      },
      {
        title: "João Maria Botelho",
        description:
          "A professional portfolio website for João Maria Botelho, Forbes 30 Under 30 honoree in Sustainability and Social Innovation, showcasing his work in ESG, sustainable finance, and sustainability law.",
        github: "https://github.com/RodrigoRafaelSantos7/jmb-portfolio",
        link: "https://www.joaomariabotelho.com/",
        technologies: ["Astro", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
      },
      {
        title: "Seven Figure Blueprint",
        description:
          "Mentorship program for entrepreneurs to scale their e-commerce businesses",
        link: "https://seven-figure-blueprint.com",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "Better-auth",
          "Postgres",
          "PrismaORM",
          "Pnpm",
          "Vercel",
        ],
      },
    ];

    // Delete existing experiences
    await ctx.db
      .query("projects")
      .collect()
      .then(async (existingProjects) => {
        for (const project of existingProjects) {
          await ctx.db.delete(project._id);
        }
      });

    // Insert new experiences
    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }
    return null;
  },
});
