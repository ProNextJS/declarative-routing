import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/_Layout";
import { HomePage, homeLoader } from "./pages/Home";
import { Search, searchLoader } from "./pages/Search";
import { Detail, detailLoader } from "./pages/Detail";

export const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        index: true,
        loader: homeLoader,
        Component: HomePage,
      },
      {
        path: "search",
        loader: searchLoader,
        Component: Search,
      },
      {
        path: "pokemon/:pokemonId",
        loader: detailLoader,
        Component: Detail,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
