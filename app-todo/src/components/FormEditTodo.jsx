import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/slice/todo-slice';

const FormEditTodo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault()
        dispatch(editTodo({
            task: value
        }))
      setValue('')  
    } 
   
  return (
    <form onSubmit={handleSubmit} className='mb-4 font-primary w-full'>
        <input type="text" className='outline-none 
        bg-transparent border border-gray-500 p-3 w-[500px] 
         text-white  rounded placeholder:text-gray-300' 
         placeholder='UPDATE' onChange={(e) => setValue(e.target.value)} value={value} />

         <button type='submit' className='bg-gray-600 text-white rounded 
         cursor-pointer p-3 ml-2'>
            Update Todo
         </button>
    </form>
  )
}

export default FormEditTodo