import { Outlet } from "react-router"
import Footer from "../../shared/components/Footer/index"
import Newsletter from "../../features/home/components/Newsletter"
import { Navbar } from "../components/Nav"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
                <Navbar />
            <main className="flex-grow pt-1">
                <Outlet />
            </main>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Layout;