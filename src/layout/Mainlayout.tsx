import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router";


const Mainlayout = () => {
  return (
      <>
          <Navbar />
          <main>
              <Outlet/>
          </main>
          <Footer/>
      </>
  )
}

export default Mainlayout;