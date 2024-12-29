import React, { useState } from "react";
import StatCard from "../components/StatCard";
import TodoHeader from "../components/TodoHeader";
import useListsModel from "../models/listModels";
import { TodoTask } from "../types/listsTypes";
import TodoTable from "../components/TodoTable";
import Modal from "../components/Modal/ModalTaskForm";
import TaskForm from "../components/form";
import { useAddList } from "../controllers/listsController";
import { TaskFormData } from "../types/listsTypes";

const Homepage: React.FC = () => {
  const { data: tasks, isError, isLoading } = useListsModel();
  const { mutate: addList, isLoading: isAddingTask } = useAddList();

  const getNextId = (tasks: TodoTask[]): number => {
    return tasks.length > 0 
      ? Math.max(...tasks.map(task => task.id)) + 1 
      : 1;
  };
  
  const handleAddTask = async (formData: TaskFormData) => {
    try {
      const nextId = getNextId(safeTasks);
      await addList({ ...formData, id: nextId });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };


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

  const completed = tasks.filter(
    (item: TodoTask) => item.Status === "Completed"
  ).length;
  const inProgress = tasks.filter(
    (item: TodoTask) => item.Status === "In Progress"
  ).length;
  const pending = tasks.filter(
    (item: TodoTask) => item.Status === "Pending"
  ).length;

 

  return (
    <div className="my-5">
      <StatCard
        pendingTasks={pending}
        ongoingTasks={inProgress}
        completedTasks={completed}
      />
      <TodoHeader
        setFilter={setFilter}
        onAddNewTask={() => setIsModalOpen(true)}
        setSearch={setSearch}
      />
      <TodoTable data={filteredTasks} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Task"
        size="md"
      >
        <h2 className="mb-5">Add New Task</h2>
        <TaskForm
          onSubmit={handleAddTask}
          key={isModalOpen ? "open" : "closed"}
        />
      </Modal>
    </div>
  );
};

export default Homepage;
