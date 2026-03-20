import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useTask } from "../context/TaskSlice";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Status from "../components/Status";
import { useState } from "react";

const TaskDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useTask();
  const [comment, setComment] = useState("");

  const task = data.find((t: any) => t.id === Number(id));

  if (!task) {
    return (
      <div className="m-8 w-full">
        <p>Task not found</p>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate("/dashboard/tasks");
  };

  const handleAddComment = () => {
    console.log("Comment added:", comment);
    setComment("");
  };

  return (
    <div className="m-8 w-full">
      <div
        className="flex flex-row items-center gap-2 cursor-pointer mb-6 group"
        onClick={handleBackClick}
      >
        <ArrowLeft className="group-hover:text-indigo-600" />
        <span className="group-hover:text-indigo-600">Back to Tasks</span>
      </div>

      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <div className="border border-gray-300 bg-white shadow-lg p-6 rounded-xl">

            <h1 className="text-2xl font-bold mb-6">{task.title}</h1>


            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{task.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Comments (1)</h2>

              <div className="flex flex-row gap-4 mb-4">
                <img
                  src={task.assignee.avatar}
                  alt={task.assignee.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex flex-row gap-2">
                    <h3 className="font-semibold">{task.assignee.name}</h3>
                    <p className="text-gray-500 text-sm">1/12/2025, 5:45:00 AM</p>
                  </div>
                  <p className="text-gray-600">Great progress on the mobile designs!</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-semibold">Add a comment...</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="border border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <div className="flex justify-end">
                <Button
                  name="Add Comment"
                  onClick={handleAddComment}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-80">
          <div className="border border-gray-300 bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-lg font-bold mb-6">Task Details</h2>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Status</label>
              <Dropdown>
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done" selected>Done</option>
              </Dropdown>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Priority</label>
              <div className="flex items-center gap-2">
                <Status statusColor={task.priorityColor}>
                  {task.priority}
                </Status>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Assignee</label>
              <div className="flex flex-row items-center gap-3 p-3 border border-gray-300 rounded-lg">
                <img
                  src={task.assignee.avatar}
                  alt={task.assignee.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{task.assignee.name}</p>
                  <p className="text-sm text-gray-600">Designer</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Project</label>
              <p className="text-gray-700">{task.project}</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Due Date</label>
              <input
                type="text"
                value={task.dueDate}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Created</label>
              <p className="text-gray-700">1/5/2025, 5:45:00 AM</p>
            </div>

            {/* Delete Button */}
            <Button name="Delete Task" className="w-full border-2 text-red-500 font-semibold py-2 rounded-lg hover:bg-red-50 transition bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
