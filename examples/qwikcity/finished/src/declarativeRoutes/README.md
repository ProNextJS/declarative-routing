This application supports typesafe routing for QwikCity using the `declarative-routing` system.

# What is `declarative-routing`?

Declarative Routes is a system for typesafe routing in QwikCity. It uses a combination of TypeScript and a custom routing system to ensure that your routes are always in sync with your code. You'll never have to worry about broken links or missing routes again.

# Route List

Here are the routes of the application:

| Route | Route Name | Using It |
| ----- |  ---- | ---- |
| `/pokemon/[pokemonId]` | `PokemonPokemonId` | `<PokemonPokemonId.Link>` |
| `/` | `Home` | `<Home.Link>` |
| `/search` | `Search` | `<Search.Link>` |

To use the routes, you can import them from `~/declarativeRoutes` and use them in your code.

# Using the routes in your application

For pages, use the `Link` component (built on top of the `Link` component from `@builder.io/qwik-city`) to link to other pages. For example:

```tsx
import { ProductDetail } from "~/declarativeRoutes";

return (
  <ProductDetail.Link productId={"abc123"}>Product abc123</ProductDetail.Link>
);
```

This is the equivalent of doing `<Link href="/product/abc123">Product abc123</Link>` but with typesafety. And you never have to remember the URL. If the route moves, the typesafe route will be updated automatically.

## Using typed hooks

The system provides two typed hooks to use in your application `useParams`, and `useSearchParams`.

* `useParams` wraps `useLocation` and returns the typed parameters for the route.
* `useSearchParams` wraps `useLocation` and returns the typed search parameters for the route.

For each hook you give the route to get the appropriate data back.

```ts
import { Search } from "~/declarativeRoutes";
import { useSearchParams } from "~/declarativeRoutes/hooks";

export default MyClientComponent() {
  const searchParams = useSearchParams(Search);
  return <div>{searchParams.query}</div>;
}
```

# Configure declarative-routing

After running `npx declarative-routing init`, you don't need to configure anything to use it.
However, you may want to customize some options to change the behavior of route generation.

You can edit `declarative-routing.config.json` in the root of your project. The following options are available:

- `mode`: choose between `react-router`, `nextjs` or `qwikcity`. It is automatically picked on init based on the project type.
- `routes`: the directory where to place the declarative routes. It is picked from the initial wizard (and defaults to `./src/declarativeRoutes`).
- `importPathPrefix`: the path prefix to add to the import path of the self-generated route objects, in order to be able to resolve them. It defaults to `@/app`.

# When your routes change

You'll need to run `pnpm dr:build` to update the generated files. This will update the types and the `~/declarativeRoutes` module to reflect the changes.

The way the system works the `routeInfo.ts` files are link to the `~/declarativeRoutes/index.ts` file. So changing the Zod schemas for the routes does **NOT** require a rebuild. You need to run the build command when:

- You change the name of the route in the `routeInfo.ts` file
- You change the location of the route (e.g. `/product` to `/products`)
- You change the parameters of the route (e.g. `/product/[id]` to `/product/[productId]`)
- You add or remove routes

You can also run the build command in watch mode using `pnpm dr:build:watch` but we don't recommend using that unless you are changing routes a lot. It's a neat party trick to change a route directory name and to watch the links automagically change with hot module reloading, but routes really don't change that much.

# Finishing your setup

Post setup there are some additional tasks that you need to complete to completely typesafe your routes. We've compiled a handy check list so you can keep track of your progress.

- [ ] `/pokemon/[pokemonId]/routeInfo.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/pokemon/[pokemonId]` to `<PokemonPokemonId.Link>`
- [ ] Convert `params` typing in `/pokemon/[pokemonId]/routeInfo.ts` to `z.infer<>`
- [ ] `/routeInfo.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/` to `<Home.Link>`
- [ ] `/search/routeInfo.ts`: Add search typing to if the page supports search paramaters
- [ ] Convert `Link` components for `/search` to `<Search.Link>`
Once you've got that done you can remove this section.

# Why is `makeRoute` copied into the `~/declarativeRoutes` module?

You **own** this routing system once you install it. And we anticipate as part of that ownership you'll want to customize the routing system. That's why we create a `makeRoute.tsx` file in the `~/declarativeRoutes` module. This file is a copy of the `makeRoute.tsx` file from the `declarative-routing` package. You can modify this file to change the behavior of the routing system.

For example, you might want to change the way the `Link` component works. You can do that by modifying the `makeRoute.tsx` file.

We do **NOT** recommend changing the parameters of the `makeRoute` function because that would cause incompatibility with the `build` command of `declarative-routing`.

# Credit where credit is due

This system is based on the work in [Fix Next.JS Routing To Have Full Type-Safety](https://www.flightcontrol.dev/blog/fix-qwikCity-routing-to-have-full-type-safety). However the original article had a significantly different interface and didn't cover API routes at all.
