import projectData from "../data/projectdata";
import { createContext, useContext, useState } from "react";
import type { iProjectContextType } from "../types/interfaces";

const ProjectContext = createContext<iProjectContextType | any>(null);
export const ProjectProvider = ({ children }: any) => {
  const [data, setData] = useState(projectData);
  const [filterData, setFilterData] = useState(data);
  const [options, setOptions] = useState("all")

  // console.log(data, filterData)

  const handleFilter = ({ status }: any) => {
    setOptions(status)
    if (status === "all") {
      setFilterData(data);
    } else {
      const filtered = data.filter((items) => items.status == status);
      setFilterData(filtered);
    }
  };
  const addProject =(data:any)=>{
    // console.log(data);
    setFilterData(prev=>([...prev,data]))
  }

  const handleSearch = ({ search }: { search: any }) => {
    if (!search) {
      setFilterData(data)


    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

      // console.log(filtered);

      setFilterData(filtered)
    }



  }

  return (
    <ProjectContext.Provider
      value={{
        addProject,
        handleSearch,
        options,
        data,
        setData,
        filterData,
        setFilterData,
        handleFilter,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export const useProject = () => useContext(ProjectContext);
