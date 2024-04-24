import { Link } from "react-router-dom";

import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "@/types";

export function PokemonGrid({ pokemon }: { pokemon: Pokemon[] }) {
  return (
    <div className="flex flex-wrap">
      {pokemon.map((p) => (
        <Link to={`/pokemon/${p.id}`} key={p.id}>
          <PokemonCard pokemon={p} />
        </Link>
      ))}
    </div>
  );
}
