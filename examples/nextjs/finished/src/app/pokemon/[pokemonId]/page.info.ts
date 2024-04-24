import { z } from "zod";

export const Route = {
  name: "PokemonDetail",
  params: z.object({
    pokemonId: z.coerce.number()
  })
};
