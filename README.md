## Declarative Routes

`declarative-routing` sets up an optional declarative routing system for React projects. For NextJS, it maintains a global list of both pages and API routes and provides components and functions to easily navigate to pages, or make API requests.

## What are Declarative Routes?

Typesafe routing is a way to ensure that your routes are structured properly; the parameters in the URL are correct and a route handler exists for that route. Declarative routing goes to the next step and ensures that your link is going to the correct route.

With typesafe routing you still have to deal with urls; `<Link to={`/product/${product.id}`}>Product</Link>`. With declarative routing you can use a component that is typed to the route, and that will generate the correct URL for you. `<ProductDetail.Link productId={product.id}>Product</ProductDetail.Link>`. Later on, if the route changes, or the parameters change, the `ProductDetail.Link` component will be updated to reflect that everwhere it is used in your application.

## Installation

For NextJS projects follow the [NextJS installation instructions](./docs/nextjs.md).

For React Router projects follow the [React Router installation instructions](./docs/react-router.md).

# Credit where credit is due

This system is based on the work in [Fix Next.JS Routing To Have Full Type-Safety](https://www.flightcontrol.dev/blog/fix-nextjs-routing-to-have-full-type-safety). However the original article had a significantly different interface and didn't cover API routes at all.
