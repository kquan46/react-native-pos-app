'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'

import MenuItem from './MenuItem'

class MenuList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
    console.log(numOfBlanks)
    for (i = 0; i < numOfBlanks; i++) {
      result[result.length-1].push({})
    }
    console.log(result)
    return result
  }

  render() {
    return (
      <View style={styles.menuList}>
        {this.splitListBySize(6).map(function(list) {
          return(
            <View style={styles.list}>
              {list.map(item => <MenuItem item={item} />)}
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
  },
  list: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
  }
})

module.exports = MenuList
