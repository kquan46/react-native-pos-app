'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Scene } from 'react-native-router-flux'

import * as orderActions from '../actions/orderActions'
//import AppNavigator from './app/navigation/AppNavigator'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import TableAndDeliveryContainer from '../containers/TableAndDeliveryContainer'
import OrderContainer from '../containers/OrderContainer'
import MenuContainer from '../containers/MenuContainer'
import * as sampleData from '../reducers/data'


class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <AppContainer>
        <MainContainer>
          <View style={styles.router}>
          <Router>
              <Scene
                key="tableAndDelivery"
                component={TableAndDeliveryContainer}
                title="tableAndDelivery"
                initial
                hideNavBar />
              <Scene
                key="menu"
                component={MenuContainer}
                title="menu"
                menu={this.props.menu}
                hideNavBar />
          </Router>
          </View>
          <OrderContainer order={this.props.order} />
        </MainContainer>
      </AppContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order,
    menu: state.menu
  }
}

const styles = StyleSheet.create({
  router: {
    flex: 7
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
