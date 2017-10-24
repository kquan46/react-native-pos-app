import * as types from '../actions/types'
import * as sampleData from './data'

export function orders(state = [], action) {
  switch (action.type) {
    case types.FETCHING_ORDERS_SUCCESS:
      return [...action.orders]
    case types.FETCHING_ORDERS_FAILURE:
      return state
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
          orderInfo: {
            ...state[index].orderInfo,
            numOfItems: state[index].orderInfo.numOfItems + action.drinkItem.quantity,
            totalPrice: state[index].orderInfo.totalPrice + action.drinkItem.drink.price
          },
          orderList: {
            ...state[index].orderList,
            drinkItems: [
              ...state[index].orderList.drinkItems,
              {
                name: action.drinkItem.drink.name,
                customization: "",
                shortName: action.drinkItem.drink.shortName,
                menuName: action.drinkItem.drink.menuName,
                type: action.drinkItem.drink.type,
                quantity: action.drinkItem.quantity,
                price: action.drinkItem.drink.price,
                orderTime: getTime(),
                payStatus: "notPaid",
                hotCold: action.drinkItem.drink.hotCold
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
          orderInfo: {
            ...state[index].orderInfo,
            numOfItems: state[index].orderInfo.numOfItems + action.foodItem.quantity,
            totalPrice: state[index].orderInfo.totalPrice + action.foodItem.ingredients[0].price
          },
          orderList: {
            ...state[index].orderList,
            foodItems: [
              ...state[index].orderList.foodItems,
              {
                name: action.foodItem.ingredients[0].name,
                customization: "",
                shortName: action.foodItem.ingredients[0].shortName,
                menuName: action.foodItem.ingredients[0].menuName,
                type: action.foodItem.ingredients[0].type,
                quantity: action.foodItem.quantity,
                price: action.foodItem.ingredients[0].price,
                miniSet: action.foodItem.ingredients[0].miniSet,
                orderTime: getTime(),
                payStatus: "notPaid",
                base: null,
                ingredients: [{name: action.foodItem.ingredients[0].name}]
              }
            ]
          }
        },
        ...state.slice(index + 1)
      ]
    }
    case types.ADD_ITEM_MEAL: {
      let index = state.findIndex((order) => order.orderNumber === action.orderNumber)
      let mealName = ""
      let mealShortName = ""
      let mealMenuName = ""
      let mealPrice = 0
      action.foodItem.ingredients.map(function(i) {
        mealName += i.name
        mealShortName += i.shortName
        mealMenuName += i.menuName
        mealPrice += i.price
      })
      mealName += action.foodItem.base.name
      mealShortName += action.foodItem.base.shortName
      mealMenuName += action.foodItem.base.menuName
      mealPrice += action.foodItem.base.price
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          orderInfo: {
            ...state[index].orderInfo,
            numOfItems: state[index].orderInfo.numOfItems + action.foodItem.quantity,
            totalPrice: state[index].orderInfo.totalPrice + mealPrice
          },
          orderList: {
            ...state[index].orderList,
            foodItems: [
              ...state[index].orderList.foodItems,
              {
                name: mealName,
                customization: "",
                shortName: mealShortName,
                menuName: mealMenuName,
                type: "meal",
                quantity: action.foodItem.quantity,
                price: mealPrice,
                orderTime: getTime(),
                miniSet: 0,
                payStatus: "notPaid",
                base: action.foodItem.base,
                ingredients: action.foodItem.ingredients
              }
            ]
          }
        },
        ...state.slice(index + 1)
      ]
    }
    case types.CHANGE_QUANTITY_FOOD: {
      let orderIndex = state.findIndex((order) => order.orderNumber === action.orderNumber)
      let itemIndex = state[orderIndex].orderList.foodItems.findIndex((item) => item.name === action.item.name)
      return [
        ...state.slice(0, orderIndex),
        {
          ...state[orderIndex],
          orderInfo: {
            ...state[orderIndex].orderInfo,
            numOfItems: state[orderIndex].orderInfo.numOfItems + action.quantity,
            totalPrice: state[orderIndex].orderInfo.totalPrice + (action.item.price * action.quantity)
          },
          orderList: {
            ...state[orderIndex].orderList,
            foodItems: [
              ...state[orderIndex].orderList.foodItems.slice(0, itemIndex),
              {
                ...state[orderIndex].orderList.foodItems[itemIndex],
                quantity: state[orderIndex].orderList.foodItems[itemIndex].quantity + action.quantity
              },
              ...state[orderIndex].orderList.foodItems.slice(itemIndex + 1)
            ]
          }
        },
        ...state.slice(orderIndex + 1)
      ]
    }
    case types.CHANGE_QUANTITY_DRINK: {
      let orderIndex = state.findIndex((order) => order.orderNumber === action.orderNumber)
      let itemIndex = state[orderIndex].orderList.drinkItems.findIndex((item) => item.name === action.item.name)
      return [
        ...state.slice(0, orderIndex),
        {
          ...state[orderIndex],
          orderInfo: {
            ...state[orderIndex].orderInfo,
            numOfItems: state[orderIndex].orderInfo.numOfItems + action.quantity,
            totalPrice: state[orderIndex].orderInfo.totalPrice + (action.item.price * action.quantity)
          },
          orderList: {
            ...state[orderIndex].orderList,
            drinkItems: [
              ...state[orderIndex].orderList.drinkItems.slice(0, itemIndex),
              {
                ...state[orderIndex].orderList.drinkItems[itemIndex],
                quantity: state[orderIndex].orderList.drinkItems[itemIndex].quantity + action.quantity
              },
              ...state[orderIndex].orderList.drinkItems.slice(itemIndex + 1)
            ]
          }
        },
        ...state.slice(orderIndex + 1)
      ]
    }
    case types.DELETE_ITEM_FOOD: {
      let orderIndex = state.findIndex((order) => order.orderNumber === action.orderNumber)
      return [
        ...state.slice(0, orderIndex),
        {
          ...state[orderIndex],
          orderInfo: {
            ...state[orderIndex].orderInfo,
            numOfItems: state[orderIndex].orderInfo.numOfItems - action.item.quantity,
            totalPrice: state[orderIndex].orderInfo.totalPrice - (action.item.price * action.item.quantity)
          },
          orderList: {
            ...state[orderIndex].orderList,
            foodItems: state[orderIndex].orderList.foodItems.filter(i => i.name !== action.item.name)
          }
        },
        ...state.slice(orderIndex + 1)
      ]
    }
    case types.DELETE_ITEM_DRINK: {
      let orderIndex = state.findIndex((order) => order.orderNumber === action.orderNumber)
      return [
        ...state.slice(0, orderIndex),
        {
          ...state[orderIndex],
          orderInfo: {
            ...state[orderIndex].orderInfo,
            numOfItems: state[orderIndex].orderInfo.numOfItems - action.item.quantity,
            totalPrice: state[orderIndex].orderInfo.totalPrice - (action.item.price * action.item.quantity)
          },
          orderList: {
            ...state[orderIndex].orderList,
            drinkItems: state[orderIndex].orderList.drinkItems.filter(i => i.name !== action.item.name)
          }
        },
        ...state.slice(orderIndex + 1)
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

export function drinkItem(state = sampleData.DRINK_ITEM_DEFAULT, action) {
  switch (action.type) {
    case types.CLEAR_ITEM_DRINK:
      return sampleData.DRINK_ITEM_DEFAULT
    case types.SELECT_DRINK:
      return {...state, drink: action.drinkItem}
    case types.CLEAR_DRINK:
      return {...state, drink: null}
    default:
      return state
  }
}

export function foodItem(state = sampleData.FOOD_ITEM_DEFAULT, action) {
  switch (action.type) {
    case types.CLEAR_ITEM_FOOD:
      return sampleData.FOOD_ITEM_DEFAULT
    case types.CLEAR_ITEM_INGREDIENTS:
      return {...state, ingredients: []}
    case types.CLEAR_ITEM_BASE:
      return {...state, base: null}
    case types.SELECT_INGREDIENT:
      return {...state, ingredients: [...state.ingredients, action.ingredientItem].sort(compare)}
    case types.DESELECT_INGREDIENT:
      return {...state, ingredients: state.ingredients.filter(i => i.name !== action.ingredientItem.name)}
    case types.SELECT_BASE:
      return {...state, base: action.baseItem}
    default:
      return state
  }
}

export function menu(state = sampleData.MENU_DEFAULT, action) {
  switch (action.type) {
    case types.FETCHING_MENU_SUCCESS:
      return {
        ...state,
        base: action.menu.ingredients.filter(i => i.type === "base" && i.miniSet === 0),
        baseMiniSet: action.menu.ingredients.filter(i => i.type === "base" && i.miniSet === 1),
        drinks: action.menu.drinks.filter(i => i.type === "regularDrink"),
        drinksMeal: action.menu.drinks.filter(i => i.type === "mealDrink"),
        ingredients: action.menu.ingredients.filter(i => i.type === "nonCombinations" || i.type === "combinations"),
        snacks: action.menu.ingredients.filter(i => i.type === "snacks"),
        drinkCustomizations: action.menu.customDrinks,
        foodCustomizations: action.menu.customFoods,
        customizationPrefixes: action.menu.customPrefix,
      }
    case types.FETCHING_MENU_FAILURE:
     return sampleData.MENU_SAMPLE
    default:
     return state
  }
}

export function status(state = {menuFetching: false, ordersFetching: false}, action) {
  switch (action.type) {
    case types.FETCHING_MENU:
      return {...state, menuFetching: true}
    case types.FETCHING_MENU_SUCCESS:
      return {...state, menuFetching: false}
    case types.FETCHING_MENU_FAILURE:
      return {...state, menuFetching: false}
    case types.FETCHING_ORDERS:
      return {...state, ordersFetching: true}
    case types.FETCHING_ORDERS_SUCCESS:
      return {...state, ordersFetching: false}
    case types.FETCHING_ORDERS_FAILURE:
      return {...state, ordersFetching: false}
    default:
     return state
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

function compare(a, b) {
  const orderList = {
    "豬扒": 4,
    "春卷": 3,
    "雞翼": 2,
    "扎肉": 1,
    "雞絲": 0,
  }
  const nameA = orderList[a.name]
  const nameB = orderList[b.name]

  let comparison = nameB - nameA
  return comparison
}
