"use client";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Pokemon } from "@/types";
import { PokemonGrid } from "@/components/PokemonGrid";
import { getFullPokemon } from "@/pokemon";

export function SearchList({
  pokemon: initialPokemon,
}: {
  pokemon: Pokemon[];
}) {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params?.get("q") ?? "");
  const [pokemon, setPokemon] = useState(initialPokemon);

  const search = async () => {
    const pokemon = await getFullPokemon(10, query);
    setPokemon(pokemon);
  };

  return (
    <div>
      <div className="flex flex-row gap-2">
        <Input
          type="search"
          placeholder="Search for a pokemon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={(e) => {
            if (e.key !== "Enter") return;
            search();
          }}
        />
        <button
          onClick={() => {
            search();
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <PokemonGrid pokemon={pokemon} />
    </div>
  );
}
