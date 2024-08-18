import { FaChevronRight } from "react-icons/fa";
const MemberCard = ({ member }) => {
    return (
        <div className="space-y-4 bg-white p-6 rounded-xl">
            <div className="flex justify-between items-cener">
                <h1 className="font-bold text-gray-700 text-xl">
                    {member.total_members}
                </h1>
                <FaChevronRight />
            </div>
            <div>
                <p className="text-gray-400 text-sm">{member.job}</p>
                <div className="relative">
                    <img
                        src="https://randomuser.me/api/portraits/women/15.jpg"
                        alt=""
                        className="border-4 border-white rounded-full w-8 h-8"
                    />
                    <img
                        src="https://randomuser.me/api/portraits/men/23.jpg"
                        alt=""
                        className="top-0 left-4 absolute border-4 border-white rounded-full w-8 h-8"
                    />
                    <img
                        src="https://randomuser.me/api/portraits/women/40.jpg"
                        alt=""
                        className="top-0 left-8 absolute border-4 border-white rounded-full w-8 h-8"
                    />
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
