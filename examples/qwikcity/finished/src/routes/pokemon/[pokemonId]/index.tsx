import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PokemonInfo } from "~/components/PokemonInfo";
import { PokemonPokemonId } from "~/declarativeRoutes";
import { useParams } from "~/declarativeRoutes/hooks";
import { getPokemon } from "~/pokemon";

export const useGetPokemon = routeLoader$(async ({ params }) => {
  return getPokemon(Number(params.pokemonId));
});

export default component$(() => {
  const params = useParams(PokemonPokemonId);
  const pokemon = useGetPokemon();

  return (
    <main>
      <PokemonInfo id={+params.pokemonId} pokemon={pokemon.value} />
    </main>
  );
});
