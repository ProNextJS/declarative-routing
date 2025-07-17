import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { pokemonListResponse } from "@/pokeapi-data/pokemon";
import { pokemonDetailsSchema, pokemonTypeNameSchema } from "@/schemas/pokemon";
import {
  getPokemonTypesByName,
  isPokemonOfAnyOfGivenTypes,
  typeNameToPokemonMapping,
} from "@/pokeapi-data/type-name-to-pokemon-mapping";
import {
  listPokemonInputSchema,
  listPokemonOutputSchema,
} from "@/schemas/api/pokemon/list";

const getPokemonDetails = async (id: number) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const _data = await resp.json();

  const parsingResult = pokemonDetailsSchema.safeParse(_data);
  console.log({ parsingResult });
  const data = pokemonDetailsSchema.parse(_data);
  return data;
};
// const pokeapiBaseUrl = "https://pokeapi.co/api/v2";
export const pokemonRouter = createTRPCRouter({
  list: publicProcedure
    .input(listPokemonInputSchema)
    .output(listPokemonOutputSchema)
    .query(async ({ input }) => {
      const { cursor: pageIndex, order, pageSize, searchValue } = input;
      // const pokemon = await fetch(
      //   `${pokeapiBaseUrl}/pokemon?limit=10000&offset=0`,
      // );
      console.log({ searchValue });
      const pokemon = pokemonListResponse;
      const filteredByName = searchValue
        ? pokemon.filter((p) =>
            p.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : pokemon;

      let filteredAndSorted: z.output<typeof listPokemonOutputSchema>["items"] =
        filteredByName.map((p) => ({
          ...p,
          types: getPokemonTypesByName(p.name),
        }));

      filteredAndSorted = filteredAndSorted.sort((a, b) => {
        if (order === "asc") {
          return a[input.orderBy] < b[input.orderBy] ? -1 : 1;
        }
        return a[input.orderBy] < b[input.orderBy] ? 1 : -1;
      });
      filteredAndSorted =
        input.types.length === 0
          ? filteredAndSorted
          : filteredAndSorted.filter((p) =>
              isPokemonOfAnyOfGivenTypes({
                pokemonName: p.name,
                pokemonTypes: input.types,
              }),
            );
      const trimmed = filteredAndSorted.slice(pageIndex, pageIndex + pageSize);
      const result: z.output<typeof listPokemonOutputSchema> = {
        items: trimmed,
        total: filteredAndSorted.length,
        hasNextPage: trimmed.length + pageSize < filteredAndSorted.length,
        hasPreviousPage: pageIndex > 0,
        pagesCount: Math.ceil(filteredAndSorted.length / pageSize),
        currentPage: Math.floor(pageIndex / pageSize) + 1,
        nextCursor:
          pageIndex + pageSize < filteredAndSorted.length
            ? pageIndex + pageSize
            : undefined,
        previousCursor: pageIndex > 0 ? pageIndex - pageSize : undefined,
      };
      console.log({ firstItem: result.items[0], input });
      return result;
    }),
  get: publicProcedure
    .input(z.object({ id: z.coerce.number() }))
    .query(async ({ input }) => {
      const result = await getPokemonDetails(input.id);

      return { ...result, types: getPokemonTypesByName(result.name) };
    }),
  listByType: publicProcedure
    .input(z.object({ type: pokemonTypeNameSchema }))
    .query(async ({ input }) => {
      const pokemon = typeNameToPokemonMapping[input.type];
      return {
        pokemon,
      };
    }),
});
