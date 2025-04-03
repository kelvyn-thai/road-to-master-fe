import { z } from "zod";
import { inferGetListResponseSchema } from "../common";
import { ProjectEntitySchema } from "./project.schema";

export const GetProjectListResponseSchema = inferGetListResponseSchema(
  ProjectEntitySchema.pick({
    id: true,
    title: true,
    description: true,
    imageURL: true,
    shortDescription: true,
  }),
);

export type GetProjectListResponse = z.infer<
  typeof GetProjectListResponseSchema
>;
