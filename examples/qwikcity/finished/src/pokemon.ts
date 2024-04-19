import type { Pokemon } from "./types";

function upperCaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function summarizePokemon(pokemon: any): Pokemon {
  return {
    name: upperCaseFirstLetter(pokemon.name),
    id: pokemon.id,
    image:
      pokemon.sprites?.other?.["official-artwork"]?.front_default ||
      pokemon.sprites.front_default,
    species: pokemon.species.name,
    types: pokemon.types
      .slice(0, 10)
      .map((s: any) => s.type.name)
      .join(", "),
    stats: pokemon.stats
      .slice(0, 10)
      .map((s: any) => `${s.stat.name}: ${s.base_stat}`)
      .join(", "),
    moves: pokemon.moves
      .slice(0, 10)
      .map((m: any) => m.move.name)
      .join(", "),
  };
}

export async function getFullPokemon(
  limit: number = 10,
  q?: string,
): Promise<Pokemon[]> {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${
      q ? 10000 : limit || 10
    }&offset=0`,
  );
  const json = await resp.json();

  let results: any[] = json.results;
  if (q) {
    results = results
      .filter(({ name }: { name: string }) => name.includes(q))
      .slice(0, +limit);
  }

  return await Promise.all(
    results.slice(0, +limit).map(async ({ url }: { url: string }) => {
      const resp = await fetch(url);
      return summarizePokemon(await resp.json());
    }),
  );
}

export async function getPokemon(id: number): Promise<Pokemon> {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await resp.json();
  return summarizePokemon(data);
}
