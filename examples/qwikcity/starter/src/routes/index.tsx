import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import SelectableGrid from "~/components/SelectableGrid";
import { getFullPokemon } from "~/pokemon";

export const useGetFullPokemon = routeLoader$(async ({ url }) => {
  const q = url.searchParams.get("q") ?? "";
  const limit = Number(url.searchParams.get("limit") ?? 10);

  return await getFullPokemon(limit, q);
});

export default component$(() => {
  const pokemon = useGetFullPokemon();

  return (
    <main class="mt-5">
      <SelectableGrid pokemon={pokemon.value} />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
