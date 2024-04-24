import { getFullPokemon } from "@/pokemon";

import SearchList from "./SearchList";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const pokemon = await getFullPokemon(10, searchParams.q);

  return (
    <main className="mt-5 flex flex-col">
      <SearchList pokemon={pokemon} />
    </main>
  );
}
