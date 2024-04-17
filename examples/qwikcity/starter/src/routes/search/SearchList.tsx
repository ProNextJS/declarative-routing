import type { Pokemon } from "~/types";

import { $, component$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { PokemonGrid } from "~/components/PokemonGrid";
import { Input } from "~/components/ui/input";

export default component$<{
  pokemon: Pokemon[];
}>(({ pokemon: initialPokemon }) => {
  const location = useLocation();
  const q = location.url.searchParams.get("q") ?? "";
  const query = useSignal(q);
  const pokemon = useSignal(initialPokemon);

  const search = $(async () => {
    const resp = await fetch(
      `/api/pokemon?q=${encodeURIComponent(query.value)}`,
    );
    const data = await resp.json();
    pokemon.value = data;
  });

  return (
    <div>
      <div class="flex flex-row gap-2">
        <Input
          type="search"
          placeholder="Search for a pokemon"
          bind:value={query}
          onKeyUp$={(e) => {
            if (e.key !== "Enter") {
              return;
            }
            search();
          }}
        />
        <button
          onClick$={search}
          class="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Search
        </button>
      </div>
      <PokemonGrid pokemon={pokemon.value} />
    </div>
  );
});
