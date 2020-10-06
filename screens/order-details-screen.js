import React from 'react'
import {Text, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'

const OrderDetailsScreen = () => {
  return (
    <View>
      <Text style={{
        fontWeight: 'bold',
        color: 'rgb(114, 105, 105)'
      }}>
        Order Details
      </Text>
    </View>
  )
}

OrderDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'ORDER DETAILS',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu'
              iconName='ios-menu'
              onPress={() => {
                navData.navigation.toggleDrawer()
              }}/>
      </HeaderButtons>
  }
}

export default OrderDetailsScreen
