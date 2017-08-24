'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuItemIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  arrayContainsElement(ingredientItem) {
    var matches = this.props.foodItem.ingredients.filter(function(ingredient) {
      return ingredient.name === ingredientItem.name
    })
    if (matches.length > 0)
      return true
    else return false
  }

  toggleIngredient(ingredientItem) {
    if (!this.arrayContainsElement(ingredientItem)) {
      if (this.props.foodItem.ingredients.length < 3)
        this.props.selectIngredient(ingredientItem)
    }
    else this.props.deSelectIngredient(ingredientItem)
  }

  getStyle(){
    if (this.arrayContainsElement(this.props.item))
      return styles.itemSelected
    else return styles.itemNotSelected
  }

  render() {
    return (
      <TouchableOpacity style={this.getStyle()} onPress={() => {this.toggleIngredient(this.props.item)}}>
        <Text style={styles.text}>{this.props.item.menuName}</Text>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    foodItem: state.foodItem
  }
}

const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,

    },
    itemSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "black",
      borderWidth: 1.5,
      backgroundColor: "blue",
    },
    itemNotSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "orange",
      borderWidth: 1.5,
      backgroundColor: "beige",
    },
    text: {
        textAlign: "center",
        fontSize: 25
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuItemIngredient)
