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

export function findOrderAndAddDrinkItem(drinkItem, orderNumber) {
  return (dispatch, getState) => {
    dispatch(addDrinkItem(drinkItem, orderNumber))
    const newState = getState().orders
    let index = newState.findIndex((order) => order.orderNumber === orderNumber)
    var currentOrder = newState[index]
    dispatch(selectOrder(currentOrder))
    dispatch(clearDrinkItem())
  }
}

export function findOrderAndAddFoodItem(foodItem, orderNumber) {
  return (dispatch, getState) => {
    dispatch(addFoodItem(foodItem, orderNumber))
    const newState = getState().orders
    let index = newState.findIndex((order) => order.orderNumber === orderNumber)
    var currentOrder = newState[index]
    dispatch(selectOrder(currentOrder))
    dispatch(clearFoodItem())
  }
}

export function findOrderAndAddMealItem(foodItem, orderNumber) {
  return (dispatch, getState) => {
    dispatch(addMealItem(foodItem, orderNumber))
    const newState = getState().orders
    let index = newState.findIndex((order) => order.orderNumber === orderNumber)
    var currentOrder = newState[index]
    dispatch(selectOrder(currentOrder))
    dispatch(clearFoodItem())
  }
}

export function clearAndSelectIngredient(ingredientItem) {
  return (dispatch, getState) => {
    dispatch(clearIngredients())
    dispatch(selectIngredient(ingredientItem))
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

export function changeOrderStatus(orderNumber, orderStatus) {
  return {
    type: types.CHANGE_ORDER_STATUS,
    orderNumber,
    orderStatus
  }
}

export function clearOrder(orderNumber) {
  return {
    type: types.CLEAR_ORDER,
    orderNumber
  }
}

export function selectDrink(drinkItem) {
  return {
    type: types.SELECT_DRINK,
    drinkItem
  }
}

export function addDrinkItem(drinkItem, orderNumber) {
  return{
    type: types.ADD_ITEM_DRINK,
    drinkItem,
    orderNumber
  }
}

export function clearDrinkItem() {
  return {
    type: types.CLEAR_ITEM_DRINK
  }
}

export function clearDrink() {
  return {
    type: types.CLEAR_DRINK
  }
}

export function selectBase(baseItem) {
  return {
    type: types.SELECT_BASE,
    baseItem
  }
}

export function clearBaseItem() {
  return {
    type: types.CLEAR_ITEM_BASE
  }
}

export function selectIngredient(ingredientItem) {
  return {
    type: types.SELECT_INGREDIENT,
    ingredientItem
  }
}

export function deSelectIngredient(ingredientItem) {
  return {
    type: types.DESELECT_INGREDIENT,
    ingredientItem
  }
}

export function clearIngredients() {
  return {
    type: types.CLEAR_ITEM_INGREDIENTS
  }
}

export function addFoodItem(foodItem, orderNumber) {
  return{
    type: types.ADD_ITEM_FOOD,
    foodItem,
    orderNumber
  }
}

export function clearFoodItem() {
  return {
    type: types.CLEAR_ITEM_FOOD
  }
}

export function addMealItem(foodItem, orderNumber) {
  return {
    type: types.ADD_ITEM_MEAL,
    foodItem,
    orderNumber
  }
}
