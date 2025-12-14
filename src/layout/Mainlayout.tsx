import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "@/utils/ScrollToTop";


const Mainlayout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Mainlayout;