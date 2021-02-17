let todoId = 0
export const increment = () => {
  return { type: 'INCREMENT' }
}
export const decrement = () => {
  return { type: 'DECREMENT' }
}

export const addtodo = (text) => {
  return { type: 'ADD_TODO', id: todoId++, text }
}
export const toogletodo = (id) => {
  return { type: 'TOOGLE_TODO', id }
}
