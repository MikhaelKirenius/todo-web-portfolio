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

export type TaskStatus = 'Pending' | 'In Progress' | 'Completed';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export type TaskFormData = Omit<TodoTask, 'id'>;

export type FormFieldType = 'text' | 'select' | 'date';

export interface BaseFormField {
  name: keyof TaskFormData;
  label: string;
  type: FormFieldType;
}

export interface InputFormField extends BaseFormField {
  type: 'text' | 'date';
  placeholder?: string;
}

export interface SelectFormField extends BaseFormField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
}

export type FormField = InputFormField | SelectFormField;