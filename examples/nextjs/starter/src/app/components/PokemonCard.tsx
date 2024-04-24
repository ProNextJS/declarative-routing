import { Pokemon } from "@/types";
import Image from "next/image";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex flex-col p-2 max-w-1/4">
      <div className="bg-gray-800 rounded-tl-xl rounded-tr-xl">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={1200}
          height={1200}
          className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
        />
      </div>
      <div className="rounded-br-xl p-5 rounded-bl-xl border-l-2 border-b-2 border-r-2 border-gray-800 bg-gray-900">
        <h2 className="text-2xl font-light">{pokemon.name}</h2>
      </div>
    </div>
  );
}
