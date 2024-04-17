import { Link } from "@builder.io/qwik-city";
import { PokemonCard } from "./PokemonCard";
import type { Pokemon } from "~/types";
import { component$ } from "@builder.io/qwik";

export const PokemonGrid = component$<{ pokemon: Pokemon[] }>(({ pokemon }) => {
  return (
    <div class="flex flex-wrap">
      {pokemon.map((p) => (
        <Link href={`/pokemon/${p.id}`} key={p.id}>
          <PokemonCard pokemon={p} />
        </Link>
      ))}
    </div>
  );
});
