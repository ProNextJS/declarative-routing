import { z } from "zod";

export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  species: z.string(),
  types: z.string(),
  stats: z.string(),
  moves: z.string(),
  image: z.string(),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
