'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

import OrderItemCustomization from './OrderItemCustomization'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  formatTime(time) {
    if (time != null) {
      var newTime = time.slice(0,5)
      return newTime
    }
  }

  increaseQuantity(item, orderNumber) {
    this.props.increaseQuantityAndRefresh(item, orderNumber)
  }

  decreaseQuantity(item, orderNumber) {
    if (item.quantity === 1)
      this.props.deleteItemAndRefresh(item, orderNumber)
    else this.props.decreaseQuantityAndRefresh(item, orderNumber)
  }

  render () {
    let swipeRightButtons = [
      {
        text: 'Edit',
        backgroundColor: 'grey',
      },
      {
        text: 'Delete',
        backgroundColor: 'red',
        onPress: () => this.props.deleteItemAndRefresh(this.props.item, this.props.order.orderNumber)
      },
    ]
    let swipeLeftButtons = [{
      text: 'Edit',
      backgroundColor: 'blue'
    }]
    return (
      <Swipeout right={swipeRightButtons} backgroundColor='beige' autoClose={true} buttonWidth={50}>
      <View style={styles.orderItem}>
        <View style={styles.time}>
          <Text style={styles.timeText}>{this.formatTime(this.props.item.orderTime)}</Text>
        </View>
        <View style={styles.customization}>
          <Text style={styles.itemText}>{this.props.item.name}</Text>
          <OrderItemCustomization customization={this.props.item.customization}/>
        </View>
        <View style={styles.quantity}>
          <View style={{borderWidth: 0.5, borderColor: "grey", flex: 1, alignItems: "flex-start", flexDirection: "row", justifyContent: "center",}}>
            <TouchableOpacity style={styles.quantitySection} onPress={() => this.decreaseQuantity(this.props.item, this.props.order.orderNumber)}>
              <Text style={{fontSize: 17, color: "white"}}>-</Text>
            </TouchableOpacity>
            <View style={{flex: 2}}>
              <Text style={styles.text}>{this.props.item.quantity}</Text>
            </View>
            <TouchableOpacity style={styles.quantitySection} onPress={() => this.increaseQuantity(this.props.item, this.props.order.orderNumber)}>
              <Text style={{fontSize: 17, color: "white"}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{this.props.item.price * this.props.item.quantity}</Text>
        </View>
      </View>
      </Swipeout>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order,
  }
}

const styles = StyleSheet.create({
  orderItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 3
  },
  customization: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  time: {
      flex: 0.8,
      alignItems: "center",
      paddingRight: 4
  },
  quantity: {
      flex: 0.9,
      alignItems: "flex-start",
      flexDirection: "row",
      justifyContent: "center",
  },
  priceText: {
      textAlign: "right",
      paddingRight: 10,
      fontSize: 16
  },
  price: {
    flex: 0.8,
  },
  text: {
    fontSize: 17,
    textAlign: "center"
  },
  itemText: {
    fontSize: 17,
  },
  timeText: {
    fontSize: 14
  },
  quantitySection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(OrderItem)
