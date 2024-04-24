import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Pokemon } from "~/types";
import { PokemonCard } from "./PokemonCard";
import { PokemonInfo } from "./PokemonInfo";

export default component$<{ pokemon: Pokemon[] }>(({ pokemon }) => {
  const selectedId = useSignal<Pokemon["id"]>();

  return (
    <div class="flex">
      <div class="flex w-full flex-wrap">
        {pokemon.map((p) => (
          <div onClick$={() => (selectedId.value = p.id)} key={p.id}>
            <PokemonCard pokemon={p} />
          </div>
        ))}
      </div>
      {selectedId.value && (
        <div class="w-1/2">
          <Link href={`/pokemon/${selectedId.value}`}>
            <PokemonInfo id={selectedId.value} />
          </Link>
        </div>
      )}
    </div>
  );
});
