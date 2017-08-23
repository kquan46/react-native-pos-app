'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuListDrink from './MenuListDrink'
import MenuActions from './MenuActions'

class MenuTab4 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.subMenu}>
          <MenuListDrink menuList={this.props.menuList.drinks} />
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

module.exports = MenuTab4
