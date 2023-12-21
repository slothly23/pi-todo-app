import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {id: 1, task: "belajar react", isDone: false},
            {id: 2, task: "mandi", isDone: true},
            {id: 3, task: "makan", isDone: false},
        ],
        
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: new Date().getTime(),
                task: action.payload.task,
                isDone: false,
              };
              state.todos = [newTodo, ...state.todos];
        },
        setIsDone(state, action) {
            console.log(action.payload, state.todos);
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state.todos[index].isDone = action.payload.isDone;
            
        },
    },
});

export const { 
    addTodo,
    setIsDone,
} = todoSlice.actions;

export default todoSlice.reducer;