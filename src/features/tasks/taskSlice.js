import { createSlice } from "@reduxjs/toolkit";
import { setLsitem } from "../../utilities/ls-setItem";

const localData = JSON.parse(localStorage.getItem("task-list"));
let initialState = localData ? localData : [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      setLsitem(state);
    },
    deleteTask: (state, action) => {
      const taskFoundDelete = state.find((task) => task.id === action.payload);
      if (taskFoundDelete) {
        state.splice(state.indexOf(taskFoundDelete), 1);
        setLsitem(state);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFoundEdit = state.find((task) => task.id === id);
      if (taskFoundEdit) {
        taskFoundEdit.title = title;
        taskFoundEdit.description = description;
        setLsitem(state);
      }
    },
    completeTask: (state, action) => {
      const { id, isCompleted } = action.payload;
      const taskFoundComplete = state.find((task) => task.id === id);
      if (taskFoundComplete) {
        taskFoundComplete.isCompleted = !isCompleted
        setLsitem(state);
      }
    },
  },
});

export const { addTask, deleteTask, editTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
