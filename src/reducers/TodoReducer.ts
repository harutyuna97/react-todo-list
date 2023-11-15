import {createSlice, Slice} from "@reduxjs/toolkit";
import {todoList} from "../data-list/todoData";
import {ITodo} from "../models";

const todoSlice: Slice = createSlice({
    name: 'todos',
    initialState: todoList,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        editTodo: (state, action) => {
            const editingTodoId = action.payload.id
            const editingTodoIndex = state.findIndex((todo: ITodo) => todo.id === editingTodoId)
            state.splice(editingTodoIndex, 1, action.payload)
        },
        deleteTodo: (state, action) => {
            const editingTodoId = action.payload.id
            const editingTodoIndex = state.findIndex((todo: ITodo) => todo.id === editingTodoId)
            state.splice(editingTodoIndex, 1)
        },
        changeStatus: (state, action) => {
            const editingTodoId = action.payload.todo.id
            const editingTodoIndex = state.findIndex((todo: ITodo) => todo.id === editingTodoId)
            action.payload.todo = {...action.payload.todo, status: action.payload.status}
            state.splice(editingTodoIndex, 1, action.payload.todo)
        }
    }
})

export const {addTodo, editTodo, deleteTodo, changeStatus} = todoSlice.actions;
export default todoSlice.reducer;