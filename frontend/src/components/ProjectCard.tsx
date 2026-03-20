import { Calendar, EllipsisVertical } from "lucide-react";
import Status from "./Status";
import ProgressBar from "./dashboard/ProgressBar";
import { useNavigate } from "react-router";


const ProjectCard = ({ project }: any) => {
   const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-500 bg-green-200";
      case "Completed":
        return "text-blue-500 bg-blue-200";
      case "OnHold":
        return "text-yellow-500 bg-yellow-200";
      default:
        return "text-gray-500 bg-gray-200";
    }

  }

  const statusColor = getStatusColor(project.status);
  const navigate = useNavigate();

  if (!project) return null;

  return (
    <div
      onClick={() => navigate(`/dashboard/projects/${project.id}`)}
      className="bg-white shadow-lg border border-gray-300 p-4 rounded-lg flex flex-col gap-4 cursor-pointer"
    >
    
      <div className="flex justify-between">
        <h1 className="text-[20px] font-bold">{project?.title}</h1>
        <EllipsisVertical size={20} />
      </div>
      <div>
        <Status statusColor={statusColor}>{project?.status}</Status>
      </div>
      <p className="text-gray-600">{project?.description}</p>
      <div>
        <ProgressBar label="Progress" value={project?.progress} />
      </div>
      <div className="border w-full border-gray-300"></div>
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {project?.image && (
            <img
              src={project.image}
              className="h-10 w-10 rounded-full object-cover border-2 border-white"
              alt={project.title}
            />
          )}
          {project?.members?.map((member: string, index: number) => (
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
          <span>{project?.deadline}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
