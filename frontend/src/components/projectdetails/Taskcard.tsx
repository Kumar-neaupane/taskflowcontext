import Status from "../Status";
import projectTasks from "../../data/projectTasks";

const Taskcard = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {projectTasks.map((task) => (
        <div
          key={task.id}
          className="w-full border border-gray-300 rounded-lg p-4 shadow-md bg-white flex flex-row justify-between items-start gap-4"
        >
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="font-bold text-lg text-gray-900">{task.title}</h1>
            <p className="text-gray-600 text-sm">{task.description}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Status statusColor={task.statusColor}>{task.status}</Status>
            <Status statusColor={task.priorityColor}>{task.priority}</Status>
            <div className="flex flex-row gap-2 items-center">
              <img
                src={task.assignee.avatar}
                alt={task.assignee.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-700">
                {task.assignee.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Taskcard;
