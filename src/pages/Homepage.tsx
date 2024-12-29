import React, { useState } from "react";

import StatCard from "../components/StatCard";
import TodoHeader from "../components/TodoHeader";
import useListsModel from "../models/listModels";
import { TodoTask } from "../types/listsTypes";
import TodoTable from "../components/TodoTable";
import Modal from "../components/Modal/ModalTaskForm";
import Form from "../components/form";

const Homepage: React.FC = () => {
  const { data: tasks, isError, isLoading } = useListsModel();
  const safeTasks = tasks || [];
  const [filter, setFilter] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  
  const filteredTasks = safeTasks.filter((item: TodoTask) => {
    if (filter === "All") return true;
    return item.Status === filter;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const completed = tasks.filter((item:TodoTask) => item.Status === 'Completed').length;
  const inProgress = tasks.filter((item:TodoTask) => item.Status === 'In Progress').length;
  const pending = tasks.filter((item:TodoTask) => item.Status === 'Pending').length;
  return (
    <div className="my-5">
      <StatCard pendingTasks={pending} ongoingTasks={inProgress} completedTasks={completed} />
      <TodoHeader setFilter={setFilter} onAddNewTask={() => setIsModalOpen(true)} setSearch={setSearch} />
      <TodoTable data={filteredTasks} />
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}> 
        <h2 className="mb-5">Add New Task</h2>
        <Form />
      </Modal>
    </div>
  );
};

export default Homepage;
