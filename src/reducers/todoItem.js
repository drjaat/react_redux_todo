const createTodo = (id, text, completed) => ({
  id,
  text,
  completed,
})

const toggleTodo = (state, id) => {
  console.log(
    state.map((t) => (t.id !== id ? t : { ...t, completed: !t.completed }))
  )
  return state.map((t) => (t.id !== id ? t : { ...t, completed: !t.completed }))
}

const todoItem = (todo = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todo, createTodo(action.id, action.text, false)]
    case 'TOOGLE_TODO':
      return toggleTodo(todo, action.id)
    default:
      return todo
  }
}

export default todoItem
