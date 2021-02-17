import './App.css'
import { increment, decrement } from './actions'

import { useSelector, useDispatch } from 'react-redux'
import { TodoList } from './component/TodoList'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      Counter: {counter}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <TodoList></TodoList>
    </div>
  )
}

export default App
