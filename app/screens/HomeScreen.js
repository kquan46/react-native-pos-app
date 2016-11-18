'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
//import AppNavigator from './app/navigation/AppNavigator'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import TableContainer from '../containers/TableContainer'
import OrderContainer from '../containers/OrderContainer'

class HomeScreen extends Component {
  render() {
    return (
        <AppContainer>
          <MainContainer>
            <TableContainer />
            <OrderContainer />
          </MainContainer>
        </AppContainer>
    )
  }
}

const styles = StyleSheet.create({

})

module.exports = HomeScreen