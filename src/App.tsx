import { createBrowserRouter, RouterProvider } from "react-router";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home/Home";


const App = () => {
  
  const router = createBrowserRouter([
    {
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element:<Home/>
        }
      ]
  }  
  ]);

  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;