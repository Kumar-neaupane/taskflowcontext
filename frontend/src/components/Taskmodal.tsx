import { useEffect, useState } from "react";
import { useTask } from "../context/TaskSlice";
import { useAuth } from "../context/UserSlice";
import Dropdown from "./Dropdown";

const Taskmodal = ({ isOpen, onClose }: any) => {
  const [data, setData] = useState({});
  const authContext = useAuth();
  const { setMessage = () => {}, message = "" } = authContext || {};
  const { addProject } = useTask();

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const timmer = setTimeout(() => {
      setMessage("");
    }, 2000);
    return () => {
      clearTimeout(timmer);
    };
  }, [message, setMessage]);

  if (!isOpen) return null;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const priorityColor = getPriorityColor(data.priority || "");
    const taskData = {
      ...data,
      priorityColor,
      id: Date.now(),
      status: "todo",
      comments: 0,
    };
    addProject(taskData);
    setMessage("Task created successfully");
    setTimeout(() => {
      setData({});
      // onClose();
    }, 500);
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl animate-scaleIn">
          <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Task Title
              </label>
              <input
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Enter task title"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <textarea
                onChange={handleChange}
                name="description"

                placeholder="Enter task description"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Project
                </label>
                
                <Dropdown onChange={handleChange} name="project" >
                  <option>Marketing Campaign Q1</option>
                  <option>Ecommerce Platform Redesign</option>
                  <option>Mobile Apps Development</option>
                  <option>API Integration</option>
                  <option>Customer Dashboard</option>
                </Dropdown>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Priority
                </label>
               
                <Dropdown  onChange={handleChange} name="priority" >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Dropdown>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Assignee
                </label>
               
                <select name="assignee"  onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white" >
                  <option>Select Assignee</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Michael Brown</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Due Date
                </label>
                <input
                name="dueDate"
                 onChange={handleChange}
                  type="date"
                  placeholder="mm/dd/yyyy"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button type="submit" className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors">
              Create Task
            </button>
          </div>
          <div className="text-green-500 text-center">
          <p>{message}</p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Taskmodal;
