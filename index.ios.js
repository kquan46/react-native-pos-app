'use strict'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import HomeScreen from './app/screens/HomeScreen'
import codePush from 'react-native-code-push'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

class NhaTrangPOS extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen {...this.props} />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('NhaTrangPOS', () => codePush(NhaTrangPOS));
