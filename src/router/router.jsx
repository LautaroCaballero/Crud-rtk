import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import Routes from "../models/routes.models";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: Routes.HOME, element: <TasksList /> },
      { path: Routes.ADD, element: <TaskForm /> },
      { path: Routes.EDIT, element: <TaskForm />}
    ],
  },
]);

export default router;