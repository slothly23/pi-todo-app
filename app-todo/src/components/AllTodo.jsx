import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import FormEditTodo from './FormEditTodo';


const AllTodo = () => {
    const {todos} = useSelector((state) => state.todo);
    
  return (
    <div>
        <ul>
            {
                todos.map((todo) => (
                    todo.isEdit ? (
                        <FormEditTodo key={todo.id}></FormEditTodo> 
                    ) : (

                        <TodoItem key={todo.id} id={todo.id} task={todo.task} isDone={todo.isDone} isEdit={todo.isEdit}></TodoItem>
                    )
                ))
            }
        </ul>
    </div>
  )
}

export default AllTodo