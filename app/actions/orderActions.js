import * as types from './types'

export function addTable() {
  return {
    type: types.ADD_TABLE
  }
}

export function addSubTable(tableNumber) {
  return {
    type: types.ADD_SUB_TABLE,
    tableNumber
  }
}

export function fetchOrders() {
  return {
    type: types.FETCH_ORDERS
  }
}
export function selectOrder(order) {
  return {
    type: types.SELECT_ORDER,
    order
  }
}
