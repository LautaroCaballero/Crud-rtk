import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
        <div className="flex items-center justify-center h-full">
        <BrowserRouter>
        <Routes>
          <Route path="/" element=<Header />>
            <Route path="/" element=<TasksList /> />
            <Route path="/add" element=<TaskForm /> />
            <Route path="/edit/:id" element=<TaskForm /> />
          </Route>
        </Routes>
      </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
