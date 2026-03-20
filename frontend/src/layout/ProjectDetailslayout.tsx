import { Calendar, MoveLeft } from "lucide-react";
import { useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router";
import ProgressBar from "../components/dashboard/ProgressBar";
import Status from "../components/Status";
import projectData from "../data/projectdata";

import { useProject } from "../context/ProjectSlice";

const ProjectDetailslayout = () => {
  const { filter } = useProject()
  console.log(filter);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const project = useMemo(() => {
    const projectId = Number(id);
    return projectData.find((item) => item.id === projectId);
  }, [id]);
  return (
    <div className="w-full m-8">
      <div
        onClick={() => navigate("/dashboard/projects")}
        className="flex flex-row gap-2 cursor-pointer items-center "
      >
        <MoveLeft size={18} /> <span>Back to Projects</span>
      </div>

      {!project && (
        <div className="mt-8 text-gray-600">
          Project not found. Please go back and select a valid project.
        </div>
      )}

      {project && (
        <div className="mt-8 bg-white shadow-lg border border-gray-300 p-6 rounded-lg flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              {project.title}
            </h1>
            <Status statusColor={project.statusColor}>{project.status}</Status>
            <p className="text-gray-600">{project.description}</p>
          </div>

          <ProgressBar label="Progress" value={project.progress} />

          <div className="border w-full border-gray-300"></div>

          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex -space-x-2">
              {project.members.map((member, index) => (
                <img
                  key={index}
                  src={member}
                  className="h-10 w-10 rounded-full object-cover border-2 border-white"
                  alt={`Member ${index + 1}`}
                />
              ))}
            </div>
            <p className="flex flex-row gap-1 text-gray-600 items-center">
              <Calendar size={18} />
              <span>{project.deadline}</span>
            </p>
          </div>
        </div>
      )}
      <div className="my-4 border-b border-gray-300">
        <ul className="flex flex-row gap-8 text-[16px] font-semibold">
          <li>
            <Link
              to="overview"
              className={`pb-3 block cursor-pointer transition-all ${location.pathname.endsWith('/overview') || location.pathname === `/dashboard/projects/${id}`
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="tasks"
              className={`pb-3 block cursor-pointer transition-all ${location.pathname.endsWith('/tasks')
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link
              to="team"
              className={`pb-3 block cursor-pointer transition-all ${location.pathname.endsWith('/team')
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="activity"
              className={`pb-3 block cursor-pointer transition-all ${location.pathname.endsWith('/activity')
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              Activity
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default ProjectDetailslayout;
