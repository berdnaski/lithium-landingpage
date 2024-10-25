import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home/home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  }
])

export { router };