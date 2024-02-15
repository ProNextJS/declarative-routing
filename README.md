## NextJS Typesafe Routing

`next-tsr` sets up an optional typesafe routing system for NextJS. It maintains a global list of both pages and API routes and provides components and functions to easily navigate to pages, or make API requests.

## Installation

Initialize your NextJS application:

```bash
npx next-tsr init
```

This will generate an `@/routes` directory that you can use to navigate to pages and make API requests. It also generates a `NEXT-TSR-README.md` file in the root of your project that contains information about how to use the system.

You can update the files when the route paths change using the `build` command. This will update the `@/routes` directory to reflect the new paths. For example, if you add a new page, you can run the following command to update the routes:

```bash
npx next-tsr build
```

## Using Links To Pages Routes

Instead of doing this:

```tsx
import Link from "next/link";

<Link href={`/product/${product.id}`}>Product</Link>;
```

You can do this:

```tsx
import { ProductDetail } from "@/routes";

<ProductDetail.Link productId={product.id}>Product</ProductDetail.Link>;
```

## Using API Routes

API routes are fully typesafe. Instead of doing this:

```tsx
// Data is any
const data = await fetch(`/api/product/${productId}`).then((res) => res.json());
```

You can do this:

```tsx
import { getProduct } from "@/routes";
// Data is strongly typed as the response of the getProduct function
const data = await getProduct({ productId });
```

And both the request and the response are strongly typed.

## OpenAPI Support

Because the system knows all of the API routes, their verbs, and their parameters, it can generate an OpenAPI schema for your API. This can be used to generate documentation, or to generate client libraries for your API.

## Opt-in

This system is opt-in. You can use it for some routes, and not for others. You can use it for some parts of your application, and not for others. It's designed to be flexible and to work with your existing code, and to be incrementally adoptable.

## What are `.info` files?

The `.info` files are used to provide additional information about the routes. For all route types they provide the name of the route (which must be a valid Javascript variable name), the typed route parameters, and the optional route search parameters. For API routes, they also provide the HTTP verbs and their request and response types.

We put the `.info` files in the same directory as the `page.tsx` or `route.tsx` files so that we can keep all the information about a route in one place. It's the `build` command that creates `.info` files if they are missing, as well as maintains the `index.ts` file in `@/routes` that has all the routes.

Why not put all that information into the `page.tsx` or `route.tsx` files directly you ask? Two reasons:

1. You cannot export anything out of a `page.tsx` or `route.tsx` file that NextJS doesn't recognize. It will work in `dev` mode but will fail in `build` mode. The `.info` files are not used by NextJS, so they can contain any information we want.
2. The `index.ts` file in the `@/routes` directory imports all the `.info.ts` files from all the routes. If we imported all the `page.tsx` and `route.tsx` files directly then we would defeat any code splitting that NextJS does. By importing the `.info` files, we can ensure that the flow of imports is uni-directional. The `index.ts` file imports all the `.info` files, and all the `page.tsx` and `route.tsx` files import the `index.ts` file. This ensures that the `index.ts` file is the root of the import tree, and that the `page.tsx` and `route.tsx` files are only imported when they are needed.

You can, and should, import your own `.info` file in your `page.tsx` or `route.tsx` file if your route supports parameters or search params because you can use `zod` to infer those types, like so:

For example, you might have a `/product/[productId]/page.tsx` file that looks like this:

```tsx
import { Route } from "./page.info";

export default function ProductDetail({
  params,
}: {
  params: z.infer<typeof Route.Params>;
}) {
  return <div>Product Detail {productId}</div>;
}
```

This ensures that the route parameters are correctly typed in your `page.tsx` or `route.tsx` file.

Since the `page.tsx` file is only including it's own `.info.ts` file it will not break code splitting.

## Why not copy the zod schemas into the `@/routes/index.ts` file?

That would require running the `build` process continuously to keep the `@/routes/index.ts` file up to date. We want to avoid that because it would slow down the development process. We only want to run the `build` process when we know that the routes have been added, or moved.

In the current model you can add search parameters, or change the return type of a `GET` request, and the `@/routes/index.ts` file will not need to be updated. It will only need to be updated when the route paths change.

# Credit where credit is due

This system is based on the work in [Fix Next.JS Routing To Have Full Type-Safety](https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety). However the original article had a significantly different interface and didn't cover API routes at all.
