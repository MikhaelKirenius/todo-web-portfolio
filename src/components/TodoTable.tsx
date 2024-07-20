import { TodoTask } from "../types/listsTypes";
import TodoTableBody from "./todoBody";

interface todoData {
  data: TodoTask[];
}

type TodoTableProps = {
  onDelete: () => void;
  onChange: () => void;
  tasks: todoData;
};

const TodoTable = ({ data }: todoData) => {
  return (
    <table className="table bg-accent p-3 font-bold">
      <thead className="">
        <tr>
          <th>Task Name</th>
          <th>Task Deadline Date</th>
          <th>Task Level</th>
          <th>Task Status</th>
        </tr>
      </thead>
      <tbody className="bg-base-200">
        {data.map((item: TodoTask) => (
          <>
            <TodoTableBody key={item.id} taksTodo={item} />
          </>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
