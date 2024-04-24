import type { Pokemon } from "~/types";
import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const PokemonInfo = component$<{
  id: number;
  pokemon?: Pokemon;
}>(({ id, pokemon: initialPokemon }) => {
  const pokemonData = useSignal<Pokemon>();
  const location = useLocation();

  useTask$(async ({ track }) => {
    track(() => id);

    const res = await fetch(`${location.url.origin}/api/pokemon/${id}`);
    const json = await res.json();

    pokemonData.value = json;
  });

  const pokemon = initialPokemon || pokemonData.value;

  return pokemon ? (
    <div class="mt-5 @container">
      <div class="@lg:flex">
        <div class="@lg:w-1/3">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={1200}
            height={1200}
            class="w-full rounded-tl-xl rounded-tr-xl object-contain"
          />
        </div>

        <div class="flex flex-col gap-3 @lg:w-2/3">
          <h1 class="mb-5 text-3xl font-bold">{pokemon.name}</h1>
          <div class="flex gap-2 text-xl">
            <div class="font-light">Species</div>
            <div class="font-bold">{pokemon.species}</div>
          </div>
          <div class="flex gap-2 text-xl">
            <div class="font-light">Types</div>
            <div class="font-bold">{pokemon.types}</div>
          </div>
          <div class="flex gap-2 text-xl">
            <div class="font-light">Stats</div>
            <div class="font-bold">{pokemon.stats}</div>
          </div>
          <div class="flex gap-2 text-xl">
            <div class="font-light">Moves</div>
            <div class="font-bold">{pokemon.moves}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
});
