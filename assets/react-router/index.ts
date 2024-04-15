import { z } from "zod";
import { makeRoute } from "./makeRoute";

export const Home = makeRoute("/", {
  name: "Home",
  params: z.object({}),
  search: z.object({})
});

/*
Define your routes here, like this:

export const Product = makeRoute("/product/:productId", {
  name: "Product",
  params: z.object({
    productId: z.string(),
  }),
  search: z.object({}),
});
*/
