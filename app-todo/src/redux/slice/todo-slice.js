import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            {id: 1, task: "belajar react", isDone: false, isEdit: false},
            {id: 2, task: "mandi", isDone: true, isEdit: false},
            {id: 3, task: "makan", isDone: false, isEdit: false},
        ],
        
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: new Date().getTime(),
                task: action.payload.task,
                isDone: false,
                isEdit: false,
              };
              state.todos = [newTodo, ...state.todos];
        },
        setIsDone(state, action) {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state.todos[index].isDone = action.payload.isDone;
        },
        deleteTodo(state, action) {
            const todoId = action.payload.id;
            // console.log(todoId);
            state.todos = state.todos.filter((todo) => 
            todo.id !== todoId)  
        },
        editTodo(state, action) {
            const todoId = action.payload.id;
            // console.log(action.payload.task);
            console.log(action.payload.task);
            console.log(todoId);
            console.log('dari edit');
            state.todos = state.todos.map(
                (todo) => todo.id === todoId ? {...todo, isEdit:!todo.isEdit, task: action.payload.task} : todo
            )
            console.log(state.todos);
        },
    //     editTodo(state, action) {
    //         const todoTask = action.payload.task
    //         console.log(todoTask);
    //         state.todos = [{...state.todos, task: state.todos[todoTask]}]
    //     }
    },
});

export const { 
    addTodo,
    setIsDone,
    deleteTodo,
    editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;