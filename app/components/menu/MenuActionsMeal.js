'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuActionsMeal extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  addItems(drinkItem, foodItem, orderNumber) {
    if(!drinkItem.drink && !foodItem.base && foodItem.ingredients.length === 0)
       console.log("missing drink and food")
    if (drinkItem.drink) {
      if (!foodItem.base && foodItem.ingredients.length === 0)
        this.props.findOrderAndAddDrinkItem(drinkItem, orderNumber)
      else if (foodItem.base) {
        if (foodItem.ingredients.length > 0) {
          this.props.findOrderAndAddMealAndDrinkItem(foodItem, drinkItem, orderNumber)
        }
        else console.log("missing ingredients")
      }
      else if (foodItem.ingredients.length > 0)
        console.log("missing base")
    }
    else {
      if (foodItem.base) {
        if (foodItem.ingredients.length > 0)
          this.props.findOrderAndAddMealItem(foodItem, orderNumber)
       else console.log("missing ingredients")
      }
      else if (foodItem.ingredients.length > 0)
        console.log("missing base")
    }
  }

  render () {
    return (
      <View style={styles.menuActions}>
        <View style={styles.selectionFood}>
          <Text style={styles.text}>食品:
            {' '}
            {this.props.foodItem.ingredients.map(i => i.menuName)}
            {this.props.foodItem.base ? this.props.foodItem.base.name : null}</Text>
        </View>
        <View style={styles.selectionDrink}>
          <Text style={styles.text}>飲品: {this.props.drinkItem.drink ? this.props.drinkItem.drink.menuName : null}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {this.addItems(this.props.drinkItem, this.props.foodItem, this.props.order.orderNumber)}}>
          <Text>Add Item</Text>
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
    drinkItem: state.drinkItem,
    foodItem: state.foodItem,
    order: state.order
  }
}

const styles = StyleSheet.create({
    menuActions: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "stretch",
      backgroundColor: "pink"
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "grey",
      padding: 15
    },
    selectionFood: {
      flex: 2.3,
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 20
    },
    selectionDrink: {
      flex: 1.7,
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 20
    },
    text: {
      fontSize: 22,
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuActionsMeal)
