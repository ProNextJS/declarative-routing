import { createBrowserRouter } from "react-router-dom";
import { z } from "zod";

import { Layout } from "./pages/_Layout";
import { HomePage, homeLoader } from "./pages/Home";
import { Search as SearchPage, searchLoader } from "./pages/Search";
import { Detail, detailLoader } from "./pages/Detail";

import { parseRoutes } from "./routes/makeRoute";

export const routes = parseRoutes([
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
]);

export const { Home, Search, PokemonDetail } = routes.declarativeRoutes;

export const router = createBrowserRouter(routes.routes);
