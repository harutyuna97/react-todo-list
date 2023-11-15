import {ITodo} from "../models";

export const todoList: ITodo[] = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem("todoList") || "") : []