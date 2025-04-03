import { z } from "zod";

export function inferGetListResponseSchema<T>(schema: z.ZodType<T>) {
  return z.object({
    total: z.number(),
    data: z.array(schema),
  });
}
