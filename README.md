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
