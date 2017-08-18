'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuList from './MenuList'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.menu}>
        <MenuList menuList={this.props.menuList.ingredients} />
        <MenuList menuList={this.props.menuList.base} />
        <MenuList menuList={this.props.menuList.drinks} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "teal",
  }
})

module.exports = Menu
