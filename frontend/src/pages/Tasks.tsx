import { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import Taskcard from "../components/Taskcard";
import Taskmodal from "../components/Taskmodal";
import { useTask } from "../context/TaskSlice";
import type { iTaskContextType } from "../types/interfaces";

const Tasks = () => {
  const { options, handleFilter, priorityFilter, handleSearche } = useTask();
  // const { data } = context || { data: [] };
  const [open, setOpen] = useState(false);
  return (
    <div className="app-page">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Tasks</h1>
          <p>Manage and track all your tasks across projects New Task</p>
        </div>
        <Button
          name="+ New Task"
          className="px-4 py-2"
          onClick={() => setOpen(true)}
        />
        <Taskmodal isOpen={open} onClose={() => setOpen(false)} />
      </div>
      <div className="mt-8 flex flex-col gap-3 lg:flex-row">
        <Search className=""
          onSearch={(value: string) =>
            handleSearche({ search: value })}

        />
        <Dropdown >
          <option value="all">All Status</option>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </Dropdown>
        <Dropdown value={options} onChange={(e: any) => handleFilter({ priority: e.target.value })}>
          <option value="all">All Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Dropdown>
      </div>
      <div className="my-6">
        {priorityFilter.map((task: iTaskContextType) => (
          <Taskcard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
