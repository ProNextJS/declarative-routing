import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { PokemonInfo } from "~/components/PokemonInfo";
import { getPokemon } from "~/pokemon";

export const useGetPokemon = routeLoader$(async ({ params }) => {
  return getPokemon(Number(params.pokemonId));
});

export default component$(() => {
  const location = useLocation();
  const pokemonId = location.params.pokemonId;

  const pokemon = useGetPokemon();

  return (
    <main>
      <PokemonInfo id={+pokemonId} pokemon={pokemon.value} />
    </main>
  );
});
