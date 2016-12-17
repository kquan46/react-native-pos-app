'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderInfoTable extends Component {
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
        <View style={styles.tableNumber}>
          {this.props.orderTableInfo.tableNumber ? <Text style={styles.tableNumberText}>{this.props.orderTableInfo.tableNumber}{this.props.orderTableInfo.tableSubNumber}</Text> : null}
        </View>
        <View style={styles.numOfPeople}>
          {this.props.orderTableInfo.numOfPeople ? <Text style={styles.headingText}>{this.props.orderTableInfo.numOfPeople}位</Text> : null}
        </View>
        <View style={styles.time}>
          <Text style={styles.headingText}>{this.formatTime(this.props.orderInfo.startTime)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderInfo: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10
  },
  tableNumberText: {
    fontSize: 50
  },
  headingText: {
    fontSize: 30
  },
  tableNumber: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  numOfPeople: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  time: {
    flex: 1.3,
    flexDirection: "row",
    justifyContent: "center"
  }
})

module.exports = OrderInfoTable
