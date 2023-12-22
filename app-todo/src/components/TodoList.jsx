import React from 'react'
import FormAddTodo from './FormAddTodo'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import FormEditTodo from './FormEditTodo';
import { editTodo } from '../redux/slice/todo-slice';
import CompleteTodo from './CompleteTodo';
import ActiveTodo from './ActiveTodo';

const TodoList = () => {
    const {todos} = useSelector((state) => state.todo);

    const dispatch = useDispatch();
    
    // const editTask = (task, id) => {
    //     dispatch(editTodo(
    //         {
    //             task: task,
    //             id: id,
    //         }
    //     ))
    // }

    console.log(todos);
  return (
    <div className='container bg-gray-800 mt-20 p-8
    rounded-md'>
        <FormAddTodo></FormAddTodo>
        <ul>
            {
                todos.map((todo, key) => (
                    todo.isEdit ? (
                        <FormEditTodo></FormEditTodo> 
                    ) : (

                        <TodoItem key={todo.id} id={todo.id} task={todo.task} isDone={todo.isDone} isEdit={todo.isEdit}></TodoItem>
                    )
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList
