import { z } from "zod";
import type { BaseRouteInfo } from "@/routes/makeRoute";
import { pokemonRouteSearchSchema } from "@/schemas/routes/pokemon-search";

export const Route = {
  name: "Pokemon",
  params: z.object({}),
  search: pokemonRouteSearchSchema,
} satisfies BaseRouteInfo;
