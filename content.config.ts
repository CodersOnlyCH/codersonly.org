import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    assemblies: defineCollection({
      type: "page",
      source: {
        include: "assemblies/*.md",
        prefix: "/association/assemblies",
      },
      schema: z.object({
        date: z.string().optional(),
      }),
    }),
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        date: z.string().optional(),
      }),
    }),
  },
});
