import { listPokemonInputSchema } from "@/schemas/api/pokemon/list";
import type z from "zod";

// export const pokemonRouteSearchSchema = z.object({
//   searchValue: z.string().optional(),
//   sortBy: z.enum(["name", "id"]).optional(),
//   type: pokemonTypeNameSchema.array().default([]),
// });
export const pokemonRouteSearchSchema = listPokemonInputSchema;

export type PokemonRouteSearch = z.infer<typeof pokemonRouteSearchSchema>;
