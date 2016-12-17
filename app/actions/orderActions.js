import * as types from './types'

export function addTable() {
  return {
    type: types.ADD_TABLE
  }
}

export function createAndSelectTableOrder(tableNumber, tableSubNumber) {
  return (dispatch, getState) => {
    dispatch(newTableOrder(tableNumber, tableSubNumber))
    const newState = getState().orders
    var createdOrder = newState[newState.length-1]
    if (createdOrder.orderType !== "table" || createdOrder.tableInfo.tableNumber !== tableNumber || createdOrder.tableInfo.tableSubNumber !== tableSubNumber) {
      let index = newState.findIndex((order) => (order.orderType === "table" && tableNumber === order.tableInfo.tableNumber  && tableSubNumber === order.tableInfo.tableSubNumber))
      createdOrder = newState[index]
    }
    dispatch(selectOrder(createdOrder))
  }
}

export function createAndSelectDeliveryOrder(deliveryAddress, deliveryPhoneNumber) {
  return (dispatch, getState) => {
    dispatch(newDeliveryOrder(deliveryAddress, deliveryPhoneNumber))
    const newState = getState().orders
    var createdOrder = newState[newState.length-1]
    if (createdOrder.orderType !== "delivery" || createdOrder.deliveryInfo.deliveryAddress !== deliveryAddress || createdOrder.deliveryInfo.deliveryPhoneNumber !== deliveryPhoneNumber) {
      let index = newState.findIndex((order) => (order.orderType === "delivery" && deliveryAddress === order.deliveryInfo.deliveryAddress  && deliveryPhoneNumber === order.deliveryInfo.deliveryPhoneNumber))
      createdOrder = newState[index]
    }
    dispatch(selectOrder(createdOrder))
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
    type: types.CHANGE_ORDER_STATUS,
    orderNumber,
    orderStatus: "paid"
  }
}

export function cancelOrder(orderNumber) {
  return {
    type: types.CHANGE_ORDER_STATUS,
    orderNumber,
    orderStatus: "cancelled"
  }
}
