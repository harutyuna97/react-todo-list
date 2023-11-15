import {ITodo} from "../models";

export const todoList: ITodo[] = [
    {
        id: '1',
        title: 'Test',
        description: 'Description test',
        deadline: new Date().toString(),
        status: 'ACTIVE'
    }
]