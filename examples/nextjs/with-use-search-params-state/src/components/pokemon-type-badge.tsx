import { Badge } from "@/components/ui/badge";
import type { PokemonTypeName } from "@/schemas/pokemon";
import { cn } from "@/lib/utils";
import { typeColors } from "@/pokeapi-data/type-colors";

interface PokemonTypeBadgeProps {
  type: PokemonTypeName;
  className?: string;
}

export function PokemonTypeBadge({ type, className }: PokemonTypeBadgeProps) {
  return (
    <Badge
      className={cn(
        "font-medium capitalize",
        typeColors[type]?.text,
        typeColors[type]?.background,
        className,
      )}
    >
      {type}
    </Badge>
  );
}
