import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import { Home } from "../screens/Home";
import { NoMatch } from "../screens/NoMatch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);
