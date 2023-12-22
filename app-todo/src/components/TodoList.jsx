import React, { useState } from 'react'
import FormAddTodo from './FormAddTodo'
import CompleteTodo from './CompleteTodo';
import ActiveTodo from './ActiveTodo';
import AllTodo from './AllTodo';
import { Link, Route, Routes } from 'react-router-dom';

const TodoList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='container bg-gray-800 mt-20 p-8
    rounded-md'>
        <FormAddTodo></FormAddTodo>

        <div>
            <div className='flex gap-2 mb-6'>
                <Link className={activeIndex === 0 ? "px-4 py-2  text-base rounded-full text-green-600  bg-green-200" : "px-4 py-2  text-base rounded-full text-white bg-none"}
                    onClick={() => setActiveIndex(0)} to="/">All</Link>
                <Link className={activeIndex === 1 ? "px-4 py-2  text-base rounded-full text-green-600  bg-green-200" : "px-4 py-2  text-base rounded-full text-white bg-none"}
                    onClick={() => setActiveIndex(1)}  to="/active">Active</Link>
                <Link className={activeIndex === 2 ? "px-4 py-2  text-base rounded-full text-green-600  bg-green-200" : "px-4 py-2  text-base rounded-full text-white bg-none"}
                    onClick={() => setActiveIndex(2)} to="/complete">Complete</Link>
            </div>
            <Routes>
                <Route path="/" element={<AllTodo />}></Route>
                <Route path="/active" element={<ActiveTodo />}></Route>
                <Route path="/complete" element={<CompleteTodo />}></Route>
            </Routes>
        </div>
       
    </div>
  )
}

export default TodoList
