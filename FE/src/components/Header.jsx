import { GoBell } from "react-icons/go";
const Header = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div>
                <h1 className="text-xs">Welcome Back!</h1>
                <p className="font-semibold text-xl">Alexia</p>
            </div>
            <div className="flex items-center space-x-5">
                <div className="md:flex hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
                    />
                </div>
                <div className="flex items-center space-x-5">
                    <button className="relative text-2xl text-gray-600">
                        <GoBell size={28} />
                        <span className="top-0 right-0 absolute flex justify-center items-center border-2 border-white bg-indigo-600 -mt-1 -mr-1 rounded-full w-5 h-4 font-semibold text-[10px] text-white">
                            9
                        </span>
                    </button>
                    <img
                        className="border-4 border-indigo-400 rounded-full w-8 h-8"
                        src="https://randomuser.me/api/portraits/women/50.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
