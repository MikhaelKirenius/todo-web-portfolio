import React from "react";
import { TodoTask } from "../types/listsTypes";
import { useDeleteList,
 } from "../controllers/listsController";

interface tasks{
    taksTodo: TodoTask
}

const TodoTableBody: React.FC <tasks>= ({ taksTodo }) => {
    const { mutate: deleteList } = useDeleteList();
    const onDelete = () => {
        deleteList(taksTodo.id);
    }
    return (
            <tr key={taksTodo.id}>
                <td>{taksTodo.Activity_Name}</td>
                <td>{taksTodo.Deadline}</td>
                <td>{taksTodo.Priority}</td>
                <td>{taksTodo.Status}</td>
                <td className="flex flex-row justify-around">
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button className="btn btn-sm btn-error" onClick={onDelete}>Delete</button>
                </td>
            </tr>
    );
    };

export default TodoTableBody;