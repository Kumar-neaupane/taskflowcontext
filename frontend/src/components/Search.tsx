
import { SearchIcon } from "lucide-react";
// import { useProject } from "../context/ProjectSlice";
// import { useTask } from "../context/TaskSlice";
const Search = ({ onSearch, className, ...props }: any) => {
  // const { handleSearch } = useProject();
  // const {handlesearchee} = useTask()
  return (
    <div className={`flex flex-row bg-gray-50 items-center px-4 py-2 md:py-2.5 rounded-xl border border-gray-200 gap-2 w-full transition-all focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 ${className || ''}`}>
      <SearchIcon size={18} className="text-gray-400" />
      <input
        onChange={(e) => onSearch && onSearch(e.target.value)}
        type="text"
        placeholder="Search projects..."
        {...props}
        className='outline-0 text-sm flex-1 bg-transparent text-gray-700 placeholder:text-gray-400'
      />
    </div>
  )
}

export default Search
