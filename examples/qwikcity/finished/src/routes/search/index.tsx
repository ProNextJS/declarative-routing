import { component$ } from "@builder.io/qwik";
import { useGetFullPokemon } from "~/routes/index";
import SearchList from "./SearchList";
export { useGetFullPokemon } from "~/routes/index";

export default component$(() => {
  const pokemon = useGetFullPokemon();

  return (
    <main class="mt-5 flex flex-col">
      <SearchList pokemon={pokemon.value} />
    </main>
  );
});
