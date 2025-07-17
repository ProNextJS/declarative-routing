import { pokemonTypeMinimalInfoSchema } from "@/schemas/pokemon";
import { z } from "zod";

const typeColorSchema = z.object({
  background: z.string(),
  text: z.string(),
  border: z.string(),
  from: z.string(),
  to: z.string(),
  backgroundSecondary: z.string(), // new field
  textSecondary: z.string(),
});
export const typeColorMapper = z.record(
  pokemonTypeMinimalInfoSchema.shape.name,
  typeColorSchema,
);
export const typeColors: z.infer<typeof typeColorMapper> = {
  normal: {
    background: "bg-gray-200",
    textSecondary: "text-gray-200",
    from: "from-bg-gray-200",
    to: "to-bg-gray-200",
    text: "text-gray-700",
    border: "border-gray-300",
    backgroundSecondary: "bg-gray-700", // dark contrast
  },
  fighting: {
    background: "bg-red-700",
    textSecondary: "text-red-700",
    from: "from-red-700",
    to: "to-red-700",
    text: "text-white",
    border: "border-red-800",
    backgroundSecondary: "bg-blue-200", // cool contrast
  },
  flying: {
    background: "bg-blue-200",
    textSecondary: "text-blue-200",
    from: "from-blue-200",
    to: "to-blue-200",
    text: "text-blue-900",
    border: "border-blue-300",
    backgroundSecondary: "bg-amber-600", // warm contrast
  },
  poison: {
    background: "bg-purple-500",
    textSecondary: "text-purple-500",
    from: "from-purple-500",
    to: "to-purple-500",
    text: "text-white",
    border: "border-purple-600",
    backgroundSecondary: "bg-green-300", // complementary
  },
  ground: {
    background: "bg-yellow-700",
    textSecondary: "text-yellow-700",
    from: "from-yellow-700",
    to: "to-yellow-700",
    text: "text-white",
    border: "border-yellow-800",
    backgroundSecondary: "bg-blue-500", // complementary
  },
  rock: {
    background: "bg-yellow-800",
    textSecondary: "text-yellow-800",
    from: "from-yellow-800",
    to: "to-yellow-800",
    text: "text-white",
    border: "border-yellow-900",
    backgroundSecondary: "bg-blue-400", // complementary
  },
  bug: {
    background: "bg-green-500",
    textSecondary: "text-green-500",
    from: "from-green-500",
    to: "to-green-500",
    text: "text-white",
    border: "border-green-600",
    backgroundSecondary: "bg-rose-400", // complementary
  },
  ghost: {
    background: "bg-purple-800",
    textSecondary: "text-purple-800",
    from: "from-purple-800",
    to: "to-purple-800",
    text: "text-white",
    border: "border-purple-900",
    backgroundSecondary: "bg-yellow-300", // complementary
  },
  steel: {
    background: "bg-gray-400",
    textSecondary: "text-gray-400",
    from: "from-gray-400",
    to: "to-gray-400",
    text: "text-gray-900",
    border: "border-gray-500",
    backgroundSecondary: "bg-blue-600", // industrial contrast
  },
  fire: {
    background: "bg-red-500",
    textSecondary: "text-red-500",
    from: "from-red-500",
    to: "to-red-500",
    text: "text-white",
    border: "border-red-600",
    backgroundSecondary: "bg-blue-300", // cool contrast
  },
  water: {
    background: "bg-blue-500",
    textSecondary: "text-blue-500",
    from: "from-blue-500",
    to: "to-blue-500",
    text: "text-white",
    border: "border-blue-600",
    backgroundSecondary: "bg-orange-300", // warm contrast
  },
  grass: {
    background: "bg-green-600",
    textSecondary: "text-green-600",
    from: "from-green-600",
    to: "to-green-600",
    text: "text-white",
    border: "border-green-700",
    backgroundSecondary: "bg-red-300", // complementary
  },
  electric: {
    background: "bg-yellow-400",
    textSecondary: "text-yellow-400",
    from: "from-yellow-400",
    to: "to-yellow-400",
    text: "text-yellow-900",
    border: "border-yellow-500",
    backgroundSecondary: "bg-indigo-600", // complementary
  },
  psychic: {
    background: "bg-pink-500",
    textSecondary: "text-pink-500",
    from: "from-pink-500",
    to: "to-pink-500",
    text: "text-white",
    border: "border-pink-600",
    backgroundSecondary: "bg-teal-400", // complementary
  },
  ice: {
    background: "bg-blue-300",
    textSecondary: "text-blue-300",
    from: "from-blue-300",
    to: "to-blue-300",
    text: "text-blue-900",
    border: "border-blue-400",
    backgroundSecondary: "bg-red-400", // warm contrast
  },
  dragon: {
    background: "bg-indigo-600",
    textSecondary: "text-indigo-600",
    from: "from-indigo-600",
    to: "to-indigo-600",
    text: "text-white",
    border: "border-indigo-700",
    backgroundSecondary: "bg-amber-400", // warm contrast
  },
  dark: {
    background: "bg-gray-800",
    textSecondary: "text-gray-800",
    from: "from-gray-800",
    to: "to-gray-800",
    text: "text-white",
    border: "border-gray-900",
    backgroundSecondary: "bg-yellow-200", // light contrast
  },
  fairy: {
    background: "bg-pink-300",
    textSecondary: "text-pink-300",
    from: "from-pink-300",
    to: "to-pink-300",
    text: "text-pink-900",
    border: "border-pink-400",
    backgroundSecondary: "bg-emerald-600", // complementary
  },
  stellar: {
    background: "bg-purple-400",
    textSecondary: "text-purple-400",
    from: "from-purple-400",
    to: "to-purple-400",
    text: "text-white",
    border: "border-purple-500",
    backgroundSecondary: "bg-yellow-300", // complementary
  },
  unknown: {
    background: "bg-gray-500",
    textSecondary: "text-gray-500",
    from: "from-gray-500",
    to: "to-gray-500",
    text: "text-white",
    border: "border-gray-600",
    backgroundSecondary: "bg-blue-300", // subtle contrast
  },
  shadow: {
    background: "bg-gray-900",
    textSecondary: "text-gray-900",
    from: "from-gray-900",
    to: "to-gray-900",
    text: "text-white",
    border: "border-black",
    backgroundSecondary: "bg-purple-300", // mystical contrast
  },
};
