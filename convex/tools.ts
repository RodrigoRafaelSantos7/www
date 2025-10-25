import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";

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

export const seedTools = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const tools = [
      {
        title: "React",
        category: "frontend" as const,
        link: "https://react.dev",
        order: 0,
      },
      {
        title: "NextJS",
        category: "frontend" as const,
        link: "https://nextjs.org",
        order: 1,
      },
      {
        title: "React Router",
        category: "frontend" as const,
        link: "https://reactrouter.com",
        order: 2,
      },
      {
        title: "TypeScript",
        category: "frontend" as const,
        link: "https://www.typescriptlang.org",
        order: 3,
      },
      {
        title: "TailwindCSS",
        category: "frontend" as const,
        link: "https://tailwindcss.com",
        order: 4,
      },
      {
        title: "TRPC",
        category: "backend_and_infrastructure" as const,
        link: "https://trpc.io",
        order: 0,
      },
      {
        title: "Vercel",
        category: "backend_and_infrastructure" as const,
        link: "https://vercel.com",
        order: 1,
      },
      {
        title: "DrizzleORM",
        category: "backend_and_infrastructure" as const,
        link: "https://orm.drizzle.team",
        order: 2,
      },
      {
        title: "Bun",
        category: "backend_and_infrastructure" as const,
        link: "https://bun.sh",
        order: 3,
      },
      {
        title: "NodeJS",
        category: "backend_and_infrastructure" as const,
        link: "https://nodejs.org",
        order: 4,
      },
      {
        title: "PostgreSQL",
        category: "backend_and_infrastructure" as const,
        link: "https://www.postgresql.org",
        order: 5,
      },
      {
        title: "AWS",
        category: "backend_and_infrastructure" as const,
        link: "https://aws.amazon.com",
        order: 6,
      },
      {
        title: "Cloudflare",
        category: "backend_and_infrastructure" as const,
        link: "https://cloudflare.com",
        order: 7,
      },
      {
        title: "Prisma",
        category: "backend_and_infrastructure" as const,
        link: "https://prisma.io",
        order: 8,
      },
      {
        title: "Convex",
        category: "backend_and_infrastructure" as const,
        link: "https://convex.dev",
        order: 9,
      },
      {
        title: "Clerk",
        category: "backend_and_infrastructure" as const,
        link: "https://clerk.com",
        order: 10,
      },
      {
        title: "Better Auth",
        category: "backend_and_infrastructure" as const,
        link: "https://www.better-auth.com/",
        order: 11,
      },
      {
        title: "Cloudflare Workers",
        category: "backend_and_infrastructure" as const,
        link: "https://workers.cloudflare.com/",
        order: 12,
      },
    ];

    await ctx.db
      .query("tools")
      .collect()
      .then(async (existingTools) => {
        for (const tool of existingTools) {
          await ctx.db.delete(tool._id);
        }
      });

    for (const tool of tools) {
      await ctx.db.insert("tools", tool);
    }
    return null;
  },
});
