import React from "react";

interface TodoHeaderProps {
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
  onAddNewTask: () => void;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ setFilter,onAddNewTask,setSearch  }) => {

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <div className="my-10 flex flex-row justify-between">
        <h1 className="text-black text-3xl"> To Do Activities</h1>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Search Task"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleSearchChange}
          />
          <select className="select select-secondary w-full mx-2 max-w-xs" onChange={handleFilterChange}>
            <option selected value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">On Going</option>
            <option value="Completed">Completed</option>
          </select>
          <button className="btn btn-active btn-secondary mx-2" onClick={onAddNewTask}>
            Add New Task
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default TodoHeader;
