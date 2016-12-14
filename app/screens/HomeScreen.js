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
          <TableAndDeliveryContainer tableOrders={this.props.tableOrders} deliveryOrders={this.props.deliveryOrders} />
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
    tableOrders: state.tableOrders,
    deliveryOrders: state.deliveryOrders,
    order: state.order
  }
}

const styles = StyleSheet.create({

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
