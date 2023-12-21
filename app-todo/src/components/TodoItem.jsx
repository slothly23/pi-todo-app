import { RiDeleteBin2Fill, RiEditFill } from '@remixicon/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, setIsDone } from '../redux/slice/todo-slice';

const TodoItem = ({id, task, isDone}) => {

    const dispatch = useDispatch();

    const handleCheckbox = () => {
        dispatch(setIsDone({id: id, isDone: !isDone}))
    }
   
    const handleDeleteTodo = () => {
        dispatch(deleteTodo({id: id}))
    }

  return (
    <div className={` bg-violet-800  text-white ${isDone && 'bg-violet-900 text-gray-300 line-through'}`}>
        <div className='flex justify-between items-center 
        py-3 px-4 mb-1 rounded-md'>
            <span className='flex justify-center'> 
                <input 
                    type="checkbox"
                    className=' mr-2'
                    checked={isDone}  
                    onChange={(e) => handleCheckbox(e.target.checked)} 
                />

                {task}

            </span>
            <div className={`flex items-center gap-x-4 ${isDone && 'hidden'}`}>
                <RiEditFill 
                    className='cursor-pointer'
                    size={20}
                />
                <RiDeleteBin2Fill onClick={() => handleDeleteTodo(id)}
                    className='cursor-pointer'
                    size={20}
                />
            </div>
        </div>
    </div>
  )
}

export default TodoItem