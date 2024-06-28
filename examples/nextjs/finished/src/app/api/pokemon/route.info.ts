import { z } from "zod";

import { PokemonSchema } from "@/types";

export const Route = {
  name: "PokemonSearch",
  params: z.object({}),
  search: z.object({
    q: z.string().default(""),
    limit: z.number().default(10)
  })
};

export const GET = {
  result: z.array(PokemonSchema)
};
