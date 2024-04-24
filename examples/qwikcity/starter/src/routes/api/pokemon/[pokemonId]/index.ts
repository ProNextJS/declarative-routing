import { type RequestHandler } from "@builder.io/qwik-city";
import { getPokemon } from "~/pokemon";

export const onGet: RequestHandler = async ({ json, params }) => {
  const data = await getPokemon(+(params.pokemonId || ""));

  json(200, data);
};
