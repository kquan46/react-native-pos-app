'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'



class DeliverySection extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <View style={styles.deliverySection}>
        <TouchableOpacity>
          <View style={styles.deliverySectionHeading}>
            <Text style={styles.text}>外賣</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const HEIGHT = 80

const styles = StyleSheet.create({
  deliverySection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  deliverySectionHeading: {
    height: HEIGHT,
    width: HEIGHT,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

module.exports = DeliverySection
