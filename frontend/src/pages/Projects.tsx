import { Grid3x3, List } from "lucide-react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import CreateProjectModal from "../components/projectModal";
import { useProject } from "../context/ProjectSlice";
import type { iProjectContextType } from "../types/interfaces";

const Projects = () => {
  const { handleFilter, filterData, options, handleSearch } = useProject();

  const [open, setOpen] = useState(false);
  const [gridview, setGridview] = useState(
    "grid-cols-3 bg-gray-200 text-indigo-600",
  );
  // const [setbg, setBg] = useState("bg-white");

  return (
    <div className="app-page">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="">Manage and track all your projects in one place</p>
        </div>

        <Button name="+ New Project" onClick={() => setOpen(true)} className="px-4 sm:w-auto" />
        <CreateProjectModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
      <div className="my-8 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Search className=""
            onSearch={(value: string) =>
              handleSearch({ search: value })} />
          <Dropdown value={options} onChange={(e: any) => handleFilter({ status: e.target.value })}>
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="OnHold">On Hold</option>
          </Dropdown>
        </div>
        <div className="flex w-fit gap-2 bg-white p-2 rounded-lg border border-gray-300">
          <Grid3x3
            className=""
            onClick={() =>
              setGridview("grid-cols-3 bg-gray-200 text-indigo-600")
            }
          />
          <List
            className=""
            onClick={() =>
              setGridview("grid-cols-1 bg-gray-200 text-indigo-600")
            }
          />
        </div>
      </div>
      <div className={`cards grid ${gridview} w-full gap-5`}>
        {filterData.map((project: iProjectContextType) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;
