import {
  ChartScatter,
  FolderKanban,
  LayoutDashboard,
  Settings,
  SquareCheckBig,
  SquareKanban,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Projects", icon: <FolderKanban size={20} />, path: "projects" },
    { name: "Tasks", icon: <SquareCheckBig size={20} />, path: "tasks" },
    { name: "Kanban Board", icon: <SquareKanban size={20} />, path: "kabanboard" },
    { name: "Analytics", icon: <ChartScatter size={20} />, path: "analytics" },
    { name: "Settings", icon: <Settings size={20} />, path: "settings" },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-300 shadow-xl 
          transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:z-0 lg:shadow-lg
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto p-4
        `}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="font-bold text-lg text-indigo-600">Menu</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;

            return (
              <Link
                to={item.path || "#"}
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  onClose();
                }}
                className={`
                  flex items-center gap-3 p-2 rounded-lg cursor-pointer
                  transition-all duration-200
                  ${isActive
                    ? "bg-indigo-100 text-indigo-600 shadow-sm"
                    : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                {item.icon}
                <span className="text-base font-semibold">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
