import { createSlice } from "@reduxjs/toolkit";

interface TaskState{
    showWindowNewTask: boolean
}

const initialState:TaskState = {
    showWindowNewTask: false
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers : {
        toogleWindowNewTask : (state) => {
            state.showWindowNewTask = !state.showWindowNewTask;
        }
    }
});

export const {toogleWindowNewTask} = taskSlice.actions;

export default taskSlice.reducer;