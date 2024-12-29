import TodoTableBody from "./todoBody";
import { TodoTableProps } from "../types/listsTypes";
import { useDeleteList } from "../controllers/listsController";

const TodoTable: React.FC<TodoTableProps> = ({ data }) => {
  const { mutate: deleteList } = useDeleteList();

  const handleDelete = (id: string | number) => {
    deleteList(id);
  };

  
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Task Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Deadline</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Priority</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <TodoTableBody key={item.id} taksTodo={item} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
