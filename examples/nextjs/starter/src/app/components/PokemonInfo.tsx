"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types";

export function PokemonInfo({
  id,
  pokemon: initialPokemon,
}: {
  id: number;
  pokemon?: Pokemon;
}) {
  const [data, setData] = useState<Pokemon>();

  useEffect(() => {
    if (!initialPokemon) {
      fetch(`/api/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [id, initialPokemon]);

  const pokemon = initialPokemon || data;

  return pokemon ? (
    <div className="mt-5 @container">
      <div className="@lg:flex">
        <div className="@lg:w-1/3">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={1200}
            height={1200}
            className="rounded-tl-xl ronded-tr-xl w-full object-contain"
          />
        </div>

        <div className="@lg:w-2/3 flex flex-col gap-3">
          <h1 className="text-3xl mb-5 font-bold">{pokemon.name}</h1>
          <div className="flex gap-2 text-xl">
            <div className="font-light">Species</div>
            <div className="font-bold">{pokemon.species}</div>
          </div>
          <div className="flex gap-2 text-xl">
            <div className="font-light">Types</div>
            <div className="font-bold">{pokemon.types}</div>
          </div>
          <div className="flex gap-2 text-xl">
            <div className="font-light">Stats</div>
            <div className="font-bold">{pokemon.stats}</div>
          </div>
          <div className="flex gap-2 text-xl">
            <div className="font-light">Moves</div>
            <div className="font-bold">{pokemon.moves}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
