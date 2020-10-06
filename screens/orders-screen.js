import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/header-button'
import ORDERS from '../data/order-data'
import OrderListItem from '../components/order-list-item'

const OrdersScreen = ({navigation}) => {
  const orders = JSON.stringify(ORDERS)

  return (
    <View style={styles.list}>
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

const styles = StyleSheet.create({
  list: {
    marginTop: 7
  }
})

export default OrdersScreen
