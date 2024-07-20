import React from "react";
import { TodoTask } from "../types/listsTypes";

interface tasks{
    taksTodo: TodoTask
}

const TodoTableBody: React.FC <tasks>= ({ taksTodo }) => {
    return (
            <tr key={taksTodo.id}>
                <td>{taksTodo.Activity_Name}</td>
                <td>{taksTodo.Deadline}</td>
                <td>{taksTodo.Priority}</td>
                <td>{taksTodo.Status}</td>
            </tr>
    );
    };

export default TodoTableBody;