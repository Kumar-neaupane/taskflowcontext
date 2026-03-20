import { Calendar } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type KanbanCardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    project: string;
    priority: string;
    priorityColor: string;
    borderColor: string;
    dueDate: string;
    assignee: {
      name: string;
      avatar: string;
    };
  };
  isOverlay?: boolean;
};

const KanbanCard = ({ item, isOverlay = false }: KanbanCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        ${item.borderColor} border-l-4 bg-white shadow-sm p-4 rounded-lg
        cursor-grab active:cursor-grabbing select-none
        transition-all duration-150
        ${isDragging && !isOverlay
          ? "opacity-40 scale-[0.98] shadow-none ring-2 ring-blue-300 ring-offset-1"
          : "hover:shadow-md hover:-translate-y-0.5"
        }
        ${isOverlay
          ? "shadow-2xl rotate-2 scale-105 ring-2 ring-blue-400 ring-offset-2 opacity-95"
          : ""
        }
      `}
    >
      {/* Title */}
      <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 line-clamp-2 mb-3">
        {item.description}
      </p>

      {/* Project Tag */}
      <p className="bg-gray-100 text-gray-600 w-fit px-2 py-0.5 rounded text-xs font-medium mb-3">
        {item.project}
      </p>

      {/* Priority + Due Date */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`${item.priorityColor} text-white text-xs px-2 py-0.5 rounded font-medium`}
        >
          {item.priority}
        </span>
        <div className="flex items-center gap-1 text-gray-400">
          <Calendar size={11} />
          <span className="text-xs">{item.dueDate}</span>
        </div>
      </div>

      {/* Assignee */}
      <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
        <img
          src={item.assignee.avatar}
          alt={item.assignee.name}
          className="h-6 w-6 rounded-full object-cover ring-1 ring-gray-200"
        />
        <span className="text-xs text-gray-600">{item.assignee.name}</span>
      </div>
    </div>
  );
};

export default KanbanCard;
