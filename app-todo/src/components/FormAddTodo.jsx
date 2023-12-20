import React from 'react'

const FormAddTodo = () => {
  return (
    <form className='mb-4 font-primary w-full'>
        <input type="text" className='outline-none 
        bg-transparent border border-gray-500 p-3 w-[300px] 
         text-white mb-8 rounded placeholder:text-gray-300' 
         placeholder='New Todo...'/>

         <button className='bg-gray-700 text-white rounded 
         cursor-pointer p-3 ml-2'>
            Add Todo
         </button>
    </form>
  )
}

export default FormAddTodo