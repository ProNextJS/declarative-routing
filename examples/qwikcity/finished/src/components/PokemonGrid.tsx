import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "~/types";
import { component$ } from "@builder.io/qwik";
import { PokemonPokemonId } from "~/declarativeRoutes";

export const PokemonGrid = component$<{ pokemon: Pokemon[] }>(({ pokemon }) => {
  return (
    <div class="flex flex-wrap">
      {pokemon.map((p) => (
        <PokemonPokemonId.Link pokemonId={p.id} key={p.id}>
          <PokemonCard pokemon={p} />
        </PokemonPokemonId.Link>
      ))}
    </div>
  );
});
