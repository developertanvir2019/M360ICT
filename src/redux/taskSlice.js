// redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload });
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, completeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
