import { z } from "zod";

export const Route = {
  name: "Search",
  params: z.object({}),
  search: z.object({
    q: z.string().optional(),
    limit: z.coerce.number().optional(),
  }),
};
