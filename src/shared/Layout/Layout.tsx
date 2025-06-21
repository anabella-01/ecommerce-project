import { Outlet } from "react-router"
import Header from "../../shared/components/Header/index"
import Footer from "../../shared/components/Footer/index"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
                <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;