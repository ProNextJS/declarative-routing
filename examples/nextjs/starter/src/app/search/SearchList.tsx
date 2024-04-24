"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Pokemon } from "@/types";

import { PokemonGrid } from "@/app/components/PokemonGrid";
import { useSearchParams } from "next/navigation";

export default function Search({
  pokemon: initialPokemon,
}: {
  pokemon: Pokemon[];
}) {
  const q = (useSearchParams().get("q") as string) || "";
  const [query, setQuery] = useState(q);
  const [pokemon, setPokemon] = useState(initialPokemon);

  const search = async () => {
    const resp = await fetch(`/api/pokemon?q=${encodeURIComponent(query)}`);
    const data = await resp.json();
    setPokemon(data);
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
