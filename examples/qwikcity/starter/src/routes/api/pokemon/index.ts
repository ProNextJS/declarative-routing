import { type RequestHandler } from "@builder.io/qwik-city";
import { getFullPokemon } from "~/pokemon";

export const onGet: RequestHandler = async ({ url, json }) => {
  const limit = url.searchParams.get("limit") ?? 10;
  const q = url.searchParams.get("q") || undefined;

  const data = await getFullPokemon(+limit, q);

  json(200, data);
};
