import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../reducers/TodoReducer";
import deletedTodoReducer from "../reducers/DeletedTodoReducer";
import {todoListMiddleware} from "./middlewares/todoListMiddleware";
import {deletedTodoListMiddleware} from "./middlewares/deletedTodoListMiddleware";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        deletedTodos: deletedTodoReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        todoListMiddleware.middleware,
        deletedTodoListMiddleware.middleware
    ]
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch