import { PokemonInfo } from "@/app/components/PokemonInfo";

import { getPokemon } from "@/pokemon";

export default async function PokemonDetailPage({
  params: { pokemonId },
}: {
  params: { pokemonId: string };
}) {
  const pokemon = await getPokemon(+pokemonId);
  return (
    <main>
      <PokemonInfo id={+pokemonId} pokemon={pokemon} />
    </main>
  );
}
