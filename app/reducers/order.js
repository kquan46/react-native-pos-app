import * as types from '../actions/types'
import * as sampleData from './data'

export function orders(state = [], action) {
  switch (action.type) {
    case types.FETCH_ORDERS:
      return [...state, ...sampleData.DELIVERY_ORDERS, ...sampleData.TABLE_ORDERS]
    case types.NEW_TABLE_ORDER:
      return [
          ...state,
          {
            orderNumber: getOrderNumber(state.length),
            orderType: "table",
            orderInfo: {numOfItems: 0, totalPrice: 0, orderStatus: "notPaid", date: getDate(), endTime: null, startTime: getTime()},
            tableInfo: {tableNumber: action.tableNumber, tableSubNumber: action.tableSubNumber, numOfPeople: 4},
            orderList: {
              foodItems: [],
              drinkItems: []
            }
          }
        ]
    case types.NEW_DELIVERY_ORDER:
      return [
          ...state,
          {
            orderNumber: getOrderNumber(state.length),
            orderType: "delivery",
            orderInfo: {numOfItems: 0, totalPrice: 0, orderStatus: "notPaid", date: getDate(), endTime: null, startTime: getTime()},
            deliveryInfo: {deliveryAddress: action.deliveryAddress, deliveryPhoneNumber: action.deliveryPhoneNumber, notes: null},
            orderList: {
              foodItems: [],
              drinkItems: []
            }
          }
        ]
    case types.CHANGE_ORDER_STATUS: {
      let index = state.findIndex((order) => order.orderNumber === action.orderNumber)
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          orderInfo: {
            ...state[index].orderInfo,
            orderStatus: action.orderStatus,
            endTime: getTime()
          }
        },
        ...state.slice(index + 1)
      ]
    }
    case types.ADD_ITEM_DRINK: {
      let index = state.findIndex((order) => order.orderNumber === action.orderNumber)
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          orderList: {
            ...state[index].orderList,
            drinkItems: [
              ...state[index].orderList.drinkItems,
              {
                name: action.drinkItem.name,
                customization: null,
                shortName: action.drinkItem.shortName,
                menuName: action.drinkItem.menuName,
                type: action.drinkItem.type,
                quantity: 1,
                price: action.drinkItem.price,
                orderTime: getTime(),
                payStatus: "notPaid",
                hotCold: action.drinkItem.hotCold
              }
            ]
          }
        },
        ...state.slice(index + 1)
      ]
    }
    case types.ADD_ITEM_FOOD: {
      let index = state.findIndex((order) => order.orderNumber === action.orderNumber)
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          orderList: {
            ...state[index].orderList,
            foodItems: [
              ...state[index].orderList.foodItems,
              {
                name: "",
                customization: null,
                shortName: "",
                menuName: "",
                type: "",
                quantity: 1,
                price: "",
                orderTime: getTime(),
                payStatus: "notPaid",
                base: "",
                ingredients: []
              }
            ]
          }
        },
        ...state.slice(index + 1)
      ]
    }
    default:
     return state
  }
}

export function order(state = sampleData.ORDER_DEFAULT, action) {
  switch (action.type) {
    case types.SELECT_ORDER:
      return action.order
    case types.CHANGE_ORDER_STATUS:
      return sampleData.ORDER_DEFAULT
    case types.ADD_ITEM_DRINK:
    default:
      return state
  }
}

export function drinkItem(state = {}, action) {
  switch (action.type) {
    case types.SELECT_DRINK:
      return action.drinkItem
    case types.CLEAR_ITEM_DRINK:
      return {}
    default:
      return state
  }
}

export function foodItem(state = sampleData.FOOD_ITEM_DEFAULT, action) {
  switch (action.type) {
    case types.CLEAR_ITEM_FOOD:
      return sampleData.FOOD_ITEM_DEFAULT
    case types.CLEAR_ITEM_INGREDIENT:
      return {...state, ingredient: null}
    case types.CLEAR_ITEM_BASE:
      return {...state, base: null}
    case types.SELECT_INGREDIENT:
      return {...state, ingredient: action.ingredientItem}
    case types.SELECT_BASE:
      return {...state, base: action.baseItem}
    default:
      return state
  }
}

export function menu(state = [], action) {
  switch (action.type) {
    default:
     return sampleData.MENU_SAMPLE
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
