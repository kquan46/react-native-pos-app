'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { Provider, connect } from 'react-redux'
import { createStore, combineRedexers, bindActionCreators } from 'redux'
import * as orderActions from '../actions/orderActions'
//import AppNavigator from './app/navigation/AppNavigator'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import TableAndDeliveryContainer from '../containers/TableAndDeliveryContainer'
import OrderContainerTable from '../containers/OrderContainerTable'

const order_delivery = [
  {
    orderNumber: 201611300002,
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
    orderNumber: 201611300004,
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
  }

  fetchOrders() {
    this.props.fetchOrders()
  }
  render() {
    return (
      <AppContainer>
        <TouchableOpacity onPress={() => {this.fetchOrders() }}>
          <Text>Fetch orders</Text>
        </TouchableOpacity>
        <MainContainer>
          <TableAndDeliveryContainer orderTable={this.props.orders} orderDelivery={order_delivery} />
          <OrderContainerTable order={this.props.order} />
        </MainContainer>
      </AppContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
    order: state.order
  }
}

const styles = StyleSheet.create({

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
