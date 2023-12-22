import { BrowserRouter } from 'react-router-dom'
import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <BrowserRouter>
        <TodoList></TodoList>
      </BrowserRouter>
    </>
  )
}

export default App
