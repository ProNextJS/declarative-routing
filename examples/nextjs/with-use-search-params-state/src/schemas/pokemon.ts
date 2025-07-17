import { z } from "zod";
export const pokemonTypeNameSchema = z.enum([
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "stellar",
  "unknown",
  "shadow",
]);
export const pokemonTypeNamess = pokemonTypeNameSchema.options;
export const PokemonTypeNames = pokemonTypeNameSchema.enum;
export type PokemonTypeName = z.infer<typeof pokemonTypeNameSchema>;
export const asPokemonTypeName = (val: unknown) =>
  pokemonTypeNameSchema.parse(val);

const pokemonBaseRecordSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const asPokemonTypesNamesArr = (val: unknown) =>
  pokemonTypeNameSchema.array().catch([]).parse(val);
export const minimalPokemonInfoSchema = pokemonBaseRecordSchema.extend({
  id: z.number(),
  thumbnailUrl: z.string().url().optional().nullish(),
});

export type MinimalPokemonInfo = z.infer<typeof minimalPokemonInfoSchema>;

export const pokemonTypeMinimalInfoSchema = z.object({
  name: pokemonTypeNameSchema,
  url: z.string().url(),
  id: z.number(),
});

export type PokemonTypeMinimalInfo = z.infer<
  typeof pokemonTypeMinimalInfoSchema
>;

const pokemonAbilitySchema = z.object({
  ability: z
    .object({
      name: z.string(),
      url: z.string().url(),
    })
    .nullish(),
  is_hidden: z.boolean(),
  slot: z.number(),
});

const pokemonFormSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const versionSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const gameIndexSchema = z.object({
  game_index: z.number(),
  version: versionSchema,
});

const criesSchema = z.object({
  latest: z.string().url(),
  legacy: z.string().url(),
});

const moveSchema = z.object({
  move: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const spriteSchema = z.object({
  back_default: z.string().url().nullish().optional(),
  back_female: z.string().url().nullish().optional(),
  back_shiny: z.string().url().nullish().optional(),
  back_shiny_female: z.string().url().nullish().optional(),
  front_default: z.string().url().nullish().optional(),
  front_female: z.string().url().nullish().optional(),
  front_shiny: z.string().url().nullish().optional(),
  front_shiny_female: z.string().url().nullish().optional(),
});
export const pokemonDetailsSchema = z.object({
  abilities: z.array(pokemonAbilitySchema),
  base_experience: z.number(),
  cries: criesSchema,
  forms: z.array(pokemonFormSchema),
  game_indices: z.array(gameIndexSchema),
  height: z.number(),
  held_items: z.array(z.unknown()),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string().url(),
  moves: z.array(moveSchema),
  name: z.string(),
  order: z.number(),
  pastAbilities: z
    .object({
      abilities: pokemonAbilitySchema.array(),
      generation: pokemonBaseRecordSchema,
    })
    .nullish()
    .optional(),
  sprites: spriteSchema
    .extend({
      other: z.object({
        dream_world: spriteSchema,
        home: spriteSchema,
        "official-artwork": spriteSchema,
        showdown: spriteSchema,
      }),
    })
    .nullish()
    .optional(),
});

export type PokemonDetails = z.infer<typeof pokemonDetailsSchema>;
