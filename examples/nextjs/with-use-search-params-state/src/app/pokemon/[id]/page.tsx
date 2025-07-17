"use client";

import { PokemonTypeBadge } from "@/components/pokemon-type-badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { typeColors } from "@/pokeapi-data/type-colors";
import { PokemonId } from "@/routes";
import { useParams } from "@/routes/hooks";
import { asPokemonTypeName } from "@/schemas/pokemon";
import { api } from "@/trpc/react";
import { useMemo } from "react";

const PokemonDetailsPage = () => {
  const { id } = useParams(PokemonId);
  const { data: pokemon, isLoading } = api.pokemon.get.useQuery({ id });
  if (isLoading || !pokemon) {
    return <Skeleton className="h-20 w-full" />;
  }

  const pokemonImage = useMemo(
    () => pokemon?.sprites?.other["official-artwork"].front_default,
    [pokemon],
  );

  const primaryType = useMemo(
    () => asPokemonTypeName(pokemon.types[0]),
    [pokemon],
  );
  const secondaryType = useMemo(
    () => asPokemonTypeName(pokemon.types[1] ?? primaryType),
    [pokemon, primaryType],
  );
  const primaryColors = useMemo(() => typeColors[primaryType], [primaryType]);
  const secondaryColors = useMemo(
    () => typeColors[secondaryType],
    [secondaryType],
  );

  return (
    <Card className="overflow-hidden pb-0">
      <CardTitle className="px-4">Pokemon details</CardTitle>
      <CardContent
        className={cn(
          "relative rounded-lg",
          "p-4 transition-all",
          primaryColors?.text,
          primaryColors?.backgroundSecondary,
          "border-2",
          "h-full flex-1",
          "flex flex-col gap-2",
        )}
        data-pokemon-type-primary={primaryType}
        data-pokemon-type-secondary={secondaryType}
      >
        <div className="relative flex flex-1 overflow-hidden rounded-lg">
          <span
            className={cn(
              "absolute inset-[-100%] scale-120 animate-[spin_16s_linear_infinite] bg-conic data-[pokemon-type=dark]:from-red-500 data-[pokemon-type=dark]:to-yellow-500",
              "blur-3xl",
              primaryColors?.from,
              secondaryColors?.to,
            )}
          />
          {pokemonImage && (
            <div className="relative mx-auto aspect-square w-full overflow-hidden bg-white/10">
              <img
                src={pokemonImage}
                alt={pokemon.name}
                className="object-contain p-2 transition-all duration-700 hover:scale-105"
              />
            </div>
          )}
        </div>
        <div className="relative mt-2 flex flex-col gap-2">
          <h3
            className={cn(
              "text-3xl leading-6 font-bold tracking-wider capitalize",
              primaryColors?.textSecondary,
            )}
          >
            {pokemon.name}
          </h3>
          <div className="mt-1 flex gap-2">
            {pokemon.types.map((type) => (
              <PokemonTypeBadge key={type} type={type} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonDetailsPage;
