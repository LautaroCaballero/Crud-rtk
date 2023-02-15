import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useTheme from "../Hooks/cutomThemeHook";
import { Link, Outlet, useLocation } from "react-router-dom";
import  {BsLightbulbOffFill, BsLightbulb} from "react-icons/bs"

export default function Header() {
  const { changeDocumentTheme, theme, handleThemeButton } = useTheme();
  const tasks = useSelector((state) => state.tasks);
  const {pathname} = useLocation()

  useEffect(() => {
    changeDocumentTheme();
  }, [theme]);

  return (
    <div >
    <div className="relative">
    <button onClick={() => handleThemeButton()} className="absolute top-2 -right-4 ">{theme==='dark' ? <BsLightbulb className="w-[24px] h-[27px]" /> : <BsLightbulbOffFill className="w-[24px] h-[27px]" />}</button>
    </div>
      <div className="flex justify-around pt-4">
        <h1 className="font-bold">You have {tasks.length} tasks!</h1>
        {pathname !== '/' ? null : <Link
          to="/add"
          className="bg-gray-600 text-white font-bold dark:bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Add task
        </Link>}
      </div>
    </div>
  );
}
