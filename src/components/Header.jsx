import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1>You have {tasks.length} tasks!</h1>
        <Link
          to="/add"
          className="bg-indigo-600 hover:bg-indigo-500 px-2 py-1 rounded-sm text-sm"
        >
          Add task
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
