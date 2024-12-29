export interface TodoTask {
    id: number;
    Activity_Name: string;
    Status: string;
    Priority: string;
    Deadline: string;
}

export interface TodoHeaderProps {
    setFilter: (filter: string) => void;
    setSearch: (search: string) => void;
    onAddNewTask: () => void;
  }
  
  export interface TodoTableProps {
    data: TodoTask[];
  }
  
  export interface TodoTableBodyProps {
    taksTodo: TodoTask;
    onDelete: (id: string | number) => void;
  }
  
  export interface AlertProps {
    children: React.ReactNode;
    type?: 'info' | 'success' | 'warning' | 'error';
  }

  export interface StatCardProps {
    pendingTasks: number;
    ongoingTasks: number;
    completedTasks: number;
  }