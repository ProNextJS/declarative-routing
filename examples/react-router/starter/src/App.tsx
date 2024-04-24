import { RouterProvider } from "react-router-dom";

import { router } from "./routeTable";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
