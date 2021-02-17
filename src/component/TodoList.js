// @flow
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addtodo, toogletodo } from '../actions'

export const TodoList = () => {
  const todoItem = useSelector((state) => state.todoItem) || []
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const List = todoItem.map((item) => {
    return (
      <li
        style={
          item.completed
            ? { color: 'blue', textDecoration: 'line-through' }
            : { color: 'red' }
        }
        onClick={() => dispatch(toogletodo(item.id))}
        key={item.id}
      >
        {item.text}
      </li>
    )
  })
  return (
    <div>
      Todo:{' '}
      <input
        value={input}
        placeholder="add todo"
        onInput={(e) => setInput(e.target.value)}
      />
      <Button onClick={() => dispatch(addtodo(input))}>Add</Button>
      <ul>{List}</ul>
    </div>
  )
}
