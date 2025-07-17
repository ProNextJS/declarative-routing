import { z } from "zod";
import type { BaseRouteInfo } from "@/routes/makeRoute";
import { pokemonRouteSearchSchema } from "@/schemas/routes/pokemon-search";

export const Route = {
  name: "PokemonId",
  params: z.object({
    id: z.coerce.number(),
  }),
  search: pokemonRouteSearchSchema,
} satisfies BaseRouteInfo;
