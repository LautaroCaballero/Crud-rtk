import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask, completeTask } from "../features/tasks/taskSlice";
import { FcCheckmark, FcMinus } from "react-icons/fc";

const TasksList = () => {
  const stateTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleCompleted = (task) => {
    dispatch(completeTask(task));
  };

  return (
    <div className="pt-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stateTasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-100 drop-shadow-lg dark:bg-neutral-800 p-4 rounded-md"
          >
            <header className="flex justify-between">
              <h3
                className={`font-bold ${
                  task.isCompleted ? "line-through text-gray-500" : null
                }`}
              >
                {task.title}
              </h3>
              <div className="flex gap-x-2">
                {task.isCompleted ? (
                  <button
                    disabled
                    className="bg-gray-300 font-bold drop-shadow-md dark:bg-zinc-400 px-2 py-1 text-xs rounded-md "
                  >
                    Edit
                  </button>
                ) : (
                  <Link
                    to={`/edit/${task.id}`}
                    className="bg-gray-400 font-bold drop-shadow-md dark:bg-zinc-600 px-2 py-1 text-xs rounded-md "
                  >
                    Edit
                  </Link>
                )}

                {task.isCompleted ? (
                  <button
                    onClick={() => handleDelete(task.id)}
                    disabled
                    className="bg-red-300 font-bold drop-shadow-md px-2 py-1 text-xs rounded-md"
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 font-bold drop-shadow-md px-2 py-1 text-xs rounded-md"
                  >
                    Delete
                  </button>
                )}

                {task.isCompleted == false ? (
                  <FcCheckmark onClick={() => handleCompleted(task)} />
                ) : (
                  <FcMinus onClick={() => handleCompleted(task)} />
                )}
              </div>
            </header>
            <div
              className={`break-words overflow-hidden h-6 hover:h-auto ${
                task.isCompleted ? "line-through text-gray-500" : null
              }`}
            >
              <p>{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
