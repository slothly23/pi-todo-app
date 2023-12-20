const { createSlice } = require("@reduxjs/toolkit");

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
                task: action.inputTodo,
                isDone: false,
              };
              state.todos = [newTodo, ...state];
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;