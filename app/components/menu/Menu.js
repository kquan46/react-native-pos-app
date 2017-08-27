'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import MenuTab1 from './MenuTab1'
import MenuTab2 from './MenuTab2'
import MenuTab3 from './MenuTab3'
import MenuTab4 from './MenuTab4'


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{Color: selected ? 'red' : 'black'}}>{title}</Text>
  )
}

class Menu extends Component {


    render () {
        return (
          <View style={styles.menuTab}>
          <Router key="router">
            <Scene key="menuTab" tabs={true} tabBarStyle={styles.tabBar} default="tab1">
              <Scene key="tab1" title="Noodle/Rice" icon={TabIcon} component={MenuTab1} menuList={this.props.menuList} hideNavBar style={styles.scenes} />
              <Scene key="tab2" title="MiniSet" icon={TabIcon} component={MenuTab2} menuList={this.props.menuList} hideNavBar style={styles.scenes} />
              <Scene key="tab3" title="Snacks" icon={TabIcon} component={MenuTab3} menuList={this.props.menuList} hideNavBar style={styles.scenes} />
              <Scene key="tab4" title="Other" icon={TabIcon} component={MenuTab4} menuList={this.props.menuList} hideNavBar style={styles.scenes} />
            </Scene>
          </Router>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    menuTab: {
      flex: 22,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    tabBar: {
      backgroundColor: "ghostwhite",
      top: 0
    },
    scenes: {
      paddingTop: 50,
    }
})

module.exports = Menu
