import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

const Layout = () => {
    return (
        <div className="relative">

            <Header />

            <div className="min-h-[50vh]">
                <Outlet />
            </div>

            <Footer />


        </div>
    )
}

export default Layout