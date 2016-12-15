import * as types from '../actions/types'
import * as sampleData from './data'

export function tableOrders (state = [], action) {
  switch (action.type) {
    case types.FETCH_ORDERS:
      return [...state, ...sampleData.TABLE_ORDERS]
    case types.ADD_TABLE:
      return [
        ...state,
        {
          tableNumber: 7
        }
      ]
    case types.ADD_SUB_TABLE:
      return [
        ...state,
        {
          orderNumber: 1,
          tableNumber: action.tableNumber,
          paid: false,
          selected: true
        }
      ]
    default:
     return state
  }
}

export function deliveryOrders (state = [], action) {
  switch (action.type) {
    case types.FETCH_ORDERS:
      return [...state, ...sampleData.DELIVERY_ORDERS]
    default:
     return state
  }
}

export function order(state = {}, action) {
  switch (action.type) {
    case types.SELECT_ORDER:
      return action.order
    default:
      return Object.assign({}, sampleData.ORDER_DEFAULT)
  }
}
