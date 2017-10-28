import * as types from './types'

export function addTable() {
  return {
    type: types.ADD_TABLE
  }
}

export function createAndSelectTableOrderLocal(tableNumber, tableSubNumber) {
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

export function createAndSelectTableOrder(tableNumber, tableSubNumber) {
  return (dispatch, getState) => {
    const orderNumber = getOrderNumber(getState().orders.length)
    fetch('https://nhatranghk.site/orderActions.php?function=newNTOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        orderType: "table",
        numOfItems: 0,
        totalPrice: 0,
        orderStatus: "notPaid",
        date: getDate(),
        startTime: getTime(),
        tableNumber: tableNumber,
        tableSubNumber: tableSubNumber,
        numOfPeople: 4,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch(refreshOrders(responseJson))
        var createdOrder = responseJson.filter(i => i.orderNumber === orderNumber)
        console.log(createdOrder[0])
        dispatch(selectOrder(createdOrder[0]))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function createAndSelectDeliveryOrder(deliveryAddress, deliveryPhoneNumber) {
  return (dispatch, getState) => {
    const orderNumber = getOrderNumber(getState().orders.length)
    fetch('https://nhatranghk.site/orderActions.php?function=newNTOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        orderType: "delivery",
        numOfItems: 0,
        totalPrice: 0,
        orderStatus: "notPaid",
        date: getDate(),
        startTime: getTime(),
        deliveryAddress: deliveryAddress,
        deliveryPhoneNumber: deliveryPhoneNumber,
        notes: "",
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(refreshOrders(responseJson))
        var createdOrder = responseJson.filter(i => i.orderNumber === orderNumber)
        dispatch(selectOrder(createdOrder[0]))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function createAndSelectDeliveryOrderLocal(deliveryAddress, deliveryPhoneNumber) {
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

export function findOrderAndAddDrinkItemLocal(drinkItem, orderNumber) {
  return (dispatch) => {

    dispatch(addDrinkItem(drinkItem, orderNumber))
    dispatch(refreshOrder(orderNumber))
    dispatch(clearDrinkItem())
  }
}

export function findOrderAndAddDrinkItem(drinkItem, orderNumber) {
  return (dispatch, getState) => {
    var currentOrder = getState().orders.filter(i => i.orderNumber === orderNumber)
    var newNumOfItems = currentOrder[0].orderInfo.numOfItems + drinkItem.quantity
    var newTotalPrice = currentOrder[0].orderInfo.totalPrice + drinkItem.drink.price
    fetch('https://nhatranghk.site/orderActions.php?function=addDrinkItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        numOfItems: newNumOfItems,
        totalPrice: newTotalPrice,
        name: drinkItem.drink.name,
        customization: "",
        shortName: drinkItem.drink.shortName,
        menuName: drinkItem.drink.menuName,
        type: drinkItem.drink.type,
        quantity: drinkItem.quantity,
        price: drinkItem.drink.price,
        orderTime: getTime(),
        payStatus: "notPaid",
        cold: drinkItem.drink.cold,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch(refreshOrders(responseJson))
        var createdOrder = responseJson.filter(i => i.orderNumber === orderNumber)
        dispatch(selectOrder(createdOrder[0]))
        dispatch(clearDrinkItem())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function findOrderAndAddFoodItemLocal(foodItem, orderNumber) {
  return (dispatch) => {
    dispatch(addFoodItem(foodItem, orderNumber))
    dispatch(refreshOrder(orderNumber))
    dispatch(clearFoodItem())
  }
}

export function findOrderAndAddFoodItem(foodItem, orderNumber) {
  return (dispatch, getState) => {
    var currentOrder = getState().orders.filter(i => i.orderNumber === orderNumber)
    var newNumOfItems = currentOrder[0].orderInfo.numOfItems + foodItem.quantity
    var newTotalPrice = currentOrder[0].orderInfo.totalPrice + foodItem.ingredients[0].price
    fetch('https://nhatranghk.site/orderActions.php?function=addFoodItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        numOfItems: newNumOfItems,
        totalPrice: newTotalPrice,
        name: foodItem.ingredients[0].name,
        customization: "",
        shortName: foodItem.ingredients[0].shortName,
        menuName: foodItem.ingredients[0].menuName,
        type: foodItem.ingredients[0].type,
        quantity: foodItem.quantity,
        price: foodItem.ingredients[0].price,
        orderTime: getTime(),
        payStatus: "notPaid",
        base: foodItem.base,
        ingredient1: foodItem.ingredients[0].name,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch(refreshOrders(responseJson))
        var createdOrder = responseJson.filter(i => i.orderNumber === orderNumber)
        dispatch(selectOrder(createdOrder[0]))
        dispatch(clearFoodItem())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function findOrderAndAddMealItem(foodItem, orderNumber) {
  return (dispatch, getState) => {
    var currentOrder = getState().orders.filter(i => i.orderNumber === orderNumber)
    let mealName = ""
    let mealShortName = ""
    let mealMenuName = ""
    let mealPrice = 0
    foodItem.ingredients.map(function(i) {
      mealName += i.name
      mealShortName += i.shortName
      mealMenuName += i.menuName
      mealPrice += i.price
    })
    mealName += foodItem.base.name
    mealShortName += foodItem.base.shortName
    mealMenuName += foodItem.base.menuName
    mealPrice += foodItem.base.price
    var newNumOfItems = currentOrder[0].orderInfo.numOfItems + foodItem.quantity
    var newTotalPrice = currentOrder[0].orderInfo.totalPrice + mealPrice
    fetch('https://nhatranghk.site/orderActions.php?function=addMealItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        numOfItems: newNumOfItems,
        totalPrice: newTotalPrice,
        name: mealName,
        customization: "",
        shortName: mealShortName,
        menuName: mealMenuName,
        type: "meal",
        quantity: foodItem.quantity,
        price: mealPrice,
        orderTime: getTime(),
        payStatus: "notPaid",
        base: foodItem.base.name,
        ingredient1: foodItem.ingredients[0].name,
        ingredient2: foodItem.ingredients[1] ? foodItem.ingredients[1].name : "",
        ingredient3: foodItem.ingredients[2] ? foodItem.ingredients[2].name : "",
        ingredient4: foodItem.ingredients[3] ? foodItem.ingredients[3].name : "",
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch(refreshOrders(responseJson))
        var createdOrder = responseJson.filter(i => i.orderNumber === orderNumber)
        dispatch(selectOrder(createdOrder[0]))
        dispatch(clearFoodItem())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function findOrderAndAddMealAndDrinkItem(foodItem, drinkItem, orderNumber) {
  return (dispatch, getState) => {
    var currentOrder = getState().orders.filter(i => i.orderNumber === orderNumber)
    let mealName = ""
    let mealShortName = ""
    let mealMenuName = ""
    let mealPrice = 0
    foodItem.ingredients.map(function(i) {
      mealName += i.name
      mealShortName += i.shortName
      mealMenuName += i.menuName
      mealPrice += i.price
    })
    mealName += foodItem.base.name
    mealShortName += foodItem.base.shortName
    mealMenuName += foodItem.base.menuName
    mealPrice += foodItem.base.price
    var newNumOfItems = currentOrder[0].orderInfo.numOfItems + foodItem.quantity + drinkItem.quantity
    var newTotalPrice = currentOrder[0].orderInfo.totalPrice + mealPrice + drinkItem.drink.price
    fetch('https://nhatranghk.site/orderActions.php?function=addMealAndDrinkItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        numOfItems: newNumOfItems,
        totalPrice: newTotalPrice,
        mealName: mealName,
        mealCustomization: "",
        mealShortName: mealShortName,
        mealMenuName: mealMenuName,
        mealType: "meal",
        mealQuantity: foodItem.quantity,
        mealPrice: mealPrice,
        orderTime: getTime(),
        payStatus: "notPaid",
        base: foodItem.base.name,
        ingredient1: foodItem.ingredients[0].name,
        ingredient2: foodItem.ingredients[1] ? foodItem.ingredients[1].name : "",
        ingredient3: foodItem.ingredients[2] ? foodItem.ingredients[2].name : "",
        ingredient4: foodItem.ingredients[3] ? foodItem.ingredients[3].name : "",
        drinkName: drinkItem.drink.name,
        drinkCustomization: "",
        drinkShortName: drinkItem.drink.shortName,
        drinkMenuName: drinkItem.drink.menuName,
        drinkType: drinkItem.drink.type,
        drinkQuantity: drinkItem.quantity,
        drinkPrice: drinkItem.drink.price,
        drinkCold: drinkItem.drink.cold,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch(refreshOrders(responseJson))
        var createdOrder = responseJson.filter(i => i.orderNumber === orderNumber)
        dispatch(selectOrder(createdOrder[0]))
        dispatch(clearFoodItem())
        dispatch(clearDrinkItem())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function findOrderAndAddMealItemLocal(foodItem, orderNumber) {
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

export function refreshOrders(orders) {
  return {
    type: types.REFRESH_ORDERS,
    orders
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

export function getOrders() {
  return {
    type: types.FETCHING_ORDERS
  }
}

export function getOrdersSuccess(orders) {
  return {
    type: types.FETCHING_ORDERS_SUCCESS,
    orders
  }
}

export function getOrdersFailure() {
  return {
    type: types.FETCHING_ORDERS_FAILURE
  }
}

export function fetchOrders() {
  return (dispatch) => {
    dispatch(getOrders())
    fetch('https://nhatranghk.site/orders.php?function=getOrders')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(getOrdersSuccess(responseJson))
      })
      .catch((error) => {
        console.log(error)
        dispatch(getOrdersFailure())
      })
  }
}

export function selectOrder(order) {
  return {
    type: types.SELECT_ORDER,
    order
  }
}

export function payOrderLocal(orderNumber) {
  return {
    type: types.CHANGE_ORDER_STATUS,
    orderNumber,
    orderStatus: "paid"
  }
}

export function payOrder(order) {
  return (dispatch) => {
    fetch('https://nhatranghk.site/orderActions.php?function=payOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: order.orderNumber,
        orderStatus: "paid",
        endTime: getTime(),
        orderList: [...order.orderList.drinkItems, ...order.orderList.foodItems]
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(changeOrderStatus(responseJson))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function cancelOrderLocal(orderNumber) {
  return {
    type: types.CHANGE_ORDER_STATUS,
    orderNumber,
    orderStatus: "cancelled"
  }
}

export function cancelOrder(orderNumber) {
  return (dispatch) => {
    fetch('https://nhatranghk.site/orderActions.php?function=cancelOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNumber: orderNumber,
        orderStatus: "cancelled",
        endTime: getTime(),
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        dispatch(changeOrderStatus(responseJson))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function changeOrderStatus(orders) {
  return {
    type: types.CHANGE_ORDER_STATUS,
    orders
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
  if (item.type === "regularFood" || item.type === "snacks" || item.type === "meal")
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
  if (item.type === "regularFood" || item.type === "snacks" || item.type === "meal") {
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
  if (item.type === "regularFood" || item.type === "snacks" || item.type === "meal") {
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

export function getMenu() {
  return {
    type: types.FETCHING_MENU
  }
}

export function getMenuSuccess(menu) {
  return {
    type: types.FETCHING_MENU_SUCCESS,
    menu
  }
}

export function getMenuFailure() {
  return {
    type: types.FETCHING_MENU_FAILURE
  }
}

export function fetchMenu() {
  return (dispatch) => {
    dispatch(getMenu())
    fetch('https://nhatranghk.site/menu.php')
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(getMenuSuccess(responseJson))
      })
      .catch((error) => {
        console.log(error)
        dispatch(getMenuFailure())
      })
  }
}

function getOrderNumber(ordersLength) {
  var currentDate = new Date()
  var year = currentDate.getFullYear().toString()
  var month = ("00" + (currentDate.getMonth() + 1)).slice(-2)
  var date = ("00" + currentDate.getDate()).slice(-2)
  var number = ("0000" + (ordersLength+1)).slice(-4)
  orderNumber = year + month + date + number
  return Number(orderNumber)
}

function getDate() {
  var currentDate = new Date()
  var year = currentDate.getFullYear().toString()
  var month = ("00" + (currentDate.getMonth() + 1)).slice(-2)
  var date = ("00" + currentDate.getDate()).slice(-2)
  var newDate = year + "-" + month + "-" + date
  return newDate
}

function getTime() {
  var currentDate = new Date()
  var time = currentDate.toTimeString().split(' ')[0]
  return time
}
