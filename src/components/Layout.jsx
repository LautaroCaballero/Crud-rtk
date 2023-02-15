import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useTheme from "../Hooks/cutomThemeHook";
import Header from "./Header";


export default function Layout() {
  const { changeDocumentTheme, theme, handleThemeButton } = useTheme();

  useEffect(() => {
    changeDocumentTheme();
  }, [theme]);

  return (
    <div className="bg-gray-200 dark:bg-zinc-900">
      <div className="max-w-[80%] h-screen text-black dark:text-white mx-auto">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
