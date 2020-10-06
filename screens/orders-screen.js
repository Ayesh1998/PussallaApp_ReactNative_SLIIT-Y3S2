import React from 'react'
import {Text, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'

const OrdersScreen = () => {
  return (
    <View>
      <Text style={{
        fontWeight: 'bold',
        color: 'rgb(114, 105, 105)'
      }}>
        My Orders
      </Text>
    </View>
  )
}

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'MY ORDERS',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu'
              iconName='ios-menu'
              onPress={() => {
                navData.navigation.toggleDrawer()
              }}
        />
      </HeaderButtons>
  }
}

export default OrdersScreen
