import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Browse from "./Browse"
import NotFound from "./NotFound"

const Route = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Route