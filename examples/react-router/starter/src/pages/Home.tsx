import { useLoaderData } from "react-router-dom";

import { getFullPokemon } from "@/pokemon";
import { Pokemon } from "@/types";
import { SelectableGrid } from "@/components/SelectableGrid";

export async function homeLoader() {
  return getFullPokemon();
}

export function HomePage() {
  const pokemon = useLoaderData() as Pokemon[];
  return <SelectableGrid pokemon={pokemon} />;
}
