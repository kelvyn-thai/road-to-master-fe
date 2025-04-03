import { z } from "zod";

export const ProjectEntitySchema = z.object({
  id: z.string(),
  imageURL: z.string(),
  title: z.string(),
  author: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string(),
});

export type ProjectEntity = z.infer<typeof ProjectEntitySchema>;
