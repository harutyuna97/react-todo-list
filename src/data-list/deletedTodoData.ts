import {ITodo} from "../models";

export const deletedTodoList: ITodo[]  = localStorage.getItem('deletedTodoList') ? JSON.parse(localStorage.getItem("deletedTodoList") || "") : []