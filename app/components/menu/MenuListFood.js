'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuItem from './MenuItem'
import MenuItemIngredient from './MenuItemIngredient'
import MenuItemDrink from './MenuItemDrink'
import MenuItemBase from './MenuItemBase'
import MenuItemBlank from './MenuItemBlank'

class MenuListFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maxItems: this.props.maxItems
    }
  }

  getMaxItems() {
    return this.props.maxItems
  }

  splitListBySize(size) {
    var allMenuList = this.props.menuList
    var newList = []
    var result = []
    var i
    for (i = 0; i < allMenuList.length; i++) {
      newList.push(allMenuList[i])
      if (i !== 0) {
      if (i % size === size - 1 || i === allMenuList.length-1) {

          result.push(newList)
          newList = []
        }
      }

    }
    var numOfBlanks = size - result[result.length - 1].length
    for (i = 0; i < numOfBlanks; i++) {
      result[result.length-1].push({})
    }
    return result
  }

  render() {
    return (
      <View style={styles.menuList}>
        {this.splitListBySize(5).map(function(list) {
          return(
            <View style={styles.list}>
              {list.map(function(item) {
                switch (item.type) {
                  case "nonCombinations":
                    return <MenuItemIngredient item={item} />
                  case "combinations":
                    return <MenuItemIngredient item={item} />
                  case "base":
                    return <MenuItemBase item={item} />
                  case "baseMiniSet":
                    return <MenuItemBase item={item} />
                  case "snack":
                    return <MenuItemBase item={item} />
                  default:
                    return <MenuItemBlank />
                }
              })}
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuList: {
    paddingBottom: 25,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5
  },
  list: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  }
})

module.exports = MenuListFood
