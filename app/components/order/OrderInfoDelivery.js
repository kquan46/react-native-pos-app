'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderInfoDelivery extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  formatTime(time) {
    if (time != null) {
      var newTime = time.slice(0,5)
      return newTime
    }
  }

  render () {
    return (
      <View style={styles.orderInfo}>
        <View style={styles.delivery}>
          <Text style={styles.deliveryText}>外</Text>
        </View>
        <View style={styles.deliveryInfo}>
          <View style={styles.headingUpper}>
            <Text style={styles.headingUpperText}>{this.props.orderDeliveryInfo.deliveryAddress}</Text>
          </View>
          <View style={styles.headingLower}>
            <Text style={styles.headingLowerText}>{this.props.orderDeliveryInfo.deliveryPhoneNumber}</Text>
            <Text style={styles.headingLowerText}>{this.formatTime(this.props.orderInfo.startTime)}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderInfo: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10
  },
  delivery: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  deliveryInfo: {
    flex: 2.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  headingUpper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headingLower: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  deliveryText: {
    fontSize: 47
  },
  headingUpperText: {
    fontSize: 24,
  },
  headingLowerText: {
    fontSize: 19
  }
})

module.exports = OrderInfoDelivery
