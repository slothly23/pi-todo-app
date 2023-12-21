import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todo-slice';

const FormAddTodo = () => {
    const [value, setValue] = useState();

    const dispatch = useDispatch();
    const onSubmit = (e) => {
      e.preventDefault();
        dispatch(addTodo({
            task: value
        }))
    } 
   
  return (
    <form onSubmit={onSubmit} className='mb-4 font-primary w-full'>
        <input type="text" className='outline-none 
        bg-transparent border border-gray-500 p-3 w-[300px] 
         text-white mb-6 rounded placeholder:text-gray-300' 
         placeholder='New Todo...' value={value} onChange={(e) => setValue(e.target.value)}/>

         <button type='submit' className='bg-gray-700 text-white rounded 
         cursor-pointer p-3 ml-2'>
            Add Todo
         </button>
    </form>
  )
}

export default FormAddTodo