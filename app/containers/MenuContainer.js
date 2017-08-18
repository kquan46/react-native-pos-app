'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Menu from '../components/menu/Menu'
import MenuTab from '../components/menu/MenuTab'
import MenuActions from '../components/menu/MenuActions'

class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
        <View style={styles.menuContainer}>
          <MenuTab />
          <Menu menuList={this.props.menu} />
          <MenuActions />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "brown",
    }
})

module.exports = MenuContainer
