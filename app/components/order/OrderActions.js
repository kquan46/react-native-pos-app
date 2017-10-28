'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'
import { Actions } from 'react-native-router-flux'

class OrderActions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuSelected: false
    }
  }
  payOrder() {
   this.props.payOrder(this.props.order)
  }
  cancelOrder() {
   this.props.cancelOrder(this.props.order.orderNumber)
   if (this.state.menuSelected == true)
     Actions.pop()
   this.setState({menuSelected: false})
  }

  toggleMenu() {
    if (this.state.menuSelected == false) {
      if (this.props.order.orderNumber) {
        Actions.menuTab()
        this.setState({
          menuSelected: true
        })
      }
    }
    else {
      Actions.pop()
      this.setState({
        menuSelected: false
      })
    }
  }

  render () {
    return (
      <View style={styles.orderActions}>
        <TouchableOpacity style={styles.button} onPress={() => this.toggleMenu()}>
          {this.state.menuSelected ? <Text style={styles.text}>←</Text> : <Text style={styles.text}>餐牌</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.order.orderNumber ? this.cancelOrder() : null}}>
          <Text style={styles.text}>取消</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => null}>
          <Text style={styles.text}>打印</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.order.orderNumber ? this.payOrder() : null}}>
          <Text style={styles.text}>付款</Text>
        </TouchableOpacity>
      </View>
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
    orderActions: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch"
    },
    button: {
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
      color: "white",
      fontSize: 20
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(OrderActions)
