//icons

import { CiGlobe } from "react-icons/ci";
import { FaApple, FaTabletAlt } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const Platforms = () => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <h1 className="font-bold text-2xl text-gray-700">Platform</h1>
            <div className="gap-8 grid grid-cols-2 p-2">
                <div className="space-y-3 text-gray-500">
                    <h1 className="font-bold text-2xl">58</h1>
                    <p className="flex items-center space-x-2">
                        <CiGlobe /> <span>website</span>
                    </p>
                </div>
                <div className="space-y-3 text-gray-500">
                    <h1 className="font-bold text-2xl">87</h1>
                    <p className="flex items-center space-x-2">
                        <FaApple /> <span>IOS</span>
                    </p>
                </div>
                <div className="space-y-3 text-gray-500">
                    <h1 className="font-bold text-2xl">58</h1>
                    <p className="flex items-center space-x-2">
                        <DiAndroid /> <span>Android</span>
                    </p>
                </div>
                <div className="space-y-3 text-gray-500">
                    <h1 className="font-bold text-2xl">58</h1>
                    <p className="flex items-center space-x-2">
                        <FaTabletAlt /> <span>Tablets</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Platforms;
