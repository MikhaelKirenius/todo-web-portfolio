import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddList } from "../controllers/listsController";
import useListsModel from "../models/listModels";

// Define the schema without the ID field since it's auto-generated
const listSchema = z.object({
  Activity_Name: z.string().nonempty(),
  Status: z.string().nonempty(),
  Priority: z.string().nonempty(),
  Deadline: z.string().nonempty(),
});

type List = z.infer<typeof listSchema>;

const Form: React.FC = () => {
  const { data: tasks } = useListsModel();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<List>({
    resolver: zodResolver(listSchema),
  });

  const { mutate: addList } = useAddList();

  const onSubmit: SubmitHandler<List> = (formData) => {
    // Find the next ID
    const nextId = tasks ? Math.max(...tasks.map((task: { id: number }) => task.id)) + 1 : 1;

    // Add the task with the new ID
    addList({ ...formData, id: nextId });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 my-2"
    >
      <input
        type="text"
        placeholder="Activities Name"
        className="input input-bordered w-full max-w-xs"
        {...register("Activity_Name")}
      />
      {errors.Activity_Name && <span>{errors.Activity_Name.message}</span>}
      
      <select className="select select-secondary w-full max-w-xs" {...register('Status')}>
        <option value="" disabled selected>Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">On Going</option>
        <option value="Completed">Completed</option>
      </select>
      {errors.Status && <span>{errors.Status.message}</span>}

      <select className="select select-secondary w-full max-w-xs" {...register('Priority')}>
        <option value="" disabled selected>Level</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      {errors.Priority && <span>{errors.Priority.message}</span>}

      <input
        type="date"
        className="input input-bordered w-full max-w-xs"
        {...register("Deadline")}
      />
      {errors.Deadline && <span>{errors.Deadline.message}</span>}

      <button className="btn btn-secondary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
