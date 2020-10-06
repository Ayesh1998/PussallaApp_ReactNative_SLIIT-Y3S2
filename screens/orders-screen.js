import React from 'react'
import {FlatList, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'
import ORDERS from '../data/order-data'
import OrderListItem from '../components/order-list-item'

const OrdersScreen = ({navigation}) => {
  const orders = JSON.stringify(ORDERS)

  return (
    <View>
      <FlatList data={orders}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(itemData) => (
                  <OrderListItem orderNo={itemData.item.orderNo}
                                 onViewDetail={() => {
                                   navigation.navigate({
                                     routeName: 'OrderDetails'
                                   })
                                 }}/>
                )}/>
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
              }}/>
      </HeaderButtons>
  }
}

export default OrdersScreen
