# How to use Declarative Routes in NextJS

## Step 1 - Pull Starter

Pull down the `starter` folder.

## Step 2 - Run Init

Run `npx declarative-routing init`

- This will then ask you where your `routes` and defaults to `./src/routes` which is where NextJS expects them.
- Next it will ask you where you would like to place the files for declarative routes and defaults to `./src/routes`.
- Finally it will ask you to specify whether you want to use OpenAPI, for the time being we suggest saying No.

### Declarative Route Overview

You will notice that you should now have a few new files in `./src/routes`.

- `hooks.ts` - This has a few hooks so you know what params/search params each route contains
- `index.ts` - The routes the `init` command should have found a few routes
  - Home - `/`
  - PokemonPokemonId - `/pokemon/[pokemonId]`
  - Search - `/search`
- `makeRoute.tsx` - This is a helper function to create a route objects for page and API routes

Each of these routes imports the schema from its corresponding `page.info.ts` and `route.info.ts` file.

## Step 3 - Update Route Info Schemas

There are a few routes that we should update the schema.
`/search`
`/pokemon/[pokemonId]`

### /search

This url has a few optional search params

- `q` - A string to partial match of a pokemon name
- `limit` - A number for how many items to return
  - The API call we make defaults to 10 if not provided

Update the `/search/page.info.ts` to add the search params.

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

Update the `/pokemon/[pokemonId]/page.info.ts` to add the `pokemonId` param.

```ts
export const Route = {
  name: "PokemonDetail",
  params: z.object({
    pokemonId: z.coerce.number()
  })
};
```

Changing the name requires re-running `pnpm dr:build` to update the generated files.

## Step 4 - Update Links

Replace all of the existing `Link` components from `next/link`

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

Importing from:

```tsx
import { Home, Search } from "@/routes";
```

And replace:

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
<PokemonDetail.Link pokemonId={p.id} key={p.id}>
  <PokemonCard pokemon={p} />
</PokemonDetail.Link>
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
<PokemonDetail.Link pokemonId={selectedId.value}>
  <PokemonInfo id={selectedId.value} />
</PokemonDetail.Link>
```

## Step 5 - Update Hooks

### src/routes/search

Replace

```tsx
const q = (useSearchParams().get("q") as string) || "";
```

with

```tsx
import { Search as SearchRoute } from "@/routes";
import { useSearchParams } from "@/routes/hooks";

const q = useSearchParams(SearchRoute).q || "";
```

## Step 6 - Use API Wrapper

In the `src/pages/api/pokemon/route.info.ts` file make these changes.

```ts
import { z } from "zod";

import { PokemonSchema } from "@/types";

export const Route = {
  name: "PokemonSearch",
  params: z.object({}),
  search: z.object({
    q: z.string().optional(),
    limit: z.coerce.number().optional()
  })
};

export const GET = {
  result: z.array(PokemonSchema)
};
```

Then re-run `pnpm dr:build` to update the generated files.

In `SearchList.tsx` update the import to bring in the search API:

```tsx
import { Search as SearchRoute, getPokemonSearch } from "@/routes";
```

And replace the `fetch` call with the new API wrapper:

```tsx
const resp = await fetch(`/api/pokemon?q=${encodeURIComponent(query)}`);
const data = await resp.json();
```

Becomes:

```tsx
const data = await getPokemonSearch({}, { q: query });
setPokemon(data);
```
