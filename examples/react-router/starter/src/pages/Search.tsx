import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { z } from "zod";

import { getFullPokemon } from "@/pokemon";
import { Pokemon } from "@/types";
import { SearchList } from "@/components/SearchList";

export const SearchParams = z.object({
  q: z.string().optional(),
});

export async function searchLoader({ request }: LoaderFunctionArgs) {
  const q = new URL(request.url).searchParams.get("q") || "";
  return getFullPokemon(10, q);
}

export function Search() {
  const pokemon = useLoaderData() as Pokemon[];
  return (
    <main className="mt-5 flex flex-col">
      <SearchList pokemon={pokemon} />
    </main>
  );
}
