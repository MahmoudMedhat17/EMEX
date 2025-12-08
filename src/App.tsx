import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import ParcelDelivery from "@/pages/ParcelDelivery/ParcelDelivery";

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/parcelDelivery",
          element: <ParcelDelivery />
        }
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App;