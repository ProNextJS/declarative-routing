import { z } from "zod";

export const Route = {
  name: "ApiPokemonPokemonId",
  params: z.object({
    pokemonId: z.string(),
  })
};

export const GET = {
  result: z.object({}),
};
