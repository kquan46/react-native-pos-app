'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuListFood from './MenuListFood'
import MenuListDrink from './MenuListDrink'
import MenuActionsMeal from './MenuActionsMeal'

class MenuTab2 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getIngredientsMiniSet() {
    let result = []
    this.props.menuList.ingredients.map(function(i) {
      if (i.miniSet === "yes")
        result.push(i)
    })
    return result
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.subMenu}>
          <MenuListFood menuList={this.getIngredientsMiniSet()} maxItems={1} />
          <MenuListFood menuList={this.props.menuList.baseMiniSet} />
          <MenuListDrink menuList={this.props.menuList.drinksMeal} />
        </View>
        <MenuActionsMeal />
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

module.exports = MenuTab2
