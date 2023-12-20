import React from 'react'
import FormAddTodo from './FormAddTodo'

const TodoList = () => {
  return (
    <div className='container bg-gray-800 mt-20 p-8
    rounded-md'>
        <FormAddTodo></FormAddTodo>
    </div>
  )
}

export default TodoList