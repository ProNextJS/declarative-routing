"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Pokemon } from "@/types";

import { PokemonCard } from "./PokemonCard";
import { PokemonInfo } from "./PokemonInfo";

export function SelectableGrid({ pokemon }: { pokemon: Pokemon[] }) {
  const [selected, setSelected] = useState<Pokemon>();

  return (
    <div className="flex">
      <div className="w-full flex flex-wrap">
        {pokemon.map((p) => (
          <div onClick={() => setSelected(p)} key={p.id}>
            <PokemonCard pokemon={p} />
          </div>
        ))}
      </div>
      {selected && (
        <div className="w-1/2">
          <Link to={`/pokemon/${selected.id}`}>
            <PokemonInfo id={selected.id} />
          </Link>
        </div>
      )}
    </div>
  );
}
