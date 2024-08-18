import { useState } from "react";

// ICONS //
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-router-dom";
// ICONS //

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(0);
    const handleLinkClick = (index) => {
        setActiveLink(index);
    };
    const SIDEBAR_LINKS = [
        { id: 1, path: "/", name: "Dashboard", icon: LuBox },
        { id: 2, path: "/members", name: "Members", icon: TbUsers },
        { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
        { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
        { id: 5, path: "/clients", name: "Clients", icon: LuUser },
        { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
    ];
    return (
        <div className="top-0 left-0 z-10 fixed bg-white px-4 pt-8 w-16 md:w-56 h-screen boder-r">
            {/* logo */}
            <div className="mb-8">
                <img
                    src="/logo.svg"
                    alt="logo"
                    className="md:flex hidden w-28"
                />
                <img
                    src="/logo_mini.svg"
                    alt="logo"
                    className="flex md:hidden w-8"
                />
            </div>
            {/* logo */}

            {/* Navigation Links */}
            <ul className="space-y-6 mt-6">
                {SIDEBAR_LINKS.map((link, index) => (
                    <li
                        key={index}
                        className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
                            activeLink === index
                                ? "bg-indigo-100 text-indigo-500"
                                : ""
                        }`}
                    >
                        <Link
                            to={link.path}
                            className="flex justify-center md:justify-start items-center md:space-x-5"
                            onClick={() => handleLinkClick(index)}
                        >
                            <span>{link.icon()}</span>
                            <span className="md:flex hidden text-gray-500 text-sm">
                                {link.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Navigation Links */}

            <div className="bottom-5 left-0 absolute px-4 py-2 w-full text-center cursor-pointer">
                <p className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2 rounded-full text-white text-xs">
                    {" "}
                    <span>?</span>{" "}
                    <span className="md:flex hidden">Need Help</span>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
