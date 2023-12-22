import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import FormEditTodo from './FormEditTodo'

const CompleteTodo = () => {
    const completeTodos = useSelector((state) => 
    state.todo.todos.filter((todo) => todo.isDone === true))

  return (
    <>
    <ul>
        {
            completeTodos.map((todo) => (
                todo.isEdit ? (
                    <FormEditTodo key={todo.id}></FormEditTodo> 
                ) : (

                    <TodoItem key={todo.id} id={todo.id} task={todo.task} isDone={todo.isDone} isEdit={todo.isEdit}></TodoItem>
                )
            ))
        }
    </ul>
    </>    
  )
}

export default CompleteTodo