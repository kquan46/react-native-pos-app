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
  return (dispatch) => {
    dispatch(addDrinkItem(drinkItem, orderNumber))
    dispatch(refreshOrder(orderNumber))
    dispatch(clearDrinkItem())
  }
}

export function findOrderAndAddFoodItem(foodItem, orderNumber) {
  return (dispatch) => {
    dispatch(addFoodItem(foodItem, orderNumber))
    dispatch(refreshOrder(orderNumber))
    dispatch(clearFoodItem())
  }
}

export function findOrderAndAddMealItem(foodItem, orderNumber) {
  return (dispatch) => {
    dispatch(addMealItem(foodItem, orderNumber))
    dispatch(refreshOrder(orderNumber))
    dispatch(clearFoodItem())
  }
}

export function clearAndSelectIngredient(ingredientItem) {
  return (dispatch, getState) => {
    dispatch(clearIngredients())
    dispatch(selectIngredient(ingredientItem))
  }
}

export function refreshOrder(orderNumber) {
  return (dispatch, getState) => {
    const newState = getState().orders
    let index = newState.findIndex((order) => order.orderNumber === orderNumber)
    var currentOrder = newState[index]
    dispatch(selectOrder(currentOrder))
  }
}

export function increaseQuantityAndRefresh(item, orderNumber) {
  return (dispatch) => {
    dispatch(increaseQuantity(item, orderNumber))
    dispatch(refreshOrder(orderNumber))
  }
}

export function decreaseQuantityAndRefresh(item, orderNumber) {
  return (dispatch) => {
    dispatch(decreaseQuantity(item, orderNumber))
    dispatch(refreshOrder(orderNumber))
  }
}

export function deleteItemAndRefresh(item, orderNumber) {
  return (dispatch) => {
    dispatch(deleteItem(item, orderNumber))
    dispatch(refreshOrder(orderNumber))
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

export function deleteItem(item, orderNumber) {
  if (item.type === "regularFood" || item.type === "snacks")
    return {
      type: types.DELETE_ITEM_FOOD,
      item,
      orderNumber
    }
  else if (item.type === "mealDrink" || item.type === "regularDrink")
  return {
    type: types.DELETE_ITEM_DRINK,
    item,
    orderNumber
  }
}

export function increaseQuantity(item, orderNumber) {
  if (item.type === "regularFood" || item.type === "snacks") {
    return {
      type: types.CHANGE_QUANTITY_FOOD,
      item,
      orderNumber,
      quantity: 1
    }
  }
  else if (item.type === "mealDrink" || item.type === "regularDrink") {
    return {
      type: types.CHANGE_QUANTITY_DRINK,
      item,
      orderNumber,
      quantity: 1
    }
  }
}

export function decreaseQuantity(item, orderNumber) {
  if (item.type === "regularFood" || item.type === "snacks") {
    return {
      type: types.CHANGE_QUANTITY_FOOD,
      item,
      orderNumber,
      quantity: -1
    }
  }
  else if (item.type === "mealDrink" || item.type === "regularDrink") {
    return {
      type: types.CHANGE_QUANTITY_DRINK,
      item,
      orderNumber,
      quantity: -1
    }
  }
}
