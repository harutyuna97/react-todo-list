import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../reducers/TodoReducer";
import deletedTodoReducer from "../reducers/DeletedTodoReducer";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        deletedTodos: deletedTodoReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch