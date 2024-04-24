import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

import { getPokemon } from "@/pokemon";
import { Pokemon } from "@/types";
import { PokemonInfo } from "@/components/PokemonInfo";

export async function detailLoader({ params }: LoaderFunctionArgs) {
  // @ts-ignore
  return getPokemon(+params.pokemonId);
}

export function Detail() {
  const pokemon = useLoaderData() as Pokemon;
  return (
    <main>
      <PokemonInfo id={pokemon.id} pokemon={pokemon} />
    </main>
  );
}
