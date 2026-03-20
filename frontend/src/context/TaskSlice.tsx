import projectTasksData from "../data/taskCardData";
import { createContext, useState, useContext } from "react";
import type { iTaskContextType } from "../types/interfaces";

const TaskContext = createContext<iTaskContextType | any>(null);
export const TaskProvider = ({ children }: any) => {
    const [data, setData] = useState(projectTasksData);
    const [priorityFilter, setPriorityFilter] = useState(projectTasksData)
    const [options, setOptions] = useState('all')

    const handleFilter = ({ priority }: any) => {
        setOptions(priority)
        if (priority == "all") {
            setPriorityFilter(data);
        }
        else {
            const filtered = data.filter((items) => items.priority.toLowerCase() == priority.toLowerCase());
            setPriorityFilter(filtered);
        }
    }
    const handleSearche = ({ search }: { search: any }) => {
        if (!search) {
            setPriorityFilter(data);
        } else {
            const filtered = data.filter((items) => items.title.toLowerCase().includes(search.toLowerCase()));
            setPriorityFilter(filtered);
        }
    }
const addProject = (data:any)=>{
    setPriorityFilter(prev=>([...prev,data]))
}
    return (
        <TaskContext.Provider
            value={{
                handleSearche,
                options,
                data,
                setData,
                handleFilter,
                priorityFilter,
                addProject
            }}>
            {children}
        </TaskContext.Provider>
    )
}
export const useTask = () => useContext(TaskContext);