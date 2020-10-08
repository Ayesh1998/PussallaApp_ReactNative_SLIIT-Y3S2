import React from 'react'
import {Text, View} from 'react-native'

const OrderDetailsScreen = (props) => {
  let order = props.navigation.getParam('order')

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
