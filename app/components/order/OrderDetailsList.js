'use strict'
import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import OrderItem from './OrderItem'

class OrderDetailsList extends Component {
    render () {
        return (
          <View style={styles.orderDetailsList}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} alwaysBounceVertical={false}>
              {this.props.children}
            </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderDetailsList: {
        flex: 20,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: 7
    }
})

module.exports = OrderDetailsList
