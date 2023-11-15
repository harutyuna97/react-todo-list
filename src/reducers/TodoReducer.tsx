import {createSlice} from "@reduxjs/toolkit";
import {todoList} from "../data-list/todoData";

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoList,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;