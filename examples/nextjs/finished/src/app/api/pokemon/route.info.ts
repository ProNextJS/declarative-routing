import { z } from "zod";

import { PokemonSchema } from "@/types";

export const Route = {
  name: "PokemonSearch",
  params: z.object({}),
  search: z.object({
    q: z.string().optional(),
    limit: z.coerce.number().optional()
  })
};

export const GET = {
  result: z.array(PokemonSchema)
};
