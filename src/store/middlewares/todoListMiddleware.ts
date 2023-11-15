import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import {addTodo, changeStatus, deleteTodo, editTodo} from "../../reducers/TodoReducer";

export const todoListMiddleware = createListenerMiddleware();
todoListMiddleware.startListening({
    matcher: isAnyOf(addTodo, editTodo, deleteTodo, changeStatus),
    effect: (action, listenerApi) =>
        localStorage.setItem(
            "todoList",
            JSON.stringify((listenerApi.getState() as RootState).todos)
        )
});
