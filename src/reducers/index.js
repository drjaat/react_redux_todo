import { combineReducers } from 'redux'

import counter from './counter'
import todoItem from './todoItem'

export default combineReducers({
  counter,
  todoItem,
})
