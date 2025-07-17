import {
  baseInfinitePaginatedInputSchema,
  generatePaginatedOutputSchema,
} from "@/schemas/pagination";
import {
  minimalPokemonInfoSchema,
  pokemonDetailsSchema,
  pokemonTypeNameSchema,
} from "@/schemas/pokemon";

export const listPokemonInputSchema = baseInfinitePaginatedInputSchema.extend({
  types: pokemonTypeNameSchema.array().default([]),
  orderBy: pokemonDetailsSchema
    .pick({ name: true, id: true })
    .keyof()
    .default("id"),
});
export const listPokemonOutputSchema = generatePaginatedOutputSchema({
  itemSchema: minimalPokemonInfoSchema.extend({
    types: pokemonTypeNameSchema.array(),
  }),
});
