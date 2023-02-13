import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="max-w-[80%] h-screen text-white mx-auto">
        <Header />
        <div>
          <Outlet />
        </div>
    </div>
  );
}
