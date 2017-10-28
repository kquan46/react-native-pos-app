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
// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

  // fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};

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
