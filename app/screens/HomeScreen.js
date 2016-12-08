'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
//import AppNavigator from './app/navigation/AppNavigator'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import TableAndDeliveryContainer from '../containers/TableAndDeliveryContainer'
import OrderContainerTable from '../containers/OrderContainerTable'

const order_table = [
  {
    order_number: 201611300001,
    orderStatus: {numOfItems: 4, totalPrice: 101, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "12:30"},
    tableInfo: {tableNumber: 1, tableSubNumber: "A", numOfPeople: 4},
    orderList: [
      {
        foodItems: [
          {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:01", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
          {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:31", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
        ],
        drinkItems: [
          {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:40", payStatus: "notPaid", hotCold: "cold"},
          {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:20", payStatus: "notPaid", hotCold: "cold"}
        ]
      }
    ]
  },
  {
    order_number: 201611300003,
    orderStatus: {numOfItems: 7, totalPrice: 98, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "13:09"},
    tableInfo: {tableNumber: 5, tableSubNumber: "B", numOfPeople: 2},
    orderList: [
      {
        foodItems: [
          {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:01", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
          {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:31", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
        ],
        drinkItems: [
          {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:40", payStatus: "notPaid", hotCold: "cold"},
          {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:20", payStatus: "notPaid", hotCold: "cold"}
        ]
      }
    ]
  }
]

const order_delivery = [
  {
    order_number: 201611300002,
    orderStatus: {numOfItems: 4, totalPrice: 101, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "12:30"},
    deliveryInfo: {deliveryAddress: "250鴨寮街", deliveryPhoneNumber: "25800983", notes: "extra chopsticks"},
    orderList: [
      {
        foodItems: [
          {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:01", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
          {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:31", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
        ],
        drinkItems: [
          {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:40", payStatus: "notPaid", hotCold: "cold"},
          {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:20", payStatus: "notPaid", hotCold: "cold"}
        ]
      }
    ]
  },
  {
    order_number: 201611300004,
    orderStatus: {numOfItems: 7, totalPrice: 98, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "13:09"},
    deliveryInfo: {deliveryAddress: "68南昌街", deliveryPhoneNumber: "66534621", notes: ""},
    orderList: [
      {
        foodItems: [
          {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:01", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
          {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:31", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
        ],
        drinkItems: [
          {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:40", payStatus: "notPaid", hotCold: "cold"},
          {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:20", payStatus: "notPaid", hotCold: "cold"}
        ]
      }
    ]
  }
]

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderTable: (order_table),
      orderDelivery: (order_delivery)
    }
  }

  render() {
    return (
        <AppContainer>
          <MainContainer>
            <Text>NhaTrangPOS</Text>
          </MainContainer>
        </AppContainer>
    )
  }
}

const styles = StyleSheet.create({

})

module.exports = HomeScreen
