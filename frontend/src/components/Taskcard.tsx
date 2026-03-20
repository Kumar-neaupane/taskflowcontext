import { Calendar, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router";
import Status from "./Status";
import type { iTaskContextType } from "../types/interfaces";

const Taskcard = ({ task }: { task: iTaskContextType }) => {
  const navigate = useNavigate();

  const handleTaskClick = () => {
    navigate(`/dashboard/tasks/${task.id}`);
  };

  return (
    <div
      onClick={handleTaskClick}
      className="border border-gray-300  bg-white shadow-lg p-4 rounded-xl w-full flex flex-col gap-2 m-2 cursor-pointer group">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold group-hover:text-indigo-600">
          {task.title}
        </h1>
        <p>{task.description}</p>
      </div>
      <div className="flex flex-row gap-1 text-[14px] items-center text-gray-600">
        <p>{task.project}</p>
        <Status statusColor={task.priorityColor}>
          {task.priority}
        </Status>
        <div className="flex flex-row gap-1">
          <Calendar />
          <p>{task.dueDate}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <img
            className="h-7 w-7 rounded-full object-cover"
            src={task.assignee.avatar}
          />
          <p>{task.assignee.name}</p>
        </div>
        <div className="flex flex-row gap-1">
          <MessageSquare />
          <p>{task?.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default Taskcard;
