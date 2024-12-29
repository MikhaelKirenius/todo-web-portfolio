import React, { useState } from "react";
import { TodoTask } from "../types/listsTypes";
import { useDeleteList } from "../controllers/listsController";
import { AlertCircle, Check, Clock, Edit2, Trash2 } from "lucide-react";
import { TodoTableBodyProps } from "../types/listsTypes";

const TodoTableBody: React.FC<TodoTableBodyProps> = ({
  taksTodo,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const getPriorityBadge = (priority: TodoTask["Priority"]): string => {
    const badges: Record<TodoTask["Priority"], string> = {
      High: "bg-red-100 text-red-700",
      Medium: "bg-yellow-100 text-yellow-700",
      Low: "bg-green-100 text-green-700",
    };
    return `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badges[priority]}`;
  };

  const getStatusBadge = (status: TodoTask["Status"]): string => {
    const badges: Record<TodoTask["Status"], string> = {
      "Pending": "bg-gray-100 text-gray-700",
      "In Progress": "bg-blue-100 text-blue-700",
      "Completed": "bg-green-100 text-green-700",
    };
    return `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badges[status]}`;
  };

  const getStatusIcon = (status: TodoTask["Status"]) => {
    const icons: Record<TodoTask["Status"], JSX.Element> = {
      "Pending": <Clock className="h-4 w-4" />,
      "In Progress": <AlertCircle className="h-4 w-4" />,
      "Completed": <Check className="h-4 w-4" />,
    };
    return icons[status];
  };

  return (
    <tr
      className={`transition-colors duration-200 ${
        isHovered ? "bg-gray-50" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td className="px-6 py-4 text-sm text-gray-900">
        {taksTodo.Activity_Name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{taksTodo.Deadline}</td>
      <td className="px-6 py-4">
        <span className={getPriorityBadge(taksTodo.Priority)}>
          {taksTodo.Priority}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={getStatusBadge(taksTodo.Status)}>
          <span className="mr-1.5">{getStatusIcon(taksTodo.Status)}</span>
          {taksTodo.Status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex space-x-3">
          <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
            <Edit2 className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(taksTodo.id)}
            className="text-red-600 hover:text-red-900 transition-colors duration-200"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TodoTableBody;