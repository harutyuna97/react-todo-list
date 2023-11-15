import {createSlice} from "@reduxjs/toolkit";
import {todoList} from "../data-list/todoData";

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoList,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        editTodo: (state, action) => {
            const editingTodoId = action.payload.id
            const editingTodoIndex = state.findIndex(todo => todo.id === editingTodoId)
            state.splice(editingTodoIndex, 1, action.payload)
        },
        deleteTodo: (state, action) => {
            const editingTodoId = action.payload.id
            const editingTodoIndex = state.findIndex(todo => todo.id === editingTodoId)
            state.splice(editingTodoIndex, 1)
        }
    }
})

export const {addTodo, editTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;