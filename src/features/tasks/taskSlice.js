import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
// ]

const localData = JSON.parse(localStorage.getItem('task-list'))
// const initialState = 
// if (localData === null){
//   initialState = []
// }else {
//   initialState = localData
// }

let initialState = (localData ? localData : [])

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
        state.push(action.payload)
        
       
        localStorage.setItem('task-list', JSON.stringify(state))
    },
    deleteTask: (state, action) => {
       const taskFoundDelete = state.find((task) => task.id === action.payload)
       if (taskFoundDelete) {
        state.splice(state.indexOf(taskFoundDelete), 1)
        localStorage.setItem('task-list', JSON.stringify(state))
       }
    },
    editTask: (state, action) => {
        const {id, title, description} = action.payload
        const taskFoundEdit = state.find((task) => task.id === id)
        if(taskFoundEdit) {
          taskFoundEdit.title = title
          taskFoundEdit.description = description
          localStorage.setItem('task-list', JSON.stringify(state))
        }
    }
  }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer