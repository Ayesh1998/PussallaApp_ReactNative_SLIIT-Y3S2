import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {FlatList, StyleSheet, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Colors from '../constants/colors'
import HeaderButton from '../components/header-button'
import OrderListItem from '../components/order-list-item'

const OrdersScreen = ({navigation}) => {
  let orders = useSelector((state) => state.orders.orders)

  const [refresh, setRefresh] = useState(false)

  const renderItemsFunction = (itemData) => {
    return (
      <OrderListItem navigation={navigation}
                     itemData={itemData}
                     refreshFunction={refreshFunction}/>
    )
  }

  const refreshFunction = () => {
    setRefresh(true)
  }

  useEffect(() => {
    setRefresh(false)
  }, [refresh]);

  return (
    <View style={styles.list}>
      <FlatList keyExtractor={(item, index) => index.toString()}
                data={orders}
                numColumns={1}
                renderItem={renderItemsFunction}/>
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
    marginTop: 5,
    width: wp('100%'),
    backgroundColor: Colors.secondaryColor
  }
})

export default OrdersScreen
