# How to use Declarative Routes in QwikCity

## Step 1 - Pull Starter

Pull down the `starter` folder.

## Step 2 - Run Init

Run `npx declarative-routing init`

- This will then ask you where your `routes` and defaults to `./src/routes` which is where QwikCity expects them.
- Next it will ask you where you would like to place the files for declarative routes and defaults to `./src/declarativeRoutes`.

### Declarative Route Overview

You will notice that you should now have a few new files in `./src/declarativeRoutes`.

- `hooks.ts` - This has a few hooks so you know what params/search params each route contains
- `index.ts` - The routes the `init` command should have found a few routes
  - HomeRoute - `/`
  - PokemonPokemonIdRoute - `/pokemon/[pokemonId]`
  - SearchRoute - `/search`

Each of these routes imports the schema from its corresponding `routeInfo.ts` file.

## Step 3 - Update Route Info Schemas

There are a few routes that we should update the schema.
`/search`
`/pokemon/[pokemonId]`

### /search

This url has a few optional search params

- `q` - A string to partial match of a pokemon name
- `limit` - A number for how many items to return
  - The API call we make defaults to 10 if not provided

Update the `/search/routeInfo.ts` to add the search params.

```ts
export const Route = {
  name: "Search",
  params: z.object({}),
  search: z.object({
    q: z.string().optional(),
    limit: z.coerce.number().optional()
  })
};
```

### /pokemon/[pokemonId]

This route uses the pokemonId to fetch the appropriate pokemon.

Update the `/pokemon/[pokemonId]/routeInfo.ts` to add the `pokemonId` param.

```ts
export const Route = {
  name: "PokemonPokemonId",
  params: z.object({
    pokemonId: z.coerce.number()
  })
};
```

## Step 4 - Update Links

Replace all of the existing `Link` components from `@builder.io/qwik-city`

### src/routes/layout.tsx

Replace

```tsx
<Link href='/' class='font-extrabold'>
  Home
</Link>
```

with

```tsx
<Home.Link class='font-extrabold'>Home</Home.Link>
```

and

```tsx
<Link href='/search' class='font-light'>
  Search
</Link>
```

with

```tsx
<Search.Link class='font-light'>Search</Search.Link>
```

### src/components/PokemonGrid.tsx

Replace

```tsx
<Link href={`/pokemon/${p.id}`} key={p.id}>
  <PokemonCard pokemon={p} />
</Link>
```

with

```tsx
<PokemonPokemonId.Link pokemonId={p.id} key={p.id}>
  <PokemonCard pokemon={p} />
</PokemonPokemonId.Link>
```

### src/components/SelectableGrid.tsx

Replace

```tsx
<Link href={`/pokemon/${selectedId.value}`}>
  <PokemonInfo id={selectedId.value} />
</Link>
```

with

```tsx
<PokemonPokemonId.Link pokemonId={selectedId.value}>
  <PokemonInfo id={selectedId.value} />
</PokemonPokemonId.Link>
```

## Step 5 - Update Hooks

### src/routes/pokemon/[pokemonId]

Replace

```tsx
const location = useLocation();
const pokemonId = location.params.pokemonId;
```

with

```tsx
const { pokemonId } = useParams(PokemonPokemonId);
```

### src/routes/search

Replace

```tsx
const location = useLocation();
const q = location.url.searchParams.get("q") ?? "";
```

with

```tsx
const { q } = useSearchParams(Search);
```
