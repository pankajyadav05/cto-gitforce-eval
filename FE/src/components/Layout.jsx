import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div className="ml-16 md:ml-56 w-full">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
