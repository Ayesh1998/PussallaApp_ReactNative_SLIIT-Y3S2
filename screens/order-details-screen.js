import React from 'react'
import {Text, View} from 'react-native'

const OrderDetailsScreen = () => {
  return (
    <View>
      <Text>Order Details</Text>
    </View>
  )
}

OrderDetailsScreen.navigationOptions = () => {
  return {
    headerTitle: 'ORDER DETAILS'
  }
}

export default OrderDetailsScreen
