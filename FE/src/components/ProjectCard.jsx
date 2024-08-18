import { TiAttachment } from "react-icons/ti";
const ProjectCard = ({ project }) => {
    return (
        <div className="space-y-5 bg-white p-6 rounded-xl">
            <div>
                <h1 className="font-semibold text-gray-700 text-xl">
                    {project.name}
                </h1>
                <p className="text-gray-500 text-sm">{project.type}</p>
            </div>
            <p>
                <span className="bg-gray-100 p-2 rounded text-xs">
                    {project.date}
                </span>
            </p>
            <div className="bg-gray-200 rounded-full w-full h-2">
                <div className="bg-indigo-500 rounded-full w-[40%] h-2"></div>
            </div>

            <div className="flex justify-between items-center">
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
                <p className="flex items-center space-x-1 text-gray-400">
                    <TiAttachment /> <span>{project.files} files</span>
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
