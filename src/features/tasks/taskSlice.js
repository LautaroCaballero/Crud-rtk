import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    title: 'task 1',
    description: 'Task 1 description',
    completed: false
  },
  {
    id: '2',
    title: 'task 2',
    description: 'Task 2 description',
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
        state.push(action.payload)
    },
    deleteTask: (state, action) => {
       const taskFoundDelete = state.find((task) => task.id === action.payload)
       if (taskFoundDelete) {
        state.splice(state.indexOf(taskFoundDelete), 1)
       }
    },
    editTask: (state, action) => {
        const {id, title, description} = action.payload
        const taskFoundEdit = state.find((task) => task.id === id)
        if(taskFoundEdit) {
          taskFoundEdit.title = title
          taskFoundEdit.description = description
        }
    }
  }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer