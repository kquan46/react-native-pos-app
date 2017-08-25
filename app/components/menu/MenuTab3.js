'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuListFood from './MenuListFood'
import MenuActions from './MenuActions'

class MenuTab3 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.subMenu}>
          <MenuListFood menuList={this.props.menuList.snacks} maxItems={1} />
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

module.exports = MenuTab3
