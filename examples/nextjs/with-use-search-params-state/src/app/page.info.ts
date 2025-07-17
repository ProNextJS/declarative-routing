import { z } from "zod";
import type { BaseRouteInfo } from "@/routes/makeRoute";
import { listPokemonInputSchema } from "@/schemas/api/pokemon/list";

export const Route = {
  name: "Home",
  params: z.object({}),
  search: listPokemonInputSchema,
} satisfies BaseRouteInfo;
