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
    <div className="pt-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stateTasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
                <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md">Delete</button>
                
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
