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
import OrderContainer from '../containers/OrderContainer'
import MenuContainer from '../containers/MenuContainer'
import * as sampleData from '../reducers/data'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.fetchOrders()
  }

  fetchOrders() {
    this.props.fetchOrders()
  }

  getOrders(type) {
    let result = []
    if (this.props.orders != null) {
      this.props.orders.map(function(order) {
        if (order.orderType === type && order.orderInfo.orderStatus === "notPaid")
          result.push(order)
      })
    }
    return result
  }

  render() {
    return (
      <AppContainer>
        <MainContainer>
          {/*<TableAndDeliveryContainer tableOrders={this.getOrders("table")} deliveryOrders={this.getOrders("delivery")} />*/}
          <MenuContainer menu={this.props.menu} />
          <OrderContainer order={this.props.order} />
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
    order: state.order,
    menu: state.menu
  }
}

const styles = StyleSheet.create({

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
