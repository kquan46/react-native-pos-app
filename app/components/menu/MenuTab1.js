'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuList from './MenuList'
import MenuListDrink from './MenuListDrink'
import MenuActions from './MenuActions'

class MenuTab1 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getIngredients(type) {
    let result = []
    this.props.menuList.ingredients.map(function(i) {
      if (i.type === type)
        result.push(i)
    })
    return result
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.subMenu}>
          <MenuList menuList={this.getIngredients("nonCombinations")} />
          <MenuList menuList={this.getIngredients("combinations")} />
          <MenuList menuList={this.props.menuList.base} />
          <MenuListDrink menuList={this.props.menuList.drinksMeal} />
        </View>
        <MenuActions />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "teal",
    paddingTop: 50
  },
  subMenu: {
    flex: 20,
  }
})

module.exports = MenuTab1
