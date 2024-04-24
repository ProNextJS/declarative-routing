This application supports typesafe routing for React Router using the `declarative-routing` system.

# What is `declarative-routing`?

Declarative Routes use a combination of TypeScript and a custom routing system to ensure that your routes are always in sync with your code. You'll never have to worry about broken links or missing routes again.

# Route List

To use the routes, you can import them from `./src/routes` and use them in your code.

# Using the routes in your application

For pages, use the `Link` component (built on top of `Link`) to link to other pages. For example:

```tsx
import { ProductDetail } from "./src/routes";

return (
  <ProductDetail.Link productId={"abc123"}>Product abc123</ProductDetail.Link>
);
```

This is the equivalent of doing `<Link to="/product/abc123">Product abc123</Link>` but with automatic URL generation and typesafety. You never have to remember the URL again. If the route moves, the typesafe route will be updated automatically.

You can also use `NavLink`s to create navigation links. For example:

```tsx
import { ProductDetail } from "./src/routes";

return (
  <Home.NavLink
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Home
  </Home.NavLink>
);
```
# Configure declarative-routing

After running `npx declarative-routing init`, you don't need to configure anything to use it.
However, you may want to customize some options to change the behavior of route generation.

You can edit `declarative-routing.config.json` in the root of your project. The following options are available:

- `mode`: choose between `react-router`, `nextjs` or `qwikcity`. It is automatically picked on init based on the project type.
- `routes`: the directory where the routes are defined. It is picked from the initial wizard (and defaults to `src/routes`).
- `importPathPrefix`: the path prefix to add to the import path of the self-generated route objects, in order to be able to resolve them. It defaults to `@/app`.

# When your routes change

When you change your routing configuration you will need to update the `./src/routes/index.ts` file with the appropriate changes.

# Why is `makeRoute` copied into the `@routes` module?

You **own** this routing system once you install it. And we anticipate as part of that ownership you'll want to customize the routing system. That's why we create a `makeRoute.tsx` file in the `./src/routes` module. This file is a copy of the `makeRoute.tsx` file from the `declarative-routing` package. You can modify this file to change the behavior of the routing system.

# Credit where credit is due

This system is based on the work in [Fix Next.JS Routing To Have Full Type-Safety](https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety). However the original article had a significantly different interface and didn't cover API routes at all.
