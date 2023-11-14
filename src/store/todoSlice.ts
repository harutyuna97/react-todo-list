import {createSlice} from "@reduxjs/toolkit";
import {todoList} from "../data-list/todoData";

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoList,
    reducers: {

    }
})

export default todoSlice.reducer;