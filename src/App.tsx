import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import ParcelDelivery from "@/pages/ParcelDelivery/ParcelDelivery";
import CustomsClearance from "@/pages/CustomsClearance/CustomsClearance";
import StorageService from "@/pages/StorageService/StorageService";
import DryRefrigeratedTransport from "@/pages/DryRefrigeratedTransport/DryRefrigeratedTransport";
import Contact from "@/pages/Contact/Contact";

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
        },
        {
          path: "/customsClearance",
          element: <CustomsClearance />
        },
        {
          path: "/storageService",
          element: <StorageService />
        },
        {
          path: "/dryRefrigeratedTransport",
          element: <DryRefrigeratedTransport />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App;