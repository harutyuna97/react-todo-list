import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import {deleteTodo} from "../../reducers/TodoReducer";

export const deletedTodoListMiddleware = createListenerMiddleware();
deletedTodoListMiddleware.startListening({
    matcher: isAnyOf(deleteTodo),
    effect: (action, listenerApi) =>
        localStorage.setItem(
            "deletedTodoList",
            JSON.stringify((listenerApi.getState() as RootState).deletedTodos)
        )
});
