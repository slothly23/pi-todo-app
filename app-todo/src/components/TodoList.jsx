import React from 'react'
import FormAddTodo from './FormAddTodo'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
    const {todos} = useSelector((state) => state.todo);
    
    console.log(todos);
  return (
    <div className='container bg-gray-800 mt-20 p-8
    rounded-md'>
        <FormAddTodo></FormAddTodo>
        <ul>
            {
                todos.map((todo, key) => (
                    <TodoItem key={todo.id} id={todo.id} task={todo.task} isDone={todo.isDone}></TodoItem>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList