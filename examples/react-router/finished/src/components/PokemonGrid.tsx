import { PokemonDetail } from "@/routeTable";

import { PokemonCard } from "./PokemonCard";
import { Pokemon } from "@/types";

export function PokemonGrid({ pokemon }: { pokemon: Pokemon[] }) {
  return (
    <div className='flex flex-wrap'>
      {pokemon.map((p) => (
        <PokemonDetail.Link pokemonId={p.id} key={p.id}>
          <PokemonCard pokemon={p} />
        </PokemonDetail.Link>
      ))}
    </div>
  );
}
