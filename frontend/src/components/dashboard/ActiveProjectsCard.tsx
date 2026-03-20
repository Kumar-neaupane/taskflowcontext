import ProgressBar from "./ProgressBar";
import { notifications } from "../../data/recentactivity";

const ActiveProjectsCard = () => {
  const projects = [
    { title: "E-Commerce Platform Redesign", progress: 25, tasks: "16/12" },
    { title: "Mobile App Development", progress: 85, tasks: "8/10" }
  ];

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, idx) => (
        <div key={idx} className="border border-gray-100 flex flex-col p-4 md:p-5 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
          <h1 className="font-bold text-gray-800 mb-4">{project.title}</h1>
          <ProgressBar label="Overall Progress" value={project.progress} />
          <div className="bottoms flex justify-between items-center mt-5 text-gray-500 text-xs md:text-sm">
            <div className="profiles flex flex-row -space-x-2">
              {notifications.slice(0, 3).map((item) => (
                <img
                  key={item.id}
                  className="h-7 w-7 md:h-8 md:w-8 rounded-full border-2 border-white object-cover shadow-sm"
                  src={item.userAvatar}
                  alt={item.userName}
                />
              ))}
              {notifications.length > 3 && (
                <div className="h-7 w-7 md:h-8 md:w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 shadow-sm">
                  +{notifications.length - 3}
                </div>
              )}
            </div>
            <div className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{project.tasks} Tasks</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveProjectsCard;
