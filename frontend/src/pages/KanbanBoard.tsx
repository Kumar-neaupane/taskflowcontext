import { useState } from "react";
import { Plus } from "lucide-react";
import Dropdown from "../components/Dropdown";
import KanbanCard from "../components/KanbanCard";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import projectTasksData from "../data/taskCardData";

type Task = (typeof projectTasksData)[number];

type ColumnId = "todo" | "inprogress" | "done";

const COLUMNS: { id: ColumnId; label: string; borderColor: string; headerColor: string }[] = [
  { id: "todo", label: "To Do", borderColor: "border-gray-300", headerColor: "text-gray-700" },
  { id: "inprogress", label: "In Progress", borderColor: "border-blue-500", headerColor: "text-blue-600" },
  { id: "done", label: "Done", borderColor: "border-green-500", headerColor: "text-green-600" },
];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(projectTasksData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // require 5px movement before drag starts (prevents accidental drags)
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task ?? null);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;
    setOverId(over ? String(over.id) : null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    setOverId(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    const activeTask = tasks.find((t) => t.id === activeId);
    if (!activeTask) return;
    // Check if dropped over a column
    const isOverColumn = COLUMNS.some((col) => col.id === overId);
    if (isOverColumn) {
      // Dropped directly onto a column — move task to that column
      const newStatus = overId as ColumnId;
      if (activeTask.status !== newStatus) {
        setTasks((prev) =>
          prev.map((t) => (t.id === activeId ? { ...t, status: newStatus } : t))
        );
      }
      return;
    }
    // Dropped over another task card — reorder within same column or move to new column
    const overTask = tasks.find((t) => t.id === overId);
    if (!overTask) return;
    const newStatus = overTask.status as ColumnId;
    setTasks((prev) => {
      const updated = prev.map((t) =>
        t.id === activeId ? { ...t, status: newStatus } : t
      );
      // Reorder: move activeTask to position of overTask within the column
      const activeIndex = updated.findIndex((t) => t.id === activeId);
      const overIndex = updated.findIndex((t) => t.id === overId);
      return arrayMove(updated, activeIndex, overIndex);
    });
  };

  const getColumnTasks = (columnId: ColumnId) =>
    tasks.filter((t) => t.status === columnId);

  return (
    <div className="app-page">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Kanban Board</h1>
          <p className="text-sm text-gray-500">Drag and drop tasks to update their status</p>
        </div>
        <Dropdown className="w-full md:w-auto md:min-w-55">
          <option value="all">All Projects</option>
          <option value="ecommerce">E-Commerce Platform</option>
          <option value="mobile">Mobile App</option>
        </Dropdown>
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="w-full overflow-x-auto pb-2">
          <div className="flex min-w-240 gap-6 items-start">
          {COLUMNS.map((column) => {
            const columnTasks = getColumnTasks(column.id);
            const isOver = overId === column.id;

            return (
              <KanbanColumn
                key={column.id}
                column={column}
                tasks={columnTasks}
                isOver={isOver}
              />
            );
          })}
          </div>
        </div>

        {/* DragOverlay must be OUTSIDE columns, inside DndContext */}
        <DragOverlay dropAnimation={{
          duration: 200,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}>
          {activeTask ? (
            <KanbanCard item={activeTask} isOverlay />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

// ─── Column Component ────────────────────────────────────────────────────────

import { useDroppable } from "@dnd-kit/core";

type ColumnProps = {
  column: { id: ColumnId; label: string; borderColor: string; headerColor: string };
  tasks: Task[];
  isOver: boolean;
};

const KanbanColumn = ({ column, tasks, isOver }: ColumnProps) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div
      ref={setNodeRef}
      className={`
        flex-1 min-w-70 flex flex-col rounded-xl border-2 ${column.borderColor}
        bg-white shadow-sm transition-all duration-200
        ${isOver ? "ring-2 ring-offset-2 ring-blue-400 bg-blue-50/30" : ""}
      `}
    >
      {/* Column Header */}
      <div className={`flex items-center justify-between px-4 py-3 border-b ${column.borderColor}`}>
        <div className="flex items-center gap-2">
          <h2 className={`font-bold text-base ${column.headerColor}`}>{column.label}</h2>
          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 p-3 flex-1 min-h-30">
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <KanbanCard key={task.id} item={task} />
          ))}
        </SortableContext>

        {tasks.length === 0 && (
          <div className={`
            flex-1 flex items-center justify-center rounded-lg border-2 border-dashed
            text-gray-400 text-sm py-8 transition-colors duration-200
            ${isOver ? "border-blue-400 text-blue-400 bg-blue-50" : "border-gray-200"}
          `}>
            Drop tasks here
          </div>
        )}
      </div>

      {/* Add Task Button */}
      <div className="px-3 pb-3">
        <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-2 flex items-center justify-center gap-1 text-gray-500 text-sm hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all duration-150">
          <Plus size={16} />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;
