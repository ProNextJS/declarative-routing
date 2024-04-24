import { component$ } from "@builder.io/qwik";
import type { Pokemon } from "~/types";

export const PokemonCard = component$<{ pokemon: Pokemon }>(({ pokemon }) => {
  return (
    <div class="max-w-1/4 flex flex-col p-2">
      <div class="rounded-tl-xl rounded-tr-xl bg-gray-800">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          width={1200}
          height={1200}
          class="h-full w-full rounded-tl-xl rounded-tr-xl object-cover"
        />
      </div>
      <div class="rounded-bl-xl rounded-br-xl border-b-2 border-l-2 border-r-2 border-gray-800 bg-gray-900 p-5">
        <h2 class="text-2xl font-light">{pokemon.name}</h2>
      </div>
    </div>
  );
});
