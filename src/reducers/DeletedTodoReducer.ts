import {createSlice, Slice} from "@reduxjs/toolkit";
import {deletedTodoList} from "../data-list/deletedTodoData";

const deletedTodoSlice: Slice = createSlice({
    name: 'deletedTodos',
    initialState: deletedTodoList,
    reducers: {
        addDeletedTodo: (state, action) => {
            action.payload = {...action.payload, status: 'REMOVED', id: state.length ? state[state.length - 1].id + 1 : 1}
            state.push(action.payload)
        },
    }
})

export const {addDeletedTodo} = deletedTodoSlice.actions;
export default deletedTodoSlice.reducer;