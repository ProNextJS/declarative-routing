# How to use Declarative Routes in React-Router

## Step 1 - Pull Starter

Pull down the `starter` folder.

## Step 2 - Run Init

Run `npx declarative-routing init`

- This will then ask you where your `routes` and defaults to `./src/routes` which is where React-Router expects them.

### Declarative Route Overview

You will notice that you should now have a few new files in `./src/routes`.

- `index.ts` - This is one place to put your routes if you choose to create them by hand.
- `makeRoute.tsx` - This is a helper function to create a route objects for page and API routes

## Step 3 - Update Your Route Table

In `routeTable.ts` import the `parseRoutes` function from `makeRoute.tsx` and use it to create your routes.

```tsx
import { parseRoutes } from "./routes/makeRoute";

export const routes = parseRoutes([
  ...
]);
```

Next add names and types to your routes.

```tsx
import { z } from "zod";

import { Search as SearchPage, searchLoader } from "./pages/Search";

  {
    path: "/",
    Component: Layout,
    name: "Home",
    params: z.object({}),
    search: z.object({}),
    children: [
      {
        name: "Index",
        params: z.object({}),
        search: z.object({}),
        path: "",
        index: true,
        loader: homeLoader,
        Component: HomePage
      },
      {
        name: "Search",
        path: "search",
        params: z.object({}),
        search: z.object({
          q: z.string().optional()
        }),
        loader: searchLoader,
        Component: SearchPage
      },
      {
        name: "PokemonDetail",
        path: "pokemon/:pokemonId",
        params: z.object({
          pokemonId: z.number()
        }),
        search: z.object({}),
        loader: detailLoader,
        Component: Detail
      }
    ]
  }
```

Each route needs a unique `name` as well as Zod schemas for `params` and `search`. `params` is for path params. `search` is for query params.

Alter the `createBrowserRouter` function to use the React-Router routes.

```tsx
export const router = createBrowserRouter(routes.routes);
```

And also export the declarative routes.

```tsx
export const { Home, Search, PokemonDetail } = routes.declarativeRoutes;
```

## Step 4 - Update Links

There are a few components and routes that use `Link` components from `react-router-dom`. Let's change those over to using declarative routes.

### \_Layout.tsx

In the `_Layout.tsx` file replace all of the existing `Link` components from `react-router-dom` with the new declarative routes.

```tsx
import { Outlet } from "react-router-dom";
import { Home, Search } from "@/routeTable";

  <Home.Link className='font-extrabold'>Home</Home.Link>
  <Search.Link className='font-light'>Search</Search.Link>
```

### PokemonGrid.tsx

In the `PokemonGrid.tsx` file replace all of the existing `Link` components from `react-router-dom` with the new declarative routes.

```tsx
import { PokemonDetail } from "@/routeTable";

<PokemonDetail.Link pokemonId={p.id} key={p.id}>
  <PokemonCard pokemon={p} />
</PokemonDetail.Link>;
```

### SelectableGrid.tsx

In the `SelectableGrid.tsx` file replace all of the existing `Link` components from `react-router-dom` with the new declarative routes.

```tsx
import { PokemonDetail } from "@/routeTable";

<PokemonDetail.Link pokemonId={selected.id}>
  <PokemonInfo id={selected.id} />
</PokemonDetail.Link>;
```
