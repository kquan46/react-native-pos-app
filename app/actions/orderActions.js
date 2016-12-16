import * as types from './types'

export function addTable() {
  return {
    type: types.ADD_TABLE
  }
}

export function newTableOrder(tableNumber, tableSubNumber) {
  return {
    type: types.NEW_TABLE_ORDER,
    tableNumber,
    tableSubNumber
  }
}

export function newDeliveryOrder(deliveryAddress, deliveryPhoneNumber) {
  return {
    type: types.NEW_DELIVERY_ORDER,
    deliveryAddress,
    deliveryPhoneNumber
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

export function payOrder(orderNumber) {
  return {
    type: types.PAY_ORDER,
    orderNumber
  }
}
