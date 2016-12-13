import { combineReducers } from 'redux'
import * as orderReducer from './order'

export default combineReducers(Object.assign(
  orderReducer
))
