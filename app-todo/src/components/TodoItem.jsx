import { RiDeleteBin2Fill, RiEditFill } from '@remixicon/react'
import React from 'react'

const TodoItem = ({id, task, isDone}) => {

  return (
    <div className='flex justify-between items-center bg-violet-800
     text-white py-3 px-4 mb-1 rounded-md'>
        <span className='flex justify-center'> 
            <input 
                type="checkbox"
                className=' mr-2'
            />

            {task}

        </span>
        <div className='flex items-center gap-x-4'>
            <RiEditFill 
                className='cursor-pointer'
                size={20}
            />
            <RiDeleteBin2Fill 
                className='cursor-pointer'
                size={20}
            />
        </div>
    </div>
  )
}

export default TodoItem