'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import MainContainer from '../containers/MainContainer'
import TableAndDeliveryContainer from '../containers/TableAndDeliveryContainer'
import MenuTab1 from '../components/menu/MenuTab1'
import MenuTab2 from '../components/menu/MenuTab2'
import MenuTab3 from '../components/menu/MenuTab3'
import MenuTab4 from '../components/menu/MenuTab4'

const TabIcon = ({ selected, title }) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "stretch", backgroundColor: selected ? 'blue' : null, width: 179.2}}>
      <Text style={{textAlign: "center", color: selected ? 'red' : 'black', fontSize: 25}}>{title}</Text>
    </View>
  )
}

class MainRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router hideNavBar>
        <Scene tabs={false} key="root" animationEnabled={false}>
          <Scene key="tableAndDelivery" title="tableAndDelivery" component={TableAndDeliveryContainer} initial />
          <Scene key="menuTab" tabs={true}  default="tab1" tabBarStyle={styles.tabBar}>
            <Scene key="tab1" title="粉麵/飯" icon={TabIcon} component={MenuTab1} menuList={this.props.menu} />
            <Scene key="tab2" title="迷你餐" icon={TabIcon} component={MenuTab2} menuList={this.props.menu} />
            <Scene key="tab3" title="小食" icon={TabIcon} component={MenuTab3} menuList={this.props.menu} />
            <Scene key="tab4" title="飲品" icon={TabIcon} component={MenuTab4} menuList={this.props.menu} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "ghostwhite",
    top: 0,
    justifyContent: "center",
    alignItems: "stretch"
  },
})

module.exports = MainRouter
