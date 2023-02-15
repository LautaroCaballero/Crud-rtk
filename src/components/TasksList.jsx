import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

const TasksList = () => {
  const stateTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="pt-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stateTasks.map((task) => (
          <div key={task.id} className="bg-gray-100 drop-shadow-lg dark:bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3 className="font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit/${task.id}`} className="bg-gray-400 font-bold drop-shadow-md dark:bg-zinc-600 px-2 py-1 text-xs rounded-md ">Edit</Link>
                <button onClick={() => handleDelete(task.id)} className="bg-red-500 font-bold drop-shadow-md px-2 py-1 text-xs rounded-md">Delete</button>
                
              </div>
            </header>
            <div className="break-words overflow-hidden h-6 hover:h-auto"><p>{task.description}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
