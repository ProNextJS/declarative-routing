import { getFullPokemon } from "@/pokemon";

import { SelectableGrid } from "@/app/components/SelectableGrid";

export default async function Home() {
  const pokemon = await getFullPokemon();

  return (
    <main className="mt-5">
      <SelectableGrid pokemon={pokemon} />
    </main>
  );
}
