import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TaskFormData, FormField  } from '../types/listsTypes';

const taskSchema = z.object({
  Activity_Name: z.string()
    .min(1, 'Activity Name is required')
    .max(100, 'Activity Name must be less than 100 characters'),
  Status: z.enum(['Pending', 'In Progress', 'Completed'] as const),
  Priority: z.enum(['Low', 'Medium', 'High'] as const),
  Deadline: z.string().refine((date) => new Date(date) > new Date(), {
    message: 'Deadline must be in the future',
  }),
});

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  initialData?: Partial<TaskFormData>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: initialData,
  });

  const formFields: FormField[] = [
    {
      name: 'Activity_Name',
      label: 'Activity Name',
      type: 'text',
      placeholder: 'Enter activity name',
    },
    {
      name: 'Status',
      label: 'Status',
      type: 'select',
      options: [
        { value: 'Pending', label: 'Pending' },
        { value: 'In Progress', label: 'In Progress' },
        { value: 'Completed', label: 'Completed' },
      ],
    },
    {
      name: 'Priority',
      label: 'Priority Level',
      type: 'select',
      options: [
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
        { value: 'High', label: 'High' },
      ],
    },
    {
      name: 'Deadline',
      label: 'Deadline',
      type: 'date',
    },
  ];

  const renderField = (field: FormField) => {
    return (
      <Controller
        name={field.name}
        control={control}
        render={({ field: { onChange, value, ref } }) => {
          if (field.type === 'select') {
            return (
              <select
                id={field.name}
                onChange={onChange}
                value={value || ''}
                ref={ref}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            );
          }

          return (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.type === 'text' ? field.placeholder : undefined}
              onChange={onChange}
              value={value || ''}
              ref={ref}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          );
        }}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {formFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}
          </label>
          {renderField(field)}
          {errors[field.name] && (
            <p className="text-sm text-red-600">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default TaskForm;