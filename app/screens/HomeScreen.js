'use strict'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as orderActions from '../actions/orderActions'
import RootContainer from '../containers/RootContainer'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import OrderContainer from '../containers/OrderContainer'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <RootContainer>
        <AppContainer>
          <MainContainer menu={this.props.menu} />
          <OrderContainer order={this.props.order} />
        </AppContainer>
      </RootContainer>
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

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
