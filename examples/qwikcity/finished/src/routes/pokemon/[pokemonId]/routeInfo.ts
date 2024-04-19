import { z } from "zod";

export const Route = {
  name: "PokemonPokemonId",
  params: z.object({
    pokemonId: z.coerce.number(),
  }),
};
